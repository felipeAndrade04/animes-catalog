import http from '../http';
import { AnimeServices } from './animeServices';

const animeServices = new AnimeServices(http);
export default animeServices;
