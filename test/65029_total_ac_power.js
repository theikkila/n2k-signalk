var chai = require('chai')
chai.Should()
chai.use(require('chai-things'))

describe('65029 Generator Total AC Power', function () {
  it('complete sentence converts', function () {
    var tree = require('../n2kMapper.js').toNested(
      JSON.parse(
        '{"timestamp":"2017-10-05-13:52:41.000","prio":3,"src":192,"dst":255,"pgn":65029,"description":"Generator Total AC Power","fields":{"Real Power":37888,"Apparent Power":30517}}'
      )
    )
    tree.should.have.nested.property(
      'navigation.datetime.value',
      '2013-10-08T16:04:00Z'
    )
    tree.should.be.validSignalKVesselIgnoringIdentity
  })
})
