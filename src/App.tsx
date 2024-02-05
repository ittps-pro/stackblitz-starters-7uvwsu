import { FC, useEffect } from 'react';

import './style.css';
import { App, ConfigProvider, Form, FormInstance } from 'antd';

import { Axios } from 'axios';
import { Bash } from 'node-bash';

// interface ServerNetwork {
//   ip: string;
// }

// type Server = {
//   id: number;
//   name: string;
//   network: ServerNetwork;
// };

// type User = {
//   id: number;
//   email: string;
//   first_name: string;
// };

// type GetUsersResponse = {
//   data: User[];
// };
// async function getUsers() {
//   try {
//     // 👇️ const data: GetUsersResponse
//     const { data, status } = await axios.get<GetUsersResponse>(
//       'https://reqres.in/api/users',
//       {
//         headers: {
//           Accept: 'application/json',
//         },
//       }
//     );

//     console.log(JSON.stringify(data, null, 4));

//     // 👇️ "response status is: 200"
//     console.log('response status is: ', status);

//     return data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.log('error message: ', error.message);
//       return error.message;
//     } else {
//       console.log('unexpected error: ', error);
//       return 'An unexpected error occurred';
//     }
//   }
// }

export const Apps: FC<{ name: string; username?: string }> = ({ name }) => {
  return <>VPN Setup</>;
};
