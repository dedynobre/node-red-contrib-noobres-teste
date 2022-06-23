module.exports = function(RED) {
    function noobres(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        const n_a = config.na;
        const n_b = config.nb;

        node.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();
            msg.topic = soma(n_a, n_b)
            node.send(msg); 
        });
    }
	
	function soma(a, b){
        return a + b
    }
		
    RED.nodes.registerType("noobres",noobres);
}