var express = require('express');
var router = express.Router();
var sql = require("mysql");
var sql2 = require("mysql");
var app = express();
var conn = require("../connection/connect")



//Listado Fletes

 router.get('/api/freights',(req, res) => {
    var formBuilder = "1";
    let sql = "CALL spGetFrieght();"
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify(results));
      console.log(res);
    });
  });


//Listado empresas

 router.get('/api/data/my-company',(req, res) => {
    var idCompany = "1";
    let sql = "CALL spGetCompanyList(2);"
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify(results));
      console.log(res);
    });
  });

//Empresa por ID

 router.get('/api/data/my-company/id',(req, res) => {
    var idCompany = "1";
    let sql = "CALL spGetCompanyById(1);"
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify(results));
      console.log(res);
    });
  });
  router.get('/Transportistas/direcciones',(req, res) => {
    var idCompany = "4";
   let sql2  = "CALL spGetAddressByCompany(2,5);"
    let query = conn.query(sql2, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify(results));
      console.log(res);
    });
  }); 



//Listado transportistas
 router.get('/api/data/transportists',(req, res) => {
    var formBuilder = "1";
    let sql = "CALL spGetTransportistList(2);"
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify(results));
      console.log(res);
    });
  });

//Listado de todas las invitaciones
router.get('/api/data/invitacionesAll',(req, res) => {
    var prolIdLang = "5";
    var invlIdLang = "5";
    let sql = "CALL spGetInvitationsList(-1,5);"
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify(results));
      console.log(res);
    });
  });
//Listado de invitaciones por owner
router.get('/api/data/invitacionesOwner',(req, res) => {
  var prolIdLang = "5";
  var invlIdLang = "5";
  var invlIdOwner = "3";
  let sql = "CALL spGetInvitationsList(2,5);"
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify(results));
    console.log(res);
  });
});



 router.get('/api/data/my-company/token',(req, res) => {
    var formBuilder = "1";
    let sql = "CALL spComboToken (5);"
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify(results));
      console.log(res);
    });
  });

 router.get('/api/getToken',(req, res) => {
    var formBuilder = "1";
    let sql = "CALL spGetToken(2);"
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify(results));
      console.log(res);
    });
  });

//Formato flete
router.get('/api/freights/delivery',(req, res) => {
    var formBuilder = "1";
    let sql = "CALL spGetFormList(0,5);"
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify(results));
      console.log(res);
    });
  });

//Rastreo flete
router.get('/api/freights/tracking',(req, res) => {
    var formBuilder = "1";
    let sql = "CALL spGetFreightLog(1,1);"
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify(results));
      console.log(res);
    });
  });

//Listado Clientes
router.get('/api/clients',(req, res) => {
    var formBuilder = "1";
    let sql = "CALL spGetCustomerList(1,5);"
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify(results));
      console.log(res);
    });
  });

//Listado Transportista
router.get('/api/transportist',(req, res) => {
    var formBuilder = "1";
    let sql = "CALL spGetTransportistList(1);"
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify(results));
      console.log(res);
    });
  });

//Mi cuenta
router.get('/api/account',(req, res) => {
    var formBuilder = "1";
    let sql = "CALL spGetMyAccount(1);"
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify(results));
      console.log(res);
    });
  });

//Listado direcciones compañia
router.get('/api/address/company',(req, res) => {
    var formBuilder = "1";
    let sql = "CALL spGetAddressListByCompany(2,5);"
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify(results));
      console.log(res);
    });
  });

//Listado direcciones cliente
router.get('/api/address/customer',(req, res) => {
    var formBuilder = "1";
    let sql = "CALL spGetAddressListByCustomer(30,5);"
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify(results));
      console.log(res);
    });
  });
//Listado direcciones Transportista
router.get('/api/address/transportist',(req, res) => {
    var formBuilder = "1";
    let sql = "CALL spGetAddressListByCompany(2,5);"
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify(results));
      console.log(res);
    });
  });
//Get Address
router.get('/api/address/1',(req, res) => {
    var formBuilder = "1";
    let sql = "CALL spGetAddress(3,1);"
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify(results));
      console.log(res);
    });
  });

//Listado roles
router.get('/api/config/roles',(req, res) => {
    var formBuilder = "1";
    let sql = "CALL spGetRolList(5);"
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify(results));
      console.log(res);
    });
  });

//Listado de status
router.get('/api/combo/status',(req, res) => {
  var formBuilder = "1";
  let sql = "CALL spGetCombo ('FreightStatus',0,5);"
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify(results));
    console.log(res);
  });
});


//Listado de operadores
router.get('/api/operators',(req, res) => {
  var formBuilder = "1";
  let sql = "CALL spDriverList(1);"
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify(results));
    console.log(res);
  });
});


//Listado de vehículos
router.get('/api/vehicles',(req, res) => {
  var formBuilder = "1";
  let sql = "CALL spGetVehicleList(1);"
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify(results));
    console.log(res);
  });
});

//Listado de usuarios
router.get('/api/users',(req, res) => {
  var formBuilder = "1";
  let sql = "CALL spGetUserList(5);"
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify(results));
    console.log(res);
  });
});


//Listado de Pólizas
router.get('/api/insurances',(req, res) => {
  var formBuilder = "1";
  let sql = "CALL spGetInsuranceList(1);"
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify(results));
    console.log(res);
  });
});

//
router.get('/api/my-company',(req, res) => {
  var formBuilder = "1";
  let sql = "CALL spGetAddress(1,1);"
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify(results));
    console.log(res);
  });
});

//Nombres de delivery
router.get('/api/deliveryStatus',(req, res) => {
  var formBuilder = "1";
  let sql = "CALL spGetCombo('DeliveryStatus',0,5);"
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify(results));
    console.log(res);
  });
});

//Nombres Shipment
router.get('/api/ShipmentStatus',(req, res) => {
  var formBuilder = "1";
  let sql = "CALL spGetCombo('ShipmentStatus',0,5)"
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify(results));
    console.log(res);
  });
});











  module.exports = router;