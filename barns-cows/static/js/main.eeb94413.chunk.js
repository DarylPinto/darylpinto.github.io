(window["webpackJsonpbarns-and-cows"]=window["webpackJsonpbarns-and-cows"]||[]).push([[0],{34:function(e,i,s){e.exports=s(64)},53:function(e,i,s){},54:function(e,i,s){},55:function(e,i,s){},56:function(e,i,s){},57:function(e,i,s){},58:function(e,i,s){},59:function(e,i,s){},60:function(e,i,s){},61:function(e,i,s){},62:function(e,i,s){},63:function(e,i,s){},64:function(e,i,s){"use strict";s.r(i);var d=s(0),t=s.n(d),n=s(17),a=s.n(n),r=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(e,i){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var s=e.installing;null!=s&&(s.onstatechange=function(){"installed"===s.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),i&&i.onUpdate&&i.onUpdate(e)):(console.log("Content is cached for offline use."),i&&i.onSuccess&&i.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var c=s(3),l=s(4),z=s(10),u=JSON.parse(window.localStorage.getItem("state")),f=Object(z.b)({slice:"player",initialState:u&&u.player?u.player:{completedLevels:[],hasCompletedTutorial:!0},reducers:{completeTutorial:function(e){e.hasCompletedTutorial=!0},completeLevel:function(e,i){e.completedLevels.push(i.payload.levelId)}}}),E=(f.actions,f.reducer),m="COW",v=JSON.parse(window.localStorage.getItem("state")),M={currentGameMode:"STANDARD"},O=Object(z.b)({slice:"game",initialState:v&&v.game?v.game:M,reducers:{setMode:function(e,i){e.currentGameMode=i.payload.gameMode}}}),y=(O.actions,O.reducer),S=s(29),p=s.n(S),C=function(e,i,s){var d=e.find(function(e){return e.x===i&&e.y===s});return d||(d={x:-500,y:-500,type:"GRASS",choice:null}),d},h=function(e,i){return[C(e,i.x-1,i.y-1),C(e,i.x,i.y-1),C(e,i.x+1,i.y-1),C(e,i.x-1,i.y),C(e,i.x+1,i.y),C(e,i.x-1,i.y+1),C(e,i.x,i.y+1),C(e,i.x+1,i.y+1)].map(function(e){return e.type}).includes(m)},N=function(e,i){return[C(e,i.x,i.y+1),C(e,i.x+1,i.y),C(e,i.x,i.y-1),C(e,i.x-1,i.y)].filter(function(e){return e.x>-500&&"GRASS"===e.type})},A=function(e,i){for(var s=p()(i),d=[],t=0;t<e;t++){for(var n=[],a=0;a<e;a++){var r={x:a,y:t,type:"GRASS",choice:null};n.push(r)}d.unshift(n)}for(var o,c=d.flat(),l=0;l<e;l++)for(var z=0;z<e;z++){var u=d[l][z];s()>.55&&!h(c,u)&&(u.type=m)}c=d.flat();for(var f=0;f<e;f++)for(var E=0;E<e;E++){var v=d[f][E];if(v.type===m){var M=N(c,v);if(M.length>0){var O=(o=M)[Math.floor(s()*o.length)];O.type="BARN",O.choice="BARN"}else v.type="GRASS"}}return d},I=[{id:1,seed:"XMYJISU7V",size:4},{id:2,seed:"ZVAQWGJQ1",size:4},{id:3,seed:"KMQWLYMQA",size:4},{id:4,seed:"408YV1E6R",size:5},{id:5,seed:"MXTJMTM66",size:5},{id:6,seed:"OPJZ1D0YR",size:5},{id:7,seed:"P5CME1VSC",size:5},{id:8,seed:"PSIANH5IJ",size:5},{id:9,seed:"E66YF5B3A",size:5},{id:10,seed:"280WDV8JT",size:5},{id:11,seed:"39Z1P16ED",size:5},{id:12,seed:"EEGS1QE51",size:5},{id:13,seed:"DJYZX0D5Y",size:5},{id:14,seed:"MDKZ3394P",size:5},{id:15,seed:"3KNBVWBMF",size:5},{id:16,seed:"GIJH8COWA",size:5},{id:17,seed:"IX78F82E5",size:5},{id:18,seed:"0XFKMJ9B7",size:5},{id:19,seed:"VW21LJHQO",size:6},{id:20,seed:"AM9JGC9VK",size:6},{id:21,seed:"HZ03DDUVR",size:6},{id:22,seed:"GR5IZ7O0K",size:6},{id:23,seed:"1U5GYCF34",size:6},{id:24,seed:"8I3OAHSEO",size:6},{id:25,seed:"6IBF804GU",size:6},{id:26,seed:"OOTAKM8PQ",size:6},{id:27,seed:"MVDHX53CW",size:6},{id:28,seed:"S20C5TD9Q",size:6},{id:29,seed:"S7NWIADEP",size:6},{id:30,seed:"EMKCW4A6E",size:6},{id:31,seed:"BEUFJQ7P1",size:6},{id:32,seed:"N66YZICC0",size:6},{id:33,seed:"XSTINONGM",size:6},{id:34,seed:"BCPTZHJST",size:6},{id:35,seed:"YOJ99VWAB",size:6},{id:36,seed:"L6AKOWO4E",size:6},{id:37,seed:"P18OBEPIZ",size:6},{id:38,seed:"2UCQ4KF3Q",size:7},{id:39,seed:"CV2E225EJ",size:7},{id:40,seed:"6IPMJ7FO0",size:7},{id:41,seed:"AH37ZBTVC",size:7},{id:42,seed:"BFSWWVI13",size:7},{id:43,seed:"4WAMFXV5D",size:7},{id:44,seed:"2SKZQ4JBM",size:7},{id:45,seed:"AQTAWIN3K",size:7},{id:46,seed:"YOW2DSL3Y",size:7},{id:47,seed:"0YJKIH124",size:7},{id:48,seed:"88AWPJDF4",size:7},{id:49,seed:"23FPECLQ6",size:7},{id:50,seed:"WF2GYRHB3",size:7},{id:51,seed:"DTFGEQVT2",size:7},{id:52,seed:"BNVQ6897D",size:7},{id:53,seed:"NZ5X1MJLV",size:7},{id:54,seed:"0VUHXBGB6",size:7},{id:55,seed:"SMJOQD2WW",size:7},{id:56,seed:"3JPJ1INTB",size:7},{id:57,seed:"X0XKH17MO",size:8},{id:58,seed:"CIRTUYHTZ",size:8},{id:59,seed:"6RX3S3B01",size:8},{id:60,seed:"Q5SJ3SNF5",size:8},{id:61,seed:"L1GFN9P43",size:8},{id:62,seed:"W81RP73LP",size:8},{id:63,seed:"CZ7R0CVKL",size:8},{id:64,seed:"1KJMZJTNK",size:8},{id:65,seed:"JX42VO7BL",size:8},{id:66,seed:"EDT92WG5G",size:8},{id:67,seed:"8WLUI66CF",size:8},{id:68,seed:"UZM3TVEQ8",size:8},{id:69,seed:"P4AJTFRV3",size:8},{id:70,seed:"WC6SB8WNP",size:8},{id:71,seed:"3KK1MGR24",size:8},{id:72,seed:"8ZZ48SWQS",size:8},{id:73,seed:"FMT5WSDJD",size:8},{id:74,seed:"SIDR3J3IS",size:8},{id:75,seed:"YO98OB9MW",size:8},{id:76,seed:"0LMLIE73H",size:9},{id:77,seed:"X362GIKXY",size:9},{id:78,seed:"URNCMFRFM",size:9},{id:79,seed:"U6DKQF61T",size:9},{id:80,seed:"9OUXV62AZ",size:9},{id:81,seed:"9AROY6OMK",size:9},{id:82,seed:"TNHFB7N4E",size:9},{id:83,seed:"4S2LN3LLA",size:9},{id:84,seed:"1PTXM250H",size:9},{id:85,seed:"9FEQTAWU8",size:9},{id:86,seed:"JAPP8MUJS",size:9},{id:87,seed:"MEVQHK485",size:9},{id:88,seed:"UEIB5REQZ",size:9},{id:89,seed:"OMPN966M2",size:9},{id:90,seed:"2H3K4G8D3",size:9},{id:91,seed:"IHK8NRMUW",size:9},{id:92,seed:"V9AF6ZFME",size:9},{id:93,seed:"LUSD9OFYR",size:9},{id:94,seed:"1YOWERLD7",size:9},{id:95,seed:"QBU1X9SFM",size:10},{id:96,seed:"WXFYW2M0H",size:10},{id:97,seed:"9FCY33KW3",size:10},{id:98,seed:"IAI7A8ZZ9",size:10},{id:99,seed:"8RX39EBY4",size:10},{id:100,seed:"E671DW8FE",size:10},{id:101,seed:"X73KXJ28L",size:10},{id:102,seed:"0LW1SIWOQ",size:10},{id:103,seed:"UQVQKU9XE",size:10},{id:104,seed:"68RTGG6M3",size:10},{id:105,seed:"ZSN3U47NZ",size:10},{id:106,seed:"2JIRO73NW",size:10},{id:107,seed:"SEVCWMXL2",size:10},{id:108,seed:"RE8086HPB",size:10},{id:109,seed:"K76TUTELD",size:10},{id:110,seed:"XK7YMA2SW",size:10},{id:111,seed:"NLWL7Q8HB",size:10},{id:112,seed:"SCXHEARLP",size:10},{id:113,seed:"PIWWCRR4B",size:10},{id:114,seed:"K8EYANSC4",size:11},{id:115,seed:"SKYJD6ZF1",size:11},{id:116,seed:"H8C3VII9U",size:11},{id:117,seed:"WCIN4J2VL",size:11},{id:118,seed:"XUNM6V3OJ",size:11},{id:119,seed:"Q9XG2IYC8",size:11},{id:120,seed:"8GHT5KYP2",size:11},{id:121,seed:"7CG03BPNQ",size:11},{id:122,seed:"O2D9ZAA0L",size:11},{id:123,seed:"G2E56MO9K",size:11},{id:124,seed:"LRHITE4GX",size:11},{id:125,seed:"V3LD9LPVW",size:11},{id:126,seed:"GS5XEZOD3",size:11},{id:127,seed:"98SREXWHM",size:11},{id:128,seed:"HB9LJ67LQ",size:11},{id:129,seed:"P8SV1DF3D",size:11},{id:130,seed:"QBEFM3A6V",size:11},{id:131,seed:"TKGIXY1E5",size:11},{id:132,seed:"IMYLD4B7O",size:11},{id:133,seed:"7S7W20YWZ",size:12},{id:134,seed:"34IVQQY0U",size:12},{id:135,seed:"BMXJ4QNY9",size:12},{id:136,seed:"VLI2RKVD7",size:12},{id:137,seed:"XY6PF60UC",size:12},{id:138,seed:"ZWW8WIFXG",size:12},{id:139,seed:"JU2SLV1W4",size:12},{id:140,seed:"PYLRYTCYZ",size:12},{id:141,seed:"BI9BBQ1AZ",size:12},{id:142,seed:"DD29THDQM",size:12},{id:143,seed:"K7FIBZXN2",size:12},{id:144,seed:"QYA9YW9QF",size:12},{id:145,seed:"M7DA0POBQ",size:12},{id:146,seed:"DU9V11GFQ",size:12},{id:147,seed:"512RW4UNA",size:12},{id:148,seed:"IU9I43YPM",size:12},{id:149,seed:"2GS7SCLTA",size:12},{id:150,seed:"JLRHG5HLY",size:12},{id:151,seed:"GMXOE12ET",size:12},{id:152,seed:"EMQG1E44X",size:13},{id:153,seed:"0XGMC604K",size:13},{id:154,seed:"SBAYXZGCI",size:13},{id:155,seed:"PC21HRJJD",size:13},{id:156,seed:"GP8YZHI0S",size:13},{id:157,seed:"CBINMP85X",size:13},{id:158,seed:"408Z8GSH9",size:13},{id:159,seed:"Z5X6JIH55",size:13},{id:160,seed:"8DV0VEBS7",size:13},{id:161,seed:"2JZI3EC9J",size:13},{id:162,seed:"LTDCKPI1I",size:13},{id:163,seed:"5XPT86KGK",size:13},{id:164,seed:"R01Q5MOHP",size:13},{id:165,seed:"RLDHA29NY",size:13},{id:166,seed:"Z7D35U647",size:13},{id:167,seed:"CJIID0KVV",size:13},{id:168,seed:"LQG5RE890",size:13},{id:169,seed:"F21Z7DOVY",size:13},{id:170,seed:"8UF23ZCR8",size:13},{id:171,seed:"GYX7XI52S",size:14},{id:172,seed:"Y99U90JDZ",size:14},{id:173,seed:"3Y71GUT3X",size:14},{id:174,seed:"4YAMR2531",size:14},{id:175,seed:"KTZXH99GV",size:14},{id:176,seed:"BT4JZQTG1",size:14},{id:177,seed:"OSG6FERSA",size:14},{id:178,seed:"YM1WF0ACI",size:14},{id:179,seed:"IKH7OQ006",size:14},{id:180,seed:"AEW5GBBYI",size:14},{id:181,seed:"U4O57VRSX",size:14},{id:182,seed:"MO1BZVY2Q",size:14},{id:183,seed:"CH9VHLOQQ",size:14},{id:184,seed:"EMJF5A6SH",size:14},{id:185,seed:"8ZY8DBO1W",size:14},{id:186,seed:"PBPA8C0JV",size:14},{id:187,seed:"IMM1Y4TRC",size:14},{id:188,seed:"MVX2QZ24B",size:14},{id:189,seed:"PIMZ6Q7VY",size:14},{id:190,seed:"W5HMUA4B2",size:15},{id:191,seed:"YGLE0O5SS",size:15},{id:192,seed:"FIH8JZLST",size:15},{id:193,seed:"7F2ZST7NT",size:15},{id:194,seed:"KUUNGWRIJ",size:15},{id:195,seed:"JIUAUYIQL",size:15},{id:196,seed:"LPJLI5FFV",size:15},{id:197,seed:"7CO4V3HJP",size:15},{id:198,seed:"Y5JHGK2RR",size:15},{id:199,seed:"804GXCXJK",size:15},{id:200,seed:"1KCFAH337",size:15},{id:201,seed:"539UCC30J",size:15},{id:202,seed:"XGLN3M3GR",size:15},{id:203,seed:"FZW8HXM7X",size:15},{id:204,seed:"WAMW2EM63",size:15},{id:205,seed:"IRETCFQTF",size:15},{id:206,seed:"OZ7ZXK7U2",size:15},{id:207,seed:"FRGZ5QH4S",size:15},{id:208,seed:"5GZZ8Z1EX",size:15},{id:209,seed:"DBPX79SZR",size:16},{id:210,seed:"0AKPJW3U3",size:16},{id:211,seed:"JQ419S9S3",size:16},{id:212,seed:"8FQ4KD4HT",size:16},{id:213,seed:"1QLFF4FTM",size:16},{id:214,seed:"0DGND1FMN",size:16},{id:215,seed:"0D44IC2JF",size:16},{id:216,seed:"J47WCNPQ7",size:16},{id:217,seed:"QBP160JZZ",size:16},{id:218,seed:"VQBUTSNGM",size:16},{id:219,seed:"0E029QHAH",size:16},{id:220,seed:"2LLX5H60K",size:16},{id:221,seed:"BOV0O37EH",size:16},{id:222,seed:"NAPKFFNVV",size:16},{id:223,seed:"6QHHPUY8A",size:16},{id:224,seed:"49ECV7PCY",size:16},{id:225,seed:"KHUJRJDC7",size:16},{id:226,seed:"WBFAS0T0Y",size:16},{id:227,seed:"CQMCQRW3E",size:16},{id:228,seed:"CQLPM94KZ",size:17},{id:229,seed:"ERA1LMGIP",size:17},{id:230,seed:"PAE5Y1SEB",size:17},{id:231,seed:"9TE5U7NDX",size:17},{id:232,seed:"MGUB7LT32",size:17},{id:233,seed:"8FI7W8GO4",size:17},{id:234,seed:"4NBLOE85S",size:17},{id:235,seed:"EOQN6UXIH",size:17},{id:236,seed:"NZ22HBCND",size:17},{id:237,seed:"VUKSHE5PP",size:17},{id:238,seed:"QK7C42NSP",size:17},{id:239,seed:"CHFHGWD6H",size:17},{id:240,seed:"AOA0FN0OO",size:17},{id:241,seed:"UH7C7900W",size:17},{id:242,seed:"8BRIKMXBQ",size:17},{id:243,seed:"U0PD5BPMV",size:17},{id:244,seed:"GXTVEGKHI",size:17},{id:245,seed:"3J2SBDKTE",size:17},{id:246,seed:"E7WP2Q3AY",size:17},{id:247,seed:"DVPAYIU00",size:18},{id:248,seed:"168NDD071",size:18},{id:249,seed:"MX55IWU5J",size:18},{id:250,seed:"H538V32KX",size:18},{id:251,seed:"8RP9N8LZQ",size:18},{id:252,seed:"3P2C67KZP",size:18},{id:253,seed:"J20YCCPB4",size:18},{id:254,seed:"A8TIHQ27S",size:18},{id:255,seed:"OFE0DH72A",size:18},{id:256,seed:"5F7ZC0ZKB",size:18},{id:257,seed:"NH4ZYXUXY",size:18},{id:258,seed:"ZOB0O2OTT",size:18},{id:259,seed:"XYRFDM6MM",size:18},{id:260,seed:"O889758BL",size:18},{id:261,seed:"U69377URW",size:18},{id:262,seed:"6H84BM6EB",size:18},{id:263,seed:"53MCA5VX2",size:18},{id:264,seed:"XLZZK09HV",size:18},{id:265,seed:"6T8ZQLGTM",size:18},{id:266,seed:"ZUMTIVH33",size:19},{id:267,seed:"37HVQU8D9",size:19},{id:268,seed:"X9CF0P750",size:19},{id:269,seed:"AG01H91NA",size:19},{id:270,seed:"KL6HT5APB",size:19},{id:271,seed:"CT9385VKB",size:19},{id:272,seed:"IS6OP5HZF",size:19},{id:273,seed:"Q7JCAXLA4",size:19},{id:274,seed:"GE0KO2QDA",size:19},{id:275,seed:"3B0EIHKMU",size:19},{id:276,seed:"JPAAWXYJJ",size:19},{id:277,seed:"W2KKV5D7L",size:19},{id:278,seed:"SICQL1AUB",size:19},{id:279,seed:"WP1815MQY",size:19},{id:280,seed:"2IMXMG4RD",size:19},{id:281,seed:"WJ2C0RGDR",size:19},{id:282,seed:"N8P414OMX",size:19},{id:283,seed:"TR61UMDB5",size:19},{id:284,seed:"7CX7QG5ZH",size:19},{id:285,seed:"XXFN36PJM",size:20},{id:286,seed:"81TOA6951",size:20},{id:287,seed:"2SGBZTJLU",size:20},{id:288,seed:"K58AU6SWS",size:20},{id:289,seed:"W17ZZUQWY",size:20},{id:290,seed:"U3YKV5734",size:20},{id:291,seed:"HYIHRNVK8",size:20},{id:292,seed:"C8LJI6E7K",size:20},{id:293,seed:"8E13YRK55",size:20},{id:294,seed:"4QUCJZ3UX",size:20},{id:295,seed:"MRD779Y9V",size:20},{id:296,seed:"Q2TNH795Y",size:20},{id:297,seed:"P5ZMJDQWT",size:20},{id:298,seed:"DBOONHF4W",size:20},{id:299,seed:"1Q3XU7DL5",size:20},{id:300,seed:"S0EDB5JBY",size:20}],W=["GRASS",m,null],H=JSON.parse(window.localStorage.getItem("state")),b=Object(z.b)({slice:"level",initialState:H&&H.level?H.level:{id:1,board:[],moveHistory:[],completed:!1},reducers:{loadLevel:function(e,i){var s=I.find(function(e){return e.id===i.payload.id}),d=A(s.size,s.seed);e.id=s.id,e.board=d,e.moveHistory=[],e.completed=!1},cycleTile:function(e,i){var s=i.payload,d=s.x,t=s.y,n=e.board.flat(),a=n.find(function(e){return e.x===d&&e.y===t});a&&"BARN"!==a.type&&(a.choice=W[(W.indexOf(a.choice)+1)%W.length],e.moveHistory.push({x:d,y:t}),e.completed=n.every(function(e){return e.choice===e.type}))},undo:function(e){var i=e.moveHistory.pop();if(!i)return e;var s=i.x,d=i.y,t=e.board.flat().find(function(e){return e.x===s&&e.y===d}),n=W.indexOf(t.choice)-1;n<=-1&&(n=W.length-1),t.choice=W[n]},restart:function(e){for(var i=0;i<e.board.length;i++)for(var s=0;s<e.board.length;s++){var d=e.board[i][s];"BARN"!==d.type&&(d.choice=null)}e.moveHistory=[]}}}),B=b.actions,L=b.reducer,J=Object(l.combineReducers)({player:E,game:y,level:L,debug:function(){return!1}}),P=Object(z.a)({reducer:J});P.subscribe(function(){var e=JSON.stringify(P.getState());window.localStorage.setItem("state",e)});var Q=P,D=s(13),R=s(12),X=s(32),Y=s(14),Z=s.n(Y),T=(s(53),function(e){var i=e.to,s=void 0===i?null:i,d=e.onClick,n=void 0===d?null:d,a=e.disabled,r=void 0!==a&&a,o=e.tier,c=e.children,l=Z()("Button",o,{disabled:r}),z=function(e){return e.preventDefault(),e.stopPropagation(),!1},u=t.a.createElement(D.b,{to:s||"/",className:l,onContextMenu:z},c),f=t.a.createElement("button",{onClick:n,className:l,onContextMenu:z,disabled:r},c);return s?u:f}),U=(s(54),function(){return t.a.createElement("div",{className:"Welcome"},t.a.createElement("h1",null,"Barns",t.a.createElement("span",null,"and"),"Cows"),t.a.createElement(T,{to:"/play",tier:"primary"},"Play"),t.a.createElement(T,{to:"/endless",tier:"secondary"},"Endless"),t.a.createElement(T,{to:"/daily",tier:"secondary"},"Daily Levels"),t.a.createElement("div",{className:"small"},t.a.createElement(T,{to:"/settings",tier:"secondary"},t.a.createElement("i",{className:"fas fa-cog"})),t.a.createElement(T,{to:"/tutorial",tier:"secondary"},t.a.createElement("i",{className:"fas fa-question"}))))}),K=s(11),F=(s(55),Object(d.memo)(function(e){var i=e.tile,s=e.width,d=Object(c.b)(),n=Object(c.c)(function(e){return e.debug}),a=i.choice?"tile ".concat(i.choice.toLowerCase()).trim():"tile",r={width:Math.round(s),height:Math.round(s),borderRadius:Math.round(s/10)};return t.a.createElement("td",{className:a,style:r,onClick:function(){var e=i.x,s=i.y;d(B.cycleTile({x:e,y:s}))}},n&&t.a.createElement("div",null,t.a.createElement("pre",null,"x: ",i.x),t.a.createElement("pre",null,"y: ",i.y),t.a.createElement("pre",null,"type: ",i.type),t.a.createElement("pre",null,"choice: ",i.choice||"NONE")))})),G=(s(56),Object(d.memo)(function(e){var i=e.tiles,s=e.width,d=i.filter(function(e){return e.type===m}).length,n=i.every(function(e){return null!==e.choice}),a=i.filter(function(e){return e.choice===m}).length!==d,r=Z()("CowCount",{complete:n,invalid:n&&a}),o={width:Math.round(s/2),height:Math.round(s/2),fontSize:s/2>40?40:Math.round(s/2)};return t.a.createElement("td",{className:r,style:o},d)})),w=(s(57),Object(d.memo)(function(){var e=function(){function e(){return{width:window.innerWidth,height:window.innerHeight}}var i=Object(d.useState)(e),s=Object(K.a)(i,2),t=s[0],n=s[1];return Object(d.useEffect)(function(){function i(){n(e())}return window.addEventListener("resize",i),function(){return window.removeEventListener("resize",i)}},[]),t}(),i=Object(c.b)(),s=Object(c.c)(function(e){return e.level.id}),n=Object(c.c)(function(e){return e.level.board}),a=n.flat(),r=Object(d.useState)(20),o=Object(K.a)(r,2),l=o[0],z=o[1],u=Object(d.useState)(!1),f=Object(K.a)(u,2),E=f[0],m=f[1],v=function(){var e=Math.round(.8*Math.min(document.body.offsetHeight,document.body.offsetWidth));z(e/n.length)};Object(d.useEffect)(function(){0===n.length&&i(B.loadLevel({id:s})),v(),m(!0)},[]),Object(d.useEffect)(v,[e,n.length]);var M={marginLeft:l/2*-1,marginTop:l/2*-1,opacity:E?"visible":"hidden"};return t.a.createElement("main",{className:"Board",style:M},t.a.createElement("table",null,t.a.createElement("tbody",null,t.a.createElement("tr",null,t.a.createElement("td",null),n.map(function(e,i){return t.a.createElement(G,{tiles:a.filter(function(e){return e.x===i}),width:l,key:i})})),n.map(function(e,i){return t.a.createElement("tr",{key:i},t.a.createElement(G,{tiles:e,width:l}),e.map(function(e){return t.a.createElement(F,{key:e.x+","+e.y,tile:e,width:l})}))}))))})),V=(s(58),function(e){var i=e.openRestartModal,s=e.openSkipModal,d=Object(c.b)(),n=Object(c.c)(function(e){return 0===e.level.moveHistory.length});return t.a.createElement("nav",{className:"PlayMenu"},t.a.createElement("div",{className:"small"},t.a.createElement(T,{to:"/",tier:"secondary"},t.a.createElement("i",{className:"fas fa-bars"})),t.a.createElement(T,{onClick:i,tier:"secondary"},t.a.createElement("i",{className:"fas fa-undo-alt"})),t.a.createElement(T,{onClick:s,tier:"secondary"},t.a.createElement("i",{className:"fas fa-fast-forward"}))),t.a.createElement(T,{onClick:function(){return d(B.undo())},disabled:n,tier:"secondary"},t.a.createElement("i",{className:"fas fa-level-up-alt"})," Undo"))}),g=(s(59),function(e){var i=e.visible,s=e.children,d=Z()("ModalShade",{visible:i});return t.a.createElement("div",{className:d},t.a.createElement("div",{className:"Modal"},s))}),j=(s(60),function(e){var i=e.levelId,s=e.restartModalOpen,d=e.skipModalOpen,n=e.closePlayModals,a=Object(c.b)(),r=Object(c.c)(function(e){return e.level.completed});return t.a.createElement("div",{className:"PlayModals"},t.a.createElement(g,{visible:r},t.a.createElement("h1",null,"YOU WIN"),t.a.createElement("p",null,"Fantastic work, partner!"),t.a.createElement(T,{onClick:function(){return a(B.loadLevel({id:i+1}))},tier:"primary"},"Next Level")),t.a.createElement(g,{visible:s},t.a.createElement("h1",null,"Restart Level?"),t.a.createElement("p",null,"Are you sure you want to restart this level?"),t.a.createElement(T,{tier:"primary",onClick:n},"No"),t.a.createElement(T,{tier:"secondary",onClick:function(){n(),a(B.restart())}},"Yes")),t.a.createElement(g,{visible:d},t.a.createElement("h1",null,"Skip Level?"),t.a.createElement("p",null,"Are you sure you want to skip this level?"),t.a.createElement(T,{tier:"primary",onClick:n},"No"),t.a.createElement(T,{tier:"secondary",onClick:function(){n(),a(B.loadLevel({id:i+1}))}},"Yes")))}),k=(s(61),window.location.search.substr(1)||8),x=function(){var e=Object(d.useState)(!1),i=Object(K.a)(e,2),s=i[0],n=i[1],a=Object(d.useState)(!1),r=Object(K.a)(a,2),o=r[0],l=r[1],z=Object(c.c)(function(e){return e.level.id}),u=function(){l(!1),n(!1)};return function(e,i,s){var t=Object(d.useRef)();Object(d.useEffect)(function(){t.current=s},[s]),Object(d.useEffect)(function(){if(e&&e.addEventListener){var s=function(e){return t.current(e)};return e.addEventListener(i,s),function(){e.removeEventListener(i,s)}}},[i,e])}(document,"keydown",function(e){return 27===e.keyCode?u():null}),t.a.createElement("div",{className:"Play"},t.a.createElement("h1",{style:{position:"absolute",bottom:100,left:10}},"Level ",z),t.a.createElement(w,{size:k}),t.a.createElement(V,{openRestartModal:function(){return n(!0)},openSkipModal:function(){return l(!0)}}),t.a.createElement(j,{levelId:z,restartModalOpen:s,skipModalOpen:o,closePlayModals:u}))},q=(s(62),Object(R.f)(function(e){var i=e.history;return t.a.createElement("div",{className:"Settings"},t.a.createElement("h1",null,"Settings"),t.a.createElement(T,{onClick:function(){window.confirm("Are you sure you want to delete all save data? THIS ACTION CANNOT BE UNDONE.")&&(localStorage.removeItem("state"),i.push("/"),window.location.reload())},tier:"secondary"},"Delete all save data"),t.a.createElement(T,{to:"/",tier:"secondary"},t.a.createElement("i",{className:"fas fa-arrow-left"}),"Back"))}));s(63);document.title="Barns and Cows",a.a.render(t.a.createElement(c.a,{store:Q},t.a.createElement(D.a,null,t.a.createElement(X.a,{atEnter:{opacity:0},atLeave:{opacity:1},atActive:{opacity:1}},t.a.createElement(R.a,{exact:!0,path:"/",component:U}),t.a.createElement(R.a,{path:"/play",component:x}),t.a.createElement(R.a,{path:"/settings",component:q})))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/barns-cows",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var i="".concat("/barns-cows","/service-worker.js");r?(!function(e,i){fetch(e).then(function(s){var d=s.headers.get("content-type");404===s.status||null!=d&&-1===d.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):o(e,i)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(i,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):o(i,e)})}}()}},[[34,1,2]]]);