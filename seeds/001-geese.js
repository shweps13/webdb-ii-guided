
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('geese')
  .truncate()
  // .del()
    .then(function () {
      // Inserts seed entries
      return knex('geese').insert([
        {name: 'Ban Aflack', color: 'white'},
        {name: 'Some Guy', color: 'white'},
        {name: 'Goose Bumps', color: 'white'}
      ]);
    });
};
