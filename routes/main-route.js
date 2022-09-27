const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('index');
});

router.get('/dashboard', (req,res) => {
    const breadcrumb = {
        url: req.url.toUpperCase().split('/')
    }
    res.render('dashboard', breadcrumb);
});

router.get('/add-project', (req,res) => {
    const breadcrumb = {
        url: req.url.toUpperCase().split('/')
    }
    res.render('add-project', breadcrumb);
});

router.get('/projects', (req,res) => {
    const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
    const breadcrumb = {
        url: req.url.toUpperCase().split('/')
    }

    const url = 'http://localhost:8000/api/projects';
   
    fetch(url)
    .then(res => res.json())
    .then(result =>{ res.render('projects', {breadcrumbs: breadcrumb, projects : result}) })
    .catch(err => console.log(err))


});

router.get('/analytics', (req,res) => {
    const breadcrumb = {
        url: req.url.toUpperCase().split('/')
    }
    res.render('analytics', breadcrumb);
});

router.get('/project/categories', (req,res) => {
    const breadcrumb = {
        url: req.url.toUpperCase().split('/')
    }
    res.render('categories', breadcrumb);
});





module.exports = router;