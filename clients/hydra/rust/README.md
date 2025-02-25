# Rust API client for ory-hydra-client

Welcome to the ORY Hydra HTTP API documentation. You will find documentation for all HTTP APIs here.

## Overview

This API client was generated by the [OpenAPI Generator](https://openapi-generator.tech) project.  By using the [openapi-spec](https://openapis.org) from a remote server, you can easily generate an API client.

- API version: v1.10.6
- Package version: v1.10.6
- Build package: org.openapitools.codegen.languages.RustClientCodegen

## Installation

Put the package under your project folder and add the following to `Cargo.toml` under `[dependencies]`:

```
    openapi = { path = "./generated" }
```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AdminApi* | [**accept_consent_request**](docs/AdminApi.md#accept_consent_request) | **PUT** /oauth2/auth/requests/consent/accept | Accept a Consent Request
*AdminApi* | [**accept_login_request**](docs/AdminApi.md#accept_login_request) | **PUT** /oauth2/auth/requests/login/accept | Accept a Login Request
*AdminApi* | [**accept_logout_request**](docs/AdminApi.md#accept_logout_request) | **PUT** /oauth2/auth/requests/logout/accept | Accept a Logout Request
*AdminApi* | [**create_json_web_key_set**](docs/AdminApi.md#create_json_web_key_set) | **POST** /keys/{set} | Generate a New JSON Web Key
*AdminApi* | [**create_o_auth2_client**](docs/AdminApi.md#create_o_auth2_client) | **POST** /clients | Create an OAuth 2.0 Client
*AdminApi* | [**delete_json_web_key**](docs/AdminApi.md#delete_json_web_key) | **DELETE** /keys/{set}/{kid} | Delete a JSON Web Key
*AdminApi* | [**delete_json_web_key_set**](docs/AdminApi.md#delete_json_web_key_set) | **DELETE** /keys/{set} | Delete a JSON Web Key Set
*AdminApi* | [**delete_o_auth2_client**](docs/AdminApi.md#delete_o_auth2_client) | **DELETE** /clients/{id} | Deletes an OAuth 2.0 Client
*AdminApi* | [**delete_o_auth2_token**](docs/AdminApi.md#delete_o_auth2_token) | **DELETE** /oauth2/tokens | Delete OAuth2 Access Tokens from a Client
*AdminApi* | [**flush_inactive_o_auth2_tokens**](docs/AdminApi.md#flush_inactive_o_auth2_tokens) | **POST** /oauth2/flush | Flush Expired OAuth2 Access Tokens
*AdminApi* | [**get_consent_request**](docs/AdminApi.md#get_consent_request) | **GET** /oauth2/auth/requests/consent | Get Consent Request Information
*AdminApi* | [**get_json_web_key**](docs/AdminApi.md#get_json_web_key) | **GET** /keys/{set}/{kid} | Fetch a JSON Web Key
*AdminApi* | [**get_json_web_key_set**](docs/AdminApi.md#get_json_web_key_set) | **GET** /keys/{set} | Retrieve a JSON Web Key Set
*AdminApi* | [**get_login_request**](docs/AdminApi.md#get_login_request) | **GET** /oauth2/auth/requests/login | Get a Login Request
*AdminApi* | [**get_logout_request**](docs/AdminApi.md#get_logout_request) | **GET** /oauth2/auth/requests/logout | Get a Logout Request
*AdminApi* | [**get_o_auth2_client**](docs/AdminApi.md#get_o_auth2_client) | **GET** /clients/{id} | Get an OAuth 2.0 Client.
*AdminApi* | [**get_version**](docs/AdminApi.md#get_version) | **GET** /version | Get Service Version
*AdminApi* | [**introspect_o_auth2_token**](docs/AdminApi.md#introspect_o_auth2_token) | **POST** /oauth2/introspect | Introspect OAuth2 Tokens
*AdminApi* | [**is_instance_alive**](docs/AdminApi.md#is_instance_alive) | **GET** /health/alive | Check Alive Status
*AdminApi* | [**list_o_auth2_clients**](docs/AdminApi.md#list_o_auth2_clients) | **GET** /clients | List OAuth 2.0 Clients
*AdminApi* | [**list_subject_consent_sessions**](docs/AdminApi.md#list_subject_consent_sessions) | **GET** /oauth2/auth/sessions/consent | Lists All Consent Sessions of a Subject
*AdminApi* | [**patch_o_auth2_client**](docs/AdminApi.md#patch_o_auth2_client) | **PATCH** /clients/{id} | Patch an OAuth 2.0 Client
*AdminApi* | [**reject_consent_request**](docs/AdminApi.md#reject_consent_request) | **PUT** /oauth2/auth/requests/consent/reject | Reject a Consent Request
*AdminApi* | [**reject_login_request**](docs/AdminApi.md#reject_login_request) | **PUT** /oauth2/auth/requests/login/reject | Reject a Login Request
*AdminApi* | [**reject_logout_request**](docs/AdminApi.md#reject_logout_request) | **PUT** /oauth2/auth/requests/logout/reject | Reject a Logout Request
*AdminApi* | [**revoke_authentication_session**](docs/AdminApi.md#revoke_authentication_session) | **DELETE** /oauth2/auth/sessions/login | Invalidates All Login Sessions of a Certain User Invalidates a Subject's Authentication Session
*AdminApi* | [**revoke_consent_sessions**](docs/AdminApi.md#revoke_consent_sessions) | **DELETE** /oauth2/auth/sessions/consent | Revokes Consent Sessions of a Subject for a Specific OAuth 2.0 Client
*AdminApi* | [**update_json_web_key**](docs/AdminApi.md#update_json_web_key) | **PUT** /keys/{set}/{kid} | Update a JSON Web Key
*AdminApi* | [**update_json_web_key_set**](docs/AdminApi.md#update_json_web_key_set) | **PUT** /keys/{set} | Update a JSON Web Key Set
*AdminApi* | [**update_o_auth2_client**](docs/AdminApi.md#update_o_auth2_client) | **PUT** /clients/{id} | Update an OAuth 2.0 Client
*MetadataApi* | [**prometheus**](docs/MetadataApi.md#prometheus) | **GET** /metrics/prometheus | Get snapshot metrics from the service. If you're using k8s, you can then add annotations to your deployment like so:
*PublicApi* | [**disconnect_user**](docs/PublicApi.md#disconnect_user) | **GET** /oauth2/sessions/logout | OpenID Connect Front-Backchannel Enabled Logout
*PublicApi* | [**discover_open_id_configuration**](docs/PublicApi.md#discover_open_id_configuration) | **GET** /.well-known/openid-configuration | OpenID Connect Discovery
*PublicApi* | [**is_instance_ready**](docs/PublicApi.md#is_instance_ready) | **GET** /health/ready | Check Readiness Status
*PublicApi* | [**oauth2_token**](docs/PublicApi.md#oauth2_token) | **POST** /oauth2/token | The OAuth 2.0 Token Endpoint
*PublicApi* | [**oauth_auth**](docs/PublicApi.md#oauth_auth) | **GET** /oauth2/auth | The OAuth 2.0 Authorize Endpoint
*PublicApi* | [**revoke_o_auth2_token**](docs/PublicApi.md#revoke_o_auth2_token) | **POST** /oauth2/revoke | Revoke OAuth2 Tokens
*PublicApi* | [**userinfo**](docs/PublicApi.md#userinfo) | **GET** /userinfo | OpenID Connect Userinfo
*PublicApi* | [**well_known**](docs/PublicApi.md#well_known) | **GET** /.well-known/jwks.json | JSON Web Keys Discovery


## Documentation For Models

 - [AcceptConsentRequest](docs/AcceptConsentRequest.md)
 - [AcceptLoginRequest](docs/AcceptLoginRequest.md)
 - [CompletedRequest](docs/CompletedRequest.md)
 - [ConsentRequest](docs/ConsentRequest.md)
 - [ConsentRequestSession](docs/ConsentRequestSession.md)
 - [ContainerWaitOkBodyError](docs/ContainerWaitOkBodyError.md)
 - [FlushInactiveOAuth2TokensRequest](docs/FlushInactiveOAuth2TokensRequest.md)
 - [HealthNotReadyStatus](docs/HealthNotReadyStatus.md)
 - [HealthStatus](docs/HealthStatus.md)
 - [JsonError](docs/JsonError.md)
 - [JsonWebKey](docs/JsonWebKey.md)
 - [JsonWebKeySet](docs/JsonWebKeySet.md)
 - [JsonWebKeySetGeneratorRequest](docs/JsonWebKeySetGeneratorRequest.md)
 - [LoginRequest](docs/LoginRequest.md)
 - [LogoutRequest](docs/LogoutRequest.md)
 - [OAuth2Client](docs/OAuth2Client.md)
 - [OAuth2TokenIntrospection](docs/OAuth2TokenIntrospection.md)
 - [Oauth2TokenResponse](docs/Oauth2TokenResponse.md)
 - [OpenIdConnectContext](docs/OpenIdConnectContext.md)
 - [PatchDocument](docs/PatchDocument.md)
 - [PluginConfig](docs/PluginConfig.md)
 - [PluginConfigArgs](docs/PluginConfigArgs.md)
 - [PluginConfigInterface](docs/PluginConfigInterface.md)
 - [PluginConfigLinux](docs/PluginConfigLinux.md)
 - [PluginConfigNetwork](docs/PluginConfigNetwork.md)
 - [PluginConfigRootfs](docs/PluginConfigRootfs.md)
 - [PluginConfigUser](docs/PluginConfigUser.md)
 - [PluginDevice](docs/PluginDevice.md)
 - [PluginEnv](docs/PluginEnv.md)
 - [PluginInterfaceType](docs/PluginInterfaceType.md)
 - [PluginMount](docs/PluginMount.md)
 - [PluginSettings](docs/PluginSettings.md)
 - [PreviousConsentSession](docs/PreviousConsentSession.md)
 - [RejectRequest](docs/RejectRequest.md)
 - [RequestWasHandledResponse](docs/RequestWasHandledResponse.md)
 - [UserinfoResponse](docs/UserinfoResponse.md)
 - [Version](docs/Version.md)
 - [Volume](docs/Volume.md)
 - [VolumeUsageData](docs/VolumeUsageData.md)
 - [WellKnown](docs/WellKnown.md)


To get access to the crate's generated documentation, use:

```
cargo doc --open
```

## Author



