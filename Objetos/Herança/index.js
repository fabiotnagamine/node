function inherit(p) {
    if (p == null) {
        if (Object.create) {
            return Object.create(p);
        }
        let t = typeof p;
        if (t != 'object' && t !== 'function') {
            function f() {

            }
            f.prototype = p;
            return new f();
        }
    }

}

var o = {} // o herda métodos de objeto de Object.prototype
o.x = 1; // e tem uma propriedade própria x.
var p = inherit(o); // p herda propriedades de o e Object.prototype
p.y = 2; // e tem uma propriedade própria y.
var q = inherit(p); // q herda propriedades de p, o e Object.prototype
q.z = 3; // e tem uma propriedade própria z.
var s = q.toString(); // toString é herdado de Object.prototype
q.x + q.y // => 3: x e y são herdados de o e p