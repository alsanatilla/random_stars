<script>
    export let isOpen = false;
</script>

{#if isOpen}
    <div class="modal-overlay">
        <div class="modal">
            <!-- Modal content here -->
            <div class="modal-header">
                <h2>Modal Title</h2>
                <button class="close-button" on:click={() => isOpen = false}>✖</button>
            </div>
            <div class="modal-body">
                <p>Put your modal content here.</p>
            </div>
        </div>
    </div>
{/if}

<style>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 1000;
    }

    h2 {
        color: black;
    }

    p {
        color: black;
    }

    .modal {
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        width: 80%;
        max-width: 500px;
        animation: modal-in 0.3s ease-out;
    }

    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .modal-header h2 {
        margin: 0;
    }

    .close-button {
        background: none;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
    }

    .modal-body {
        /* Styles for the modal body */
    }

    @keyframes modal-in {
        from {
            transform: translateY(-50px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
</style>
