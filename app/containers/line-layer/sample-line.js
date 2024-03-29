const data = [
  {
    inbound: 72633,
    outbound: 74735,
    from: {
      name: "19th St. Oakland (19TH)",
      coordinates: [
        -122.269029,
        37.80787
      ]
    },
    to: {
      name: "12th St. Oakland City Center (12TH)",
      coordinates: [
        -122.271604,
        37.803664
      ]
    }
  },
  {
    inbound: 65042,
    outbound: 67529,
    from: {
      name: "12th St. Oakland City Center (12TH)",
      coordinates: [
        -122.271604,
        37.803664
      ]
    },
    to: {
      name: "West Oakland (WOAK)",
      coordinates: [
        -122.294582,
        37.804675
      ]
    }
  },
  {
    inbound: 0,
    outbound: 23821,
    from: {
      name: "Lake Merritt (LAKE)",
      coordinates: [
        -122.265609,
        37.797484
      ]
    },
    to: {
      name: "12th St. Oakland City Center (12TH)",
      coordinates: [
        -122.271604,
        37.803664
      ]
    }
  },
  {
    inbound: 62964,
    outbound: 58788,
    from: {
      name: "16th St. Mission (16TH)",
      coordinates: [
        -122.419694,
        37.765062
      ]
    },
    to: {
      name: "Civic Center/UN Plaza (CIVC)",
      coordinates: [
        -122.413756,
        37.779528
      ]
    }
  },
  {
    inbound: 55134,
    outbound: 51019,
    from: {
      name: "24th St. Mission (24TH)",
      coordinates: [
        -122.418466,
        37.752254
      ]
    },
    to: {
      name: "16th St. Mission (16TH)",
      coordinates: [
        -122.419694,
        37.765062
      ]
    }
  },
  {
    inbound: 67975,
    outbound: 70088,
    from: {
      name: "MacArthur (MCAR)",
      coordinates: [
        -122.267227,
        37.828415
      ]
    },
    to: {
      name: "19th St. Oakland (19TH)",
      coordinates: [
        -122.269029,
        37.80787
      ]
    }
  },
  {
    inbound: 45831,
    outbound: 42007,
    from: {
      name: "Glen Park (GLEN)",
      coordinates: [
        -122.434092,
        37.732921
      ]
    },
    to: {
      name: "24th St. Mission (24TH)",
      coordinates: [
        -122.418466,
        37.752254
      ]
    }
  },
  {
    inbound: 4158,
    outbound: 4000,
    from: {
      name: "Richmond (RICH)",
      coordinates: [
        -122.353165,
        37.936887
      ]
    },
    to: {
      name: "El Cerrito del Norte (DELN)",
      coordinates: [
        -122.317269,
        37.925655
      ]
    }
  },
  {
    inbound: 12012,
    outbound: 12338,
    from: {
      name: "El Cerrito del Norte (DELN)",
      coordinates: [
        -122.317269,
        37.925655
      ]
    },
    to: {
      name: "El Cerrito Plaza (PLZA)",
      coordinates: [
        -122.299272,
        37.903059
      ]
    }
  },
  {
    inbound: 16343,
    outbound: 16856,
    from: {
      name: "El Cerrito Plaza (PLZA)",
      coordinates: [
        -122.299272,
        37.903059
      ]
    },
    to: {
      name: "North Berkeley (NBRK)",
      coordinates: [
        -122.283451,
        37.87404
      ]
    }
  },
  {
    inbound: 20199,
    outbound: 20909,
    from: {
      name: "North Berkeley (NBRK)",
      coordinates: [
        -122.283451,
        37.87404
      ]
    },
    to: {
      name: "Downtown Berkeley (DBRK)",
      coordinates: [
        -122.268045,
        37.869867
      ]
    }
  },
  {
    inbound: 26650,
    outbound: 28041,
    from: {
      name: "Downtown Berkeley (DBRK)",
      coordinates: [
        -122.268045,
        37.869867
      ]
    },
    to: {
      name: "Ashby (ASHB)",
      coordinates: [
        -122.26978,
        37.853024
      ]
    }
  },
  {
    inbound: 30485,
    outbound: 31757,
    from: {
      name: "Ashby (ASHB)",
      coordinates: [
        -122.26978,
        37.853024
      ]
    },
    to: {
      name: "MacArthur (MCAR)",
      coordinates: [
        -122.267227,
        37.828415
      ]
    }
  },
  {
    inbound: 36018,
    outbound: 36634,
    from: {
      name: "Rockridge (ROCK)",
      coordinates: [
        -122.251793,
        37.844601
      ]
    },
    to: {
      name: "MacArthur (MCAR)",
      coordinates: [
        -122.267227,
        37.828415
      ]
    }
  },
  {
    inbound: 109373,
    outbound: 111316,
    from: {
      name: "West Oakland (WOAK)",
      coordinates: [
        -122.294582,
        37.804675
      ]
    },
    to: {
      name: "Embarcadero (EMBR)",
      coordinates: [
        -122.396742,
        37.792976
      ]
    }
  },
  {
    inbound: 39030,
    outbound: 38961,
    from: {
      name: "Lake Merritt (LAKE)",
      coordinates: [
        -122.265609,
        37.797484
      ]
    },
    to: {
      name: "West Oakland (WOAK)",
      coordinates: [
        -122.294582,
        37.804675
      ]
    }
  },
  {
    inbound: 94808,
    outbound: 86301,
    from: {
      name: "Montgomery St. (MONT)",
      coordinates: [
        -122.401407,
        37.789256
      ]
    },
    to: {
      name: "Embarcadero (EMBR)",
      coordinates: [
        -122.396742,
        37.792976
      ]
    }
  },
  {
    inbound: 81351,
    outbound: 71139,
    from: {
      name: "Powell St. (POWL)",
      coordinates: [
        -122.406857,
        37.784991
      ]
    },
    to: {
      name: "Montgomery St. (MONT)",
      coordinates: [
        -122.401407,
        37.789256
      ]
    }
  },
  {
    inbound: 74091,
    outbound: 67746,
    from: {
      name: "Civic Center/UN Plaza (CIVC)",
      coordinates: [
        -122.413756,
        37.779528
      ]
    },
    to: {
      name: "Powell St. (POWL)",
      coordinates: [
        -122.406857,
        37.784991
      ]
    }
  },
  {
    inbound: 39295,
    outbound: 36129,
    from: {
      name: "Balboa Park (BALB)",
      coordinates: [
        -122.447414,
        37.721981
      ]
    },
    to: {
      name: "Glen Park (GLEN)",
      coordinates: [
        -122.434092,
        37.732921
      ]
    }
  },
  {
    inbound: 29472,
    outbound: 27661,
    from: {
      name: "Daly City (DALY)",
      coordinates: [
        -122.469081,
        37.706121
      ]
    },
    to: {
      name: "Balboa Park (BALB)",
      coordinates: [
        -122.447414,
        37.721981
      ]
    }
  },
  {
    inbound: 22172,
    outbound: 20545,
    from: {
      name: "Colma (COLM)",
      coordinates: [
        -122.466233,
        37.684638
      ]
    },
    to: {
      name: "Daly City (DALY)",
      coordinates: [
        -122.469081,
        37.706121
      ]
    }
  },
  {
    inbound: 18363,
    outbound: 16922,
    from: {
      name: "South San Francisco (SSAN)",
      coordinates: [
        -122.444116,
        37.664174
      ]
    },
    to: {
      name: "Colma (COLM)",
      coordinates: [
        -122.466233,
        37.684638
      ]
    }
  },
  {
    inbound: 15144,
    outbound: 13801,
    from: {
      name: "San Bruno (SBRN)",
      coordinates: [
        -122.416038,
        37.637753
      ]
    },
    to: {
      name: "South San Francisco (SSAN)",
      coordinates: [
        -122.444116,
        37.664174
      ]
    }
  },
  {
    inbound: 6275,
    outbound: 5792,
    from: {
      name: "Millbrae (MLBR)",
      coordinates: [
        -122.38666,
        37.599787
      ]
    },
    to: {
      name: "San Bruno (SBRN)",
      coordinates: [
        -122.416038,
        37.637753
      ]
    }
  },
  {
    inbound: 5478,
    outbound: 4610,
    from: {
      name: "San Francisco Int'l Airport (SFIA)",
      coordinates: [
        -122.392612,
        37.616035
      ]
    },
    to: {
      name: "San Bruno (SBRN)",
      coordinates: [
        -122.416038,
        37.637753
      ]
    }
  },
  {
    inbound: 0,
    outbound: 515,
    from: {
      name: "San Francisco Int'l Airport (SFIA)",
      coordinates: [
        -122.392612,
        37.616035
      ]
    },
    to: {
      name: "Millbrae (MLBR)",
      coordinates: [
        -122.38666,
        37.599787
      ]
    }
  },
  {
    inbound: 47842,
    outbound: 47967,
    from: {
      name: "Fruitvale (FTVL)",
      coordinates: [
        -122.224274,
        37.774963
      ]
    },
    to: {
      name: "Lake Merritt (LAKE)",
      coordinates: [
        -122.265609,
        37.797484
      ]
    }
  },
  {
    inbound: 43105,
    outbound: 42921,
    from: {
      name: "Coliseum/Oakland Airport (COLS)",
      coordinates: [
        -122.197273,
        37.754006
      ]
    },
    to: {
      name: "Fruitvale (FTVL)",
      coordinates: [
        -122.224274,
        37.774963
      ]
    }
  },
  {
    inbound: 39490,
    outbound: 39238,
    from: {
      name: "San Leandro (SANL)",
      coordinates: [
        -122.161311,
        37.722619
      ]
    },
    to: {
      name: "Coliseum/Oakland Airport (COLS)",
      coordinates: [
        -122.197273,
        37.754006
      ]
    }
  },
  {
    inbound: 35239,
    outbound: 34901,
    from: {
      name: "Bay Fair (BAYF)",
      coordinates: [
        -122.126871,
        37.697185
      ]
    },
    to: {
      name: "San Leandro (SANL)",
      coordinates: [
        -122.161311,
        37.722619
      ]
    }
  },
  {
    inbound: 19142,
    outbound: 18921,
    from: {
      name: "Hayward (HAYW)",
      coordinates: [
        -122.087967,
        37.670399
      ]
    },
    to: {
      name: "Bay Fair (BAYF)",
      coordinates: [
        -122.126871,
        37.697185
      ]
    }
  },
  {
    inbound: 13169,
    outbound: 13102,
    from: {
      name: "Castro Valley (CAST)",
      coordinates: [
        -122.075567,
        37.690754
      ]
    },
    to: {
      name: "Bay Fair (BAYF)",
      coordinates: [
        -122.126871,
        37.697185
      ]
    }
  },
  {
    inbound: 15551,
    outbound: 15288,
    from: {
      name: "South Hayward (SHAY)",
      coordinates: [
        -122.057551,
        37.6348
      ]
    },
    to: {
      name: "Hayward (HAYW)",
      coordinates: [
        -122.087967,
        37.670399
      ]
    }
  },
  {
    inbound: 13039,
    outbound: 12957,
    from: {
      name: "Union City (UCTY)",
      coordinates: [
        -122.017867,
        37.591208
      ]
    },
    to: {
      name: "South Hayward (SHAY)",
      coordinates: [
        -122.057551,
        37.6348
      ]
    }
  },
  {
    inbound: 8657,
    outbound: 8580,
    from: {
      name: "Fremont (FRMT)",
      coordinates: [
        -121.9764,
        37.557355
      ]
    },
    to: {
      name: "Union City (UCTY)",
      coordinates: [
        -122.017867,
        37.591208
      ]
    }
  },
  {
    inbound: 6209,
    outbound: 6279,
    from: {
      name: "Pittsburg/Bay Point (PITT)",
      coordinates: [
        -121.945154,
        38.018914
      ]
    },
    to: {
      name: "North Concord/Martinez (NCON)",
      coordinates: [
        -122.024597,
        38.003275
      ]
    }
  },
  {
    inbound: 8889,
    outbound: 8814,
    from: {
      name: "North Concord/Martinez (NCON)",
      coordinates: [
        -122.024597,
        38.003275
      ]
    },
    to: {
      name: "Concord (CONC)",
      coordinates: [
        -122.029095,
        37.973737
      ]
    }
  },
  {
    inbound: 14170,
    outbound: 14062,
    from: {
      name: "Concord (CONC)",
      coordinates: [
        -122.029095,
        37.973737
      ]
    },
    to: {
      name: "Pleasant Hill/Contra Costa Centre (PHIL)",
      coordinates: [
        -122.056013,
        37.928403
      ]
    }
  },
  {
    inbound: 21095,
    outbound: 20852,
    from: {
      name: "Pleasant Hill/Contra Costa Centre (PHIL)",
      coordinates: [
        -122.056013,
        37.928403
      ]
    },
    to: {
      name: "Walnut Creek (WCRK)",
      coordinates: [
        -122.067423,
        37.905628
      ]
    }
  },
  {
    inbound: 26366,
    outbound: 26309,
    from: {
      name: "Walnut Creek (WCRK)",
      coordinates: [
        -122.067423,
        37.905628
      ]
    },
    to: {
      name: "Lafayette (LAFY)",
      coordinates: [
        -122.123801,
        37.893394
      ]
    }
  },
  {
    inbound: 29287,
    outbound: 29364,
    from: {
      name: "Lafayette (LAFY)",
      coordinates: [
        -122.123801,
        37.893394
      ]
    },
    to: {
      name: "Orinda (ORIN)",
      coordinates: [
        -122.183791,
        37.878361
      ]
    }
  },
  {
    inbound: 31857,
    outbound: 32005,
    from: {
      name: "Orinda (ORIN)",
      coordinates: [
        -122.183791,
        37.878361
      ]
    },
    to: {
      name: "Rockridge (ROCK)",
      coordinates: [
        -122.251793,
        37.844601
      ]
    }
  },
  {
    inbound: 7585,
    outbound: 7429,
    from: {
      name: "Dublin/Pleasanton (DUBL)",
      coordinates: [
        -121.900367,
        37.701695
      ]
    },
    to: {
      name: "West Dublin/Pleasanton (WDUB)",
      coordinates: [
        -121.928099,
        37.699759
      ]
    }
  },
  {
    inbound: 10762,
    outbound: 10744,
    from: {
      name: "West Dublin/Pleasanton (WDUB)",
      coordinates: [
        -121.928099,
        37.699759
      ]
    },
    to: {
      name: "Castro Valley (CAST)",
      coordinates: [
        -122.075567,
        37.690754
      ]
    }
  }
]

export default data