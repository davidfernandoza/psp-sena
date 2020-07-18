'use strict'
const moment = require('moment')

var day = moment(1580734800 * 1000).format('YYYY-MM-DD H:mm:ss')
console.log(day)

/* 

"payload": [
        {
            "id": 8,
            "programs_id": 2,
            "phases_id": 1,
            "start_date": "1580734800",
            "delta_time": 240,
            "finish_date": "1580749200",
            "interruption": 0,
            "comments": "Detalles del registro 1 para el programa 2"
        },
        {
            "id": 9,
            "programs_id": 2,
            "phases_id": 1,
            "start_date": "1580752800",
            "delta_time": 70,
            "finish_date": "1580757000",
            "interruption": 10,
            "comments": "Detalles del registro 2 para el programa 2"
        },
        {
            "id": 10,
            "programs_id": 2,
            "phases_id": 2,
            "start_date": "1580757000",
            "delta_time": 300,
            "finish_date": "1580775000",
            "interruption": 0,
            "comments": "Detalles del registro 3 para el programa 2"
        },
        {
            "id": 11,
            "programs_id": 2,
            "phases_id": 3,
            "start_date": "1580821200",
            "delta_time": 120,
            "finish_date": "1580828400",
            "interruption": 0,
            "comments": "Detalles del registro 4 para el programa 2"
        },
        {
            "id": 12,
            "programs_id": 2,
            "phases_id": 4,
            "start_date": "1580828400",
            "delta_time": 120,
            "finish_date": "1580835600",
            "interruption": 0,
            "comments": "Detalles del registro 5 para el programa 2"
        },
        {
            "id": 13,
            "programs_id": 2,
            "phases_id": 4,
            "start_date": "1580835600",
            "delta_time": 240,
            "finish_date": "1580810400",
            "interruption": 0,
            "comments": "Detalles del registro 6 para el programa 2"
        },
        {
            "id": 14,
            "programs_id": 2,
            "phases_id": 5,
            "start_date": "1580907600",
            "delta_time": 210,
            "finish_date": "1580920200",
            "interruption": 0,
            "comments": "Detalles del registro 7 para el programa 2"
        },
        {
            "id": 15,
            "programs_id": 2,
            "phases_id": 6,
            "start_date": "1580882400",
            "delta_time": 150,
            "finish_date": "1580891400",
            "interruption": 0,
            "comments": "Detalles del registro 8 para el programa 2"
        }
    ]
}
*/
