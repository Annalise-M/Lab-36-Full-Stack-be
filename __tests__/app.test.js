const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');

describe('Lab-36-Full-Stack-be routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('creates a instrument VIA POST', () => {
    return request(app)
      .post('/api/v1/instruments')
      .send({
        make_model: 'Jolana Diamant Bass',
        make_year: '70s',
        style: 'sunburst',
        scale: '800 mm',
        condition: 'fair',
        price: 350,
        url: 'https://reverb.com/item/35803120-jolana-diamant-bass-70-s-sunburst'
      });
  });

});
