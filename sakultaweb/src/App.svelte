<script>
  import Router from 'svelte-spa-router'
  import Home from './lib/pages/Home.svelte';
  import NotFound from './lib/pages/NotFound.svelte';

  const routes = {
    "/": Home,
    "*":NotFound
  }

  import Navbar from './lib/Navbar.svelte';
  import Navbtn from './lib/Navbtn.svelte';
</script>

<body>
  <Navbar>
    <Navbtn title={"Anasayfa"} page={"/"}/>
    <Navbtn title={"Kurumsal"} page={"/"}/>
    <Navbtn title={"Hizmetler"} page={"/"}/>
    <Navbtn title={"Anasayfa"} page={"/"}/>
  </Navbar>

  <Router {routes}/>
</body>