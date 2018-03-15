const host = window.location.hostname;

const hosts = {
    'dev': 'localhost',
    'public': 'localtunnel.me'
};

const root = {
    'dev': '',
    'public': ''
}

export const apiLinks = {
    dev: 'http://localhost:1300/',
    public: '/'
};

export let currentHost;

for (let key in hosts) {
    if (host.includes(hosts[key])) currentHost = key;
}

console.log(currentHost);
export let rootFolder = root[currentHost];
