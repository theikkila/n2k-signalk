module.exports = [
  {
    source: 'Battery Status',
    node: function(n2k){
      return `instruments.wireless.${n2k.src}.batteryStatus`
    }
  },{
    source: 'Battery Charge Status',
    node: function(n2k){
      return `instruments.wireless.${n2k.src}.batteryChargeStatus`
    }
  },{
    source: 'Status',
    node: function(n2k){
      return `instruments.wireless.${n2k.src}.status`
    }
  },
]
