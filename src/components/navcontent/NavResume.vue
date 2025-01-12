<script setup lang="ts">

import {Button} from "@/components/ui/button";

const downloadFile = () => {
      const link = document.createElement('a');
      link.href = '/path/to/your/file.txt'; // The file URL
      link.download = 'myFile.txt'; // The default file name
      link.click(); // Trigger the download
};
</script>


<template>
  <div>
    <Button class=""> Click me! </Button>
  </div>
</template>