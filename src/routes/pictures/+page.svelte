<script>
  import { onMount } from 'svelte';
  export let data;
  let currentIndex = 0;

  function nextImage() {
    if (currentIndex < data.images.length - 1) {
      currentIndex++;
    }
  }

  function previousImage() {
    if (currentIndex > 0) {
      currentIndex--;
    }
  }

  onMount(() => {
    if (data.images.length === 0) {
      currentIndex = -1; // Handle case of no images
    }
  });
</script>

<style>
  .header-image {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
  }

  .nav-buttons {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  button {
    background-color: #ffcc00;
    color: #000;
    border: 3px solid #333;
    padding: 10px;
    cursor: pointer;
    text-align: center;
    width: 150px;
  }
</style>


{#if currentIndex >= 0}
  <img class="header-image" src={data.images[currentIndex]} alt="Photo from Mars Curiosity Rover">
  <div class="nav-buttons">
    <button on:click={previousImage}>Previous</button>
    <button on:click={nextImage}>Next</button>
  </div>
{/if}
