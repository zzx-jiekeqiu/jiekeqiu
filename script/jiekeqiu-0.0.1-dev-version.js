var $_$ = $Q = function (node, scope) {
    return new JKQ(node, scope);
};

function JKQ(node, scope) {
    this.length = 0;

    this.init(node, scope);
}


JKQ.prototype = Object.create(Array.prototype);

JKQ.prototype.init = function(node,scope) {

    this.catchItem(node, scope);
}

JKQ.prototype.catchItem = function(node, scope) {
    let tempNodes = null;

    if (typeof node !== 'string') {
        this[0] = node;
        this.length++;
        return;
    }

    if (scope) {
        tempNodes = scope.querySelectorAll(node);
    } else {
        tempNodes = document.querySelectorAll(node);
    }

    for (let i of tempNodes) {
        this[this.length] = i;
        this.length++;
    }
}

JKQ.prototype.A_A = JKQ.prototype.add = function (node, scope) {

    this.catchItem(node, scope);

    return this;
}

JKQ.prototype.T_T = JKQ.prototype.html = function (param) {
    if(param === undefined) {
        return this[0].innerHTML;
    } else {
        if (typeof param === 'string') {
            for(let i=0; i<this.length; i++) {
                this[i].innerHTML = param;
            }
        } else if (typeof param === 'function') {
            for(let i=0; i<this.length; i++) {
                this[i].innerHTML = param(i, this[i].innerHTML);
            }
        }
            return this;
    }
}

JKQ.prototype.V_V = JKQ.prototype.val = function (param) {
    if(param === undefined) {
        return this[0].value;
    } else {
        if (typeof param === 'string') {
            for(let i=0; i<this.length; i++) {
                this[i].value = param;
            }
        } else if (typeof param === 'function') {
            for(let i=0; i<this.length; i++) {
                this[i].value = param(i, this[i].value);
            }
        }
            return this;
    }
}

//TODO: 自动加单位
JKQ.prototype.S_S = JKQ.prototype.css = function (param) {
    if(typeof param === 'string') {
        return getComputedStyle(this[0])[param];
    } else if (typeof param === 'object') {
        for(let i=0; i<this.length; i++) {
            for(let j in param) {
                this[i].style[j] = param[j];
            }
        }
        return this;
    }
}

JKQ.prototype.P_P = JKQ.prototype.prop = function (prop, value) {
    if(value === undefined) {
        return this[0][prop];
    } else {
        for(let i=0; i<this.length; i++) {
            this[i][prop] = value;
        }
        return this;
    }
}

JKQ.prototype.R_R = JKQ.prototype.attr = function (attr, value) {
    if(value === undefined) {
        return this[0].getAttribute(attr);
    } else {
        for(let i=0; i<this.length; i++) {
            this[i].setAttribute(attr, value);
        }
        return this;
    }
}

//TODO: toggleClasses
JKQ.prototype.A_C = JKQ.prototype.addClass = function (className) {
    const regex = new RegExp(`\\b${className}\\b`);

    for(let i=0; i<this.length; i++) {
        if(regex.test(this[i].className)) {
            continue;
        } else {
            this[i].className += ` ${className}`;
        }
    }
    return this;
}

JKQ.prototype.R_C = JKQ.prototype.removeClass = function (className) {
    const regex = new RegExp(`\\b${className}\\b`);

    for(let i=0; i<this.length; i++) {
        if(regex.test(this[i].className)) {
            this[i].className = this[i].className.replace(regex, '');
        } else {
            continue;
        }
    }
    return this;
}