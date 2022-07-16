module.exports = function(RED) {
    function noobres(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        const n_a = config.na;
        const n_b = config.nb;
        const lista = config.groupitems;

        node.on('input', function(msg) {
            msg.payload = soma(n_a, n_b);
            msg.lista = lista;
            node.send(msg); 
        });

        node.status({
            text: 'OK',
            shape: 'dot',
            fill: 'blue'
        })

    }
	
	function soma(a, b){
        return Number(a) + Number(b)
    }
		
    RED.nodes.registerType("noobres",noobres);
}