let $ = document.querySelector.bind(document);

function run() {
	let html = snarkdown($('#in').value);
	$('#out').innerHTML = html;
	$('#code').textContent = html;
}

$('#in').oninput = run;

run();
