var data1 = {
    "count": 170,
    "data": [
        {
            stationNo: "C0AD1",
            stationName: "八里",
            recTime: "202204271600",
            rain: 0
        },
        {
            stationNo: "C0AD0",
            stationName: "三芝",
            recTime: "202204271600",
            rain: 0
        },
        {
            stationNo: "C0AD4",
            stationName: "土城",
            recTime: "202204271600",
            rain: 0
        },
        {
            stationNo: "318",
            stationName: "大安福州山",
            recTime: "202204271602",
            rain: 0
        },
        {
            stationNo: "01A17",
            stationName: "坪林",
            recTime: "201911130140",
            rain: 0
        },
      ]
}
for(var i=0;i<4;i++)
{
    var time=data1.data[i].recTime
    var name=data1.data[i].stationName
    var no=data1.data[i].stationNo
    var rain=data1.data[i].rain
    
    $('#contain').append("<br/>"+'stationNo: '+no)
    $('#contain').append("<br/>"+'stationName:'+name)
    $('#contain').append("<br/>"+'recTime:'+time.substring(0,4)+'年'+time.substring(5,6)+'月'+time.substring(7,8)+'日'+time.substring(9,10)+'時'+time.substring(11,12)+'分')
    $('#contain').append("<br/>"+'rain:'+rain)
   
}
