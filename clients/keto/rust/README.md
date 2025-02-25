# Rust API client for ory-keto-client

Ory Keto is a cloud native access control server providing best-practice patterns (RBAC, ABAC, ACL, AWS IAM Policies, Kubernetes Roles, ...) via REST APIs.

## Overview

This API client was generated by the [OpenAPI Generator](https://openapi-generator.tech) project.  By using the [openapi-spec](https://openapis.org) from a remote server, you can easily generate an API client.

- API version: v0.7.0-alpha.1
- Package version: v0.7.0-alpha.1
- Build package: org.openapitools.codegen.languages.RustClientCodegen
For more information, please visit [https://www.ory.sh](https://www.ory.sh)

## Installation

Put the package under your project folder and add the following to `Cargo.toml` under `[dependencies]`:

```
    openapi = { path = "./generated" }
```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*HealthApi* | [**is_instance_alive**](docs/HealthApi.md#is_instance_alive) | **GET** /health/alive | Check alive status
*HealthApi* | [**is_instance_ready**](docs/HealthApi.md#is_instance_ready) | **GET** /health/ready | Check readiness status
*ReadApi* | [**get_check**](docs/ReadApi.md#get_check) | **GET** /check | Check a relation tuple
*ReadApi* | [**get_expand**](docs/ReadApi.md#get_expand) | **GET** /expand | Expand a Relation Tuple
*ReadApi* | [**get_relation_tuples**](docs/ReadApi.md#get_relation_tuples) | **GET** /relation-tuples | Query relation tuples
*ReadApi* | [**post_check**](docs/ReadApi.md#post_check) | **POST** /check | Check a relation tuple
*VersionApi* | [**get_version**](docs/VersionApi.md#get_version) | **GET** /version | Get service version
*WriteApi* | [**create_relation_tuple**](docs/WriteApi.md#create_relation_tuple) | **PUT** /relation-tuples | Create a Relation Tuple
*WriteApi* | [**delete_relation_tuple**](docs/WriteApi.md#delete_relation_tuple) | **DELETE** /relation-tuples | Delete a Relation Tuple
*WriteApi* | [**patch_relation_tuples**](docs/WriteApi.md#patch_relation_tuples) | **PATCH** /relation-tuples | Patch Multiple Relation Tuples


## Documentation For Models

 - [ExpandTree](docs/ExpandTree.md)
 - [GetCheckResponse](docs/GetCheckResponse.md)
 - [GetRelationTuplesResponse](docs/GetRelationTuplesResponse.md)
 - [HealthNotReadyStatus](docs/HealthNotReadyStatus.md)
 - [HealthStatus](docs/HealthStatus.md)
 - [InlineResponse400](docs/InlineResponse400.md)
 - [InternalRelationTuple](docs/InternalRelationTuple.md)
 - [PatchDelta](docs/PatchDelta.md)
 - [RelationQuery](docs/RelationQuery.md)
 - [SubjectSet](docs/SubjectSet.md)
 - [Version](docs/Version.md)


To get access to the crate's generated documentation, use:

```
cargo doc --open
```

## Author

hi@ory.sh

