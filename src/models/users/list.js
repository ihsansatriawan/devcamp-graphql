import {userData, userNotFound} from './__mocks__/users';

const listUsers = (_, args) => {

  // custom arguments
  const { page, perPage, q } = args;

  const filteredUsers = userData.filter(user => user.name.toLocaleLowerCase().includes(q.toLocaleLowerCase()));

  // set the pagination
  const result = paginate(filteredUsers, perPage, page);
  const totalItems = filteredUsers.length;
  const totalPages = Math.ceil(totalItems / perPage);

  return {
    data: {
      message: filteredUsers.length > 0 ? 'Daftar user ditemukan' : 'Tidak ada user yang ditemukan',
      users: result.sort(compareSort),
    },
    hasNextPage: page < totalPages,
    totalPages,
  };
};

const paginate = (items, perPage, page) => {
  return items.slice((page - 1) * perPage, (page) * perPage);
}

const compareSort = (a, b) => {
  const last = a.id
  const next = b.id

  return last > next;
}

export default listUsers;