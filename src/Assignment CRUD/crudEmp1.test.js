import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import axios from 'axios';
import CrudEmp1 from './crudEmp1';

test('Enter Branch Details', () => {
    render(<CrudEmp1 />);
    const linkElement = screen.getByText(/CRUD using Axios/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<CrudEmp1 />);
    expect(getByText('CRUD using Axios')).toBeInTheDocument();
    expect(getByText('Branch List')).toBeInTheDocument();
    expect(getByPlaceholderText('Name')).toBeInTheDocument();
    expect(getByPlaceholderText('Location')).toBeInTheDocument();
    expect(getByPlaceholderText('Contact')).toBeInTheDocument();
    expect(getByText('Create Branch')).toBeInTheDocument();
  });

  test('validates form fields', async () => {
    const { getByText } = render(<CrudEmp1 />);
    fireEvent.click(getByText('Create Branch'));
    await waitFor(() => {
      expect(getByText('Name is required')).toBeInTheDocument();
      expect(getByText('Location is required')).toBeInTheDocument();
      expect(getByText('Contact is required')).toBeInTheDocument();
    });
  });

//   test('creates a branch', async () => {
//     const { getByText, getByPlaceholderText } = render(<CrudEmp1 />);
//     const nameInput = getByPlaceholderText('Name');
//     const locationInput = getByPlaceholderText('Location');
//     const contactInput = getByPlaceholderText('Contact');

//     await act(async () => {
//       fireEvent.change(nameInput, { target: { value: 'Test Branch' } });
//       fireEvent.change(locationInput, { target: { value: 'Test Location' } });
//       fireEvent.change(contactInput, { target: { value: 1234567890 } });
//       fireEvent.click(getByText('Create Branch'));
//     });

//     await waitFor(() => {
//       expect(axios.post).toHaveBeenCalledWith('http://localhost:1158/branchservice/Badd', {
//         branch_name: 'Test Branch',
//         branch_location: 'Test Location',
//         branch_contact: 1234567890
//       });
//     });
//   });

//   test('deletes a branch', async () => {
//     axios.delete.mockResolvedValueOnce({});
//     const { getByText } = render(<CrudEmp1 />);
//     fireEvent.click(getByText('Delete'));
//     await waitFor(() => {
//       expect(axios.delete).toHaveBeenCalled();
//     });
//   });

//   test('edits a branch', async () => {
//     axios.put.mockResolvedValueOnce({});
//     const { getByText, getByPlaceholderText } = render(<CrudEmp1 />);
//     fireEvent.click(getByText('Edit'));
//     const nameInput = getByPlaceholderText('Name');
//     const locationInput = getByPlaceholderText('Location');
//     const contactInput = getByPlaceholderText('Contact');

//     await act(async () => {
//       fireEvent.change(nameInput, { target: { value: 'Updated Branch' } });
//       fireEvent.change(locationInput, { target: { value: 'Updated Location' } });
//       fireEvent.change(contactInput, { target: { value: 9876543210 } });
//       fireEvent.click(getByText('Update Branch'));
//     });

//     await waitFor(() => {
//       expect(axios.put).toHaveBeenCalledWith('http://localhost:1158/branchservice/Bupdate/1', {
//         branch_id: 1,
//         branch_name: 'Updated Branch',
//         branch_location: 'Updated Location',
//         branch_contact: 9876543210
//       });
//     });
//   });
// });
