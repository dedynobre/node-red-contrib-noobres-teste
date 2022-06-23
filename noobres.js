module.exports = function(RED) {
    function noobres(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        const n_a = config.na;
        const n_b = config.nb;
        const lista = config.se;

        node.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();
            msg.topic = soma(n_a, n_b);
            msg.tags = lista;
            node.send(msg); 
        });

        node.editor = RED.editor.createEditor({
            id: 'node-input-example-editor',
            mode: 'ace/mode/text',
            value: this.exampleText
         });
    }
	
	function soma(a, b){
        return Number(a) + Number(b)
    }
		
    RED.nodes.registerType("noobres",noobres);
}