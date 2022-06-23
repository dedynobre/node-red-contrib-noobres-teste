module.exports = function(RED) {
    function noobres(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();
            msg.topic = soma(111,222)
            node.send(msg);
        });
    }
	
	function soma(a, b){
        return a + b
    }
		
    RED.nodes.registerType("noobres",noobres);
}