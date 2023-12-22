<script>
    import "../app.pcss";
    import { ModeWatcher } from "mode-watcher";
  </script>
  
  <style>
    .layout {
      display: grid;
      grid-template-rows: auto 1fr auto;
      min-height: 100vh;
      font-family: 'Courier New', Courier, monospace;
    }


  </style>
    <ModeWatcher />

  <div class="layout">

    <main>
      <slot></slot> 
    </main>
  </div>
  