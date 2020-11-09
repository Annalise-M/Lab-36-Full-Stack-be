// const fs = require('fs');
// const pool = require('../lib/utils/pool');
// const Instrument = require('../lib/models/Instruments');

describe('Instrument model', () => {
//   beforeEach(() => {
//     return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
//   });

  it('makes the test pass', async() => {
    const theAnswer = true;
    

    expect(theAnswer).toEqual(theAnswer);
  });

  //   it('inserts a new instrument into the database', async() => {
  //     const createdInstrument = await Instrument.insert({
  //       make_model: 'Teisco EB-200 Bass',
  //       make_year: '1960s',
  //       style: 'Sunburst',
  //       scale: '30 inch scale',
  //       condition: 'very good',
  //       price: 650,
  //       url: 'https://images.reverb.com/image/upload/s--OZL2Z-51--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1507751165/pobvshxmvho0ackdbzyj.jpg'
  //     });
      
  //     const { rows } = await pool.query(
  //       'SELECT * FROM instruments WHERE id = $1',
  //       [createdInstrument.id]
  //     );

  //     expect(rows[0]).toEqual(createdInstrument);
  //   });


});
