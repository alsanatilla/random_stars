<script>
    import Navbar from "../lib/components/Navbar.svelte";
  </script>
  
  <style>
    .layout {
      display: grid;
      grid-template-rows: auto 1fr auto;
      min-height: 100vh;
      font-family: 'Courier New', Courier, monospace;
    }
  
    main {
      margin: 20px;
      padding: 20px;
      background-color: #fff;
    }
  

  </style>
  
  <div class="layout">
    <main>
      <slot></slot> 
    </main>
  </div>
  