/* tslint:disable */
/* eslint-disable */
/**
 * ORY Oathkeeper
 * ORY Oathkeeper is a reverse proxy that checks the HTTP Authorization for validity against a set of rules. This service uses Hydra to validate access tokens and policies.
 *
 * The version of the OpenAPI document: v0.38.14-beta.1
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface HealthNotReadyStatus
 */
export interface HealthNotReadyStatus {
    /**
     * Errors contains a list of errors that caused the not ready status.
     * @type {{ [key: string]: string; }}
     * @memberof HealthNotReadyStatus
     */
    errors?: { [key: string]: string; };
}
/**
 * 
 * @export
 * @interface HealthStatus
 */
export interface HealthStatus {
    /**
     * Status always contains \"ok\".
     * @type {string}
     * @memberof HealthStatus
     */
    status?: string;
}
/**
 * 
 * @export
 * @interface InlineResponse500
 */
export interface InlineResponse500 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse500
     */
    code?: number;
    /**
     * 
     * @type {Array<object>}
     * @memberof InlineResponse500
     */
    details?: Array<object>;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse500
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse500
     */
    reason?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse500
     */
    request?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse500
     */
    status?: string;
}
/**
 * 
 * @export
 * @interface JsonWebKey
 */
export interface JsonWebKey {
    /**
     * The \"alg\" (algorithm) parameter identifies the algorithm intended for use with the key.  The values used should either be registered in the IANA \"JSON Web Signature and Encryption Algorithms\" registry established by [JWA] or be a value that contains a Collision- Resistant Name.
     * @type {string}
     * @memberof JsonWebKey
     */
    alg?: string;
    /**
     * 
     * @type {string}
     * @memberof JsonWebKey
     */
    crv?: string;
    /**
     * 
     * @type {string}
     * @memberof JsonWebKey
     */
    d?: string;
    /**
     * 
     * @type {string}
     * @memberof JsonWebKey
     */
    dp?: string;
    /**
     * 
     * @type {string}
     * @memberof JsonWebKey
     */
    dq?: string;
    /**
     * 
     * @type {string}
     * @memberof JsonWebKey
     */
    e?: string;
    /**
     * 
     * @type {string}
     * @memberof JsonWebKey
     */
    k?: string;
    /**
     * The \"kid\" (key ID) parameter is used to match a specific key.  This is used, for instance, to choose among a set of keys within a JWK Set during key rollover.  The structure of the \"kid\" value is unspecified.  When \"kid\" values are used within a JWK Set, different keys within the JWK Set SHOULD use distinct \"kid\" values.  (One example in which different keys might use the same \"kid\" value is if they have different \"kty\" (key type) values but are considered to be equivalent alternatives by the application using them.)  The \"kid\" value is a case-sensitive string.
     * @type {string}
     * @memberof JsonWebKey
     */
    kid?: string;
    /**
     * The \"kty\" (key type) parameter identifies the cryptographic algorithm family used with the key, such as \"RSA\" or \"EC\". \"kty\" values should either be registered in the IANA \"JSON Web Key Types\" registry established by [JWA] or be a value that contains a Collision- Resistant Name.  The \"kty\" value is a case-sensitive string.
     * @type {string}
     * @memberof JsonWebKey
     */
    kty?: string;
    /**
     * 
     * @type {string}
     * @memberof JsonWebKey
     */
    n?: string;
    /**
     * 
     * @type {string}
     * @memberof JsonWebKey
     */
    p?: string;
    /**
     * 
     * @type {string}
     * @memberof JsonWebKey
     */
    q?: string;
    /**
     * 
     * @type {string}
     * @memberof JsonWebKey
     */
    qi?: string;
    /**
     * The \"use\" (public key use) parameter identifies the intended use of the public key. The \"use\" parameter is employed to indicate whether a public key is used for encrypting data or verifying the signature on data. Values are commonly \"sig\" (signature) or \"enc\" (encryption).
     * @type {string}
     * @memberof JsonWebKey
     */
    use?: string;
    /**
     * 
     * @type {string}
     * @memberof JsonWebKey
     */
    x?: string;
    /**
     * The \"x5c\" (X.509 certificate chain) parameter contains a chain of one or more PKIX certificates [RFC5280].  The certificate chain is represented as a JSON array of certificate value strings.  Each string in the array is a base64-encoded (Section 4 of [RFC4648] -- not base64url-encoded) DER [ITU.X690.1994] PKIX certificate value. The PKIX certificate containing the key value MUST be the first certificate.
     * @type {Array<string>}
     * @memberof JsonWebKey
     */
    x5c?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof JsonWebKey
     */
    y?: string;
}
/**
 * 
 * @export
 * @interface JsonWebKeySet
 */
export interface JsonWebKeySet {
    /**
     * The value of the \"keys\" parameter is an array of JWK values.  By default, the order of the JWK values within the array does not imply an order of preference among them, although applications of JWK Sets can choose to assign a meaning to the order for their purposes, if desired.
     * @type {Array<JsonWebKey>}
     * @memberof JsonWebKeySet
     */
    keys?: Array<JsonWebKey>;
}
/**
 * 
 * @export
 * @interface Rule
 */
export interface Rule {
    /**
     * Authenticators is a list of authentication handlers that will try and authenticate the provided credentials. Authenticators are checked iteratively from index 0 to n and if the first authenticator to return a positive result will be the one used.  If you want the rule to first check a specific authenticator  before \"falling back\" to others, have that authenticator as the first item in the array.
     * @type {Array<RuleHandler>}
     * @memberof Rule
     */
    authenticators?: Array<RuleHandler>;
    /**
     * 
     * @type {RuleHandler}
     * @memberof Rule
     */
    authorizer?: RuleHandler;
    /**
     * Description is a human readable description of this rule.
     * @type {string}
     * @memberof Rule
     */
    description?: string;
    /**
     * ID is the unique id of the rule. It can be at most 190 characters long, but the layout of the ID is up to you. You will need this ID later on to update or delete the rule.
     * @type {string}
     * @memberof Rule
     */
    id?: string;
    /**
     * 
     * @type {RuleMatch}
     * @memberof Rule
     */
    match?: RuleMatch;
    /**
     * Mutators is a list of mutation handlers that transform the HTTP request. A common use case is generating a new set of credentials (e.g. JWT) which then will be forwarded to the upstream server.  Mutations are performed iteratively from index 0 to n and should all succeed in order for the HTTP request to be forwarded.
     * @type {Array<RuleHandler>}
     * @memberof Rule
     */
    mutators?: Array<RuleHandler>;
    /**
     * 
     * @type {Upstream}
     * @memberof Rule
     */
    upstream?: Upstream;
}
/**
 * 
 * @export
 * @interface RuleHandler
 */
export interface RuleHandler {
    /**
     * Config contains the configuration for the handler. Please read the user guide for a complete list of each handler\'s available settings.
     * @type {object}
     * @memberof RuleHandler
     */
    config?: object;
    /**
     * Handler identifies the implementation which will be used to handle this specific request. Please read the user guide for a complete list of available handlers.
     * @type {string}
     * @memberof RuleHandler
     */
    handler?: string;
}
/**
 * 
 * @export
 * @interface RuleMatch
 */
export interface RuleMatch {
    /**
     * An array of HTTP methods (e.g. GET, POST, PUT, DELETE, ...). When ORY Oathkeeper searches for rules to decide what to do with an incoming request to the proxy server, it compares the HTTP method of the incoming request with the HTTP methods of each rules. If a match is found, the rule is considered a partial match. If the matchesUrl field is satisfied as well, the rule is considered a full match.
     * @type {Array<string>}
     * @memberof RuleMatch
     */
    methods?: Array<string>;
    /**
     * This field represents the URL pattern this rule matches. When ORY Oathkeeper searches for rules to decide what to do with an incoming request to the proxy server, it compares the full request URL (e.g. https://mydomain.com/api/resource) without query parameters of the incoming request with this field. If a match is found, the rule is considered a partial match. If the matchesMethods field is satisfied as well, the rule is considered a full match.  You can use regular expressions in this field to match more than one url. Regular expressions are encapsulated in brackets < and >. The following example matches all paths of the domain `mydomain.com`: `https://mydomain.com/<.*>`.
     * @type {string}
     * @memberof RuleMatch
     */
    url?: string;
}
/**
 * 
 * @export
 * @interface Upstream
 */
export interface Upstream {
    /**
     * PreserveHost, if false (the default), tells ORY Oathkeeper to set the upstream request\'s Host header to the hostname of the API\'s upstream\'s URL. Setting this flag to true instructs ORY Oathkeeper not to do so.
     * @type {boolean}
     * @memberof Upstream
     */
    preserve_host?: boolean;
    /**
     * StripPath if set, replaces the provided path prefix when forwarding the requested URL to the upstream URL.
     * @type {string}
     * @memberof Upstream
     */
    strip_path?: string;
    /**
     * URL is the URL the request will be proxied to.
     * @type {string}
     * @memberof Upstream
     */
    url?: string;
}
/**
 * 
 * @export
 * @interface Version
 */
export interface Version {
    /**
     * Version is the service\'s version.
     * @type {string}
     * @memberof Version
     */
    version?: string;
}

/**
 * ApiApi - axios parameter creator
 * @export
 */
export const ApiApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * > This endpoint works with all HTTP Methods (GET, POST, PUT, ...) and matches every path prefixed with /decision.  This endpoint mirrors the proxy capability of ORY Oathkeeper\'s proxy functionality but instead of forwarding the request to the upstream server, returns 200 (request should be allowed), 401 (unauthorized), or 403 (forbidden) status codes. This endpoint can be used to integrate with other API Proxies like Ambassador, Kong, Envoy, and many more.
         * @summary Access Control Decision API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        decisions: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/decisions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Use this method to retrieve a rule from the storage. If it does not exist you will receive a 404 error.
         * @summary Retrieve a rule
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRule: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getRule', 'id', id)
            const localVarPath = `/rules/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint returns the service version typically notated using semantic versioning.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
         * @summary Get service version
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVersion: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/version`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint returns cryptographic keys that are required to, for example, verify signatures of ID Tokens.
         * @summary Lists cryptographic keys
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWellKnownJSONWebKeys: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/.well-known/jwks.json`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint returns a 200 status code when the HTTP server is up running. This status does currently not include checks whether the database connection is working.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
         * @summary Check alive status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        isInstanceAlive: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/health/alive`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint returns a 200 status code when the HTTP server is up running and the environment dependencies (e.g. the database) are responsive as well.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
         * @summary Check readiness status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        isInstanceReady: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/health/ready`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method returns an array of all rules that are stored in the backend. This is useful if you want to get a full view of what rules you have currently in place.
         * @summary List all rules
         * @param {number} [limit] The maximum amount of rules returned.
         * @param {number} [offset] The offset from where to start looking.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listRules: async (limit?: number, offset?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/rules`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ApiApi - functional programming interface
 * @export
 */
export const ApiApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ApiApiAxiosParamCreator(configuration)
    return {
        /**
         * > This endpoint works with all HTTP Methods (GET, POST, PUT, ...) and matches every path prefixed with /decision.  This endpoint mirrors the proxy capability of ORY Oathkeeper\'s proxy functionality but instead of forwarding the request to the upstream server, returns 200 (request should be allowed), 401 (unauthorized), or 403 (forbidden) status codes. This endpoint can be used to integrate with other API Proxies like Ambassador, Kong, Envoy, and many more.
         * @summary Access Control Decision API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async decisions(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.decisions(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Use this method to retrieve a rule from the storage. If it does not exist you will receive a 404 error.
         * @summary Retrieve a rule
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRule(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Rule>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRule(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint returns the service version typically notated using semantic versioning.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
         * @summary Get service version
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVersion(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Version>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getVersion(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint returns cryptographic keys that are required to, for example, verify signatures of ID Tokens.
         * @summary Lists cryptographic keys
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWellKnownJSONWebKeys(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JsonWebKeySet>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWellKnownJSONWebKeys(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint returns a 200 status code when the HTTP server is up running. This status does currently not include checks whether the database connection is working.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
         * @summary Check alive status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async isInstanceAlive(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HealthStatus>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.isInstanceAlive(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint returns a 200 status code when the HTTP server is up running and the environment dependencies (e.g. the database) are responsive as well.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
         * @summary Check readiness status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async isInstanceReady(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HealthStatus>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.isInstanceReady(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method returns an array of all rules that are stored in the backend. This is useful if you want to get a full view of what rules you have currently in place.
         * @summary List all rules
         * @param {number} [limit] The maximum amount of rules returned.
         * @param {number} [offset] The offset from where to start looking.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listRules(limit?: number, offset?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Rule>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listRules(limit, offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ApiApi - factory interface
 * @export
 */
export const ApiApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ApiApiFp(configuration)
    return {
        /**
         * > This endpoint works with all HTTP Methods (GET, POST, PUT, ...) and matches every path prefixed with /decision.  This endpoint mirrors the proxy capability of ORY Oathkeeper\'s proxy functionality but instead of forwarding the request to the upstream server, returns 200 (request should be allowed), 401 (unauthorized), or 403 (forbidden) status codes. This endpoint can be used to integrate with other API Proxies like Ambassador, Kong, Envoy, and many more.
         * @summary Access Control Decision API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        decisions(options?: any): AxiosPromise<void> {
            return localVarFp.decisions(options).then((request) => request(axios, basePath));
        },
        /**
         * Use this method to retrieve a rule from the storage. If it does not exist you will receive a 404 error.
         * @summary Retrieve a rule
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRule(id: string, options?: any): AxiosPromise<Rule> {
            return localVarFp.getRule(id, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint returns the service version typically notated using semantic versioning.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
         * @summary Get service version
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVersion(options?: any): AxiosPromise<Version> {
            return localVarFp.getVersion(options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint returns cryptographic keys that are required to, for example, verify signatures of ID Tokens.
         * @summary Lists cryptographic keys
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWellKnownJSONWebKeys(options?: any): AxiosPromise<JsonWebKeySet> {
            return localVarFp.getWellKnownJSONWebKeys(options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint returns a 200 status code when the HTTP server is up running. This status does currently not include checks whether the database connection is working.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
         * @summary Check alive status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        isInstanceAlive(options?: any): AxiosPromise<HealthStatus> {
            return localVarFp.isInstanceAlive(options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint returns a 200 status code when the HTTP server is up running and the environment dependencies (e.g. the database) are responsive as well.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
         * @summary Check readiness status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        isInstanceReady(options?: any): AxiosPromise<HealthStatus> {
            return localVarFp.isInstanceReady(options).then((request) => request(axios, basePath));
        },
        /**
         * This method returns an array of all rules that are stored in the backend. This is useful if you want to get a full view of what rules you have currently in place.
         * @summary List all rules
         * @param {number} [limit] The maximum amount of rules returned.
         * @param {number} [offset] The offset from where to start looking.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listRules(limit?: number, offset?: number, options?: any): AxiosPromise<Array<Rule>> {
            return localVarFp.listRules(limit, offset, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ApiApi - object-oriented interface
 * @export
 * @class ApiApi
 * @extends {BaseAPI}
 */
export class ApiApi extends BaseAPI {
    /**
     * > This endpoint works with all HTTP Methods (GET, POST, PUT, ...) and matches every path prefixed with /decision.  This endpoint mirrors the proxy capability of ORY Oathkeeper\'s proxy functionality but instead of forwarding the request to the upstream server, returns 200 (request should be allowed), 401 (unauthorized), or 403 (forbidden) status codes. This endpoint can be used to integrate with other API Proxies like Ambassador, Kong, Envoy, and many more.
     * @summary Access Control Decision API
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiApi
     */
    public decisions(options?: any) {
        return ApiApiFp(this.configuration).decisions(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Use this method to retrieve a rule from the storage. If it does not exist you will receive a 404 error.
     * @summary Retrieve a rule
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiApi
     */
    public getRule(id: string, options?: any) {
        return ApiApiFp(this.configuration).getRule(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint returns the service version typically notated using semantic versioning.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
     * @summary Get service version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiApi
     */
    public getVersion(options?: any) {
        return ApiApiFp(this.configuration).getVersion(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint returns cryptographic keys that are required to, for example, verify signatures of ID Tokens.
     * @summary Lists cryptographic keys
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiApi
     */
    public getWellKnownJSONWebKeys(options?: any) {
        return ApiApiFp(this.configuration).getWellKnownJSONWebKeys(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint returns a 200 status code when the HTTP server is up running. This status does currently not include checks whether the database connection is working.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
     * @summary Check alive status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiApi
     */
    public isInstanceAlive(options?: any) {
        return ApiApiFp(this.configuration).isInstanceAlive(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint returns a 200 status code when the HTTP server is up running and the environment dependencies (e.g. the database) are responsive as well.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
     * @summary Check readiness status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiApi
     */
    public isInstanceReady(options?: any) {
        return ApiApiFp(this.configuration).isInstanceReady(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method returns an array of all rules that are stored in the backend. This is useful if you want to get a full view of what rules you have currently in place.
     * @summary List all rules
     * @param {number} [limit] The maximum amount of rules returned.
     * @param {number} [offset] The offset from where to start looking.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiApi
     */
    public listRules(limit?: number, offset?: number, options?: any) {
        return ApiApiFp(this.configuration).listRules(limit, offset, options).then((request) => request(this.axios, this.basePath));
    }
}


