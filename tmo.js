(function() {
	window.Main = {};
	Main.Page = (function() {
		var mosq = null;
		function Page() {
			var _this = this;
			mosq = new Mosquitto();

			$('#connect-button').click(function() {
				return _this.connect();
			});
			$('#disconnect-button').click(function() {
				return _this.disconnect();
			});
			$('#subscribe-button').click(function() {
				return _this.subscribe();
			});
			$('#unsubscribe-button').click(function() {
				return _this.unsubscribe();
			});
			
			//ações do robô
			$('#frente').click(function() {
				var payload = "F";  
				var TopicPublish = $('#pub-topic-text')[0].value;				
				mosq.publish(TopicPublish, payload, 0);
			});

			$('#direita').click(function() {
				var payload = "D";  
				var TopicPublish = $('#pub-topic-text')[0].value;				
				mosq.publish(TopicPublish, payload, 0);
			});
			
			$('#esquerda').click(function() {
				var payload = "E";  
				var TopicPublish = $('#pub-topic-text')[0].value;				
				mosq.publish(TopicPublish, payload, 0);
			});
			
			$('#parar').click(function() {
				var payload = "P";  
				var TopicPublish = $('#pub-topic-text')[0].value;				
				mosq.publish(TopicPublish, payload, 0);
			});
			

			mosq.onconnect = function(rc){
				var p = document.createElement("p");
				var topic = $('#pub-subscribe-text')[0].value;
				p.innerHTML = "Conectado ao Broker!";
				$("#debug").append(p);
				mosq.subscribe(topic, 0);
				
			};
			mosq.ondisconnect = function(rc){
				var p = document.createElement("p");
				var url = "ws://iot.eclipse.org/ws";
				
				p.innerHTML = "A conexão com o broker foi perdida";
				$("#debug").append(p);				
				mosq.connect(url);
			};
			mosq.onmessage = function(topic, payload, qos){
				var p1 = document.createElement("p1");
				var p2 = document.createElement("p2");
				var payload_util = payload.substring(0, 3);
				var payload_parseado = payload_util.split("-");
				
				window.alert(payload_util);

				switch (payload_parseado[0])
				{
					case '0':
					{
						p1.innerHTML = "<center>Motor esquerdo<br><img src='parado.gif'></center>";
						break;
					}
					
					case '1':
					{
						p1.innerHTML = "<center>Motor esquerdo<br><img src='roda.gif'></center>";
						break;
					}
				}
				
				switch (payload_parseado[1])
				{
					case '0':
					{
						p2.innerHTML = "<center>Motor direito<br><img src='parado.gif'></center>";
						break;
					}
					
					case '1':
					{
						p2.innerHTML = "<center>Motor direito<br><img src='roda.gif'></center>";
						break;
					}
			    }
				
				//escreve o estado do output conforme informação recebida
				$("#status_motor_direita").html(p2);
				$("#status_motor_esquerda").html(p1);
			};
		}
		Page.prototype.connect = function(){
			var url = "ws://iot.eclipse.org/ws";
			mosq.connect(url);
		};
		Page.prototype.disconnect = function(){
			mosq.disconnect();
		};
		Page.prototype.subscribe = function(){
			var topic = $('#sub-topic-text')[0].value;
			mosq.subscribe(topic, 0);
		};
		Page.prototype.unsubscribe = function(){
			var topic = $('#sub-topic-text')[0].value;
			mosq.unsubscribe(topic);
		};
		
		return Page;
	})();
	$(function(){
		return Main.controller = new Main.Page;
	});
}).call(this);

