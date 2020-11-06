module.exports = class Instrument {
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

    
};
