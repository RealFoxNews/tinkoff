'use strict';function _0x3779(){const _0x22247b=['2866964CBQZMV','onCloseApi','onCloseWallet','\x1b[36m%s\x1b[0m','1044778tCcMpM','futures','BaseTrader','config.json','initializeOptions','path','BASE_CONFIG','defineProperty','3QnREwb','log','../../models/base.config','243195egKJGT','onOpenWallet','wallet','getShares','status','instruments','1779144uKOOnQ','INSTRUMENT_STATUS_BASE','\x1b[37m','Апи\x20запущено','2403980pyvUrs','options','next','api','stop','readFileSync','getAccounts','3740913vMIJfV','../../utils/merge.util','from','7MAYTZQ','150RzzgjG','getShares$','__esModule','tinkoff-invest-api/cjs/generated/instruments','64260JAyrba','Subject','rxjs'];_0x3779=function(){return _0x22247b;};return _0x3779();}const _0xf681c6=_0x90f0;function _0x90f0(_0x5c8ee3,_0x35f82e){const _0x377995=_0x3779();return _0x90f0=function(_0x90f010,_0xefa4aa){_0x90f010=_0x90f010-0x95;let _0x3ddead=_0x377995[_0x90f010];return _0x3ddead;},_0x90f0(_0x5c8ee3,_0x35f82e);}(function(_0x5156dd,_0x588624){const _0x45b6c6=_0x90f0,_0x316b6b=_0x5156dd();while(!![]){try{const _0x9bdd08=parseInt(_0x45b6c6(0xaa))/0x1+-parseInt(_0x45b6c6(0xa6))/0x2*(parseInt(_0x45b6c6(0xb2))/0x3)+parseInt(_0x45b6c6(0xbf))/0x4+-parseInt(_0x45b6c6(0xb5))/0x5*(-parseInt(_0x45b6c6(0x9f))/0x6)+-parseInt(_0x45b6c6(0x9e))/0x7*(parseInt(_0x45b6c6(0xbb))/0x8)+-parseInt(_0x45b6c6(0x9b))/0x9+-parseInt(_0x45b6c6(0xa3))/0xa;if(_0x9bdd08===_0x588624)break;else _0x316b6b['push'](_0x316b6b['shift']());}catch(_0x217695){_0x316b6b['push'](_0x316b6b['shift']());}}}(_0x3779,0xbf5ae));Object[_0xf681c6(0xb1)](exports,_0xf681c6(0xa1),{'value':!![]}),exports['BaseTrader']=void 0x0;const fs=require('fs'),path=require(_0xf681c6(0xaf)),rxjs_1=require(_0xf681c6(0xa5)),base_config_1=require(_0xf681c6(0xb4)),instruments_1=require(_0xf681c6(0xa2)),merge_util_1=require(_0xf681c6(0x9c));class BaseTrader{constructor(){const _0x27b9b0=_0xf681c6;this[_0x27b9b0(0xb9)]=new rxjs_1[(_0x27b9b0(0xa4))](),this[_0x27b9b0(0xb9)][_0x27b9b0(0x96)]({'status':_0x27b9b0(0x97),'alive':![]}),this[_0x27b9b0(0xb9)][_0x27b9b0(0x96)]({'status':_0x27b9b0(0xb7),'alive':![]});}[_0xf681c6(0xae)](){const _0x28f255=_0xf681c6;this[_0x28f255(0x95)]=(0x0,merge_util_1['merge'])(base_config_1[_0x28f255(0xb0)],JSON['parse'](fs[_0x28f255(0x99)](path['join'](__dirname,'..','..','..','..',_0x28f255(0xad)))['toString']()));}['reloadOptions'](_0x429161){const _0x4cddd4=_0xf681c6;this[_0x4cddd4(0x95)]=(0x0,merge_util_1['merge'])(this['options'],_0x429161);}['onOpenApi'](){const _0x1f48a2=_0xf681c6;this[_0x1f48a2(0xb9)][_0x1f48a2(0x96)]({'status':'api','alive':!![]}),console[_0x1f48a2(0xb3)](_0x1f48a2(0xa9),_0x1f48a2(0xbe),_0x1f48a2(0xbd));}[_0xf681c6(0xa7)](){const _0x55580e=_0xf681c6;this[_0x55580e(0x97)]=undefined,this['status'][_0x55580e(0x96)]({'status':_0x55580e(0x97),'alive':![]}),console[_0x55580e(0xb3)]('\x1b[31m','Апи\x20выключено',_0x55580e(0xbd));}[_0xf681c6(0xb6)](){const _0x22aea6=_0xf681c6;this[_0x22aea6(0xb9)][_0x22aea6(0x96)]({'status':'wallet','alive':!![]});}[_0xf681c6(0xa8)](){const _0x3a4994=_0xf681c6;var _0xd1ab1a;(_0xd1ab1a=this[_0x3a4994(0xb7)])===null||_0xd1ab1a===void 0x0?void 0x0:_0xd1ab1a[_0x3a4994(0x98)](),this[_0x3a4994(0xb7)]=undefined,this['status'][_0x3a4994(0x96)]({'status':'wallet','alive':![]});}async[_0xf681c6(0x9a)](){const _0x36f1c4=_0xf681c6;console['log'](this[_0x36f1c4(0x97)]);if(!this['api'])return null;const {accounts:_0x545f34}=await this[_0x36f1c4(0x97)]['users'][_0x36f1c4(0x9a)]({});return console[_0x36f1c4(0xb3)](_0x545f34),_0x545f34;}async[_0xf681c6(0xb8)](){const _0x59fa5d=_0xf681c6;if(!this[_0x59fa5d(0x97)])return null;const _0x8cb282=await this[_0x59fa5d(0x97)][_0x59fa5d(0xba)][_0x59fa5d(0xab)]({'instrumentStatus':instruments_1['InstrumentStatus'][_0x59fa5d(0xbc)]});return _0x8cb282[_0x59fa5d(0xba)];}[_0xf681c6(0xa0)](){const _0x1da864=_0xf681c6;return(0x0,rxjs_1[_0x1da864(0x9d)])(this[_0x1da864(0xb8)]());}}exports[_0xf681c6(0xac)]=BaseTrader;