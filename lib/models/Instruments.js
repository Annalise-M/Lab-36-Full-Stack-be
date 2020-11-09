const pool = require('../utils/pool');

class Instrument {
    id;
    make_model;
    make_year;
    style;
    scale;
    condition;
    price;
    url;

    constructor(row) {
      this.id = row.id;
      this.make_model = row.make_model;
      this.make_year = row.make_year;
      this.style = row.style;
      this.scale = row.scale;
      this.condition = row.condition;
      this.price = row.price;
      this.url = row.url;
    }

    static async insert(instrument) {
      const { rows } = await pool.query(
        'INSERT INTO instruments (make_model, make_year, style, scale, condition, price, url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [instrument.make_model, instrument.make_year, instrument.style, instrument.scale, instrument.condition, instrument.price, instrument.url]
      );

      return new Instrument(rows[0]);
    }

    static async findById(id) {
      const { rows } = await pool.query(
        'SELECT * FROM instruments WHERE id = $1', [id]
      );

      if(!rows[0]) return null;
      else return new Instrument(rows[0]);
    }
    
    static async find() {
      const { rows } = await pool.query(
        'SELECT * FROM instruments'
      );

      return rows.map(row => new Instrument(row));
    }

    static async update(id, updatedInstrument) {
      const { rows } = await pool.query(
        `UPDATE instruments
        SET make_model=$1,
        make_year=$2,
        style=$3,
        scale=$4,
        condition=$5,
        price=$6,
        url=$7
        WHERE id=$8
        RETURNING *
        `,
        [updatedInstrument.make_model, updatedInstrument.make_year, updatedInstrument.style, updatedInstrument.scale, updatedInstrument.condition, updatedInstrument.price, updatedInstrument.url,
          id]
      );

      return new Instrument(rows[0]);
    }

    static async delete(id) {
      const { rows } = await pool.query(
        'DELETE FROM instruments WHERE id = $1 RETURNING *',
        [id]
      );

      return new Instrument(rows[0]);
    }
}

module.exports = Instrument;
