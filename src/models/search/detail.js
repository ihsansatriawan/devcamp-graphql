import { listItem, default_data } from './dummyData';

const detail = (_, args) => {
  const { slug } = args;

  const dataFiltered = listItem.find(item => item.slug.toLowerCase().includes(slug.toLowerCase())) || default_data

  return dataFiltered;
}

export default detail;