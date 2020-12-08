<script>
  const formatDate = require('date-fns/format');
  export let title;
  export let date;
  export let printDate = formatDate(new Date(date), 'MM/dd/yyyy');
</script>

<h1>{ title }</h1>
<time class="date">{ printDate }</time>
<slot>
  <!-- MD content -->
</slot>
