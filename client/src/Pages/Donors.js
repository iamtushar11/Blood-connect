import React, { useEffect, useState, useContext } from 'react';
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from 'react-table';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../context/user/UserContext';
import Button from 'react-bootstrap/Button';
import { SendMail } from '../utils/sendMessage';
import Loader from '../Components/loader/Loader';
import FindDonor from '../Components/Search/FindDonor';
import { route } from '../api';
import MessageContext from '../context/Messages/MessageContext';
const dummyColumn = [
  {
    Header: 'Name',
    accessor: 'username',
  },
  {
    Header: 'Blood Group',
    accessor: 'bloodGroup',
  },
  {
    Header: 'Course',
    accessor: 'course',
  },
  {
    Header: 'Branch',
    accessor: 'branch',
  },
  {
    Header: 'College',
    accessor: 'college',
  },
  {
    Header: 'City',
    accessor: 'city',
  },
  {
    Header: 'Seek Help',
  },
];
const Donors = () => {
  const [isLoading, setLoading] = useState(false);
  const [processing, setprocessing] = useState(false);
  const Auth = useContext(UserContext);
  const Message = useContext(MessageContext);
  if (!Auth.User) {
  }
  const location = useLocation();
  const [data, updateData] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios.get(route.Search + location.search).then((res) => {
      setLoading(false);
      if (res.data.status === 'Success') {
        if (Auth.User) {
          res.data.data = res.data.data.filter((data) => {
            return data.email !== Auth.User.email;
          });
        }
        updateData(res.data.data);
      }
    });
    // eslint-disable-next-line
  }, [location.search]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns: dummyColumn,
      data: data,
      initialState: { pageSize: 10 },
    },

    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const { globalFilter, pageIndex } = state;

  return (
    <div>
      {isLoading && (
        <div className='flex'>
          <Loader />
        </div>
      )}
      {!isLoading && data.length === 0 && (
        <h1 className='flex'>No User data Found</h1>
      )}
      {!isLoading && data.length !== 0 && (
        <React.Fragment>
          <div
            className='center heading'
            style={{
              justifyContent: 'center',
              padding: '10px',
            }}
          >
            <h2 style={{ textAlign: 'center' }}>Blood Availability</h2>
          </div>
          {Auth.User && (
            <Button
              style={{
                position: 'absolute',
                top: '130px',
                left: '20px',
              }}
              variant='secondary'
              onClick={() => {
                var newData = data;
                newData = newData.filter(
                  (user) => user.city === Auth.User.city
                );
                updateData(newData);
              }}
            >
              Nearby
            </Button>
          )}
          {location.search && Auth.User && (
            <Button
              variant='outline-success'
              style={{
                position: 'absolute',
                right: '15px',
                top: '120px',
              }}
              onClick={() => {
                setprocessing(true);
                // data?.map(
                //   async (user) =>
                //     await SendMail({
                //       to: user,
                //       from: Auth.User,
                //       Message: `There is urgent need of blood from ${Auth.User.username}`,
                //     })
                // );
                setprocessing(false);
              }}
            >
              Seek Help From All
            </Button>
          )}
          <div
            className='flex'
            style={{
              justifyContent: 'flex-end',
            }}
          >
            <FindDonor filter={globalFilter} setFilter={setGlobalFilter} />
          </div>
          <div className='tableDiv table-responsive'>
            <table className='table table-hover' {...getTableProps()}>
              <thead>
                {headerGroups?.map((headerGroup, index) => (
                  <React.Fragment key={index}>
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers?.map((column, index) => {
                        if (Auth.User) {
                          return (
                            <th
                              key={index}
                              {...column.getHeaderProps(
                                column.getSortByToggleProps({
                                  title: undefined,
                                })
                              )}
                            >
                              {column.render('Header')}
                              <span>
                                {column.isSorted
                                  ? column.isSortedDesc
                                    ? ' ▼'
                                    : ' ▲'
                                  : ''}
                              </span>
                            </th>
                          );
                        } else {
                          if (
                            column.Header !== 'Seek Help' &&
                            column.Header !== 'Email' &&
                            column.Header !== 'Admission No'
                          ) {
                            return (
                              <th
                                key={index}
                                {...column.getHeaderProps(
                                  column.getSortByToggleProps({
                                    title: undefined,
                                  })
                                )}
                              >
                                {column.render('Header')}
                                <span>
                                  {column.isSorted
                                    ? column.isSortedDesc
                                      ? ' ▼'
                                      : ' ▲'
                                    : ''}
                                </span>
                              </th>
                            );
                          }
                        }
                      })}
                    </tr>
                  </React.Fragment>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page?.map((row, index) => {
                  if (row.original.email !== Auth.User?.email) {
                    prepareRow(row);
                    return (
                      <React.Fragment key={index}>
                        <tr {...row.getRowProps()}>
                          {row.cells?.map((cell, index) => {
                            if (Auth.User) {
                              return (
                                cell.value && (
                                  <td {...cell.getCellProps()} key={index}>
                                    {cell.render('Cell')}
                                  </td>
                                )
                              );
                            } else {
                              if (
                                cell.column.id !== 'undefined' &&
                                cell.column.id !== 'email' &&
                                cell.column.id !== 'admissionNumber'
                              ) {
                                return (
                                  cell.value && (
                                    <td {...cell.getCellProps()} key={index}>
                                      {cell.render('Cell')}
                                    </td>
                                  )
                                );
                              }
                            }
                          })}
                          {Auth.User && (
                            <td>
                              <Button
                                variant='outline-success'
                                onClick={() => {
                                  setprocessing(true);
                                  SendMail({
                                    from: Auth.User,
                                    Message: `There is urgent need of blood from ${Auth.User.username}`,
                                    to: row.original,
                                  })
                                    .then(() => {
                                      Message.ThrowMessage(
                                        'Message Sent Successfully!!'
                                      );
                                      setprocessing(false);
                                    })
                                    .catch(() => {
                                      Message.ThrowMessage(
                                        'Something went wrong !!'
                                      );
                                      setprocessing(false);
                                    });
                                }}
                              >
                                Seek Help
                              </Button>
                            </td>
                          )}
                        </tr>
                      </React.Fragment>
                    );
                  }
                })}
                {/* <tr>
                <td></td>
              </tr> */}
              </tbody>
            </table>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              style={{ background: 'black', borderColor: 'black' }}
              disabled={!canPreviousPage}
              onClick={() => previousPage()}
            >
              Prev{' '}
            </Button>
            <span style={{ margin: '10px' }}>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </span>
            <Button
              style={{ background: 'black', borderColor: 'black' }}
              disabled={!canNextPage}
              onClick={() => nextPage()}
            >
              {' '}
              Next
            </Button>
          </div>
          {processing && (
            <div className='processing-mail flex'>
              <Loader />
            </div>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default Donors;
