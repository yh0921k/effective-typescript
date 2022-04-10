function getAuthors(database) {
    var authorRows = database.runQuery("SELECT FIRST, LAST FROM AUTHORS");
    return authorRows.map(function (row) { return ({ first: row[0], last: row[1] }); });
}
test('getAuthors', function () {
    var authors = getAuthors({
        runQuery: function (sql) {
            return [
                ['Toni', 'Morrison'],
                ['Maya', 'Angelou'],
            ];
        }
    });
    expect(authors).toEqual([
        { first: 'Toni', last: 'Morrison' },
        { first: 'Maya', last: 'Angelou' },
    ]);
});
