<script>
    export let data;
  </script>
  
  <style>
    ul {
      list-style-type: none;
      padding: 0;
      background-color: #f0f0f0; /* Light gray background */
      border: 3px solid #333; /* Dark border for a retro feel */
      width: fit-content;
      margin: 20px auto;
      font-family: 'Courier New', Courier, monospace; /* Retro-style monospace font */
    }
  
    li {
      background-color: #ffcc00; /* Bright yellow for list items */
      color: #000; /* Black text */
      border-bottom: 1px solid #333; /* Dark border between items */
      padding: 10px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  
    li:hover {
      background-color: #ff9900; /* Darker yellow on hover */
    }
  </style>
  
  <ul>
    {#each data.countries as country}
      <li>{country.name}</li>
    {/each}
  </ul>
  