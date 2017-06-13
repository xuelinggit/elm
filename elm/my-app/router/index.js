/**
 * Created by SCF on 2017/6/13.
 */
import axios from 'axios';
export default axios.create({
  baseUrl: '192.168.10.213:8080',
  timeout: 1000,
  responseType: 'json'
});
