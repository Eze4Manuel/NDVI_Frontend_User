import faker from 'faker';
// utils
import { mockImgCover } from '../utils/mockImages';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Landsat Normalized Difference Vegetation Index',
  'Understanding your Aerial Data: Normalized Difference Vegetation Index NDVI',
  'Use of NDVI and satellite in crop monitoring',
  'Aerial NDVI vegetation index remote sensing image of forest area with small roads in Finland Stock Photo,',
  'ResearchGate Normalized difference vegetation index (NDVI) maps of the CMA ',
  'An Urban Heat Island Study of the Colombo Metropolitan Area, Sri Lanka, Based on Landsat Data', 
];

const posts = [...Array(6)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: mockImgCover(index + 1),
  title: POST_TITLES[index],
  createdAt: null,
  view: null,
  comment: null,
  share: null,
  favorite: null,
  author: {
    name: null,
    avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`
  }
}));

export default posts;
