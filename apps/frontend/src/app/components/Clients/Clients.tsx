import React from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import Table from '../UI/Table';

const columns = [
  { accessor: 'id', Header: 'ID' },
  { accessor: 'name', Header: 'Name' },
  { accessor: 'phone', Header: 'Phone' },
  { accessor: 'caseCount', Header: 'Case Count' },
  { accessor: 'email', Header: 'Email' },
  { accessor: 'pow', Header: 'Power of Attorney' },
];

const data = [
  {
    id: 1,
    name: 'Alice',
    phone: 555000555,
    email: 'alice@example.com',
    caseCount: 4,
    pow: 'PRIMARY',
    cases: [
      {
        id: '2',
        court: 'İstanbul 17. Ağır Ceza',
        side: 'Sanık',
        oppositeSide: 'Kamu',
      },
    ],
  },
  {
    id: 2,
    name: 'Bob',
    phone: 555000555,
    email: 'bob@example.com',
    caseCount: 9,
    pow: 'PRIMARY',
    cases: [
      {
        id: '2',
        court: 'İstanbul 17. Ağır Ceza',
        side: 'Sanık',
        oppositeSide: 'Kamu',
      },
    ],
  },
  {
    id: 3,
    name: 'Charlie',
    phone: 555000555,
    email: 'charlie@example.com',
    caseCount: 3,
    pow: 'PRIMARY',
    cases: [
      {
        id: '2',
        court: 'İstanbul 17. Ağır Ceza',
        side: 'Sanık',
        oppositeSide: 'Kamu',
      },
    ],
  },
  {
    id: 4,
    name: 'Charlie',
    phone: 555000555,
    email: 'charlie@example.com',
    caseCount: 12,
    pow: 'PRIMARY',
    cases: [
      {
        id: '2',
        court: 'İstanbul 17. Ağır Ceza',
        side: 'Sanık',
        oppositeSide: 'Kamu',
      },
    ],
  },
  {
    id: 5,
    name: 'Charlie',
    phone: 555000555,
    email: 'charlie@example.com',
    caseCount: 21,
    pow: 'PRIMARY',
    cases: [
      {
        id: '2',
        court: 'İstanbul 17. Ağır Ceza',
        side: 'Sanık',
        oppositeSide: 'Kamu',
      },
    ],
  },
];

const Clients = () => {
  return (
    <div className="bg-c-5 flex flex-col gap-2 p-2">
      <div className="border-c-8 rounded-md border-2 py-2 text-center text-2xl font-bold">
        <h3 className="p-2 text-yellow-600">Clients</h3>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Input className="flex-1" placeholder="Search a client" />
        <Button variant="primary">Add Client</Button>
      </div>
      <Table data={data} columns={columns} />
    </div>
  );
};

export default Clients;
