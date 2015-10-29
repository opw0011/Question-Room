//jQuery
var courses = '[{"text": "ACCT1010"}, {"text": "ACCT2010"}, {"text": "ACCT2020"}, {"text": "ACCT2200"}, {"text": "ACCT3010"}, {"text": "ACCT3020"}, {"text": "ACCT3030"}, {"text": "ACCT3210"}, {"text": "ACCT3610"}, {"text": "ACCT3650"}, {"text": "ACCT3880"}, {"text": "ACCT4010"}, {"text": "ACCT4020"}, {"text": "ACCT4410"}, {"text": "ACCT4510"}, {"text": "ACCT4610"}, {"text": "ACCT4980"}, {"text": "IROP1000"}, {"text": "BIEN2010"}, {"text": "BIEN3010"}, {"text": "ISOM1090"}, {"text": "ISOM1380"}, {"text": "ISOM1500"}, {"text": "ISOM1700"}, {"text": "ISOM2010"}, {"text": "ISOM2030"}, {"text": "ISOM2310"}, {"text": "ISOM2400"}, {"text": "ISOM2500"}, {"text": "ISOM2700"}, {"text": "ISOM2720"}, {"text": "ISOM3000"}, {"text": "ISOM3010"}, {"text": "ISOM3100"}, {"text": "ISOM3180"}, {"text": "ISOM3210"}, {"text": "ISOM3230"}, {"text": "ISOM3260"}, {"text": "ISOM3310"}, {"text": "ISOM3320"}, {"text": "ISOM3360"}, {"text": "ISOM3380"}, {"text": "ISOM3530"}, {"text": "ISOM3540"}, {"text": "ISOM3710"}, {"text": "ISOM3730"}, {"text": "ISOM3740"}, {"text": "ISOM3760"}, {"text": "ISOM4000"}, {"text": "ISOM4020"}, {"text": "ISOM4100"}, {"text": "ISOM4300"}, {"text": "ISOM4390"}, {"text": "ISOM4400"}, {"text": "ISOM4490"}, {"text": "ISOM4520"}, {"text": "ISOM4530"}, {"text": "ISOM4540"}, {"text": "ISOM4550"}, {"text": "ISOM4580"}, {"text": "ISOM4590"}, {"text": "ISOM4690"}, {"text": "ISOM4720"}, {"text": "ISOM4740"}, {"text": "ISOM4750"}, {"text": "ISOM4770"}, {"text": "ISOM4780"}, {"text": "ISOM4790"}, {"text": "ISOM4810"}, {"text": "ISOM4820"}, {"text": "ISOM4840"}, {"text": "ISOM4880"}, {"text": "ISOM4890"}, {"text": "BMED1100"}, {"text": "BMED4950"}, {"text": "LABU2020"}, {"text": "LABU2050"}, {"text": "LABU2051"}, {"text": "LABU2052"}, {"text": "CENG1000"}, {"text": "CENG1010"}, {"text": "CENG1500"}, {"text": "CENG1600"}, {"text": "CENG1700"}, {"text": "CENG1980"}, {"text": "CENG1990"}, {"text": "CENG2000"}, {"text": "CENG2010"}, {"text": "CENG2030"}, {"text": "CENG2110"}, {"text": "CENG2210"}, {"text": "CENG2220"}, {"text": "CENG3120"}, {"text": "CENG3210"}, {"text": "CENG3220"}, {"text": "CENG3230"}, {"text": "CENG3910"}, {"text": "CENG3920"}, {"text": "CENG3926"}, {"text": "CENG3927"}, {"text": "CENG4000"}, {"text": "CENG4020"}, {"text": "CENG4120"}, {"text": "CENG4130"}, {"text": "CENG4140"}, {"text": "CENG4520"}, {"text": "CENG4540"}, {"text": "CENG4620"}, {"text": "CENG4630"}, {"text": "CENG4640"}, {"text": "CENG4660"}, {"text": "CENG4670"}, {"text": "CENG4680"}, {"text": "CENG4710"}, {"text": "CENG4720"}, {"text": "CENG4911"}, {"text": "CENG4912"}, {"text": "CENG4913"}, {"text": "CENG4980"}, {"text": "LAGR2080"}, {"text": "CHEM1002"}, {"text": "CHEM1004"}, {"text": "CHEM1008"}, {"text": "CHEM1010"}, {"text": "CHEM1020"}, {"text": "CHEM1030"}, {"text": "CHEM1050"}, {"text": "CHEM1055"}, {"text": "CHEM2110"}, {"text": "CHEM2111"}, {"text": "CHEM2112"}, {"text": "CHEM2118"}, {"text": "CHEM2150"}, {"text": "CHEM2151"}, {"text": "CHEM2210"}, {"text": "CHEM2218"}, {"text": "CHEM2250"}, {"text": "CHEM2310"}, {"text": "CHEM2311"}, {"text": "CHEM2350"}, {"text": "CHEM2410"}, {"text": "CHEM2411"}, {"text": "CHEM2418"}, {"text": "CHEM2450"}, {"text": "CHEM2558"}, {"text": "CHEM2578"}, {"text": "CHEM3010"}, {"text": "CHEM3120"}, {"text": "CHEM3220"}, {"text": "CHEM3320"}, {"text": "CHEM3420"}, {"text": "CHEM3550"}, {"text": "CHEM3555"}, {"text": "CHEM3568"}, {"text": "CHEM3588"}, {"text": "CHEM3610"}, {"text": "CHEM3918"}, {"text": "CHEM3928"}, {"text": "CHEM4110"}, {"text": "CHEM4120"}, {"text": "CHEM4130"}, {"text": "CHEM4140"}, {"text": "CHEM4150"}, {"text": "CHEM4155"}, {"text": "CHEM4210"}, {"text": "CHEM4220"}, {"text": "CHEM4230"}, {"text": "CHEM4240"}, {"text": "CHEM4250"}, {"text": "CHEM4255"}, {"text": "CHEM4310"}, {"text": "CHEM4320"}, {"text": "CHEM4330"}, {"text": "CHEM4340"}, {"text": "CHEM4350"}, {"text": "CHEM4355"}, {"text": "CHEM4430"}, {"text": "CHEM4550"}, {"text": "CHEM4555"}, {"text": "CHEM4620"}, {"text": "CHEM4640"}, {"text": "CHEM4680"}, {"text": "CHEM4688"}, {"text": "CHEM4689"}, {"text": "CHEM4690"}, {"text": "LANG1002"}, {"text": "LANG1003"}, {"text": "LANG1112"}, {"text": "LANG1113"}, {"text": "LANG1114"}, {"text": "LANG1115"}, {"text": "LANG1120"}, {"text": "LANG1121"}, {"text": "LANG1122"}, {"text": "LANG1123"}, {"text": "LANG1124"}, {"text": "LANG1125"}, {"text": "LANG1126"}, {"text": "LANG1127"}, {"text": "LANG1210"}, {"text": "LANG1220"}, {"text": "LANG1310"}, {"text": "LANG1320"}, {"text": "LANG1330"}, {"text": "LANG1410"}, {"text": "LANG1420"}, {"text": "LANG2010"}, {"text": "LANG2030"}, {"text": "LANG2070"}, {"text": "LANG2082"}, {"text": "LANG2083"}, {"text": "LANG2170"}, {"text": "LANG3010"}, {"text": "LANG3011"}, {"text": "LANG3012"}, {"text": "LANG3013"}, {"text": "LANG3014"}, {"text": "LANG3015"}, {"text": "LANG3016"}, {"text": "LANG3069"}, {"text": "LANG3070"}, {"text": "LANG3080"}, {"text": "LANG3081"}, {"text": "LANG4012"}, {"text": "LANG4013"}, {"text": "LANG4014"}, {"text": "LANG4015"}, {"text": "LANG4016"}, {"text": "LANG4017"}, {"text": "LANG4030"}, {"text": "LANG4031"}, {"text": "LANG4032"}, {"text": "LANG4033"}, {"text": "LANG4034"}, {"text": "LANG4070"}, {"text": "CIVL1010"}, {"text": "CIVL1020"}, {"text": "CIVL1030"}, {"text": "CIVL1100"}, {"text": "CIVL1110"}, {"text": "CIVL1130"}, {"text": "CIVL1140"}, {"text": "CIVL1160"}, {"text": "CIVL1170"}, {"text": "CIVL2010"}, {"text": "CIVL2020"}, {"text": "CIVL2110"}, {"text": "CIVL2120"}, {"text": "CIVL2150"}, {"text": "CIVL2160"}, {"text": "CIVL2170"}, {"text": "CIVL2410"}, {"text": "CIVL2510"}, {"text": "CIVL2810"}, {"text": "CIVL3010"}, {"text": "CIVL3020"}, {"text": "CIVL3210"}, {"text": "CIVL3220"}, {"text": "CIVL3310"}, {"text": "CIVL3320"}, {"text": "CIVL3420"}, {"text": "CIVL3510"}, {"text": "CIVL3520"}, {"text": "CIVL3530"}, {"text": "CIVL3610"}, {"text": "CIVL3620"}, {"text": "CIVL3720"}, {"text": "CIVL3730"}, {"text": "CIVL3740"}, {"text": "CIVL4100"}, {"text": "CIVL4230"}, {"text": "CIVL4250"}, {"text": "CIVL4260"}, {"text": "CIVL4270"}, {"text": "CIVL4320"}, {"text": "CIVL4330"}, {"text": "CIVL4340"}, {"text": "CIVL4350"}, {"text": "CIVL4370"}, {"text": "CIVL4380"}, {"text": "CIVL4430"}, {"text": "CIVL4440"}, {"text": "CIVL4450"}, {"text": "CIVL4460"}, {"text": "CIVL4470"}, {"text": "CIVL4520"}, {"text": "CIVL4540"}, {"text": "CIVL4620"}, {"text": "CIVL4700"}, {"text": "CIVL4750"}, {"text": "CIVL4760"}, {"text": "CIVL4810"}, {"text": "CIVL4900"}, {"text": "CIVL4910"}, {"text": "CIVL4920"}, {"text": "CIVL4950"}, {"text": "CIVL4990"}, {"text": "LIFS1010"}, {"text": "LIFS1020"}, {"text": "LIFS1030"}, {"text": "LIFS1070"}, {"text": "LIFS1080"}, {"text": "LIFS1090"}, {"text": "LIFS1901"}, {"text": "LIFS1902"}, {"text": "LIFS1903"}, {"text": "LIFS1904"}, {"text": "LIFS1930"}, {"text": "LIFS2010"}, {"text": "LIFS2011"}, {"text": "LIFS2040"}, {"text": "LIFS2060"}, {"text": "LIFS2070"}, {"text": "LIFS2080"}, {"text": "LIFS2210"}, {"text": "LIFS2220"}, {"text": "LIFS2240"}, {"text": "LIFS2280"}, {"text": "LIFS2720"}, {"text": "LIFS2820"}, {"text": "LIFS3002"}, {"text": "LIFS3010"}, {"text": "LIFS3020"}, {"text": "LIFS3030"}, {"text": "LIFS3040"}, {"text": "LIFS3060"}, {"text": "LIFS3070"}, {"text": "LIFS3110"}, {"text": "LIFS3120"}, {"text": "LIFS3130"}, {"text": "LIFS3140"}, {"text": "LIFS3150"}, {"text": "LIFS3160"}, {"text": "LIFS3210"}, {"text": "LIFS3220"}, {"text": "LIFS3240"}, {"text": "LIFS3260"}, {"text": "LIFS3330"}, {"text": "LIFS3510"}, {"text": "LIFS3520"}, {"text": "LIFS3530"}, {"text": "LIFS4060"}, {"text": "LIFS4090"}, {"text": "LIFS4140"}, {"text": "LIFS4150"}, {"text": "LIFS4170"}, {"text": "LIFS4190"}, {"text": "LIFS4200"}, {"text": "LIFS4360"}, {"text": "LIFS4370"}, {"text": "LIFS4380"}, {"text": "LIFS4540"}, {"text": "LIFS4550"}, {"text": "LIFS4580"}, {"text": "LIFS4620"}, {"text": "LIFS4630"}, {"text": "LIFS4760"}, {"text": "LIFS4800"}, {"text": "LIFS4820"}, {"text": "LIFS4910"}, {"text": "LIFS4950"}, {"text": "LIFS4960"}, {"text": "LIFS4961"}, {"text": "LIFS4963"}, {"text": "LIFS4970"}, {"text": "LIFS4971"}, {"text": "LIFS4972"}, {"text": "LIFS4973"}, {"text": "LIFS4980"}, {"text": "LIFS4981"}, {"text": "LIFS4982"}, {"text": "LIFS4983"}, {"text": "COMP1001"}, {"text": "COMP1002"}, {"text": "COMP1021"}, {"text": "COMP1022P"}, {"text": "COMP1022Q"}, {"text": "COMP1029A"}, {"text": "COMP1029C"}, {"text": "COMP1029J"}, {"text": "COMP1029P"}, {"text": "COMP1029V"}, {"text": "COMP1900"}, {"text": "COMP1941"}, {"text": "COMP1942"}, {"text": "COMP1991"}, {"text": "COMP1999"}, {"text": "COMP2011"}, {"text": "COMP2012"}, {"text": "COMP2012H"}, {"text": "COMP2021"}, {"text": "COMP2611"}, {"text": "COMP2711"}, {"text": "COMP2711H"}, {"text": "COMP2900"}, {"text": "COMP3021"}, {"text": "COMP3031"}, {"text": "COMP3071"}, {"text": "COMP3111"}, {"text": "COMP3111H"}, {"text": "COMP3211"}, {"text": "COMP3311"}, {"text": "COMP3511"}, {"text": "COMP3711"}, {"text": "COMP3711H"}, {"text": "COMP3721"}, {"text": "COMP3900"}, {"text": "COMP4021"}, {"text": "COMP4111"}, {"text": "COMP4211"}, {"text": "COMP4221"}, {"text": "COMP4311"}, {"text": "COMP4321"}, {"text": "COMP4331"}, {"text": "COMP4332"}, {"text": "COMP4411"}, {"text": "COMP4421"}, {"text": "COMP4431"}, {"text": "COMP4441"}, {"text": "COMP4451"}, {"text": "COMP4511"}, {"text": "COMP4521"}, {"text": "COMP4611"}, {"text": "COMP4621"}, {"text": "COMP4622"}, {"text": "COMP4631"}, {"text": "COMP4632"}, {"text": "COMP4641"}, {"text": "COMP4900"}, {"text": "COMP4901"}, {"text": "COMP4911"}, {"text": "COMP4971"}, {"text": "COMP4981"}, {"text": "COMP4981H"}, {"text": "COMP4982"}, {"text": "COMP4982H"}, {"text": "COMP4983"}, {"text": "COMP4983H"}, {"text": "COMP4984"}, {"text": "COMP4984H"}, {"text": "COMP4988"}, {"text": "COMP4989"}, {"text": "COMP4991"}, {"text": "COMP4992"}, {"text": "COMP4994"}, {"text": "COMP4995"}, {"text": "MARK1220"}, {"text": "MARK1230"}, {"text": "MARK1330"}, {"text": "MARK2120"}, {"text": "MARK3210"}, {"text": "MARK3220"}, {"text": "MARK3410"}, {"text": "MARK3420"}, {"text": "MARK3430"}, {"text": "MARK3450"}, {"text": "MARK3460"}, {"text": "MARK3470"}, {"text": "MARK3480"}, {"text": "MARK3510"}, {"text": "MARK4210"}, {"text": "MARK4290"}, {"text": "MARK4450"}, {"text": "MARK4980"}, {"text": "CPEG1971"}, {"text": "CPEG2930"}, {"text": "CPEG3930"}, {"text": "MATH1003"}, {"text": "MATH1012"}, {"text": "MATH1013"}, {"text": "MATH1014"}, {"text": "MATH1018"}, {"text": "MATH1020"}, {"text": "MATH1023"}, {"text": "MATH1024"}, {"text": "MATH1701"}, {"text": "MATH1702"}, {"text": "MATH1712"}, {"text": "MATH1713"}, {"text": "MATH2010"}, {"text": "MATH2011"}, {"text": "MATH2021"}, {"text": "MATH2023"}, {"text": "MATH2031"}, {"text": "MATH2033"}, {"text": "MATH2043"}, {"text": "MATH2111"}, {"text": "MATH2121"}, {"text": "MATH2131"}, {"text": "MATH2343"}, {"text": "MATH2350"}, {"text": "MATH2351"}, {"text": "MATH2352"}, {"text": "MATH2411"}, {"text": "MATH2421"}, {"text": "MATH2511"}, {"text": "MATH2721"}, {"text": "MATH2731"}, {"text": "MATH2741"}, {"text": "MATH3033"}, {"text": "MATH3043"}, {"text": "MATH3121"}, {"text": "MATH3131"}, {"text": "MATH3311"}, {"text": "MATH3312"}, {"text": "MATH3343"}, {"text": "MATH3423"}, {"text": "MATH3424"}, {"text": "MATH3425"}, {"text": "MATH3426"}, {"text": "MATH4023"}, {"text": "MATH4033"}, {"text": "MATH4051"}, {"text": "MATH4052"}, {"text": "MATH4061"}, {"text": "MATH4063"}, {"text": "MATH4141"}, {"text": "MATH4151"}, {"text": "MATH4221"}, {"text": "MATH4223"}, {"text": "MATH4225"}, {"text": "MATH4321"}, {"text": "MATH4326"}, {"text": "MATH4333"}, {"text": "MATH4335"}, {"text": "MATH4336"}, {"text": "MATH4351"}, {"text": "MATH4422"}, {"text": "MATH4423"}, {"text": "MATH4424"}, {"text": "MATH4425"}, {"text": "MATH4426"}, {"text": "MATH4427"}, {"text": "MATH4511"}, {"text": "MATH4512"}, {"text": "MATH4513"}, {"text": "MATH4821"}, {"text": "MATH4822"}, {"text": "MATH4823"}, {"text": "MATH4824"}, {"text": "MATH4825"}, {"text": "MATH4921"}, {"text": "MATH4981-4982"}, {"text": "MATH4990"}, {"text": "MATH4999"}, {"text": "ECON1503"}, {"text": "ECON2000"}, {"text": "ECON2103"}, {"text": "ECON2113"}, {"text": "ECON2123"}, {"text": "ECON2152"}, {"text": "ECON2174"}, {"text": "ECON2913"}, {"text": "ECON3014"}, {"text": "ECON3024"}, {"text": "ECON3113"}, {"text": "ECON3123"}, {"text": "ECON3133"}, {"text": "ECON3143"}, {"text": "ECON3334"}, {"text": "ECON4114"}, {"text": "ECON4204"}, {"text": "ECON4234"}, {"text": "ECON4244"}, {"text": "ECON4254"}, {"text": "ECON4284"}, {"text": "ECON4304"}, {"text": "ECON4334"}, {"text": "ECON4354"}, {"text": "ECON4364"}, {"text": "ECON4374"}, {"text": "ECON4384"}, {"text": "ECON4434"}, {"text": "ECON4474"}, {"text": "ECON4584"}, {"text": "ECON4670"}, {"text": "ECON4959"}, {"text": "ECON4999"}, {"text": "MECH1020"}, {"text": "MECH1030"}, {"text": "MECH1070"}, {"text": "MECH1101"}, {"text": "MECH1102"}, {"text": "MECH1103"}, {"text": "MECH1901"}, {"text": "MECH1902"}, {"text": "MECH1905"}, {"text": "MECH1906"}, {"text": "MECH1907"}, {"text": "MECH1990"}, {"text": "MECH2020"}, {"text": "MECH2030"}, {"text": "MECH2040"}, {"text": "MECH2210"}, {"text": "MECH2310"}, {"text": "MECH2410"}, {"text": "MECH2520"}, {"text": "MECH2521"}, {"text": "MECH2800"}, {"text": "MECH2907"}, {"text": "MECH3020"}, {"text": "MECH3030"}, {"text": "MECH3300"}, {"text": "MECH3310"}, {"text": "MECH3420"}, {"text": "MECH3510"}, {"text": "MECH3520"}, {"text": "MECH3610"}, {"text": "MECH3620"}, {"text": "MECH3630"}, {"text": "MECH3640"}, {"text": "MECH3650"}, {"text": "MECH3660"}, {"text": "MECH3670"}, {"text": "MECH3680"}, {"text": "MECH3690"}, {"text": "MECH3710"}, {"text": "MECH3830"}, {"text": "MECH3840"}, {"text": "MECH3901"}, {"text": "MECH3902"}, {"text": "MECH4000"}, {"text": "MECH4010"}, {"text": "MECH4340"}, {"text": "MECH4350"}, {"text": "MECH4360"}, {"text": "MECH4430"}, {"text": "MECH4450"}, {"text": "MECH4710"}, {"text": "MECH4720"}, {"text": "MECH4740"}, {"text": "MECH4750"}, {"text": "MECH4820"}, {"text": "MECH4900"}, {"text": "MECH4910"}, {"text": "MECH4950"}, {"text": "MECH4995"}, {"text": "ELEC1010"}, {"text": "ELEC1020"}, {"text": "ELEC1100"}, {"text": "ELEC1200"}, {"text": "ELEC1970"}, {"text": "ELEC1980"}, {"text": "ELEC1990"}, {"text": "ELEC1991"}, {"text": "ELEC2100"}, {"text": "ELEC2100H"}, {"text": "ELEC2200"}, {"text": "ELEC2300"}, {"text": "ELEC2400"}, {"text": "ELEC2410"}, {"text": "ELEC2420"}, {"text": "ELEC2600"}, {"text": "ELEC2600H"}, {"text": "ELEC2910"}, {"text": "ELEC2920"}, {"text": "ELEC3100"}, {"text": "ELEC3200"}, {"text": "ELEC3300"}, {"text": "ELEC3400"}, {"text": "ELEC3500"}, {"text": "ELEC3600"}, {"text": "ELEC3710"}, {"text": "ELEC3910"}, {"text": "ELEC3920"}, {"text": "ELEC4010"}, {"text": "ELEC4110"}, {"text": "ELEC4120"}, {"text": "ELEC4130"}, {"text": "ELEC4140"}, {"text": "ELEC4150"}, {"text": "ELEC4160"}, {"text": "ELEC4170"}, {"text": "ELEC4220"}, {"text": "ELEC4310"}, {"text": "ELEC4320"}, {"text": "ELEC4410"}, {"text": "ELEC4420"}, {"text": "ELEC4430"}, {"text": "ELEC4510"}, {"text": "ELEC4520"}, {"text": "ELEC4610"}, {"text": "ELEC4620"}, {"text": "ELEC4630"}, {"text": "ELEC4640"}, {"text": "ELEC4810"}, {"text": "ELEC4820"}, {"text": "ELEC4900"}, {"text": "ELEC4901"}, {"text": "ELEC4903"}, {"text": "ELEC4904"}, {"text": "ELEC4907"}, {"text": "ELEC4908"}, {"text": "ELEC4909"}, {"text": "ELEC4918"}, {"text": "ELEC4919"}, {"text": "ELEC4930"}, {"text": "ELEC4940"}, {"text": "ELEC4950"}, {"text": "MGMT1110"}, {"text": "MGMT1120"}, {"text": "MGMT1130"}, {"text": "MGMT2110"}, {"text": "MGMT2120"}, {"text": "MGMT2130"}, {"text": "MGMT3110"}, {"text": "MGMT3120"}, {"text": "MGMT3130"}, {"text": "MGMT3140"}, {"text": "MGMT3160"}, {"text": "MGMT3170"}, {"text": "MGMT4000"}, {"text": "MGMT4010"}, {"text": "MGMT4110"}, {"text": "MGMT4210"}, {"text": "MGMT4220"}, {"text": "MGMT4230"}, {"text": "MGMT4240"}, {"text": "MGMT4250"}, {"text": "ENGG1010"}, {"text": "ENGG1110"}, {"text": "ENGG1130"}, {"text": "ENGG1150"}, {"text": "ENGG1200"}, {"text": "ENGG1900"}, {"text": "ENGG2010"}, {"text": "ENGG2900"}, {"text": "ENGG2990"}, {"text": "ENGG3000"}, {"text": "ENGG4950"}, {"text": "PHYS1001"}, {"text": "PHYS1002"}, {"text": "PHYS1003"}, {"text": "PHYS1004"}, {"text": "PHYS1005"}, {"text": "PHYS1006"}, {"text": "PHYS1111"}, {"text": "PHYS1112"}, {"text": "PHYS1113"}, {"text": "PHYS1114"}, {"text": "PHYS1115"}, {"text": "PHYS1312"}, {"text": "PHYS1314"}, {"text": "PHYS1411"}, {"text": "PHYS1413"}, {"text": "PHYS1431"}, {"text": "PHYS1433"}, {"text": "PHYS2021"}, {"text": "PHYS2022"}, {"text": "PHYS2023"}, {"text": "PHYS2080"}, {"text": "PHYS2090"}, {"text": "PHYS2124"}, {"text": "PHYS2411"}, {"text": "PHYS2421"}, {"text": "PHYS3031"}, {"text": "PHYS3032"}, {"text": "PHYS3033"}, {"text": "PHYS3034"}, {"text": "PHYS3036"}, {"text": "PHYS3037"}, {"text": "PHYS3038"}, {"text": "PHYS3040"}, {"text": "PHYS3041"}, {"text": "PHYS3053"}, {"text": "PHYS3071"}, {"text": "PHYS3090"}, {"text": "PHYS3142"}, {"text": "PHYS3152"}, {"text": "PHYS3153"}, {"text": "PHYS3411"}, {"text": "PHYS3480"}, {"text": "PHYS4050"}, {"text": "PHYS4051"}, {"text": "PHYS4052"}, {"text": "PHYS4053"}, {"text": "PHYS4054"}, {"text": "PHYS4055"}, {"text": "PHYS4057"}, {"text": "PHYS4058"}, {"text": "PHYS4059"}, {"text": "PHYS4060"}, {"text": "PHYS4071"}, {"text": "PHYS4080"}, {"text": "PHYS4090"}, {"text": "PHYS4191"}, {"text": "PHYS4291"}, {"text": "PHYS4411"}, {"text": "PHYS4498"}, {"text": "ENTR3010"}, {"text": "ENTR3020"}, {"text": "RMBI1010"}, {"text": "RMBI1020"}, {"text": "RMBI3110"}, {"text": "RMBI4000"}, {"text": "RMBI4110"}, {"text": "RMBI4210"}, {"text": "RMBI4220"}, {"text": "RMBI4310"}, {"text": "RMBI4420"}, {"text": "RMBI4980"}, {"text": "RMBI4990"}, {"text": "ENVR1030"}, {"text": "ENVR1040"}, {"text": "ENVR1050"}, {"text": "ENVR1811"}, {"text": "ENVR2001"}, {"text": "ENVR2010"}, {"text": "ENVR2020"}, {"text": "ENVR2030"}, {"text": "ENVR2310"}, {"text": "ENVR2811"}, {"text": "ENVR2900"}, {"text": "ENVR3001"}, {"text": "ENVR3002"}, {"text": "ENVR3003"}, {"text": "ENVR3010"}, {"text": "ENVR3110"}, {"text": "ENVR3210"}, {"text": "ENVR3220"}, {"text": "ENVR3310"}, {"text": "ENVR3410"}, {"text": "ENVR3420"}, {"text": "ENVR4000"}, {"text": "ENVR4001"}, {"text": "ENVR4010"}, {"text": "ENVR4220"}, {"text": "ENVR4310"}, {"text": "ENVR4320"}, {"text": "ENVR4330"}, {"text": "ENVR4800"}, {"text": "ENVR4980"}, {"text": "ENVR4990"}, {"text": "SBMT1100"}, {"text": "SBMT1111"}, {"text": "SBMT2010"}, {"text": "SBMT2100"}, {"text": "SBMT2110"}, {"text": "SBMT2200"}, {"text": "SBMT2900"}, {"text": "SBMT3100"}, {"text": "SBMT3200"}, {"text": "SBMT3210"}, {"text": "SBMT3300"}, {"text": "ENVS2001"}, {"text": "ENVS2002"}, {"text": "ENVS3001"}, {"text": "ENVS3002"}, {"text": "ENVS3003"}, {"text": "ENVS4001"}, {"text": "ENVS4301"}, {"text": "ENVS4905"}, {"text": "ENVS4964"}, {"text": "ENVS4974"}, {"text": "ENVS4984"}, {"text": "SCED3130"}, {"text": "SCED3140"}, {"text": "SCED4110"}, {"text": "SCED4140"}, {"text": "SCED4150"}, {"text": "SCED4220"}, {"text": "SCED4260"}, {"text": "SCED4320"}, {"text": "SCED4420"}, {"text": "SCED4570"}, {"text": "SCED4580"}, {"text": "SCED4590"}, {"text": "SCED4600"}, {"text": "SCED4610"}, {"text": "SCED4620"}, {"text": "SCED4630"}, {"text": "SCED4640"}, {"text": "FINA1203"}, {"text": "FINA1303"}, {"text": "FINA2102"}, {"text": "FINA2203"}, {"text": "FINA2303"}, {"text": "FINA3104"}, {"text": "FINA3204"}, {"text": "FINA3304"}, {"text": "FINA3404"}, {"text": "FINA3504"}, {"text": "FINA3604"}, {"text": "FINA3810"}, {"text": "FINA3820"}, {"text": "FINA3830"}, {"text": "FINA4104"}, {"text": "FINA4204"}, {"text": "FINA4304"}, {"text": "FINA4404"}, {"text": "FINA4414"}, {"text": "FINA4502"}, {"text": "FINA4602"}, {"text": "FINA4713"}, {"text": "FINA4723"}, {"text": "FINA4810"}, {"text": "FINA4814"}, {"text": "FINA4919"}, {"text": "FINA4920"}, {"text": "FINA4929"}, {"text": "SCIE1000"}, {"text": "SCIE1010"}, {"text": "SCIE1030"}, {"text": "SCIE1050"}, {"text": "SCIE1080"}, {"text": "SCIE1090"}, {"text": "SCIE1100"}, {"text": "SCIE1110"}, {"text": "SCIE1120"}, {"text": "SCIE1500"}, {"text": "SCIE2000"}, {"text": "SCIE2500"}, {"text": "SCIE3100"}, {"text": "SCIE3500"}, {"text": "SCIE3900"}, {"text": "SCIE4500"}, {"text": "SCIE4850"}, {"text": "SCIE4860"}, {"text": "FYTG4001"}, {"text": "SHSS1010"}, {"text": "SHSS1020"}, {"text": "SHSS3001"}, {"text": "SHSS3010"}, {"text": "SHSS4520"}, {"text": "SHSS4991"}, {"text": "SHSS4992"}, {"text": "SHSS4993"}, {"text": "GBUS1000"}, {"text": "GBUS2010"}, {"text": "GBUS2020"}, {"text": "GBUS3010"}, {"text": "GBUS3020"}, {"text": "GBUS3030"}, {"text": "GBUS3040"}, {"text": "GBUS3050"}, {"text": "GBUS4000"}, {"text": "GBUS4910"}, {"text": "GBUS4930"}, {"text": "GBUS4940"}, {"text": "SISP1101"}, {"text": "SISP1102"}, {"text": "SISP1103"}, {"text": "SISP1104"}, {"text": "SISP1105"}, {"text": "SISP1301"}, {"text": "SISP1302"}, {"text": "SISP1303"}, {"text": "SISP1304"}, {"text": "SISP1305"}, {"text": "SISP1306"}, {"text": "SISP1307"}, {"text": "SISP1308"}, {"text": "SISP1309"}, {"text": "SISP1310"}, {"text": "SISP1311"}, {"text": "SISP1501"}, {"text": "SISP1502"}, {"text": "SISP1503"}, {"text": "SISP1504"}, {"text": "SISP1505"}, {"text": "SISP1506"}, {"text": "SISP1507"}, {"text": "SISP1508"}, {"text": "SISP1509"}, {"text": "SISP1510"}, {"text": "SISP1701"}, {"text": "SISP1702"}, {"text": "SISP1703"}, {"text": "SISP1704"}, {"text": "SISP1705"}, {"text": "SISP1706"}, {"text": "SISP1707"}, {"text": "SISP1708"}, {"text": "SISP1709"}, {"text": "SISP1710"}, {"text": "SISP1901"}, {"text": "GNED2000"}, {"text": "GNED2510"}, {"text": "GNED2620"}, {"text": "GNED2710"}, {"text": "SOSC1000-1010"}, {"text": "SOSC1100"}, {"text": "SOSC1110"}, {"text": "SOSC1120"}, {"text": "SOSC1130"}, {"text": "SOSC1150"}, {"text": "SOSC1160"}, {"text": "SOSC1170"}, {"text": "SOSC1190"}, {"text": "SOSC1270"}, {"text": "SOSC1300"}, {"text": "SOSC1340"}, {"text": "SOSC1350"}, {"text": "SOSC1420"}, {"text": "SOSC1440"}, {"text": "SOSC1460"}, {"text": "SOSC1620"}, {"text": "SOSC1661"}, {"text": "SOSC1662"}, {"text": "SOSC1663"}, {"text": "SOSC1780"}, {"text": "SOSC1800"}, {"text": "SOSC1810"}, {"text": "SOSC1840"}, {"text": "SOSC1850"}, {"text": "SOSC1860"}, {"text": "SOSC1960"}, {"text": "SOSC1980"}, {"text": "SOSC2000"}, {"text": "SOSC2010"}, {"text": "SOSC2120"}, {"text": "SOSC2130"}, {"text": "SOSC2140"}, {"text": "SOSC2170"}, {"text": "SOSC2210"}, {"text": "SOSC2220"}, {"text": "SOSC2230"}, {"text": "SOSC2280"}, {"text": "SOSC2290"}, {"text": "SOSC2300"}, {"text": "SOSC2310"}, {"text": "SOSC2630"}, {"text": "SOSC2640"}, {"text": "SOSC2740"}, {"text": "SOSC2780"}, {"text": "SOSC2970"}, {"text": "SOSC2980"}, {"text": "SOSC3000"}, {"text": "SOSC3010"}, {"text": "SOSC3110"}, {"text": "SOSC3120"}, {"text": "SOSC3130"}, {"text": "SOSC3150"}, {"text": "SOSC3160"}, {"text": "SOSC3170"}, {"text": "SOSC3180"}, {"text": "SOSC3240"}, {"text": "SOSC3330"}, {"text": "SOSC3410"}, {"text": "SOSC3520"}, {"text": "SOSC3620"}, {"text": "SOSC3630"}, {"text": "SOSC3880"}, {"text": "SOSC4000"}, {"text": "SOSC4260"}, {"text": "SOSC4270"}, {"text": "SOSC4280"}, {"text": "SOSC4290"}, {"text": "SOSC4600"}, {"text": "SOSC4610"}, {"text": "HART1001"}, {"text": "HART1011"}, {"text": "HART1012"}, {"text": "HART1013"}, {"text": "HART1014"}, {"text": "HART1015"}, {"text": "HART1016"}, {"text": "HART1017"}, {"text": "HART1018"}, {"text": "HART1019"}, {"text": "HART1020"}, {"text": "HART1021"}, {"text": "HART1022"}, {"text": "HART1023"}, {"text": "HART1024"}, {"text": "HART1025"}, {"text": "HART1026"}, {"text": "HART1027"}, {"text": "HART1028"}, {"text": "HART1029"}, {"text": "HART1030"}, {"text": "HART1031"}, {"text": "HART1032"}, {"text": "HART1034"}, {"text": "HART1035"}, {"text": "HART1036"}, {"text": "HART1037"}, {"text": "HART1038"}, {"text": "HART1039"}, {"text": "HART1040"}, {"text": "HART1041"}, {"text": "TEMG1010"}, {"text": "TEMG4000"}, {"text": "TEMG4600"}, {"text": "TEMG4950"}, {"text": "HLTH1010"}, {"text": "UROP1000"}, {"text": "UROP1100"}, {"text": "UROP2100"}, {"text": "UROP3100"}, {"text": "UROP4100"}, {"text": "HUMA1000"}, {"text": "HUMA1001"}, {"text": "HUMA1009"}, {"text": "HUMA1010"}, {"text": "HUMA1012"}, {"text": "HUMA1020"}, {"text": "HUMA1030"}, {"text": "HUMA1060"}, {"text": "HUMA1100"}, {"text": "HUMA1101"}, {"text": "HUMA1102"}, {"text": "HUMA1103"}, {"text": "HUMA1104"}, {"text": "HUMA1105"}, {"text": "HUMA1106"}, {"text": "HUMA1200"}, {"text": "HUMA1210"}, {"text": "HUMA1220"}, {"text": "HUMA1231"}, {"text": "HUMA1250"}, {"text": "HUMA1300"}, {"text": "HUMA1410"}, {"text": "HUMA1430"}, {"text": "HUMA1440"}, {"text": "HUMA1450"}, {"text": "HUMA1520"}, {"text": "HUMA1550"}, {"text": "HUMA1620"}, {"text": "HUMA1621"}, {"text": "HUMA1630"}, {"text": "HUMA1631"}, {"text": "HUMA1639"}, {"text": "HUMA1650"}, {"text": "HUMA1660"}, {"text": "HUMA1680"}, {"text": "HUMA1710"}, {"text": "HUMA1720"}, {"text": "HUMA1810"}, {"text": "HUMA1811"}, {"text": "HUMA1910"}, {"text": "HUMA1920"}, {"text": "HUMA2000-2001"}, {"text": "HUMA2010"}, {"text": "HUMA2012"}, {"text": "HUMA2021"}, {"text": "HUMA2031"}, {"text": "HUMA2050"}, {"text": "HUMA2103"}, {"text": "HUMA2104"}, {"text": "HUMA2105"}, {"text": "HUMA2106"}, {"text": "HUMA2200"}, {"text": "HUMA2210"}, {"text": "HUMA2220"}, {"text": "HUMA2230"}, {"text": "HUMA2240"}, {"text": "HUMA2250"}, {"text": "HUMA2260"}, {"text": "HUMA2270"}, {"text": "HUMA2280"}, {"text": "HUMA2300"}, {"text": "HUMA2310"}, {"text": "HUMA2320"}, {"text": "HUMA2400"}, {"text": "HUMA2420"}, {"text": "HUMA2421"}, {"text": "HUMA2430"}, {"text": "HUMA2440"}, {"text": "HUMA2470"}, {"text": "HUMA2480"}, {"text": "HUMA2481"}, {"text": "HUMA2570"}, {"text": "HUMA2589"}, {"text": "HUMA2590"}, {"text": "HUMA2620"}, {"text": "HUMA2621"}, {"text": "HUMA2622"}, {"text": "HUMA2623"}, {"text": "HUMA2630"}, {"text": "HUMA2632"}, {"text": "HUMA2633"}, {"text": "HUMA2635"}, {"text": "HUMA2638"}, {"text": "HUMA2640"}, {"text": "HUMA2660"}, {"text": "HUMA2661"}, {"text": "HUMA2670"}, {"text": "HUMA2680"}, {"text": "HUMA2811"}, {"text": "HUMA2820"}, {"text": "HUMA2830"}, {"text": "HUMA2840"}, {"text": "HUMA2911"}, {"text": "HUMA2921"}, {"text": "HUMA3000"}, {"text": "HUMA3030"}, {"text": "HUMA3040"}, {"text": "HUMA3101"}, {"text": "HUMA3102"}, {"text": "HUMA3103"}, {"text": "HUMA3200"}, {"text": "HUMA3201"}, {"text": "HUMA3210"}, {"text": "HUMA3220"}, {"text": "HUMA3240"}, {"text": "HUMA3410"}, {"text": "HUMA3420"}, {"text": "HUMA3421"}, {"text": "HUMA3430"}, {"text": "HUMA3440"}, {"text": "HUMA3450"}, {"text": "HUMA3530"}, {"text": "HUMA3550"}, {"text": "HUMA3610"}, {"text": "HUMA3620"}, {"text": "HUMA3630"}, {"text": "HUMA3660"}, {"text": "HUMA3680"}, {"text": "HUMA3800"}, {"text": "HUMA3810"}, {"text": "HUMA3821"}, {"text": "HUMA3900"}, {"text": "HUMA4000"}, {"text": "HUMA4010"}, {"text": "HUMA4020"}, {"text": "HUMA4200"}, {"text": "HUMA4220"}, {"text": "HUMA4250"}, {"text": "HUMA4520"}, {"text": "HUMA4610"}, {"text": "HUMA4700"}, {"text": "HUMA4840"}, {"text": "WBBA2010"}, {"text": "WBBA2020"}, {"text": "IELM1010"}, {"text": "IELM1020"}, {"text": "IELM1990"}, {"text": "IELM2010"}, {"text": "IELM2100"}, {"text": "IELM2145"}, {"text": "IELM2150"}, {"text": "IELM2200"}, {"text": "IELM2410"}, {"text": "IELM2510"}, {"text": "IELM3010"}, {"text": "IELM3020"}, {"text": "IELM3130"}, {"text": "IELM3150"}, {"text": "IELM3230"}, {"text": "IELM3250"}, {"text": "IELM3270"}, {"text": "IELM3300"}, {"text": "IELM3330"}, {"text": "IELM3410"}, {"text": "IELM3450"}, {"text": "IELM3901"}, {"text": "IELM4100"}, {"text": "IELM4110"}, {"text": "IELM4130"}, {"text": "IELM4170"}, {"text": "IELM4180"}, {"text": "IELM4200"}, {"text": "IELM4320"}, {"text": "IELM4410"}, {"text": "IELM4650"}, {"text": "IELM4900"}, {"text": "IELM4901"}, {"text": "IELM4930"}, {"text": "IELM4950"}, {"text": "IELM4990"}]';
jQuery(function() {
	function fill(item) {
		$('input#suggestBox').val(item.text);
		$('input#suggestBox').trigger('input');
		$('input#suggestBox').focus();
	}
	$('input#suggestBox').jsonSuggest({
		data: courses,
		maxResults: 20,
		onSelect: fill
	});
});