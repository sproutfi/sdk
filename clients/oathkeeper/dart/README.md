# ory_oathkeeper_client
ORY Oathkeeper is a reverse proxy that checks the HTTP Authorization for validity against a set of rules. This service uses Hydra to validate access tokens and policies.

This Dart package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: v0.38.19-beta.1
- Build package: org.openapitools.codegen.languages.DartDioClientCodegen
For more information, please visit [https://www.ory.am](https://www.ory.am)

## Requirements

Dart 2.7.0 or later OR Flutter 1.12 or later

## Installation & Usage

### Github
If this Dart package is published to Github, please include the following in pubspec.yaml
```
name: ory_oathkeeper_client
version: 0.38.19-beta.1
description: OpenAPI API client
dependencies:
  ory_oathkeeper_client:
    git: https://github.com/ory/sdk.git
      version: 'any'
```

### Local
To use the package in your local drive, please include the following in pubspec.yaml
```
dependencies:
  ory_oathkeeper_client:
    path: /path/to/ory_oathkeeper_client
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```dart
import 'package:ory_oathkeeper_client/api.dart';


final api = ApiApi();

try {
    api.decisions();
} catch (e) {
    print("Exception when calling ApiApi->decisions: $e\n");
}

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ApiApi* | [**decisions**](doc/ApiApi.md#decisions) | **GET** /decisions | Access Control Decision API
*ApiApi* | [**getRule**](doc/ApiApi.md#getrule) | **GET** /rules/{id} | Retrieve a Rule
*ApiApi* | [**getVersion**](doc/ApiApi.md#getversion) | **GET** /version | Get Service Version
*ApiApi* | [**getWellKnownJSONWebKeys**](doc/ApiApi.md#getwellknownjsonwebkeys) | **GET** /.well-known/jwks.json | Lists Cryptographic Keys
*ApiApi* | [**isInstanceAlive**](doc/ApiApi.md#isinstancealive) | **GET** /health/alive | Check Alive Status
*ApiApi* | [**isInstanceReady**](doc/ApiApi.md#isinstanceready) | **GET** /health/ready | Check Readiness Status
*ApiApi* | [**listRules**](doc/ApiApi.md#listrules) | **GET** /rules | List All Rules


## Documentation For Models

 - [HealthNotReadyStatus](doc/HealthNotReadyStatus.md)
 - [HealthStatus](doc/HealthStatus.md)
 - [InlineResponse500](doc/InlineResponse500.md)
 - [JsonWebKey](doc/JsonWebKey.md)
 - [JsonWebKeySet](doc/JsonWebKeySet.md)
 - [Rule](doc/Rule.md)
 - [RuleHandler](doc/RuleHandler.md)
 - [RuleMatch](doc/RuleMatch.md)
 - [Upstream](doc/Upstream.md)
 - [Version](doc/Version.md)


## Documentation For Authorization

 All endpoints do not require authorization.


## Author

hi@ory.am


