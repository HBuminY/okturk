<script>
  import Router from 'svelte-spa-router'
  import Home from './lib/pages/Home.svelte';
  import NotFound from './lib/pages/NotFound.svelte';
  import Kurumsal from './lib/pages/Kurumsal.svelte';
  import Services from './lib/pages/Services.svelte';
  import Contact from './lib/pages/Contact.svelte';

  const routes = {
    "/": Home,
    "/kurumsal":Kurumsal,
    "/hizmetler":Services,
    "/iletisim":Contact,
    "*":NotFound,
  }

  import Navbar from './lib/Navbar.svelte';
  import Navbtn from './lib/Navbtn.svelte';
  import Footer from './lib/Footer.svelte';
</script>

<body class="overflow-x-hidden">
  <Navbar>
    <Navbtn title={"Anasayfa"} page={"/"}/>
    <Navbtn title={"Kurumsal"} page={"/kurumsal"}/>
    <Navbtn title={"Hizmetler"} page={"/hizmetler"}/>
    <Navbtn title={"İletişim"} page={"/iletisim"}/>
  </Navbar>

  <Router {routes}/>

  <Footer/>
</body>