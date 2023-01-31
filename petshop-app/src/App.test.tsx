import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios';
import { jest, test} from '@jest/globals';
import Login from "./MyComponents/Login";

jest.mock('axios');

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// describe('Login', () => {
//   it('fetches successfully data from an API', async () => {
//     const data = {
//       data: {
//         hits: [
//           {
//             userEmail: 'bhavana@gmail.com',
//             userPassword: 'bhavana',
//           },
//           {
//             userEmail: 'rashmipandey@gmail.com',
//             userPassword: 'rashmi',
//           },
//         ],
//       },
//     };
  

//     (axios.get as jest.Mock).mockImplementationOnce(() => Promise.resolve(data));
//   });

//   it('fetches erroneously data from an API', async () => {
//     const errorMessage = 'Network Error';

//     (axios.get as jest.Mock).mockImplementationOnce(() =>
//       Promise.reject(new Error(errorMessage)),
//     );
//   });
// });
