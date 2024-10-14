const express = require ('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mahasiswa'
});

connection.connect((err) => {
    if(err){
        console.error("Terjadi kesalahan dalam kondeksi ke MySQL:", err.stack);
        return;
    }
    console.log("Koneksi MySQL berhasil dengan id" + connection.threadId)
});

app.set('view engine', 'ejs');

//ini adalah routing (create, read, update, delete)

//read
app.get('/', (req, res) => {
    const query = 'select * from mahasiswa';
    connection.query(query, (err, result) => {
        res.render('index',{user: result});
    });
});

//create
app.post('/add', (req, res ) => {
const {nim, namamhs, jeniskelamin, kodejurusan} = req.body;
const query = 'INSERT INTO users (nim, namamhs, jeniskelamin, kodejurusan VALUES (?,?,?)' ;
connection.query(express.query, [nim, namamhs, jeniskelamin, kodejurusan], (err, result) => {
    if (err) throw err;
    res.redirect('/');
})
}); 

//update
//untuk akses halaman
app.get('/', (req, res) => {
    const query = 'select * from mahasiswa WHERE id = ?';
    connection.query(query, [req.params.id], (err, result) => {
        if (err) throw err;
        res.render('edit',{mahasiswa: result[0]});
    });
});
//untuk update data
app.post('/update/:id', (req, res ) => {
    const {name, email, phone } = req.body;
    const query = 'UPDATE mahasiswa SET name = ?, email = ?, phone = ? WHERE id = ?' ;
    connection.query(express.query, [nim, namamhs, jeniskelamin, kodejurusan], (err, result) => {
        if (err) throw err;
        res.redirect('/');
    })
    }); 

//delete
app.get('/delete/:id', (req, res) => {
    const query = 'delete from mahasiswa WHERE id = ?';
    connection.query(query, [req.params.id], (err, result) => {
        if (err) throw err;
        res.render('edit',{user: result[0]});
    });
});

app.listen(3000,() => {
    console.log("server berjalan di port 3000, buka web melalui http://localhost:3000")
})