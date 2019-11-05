
// AWS SDK for JavaScript v2.235.1
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// License at https://sdk.amazonaws.com/js/BUNDLE_LICENSE.txt
! function() {
	function e(t, r, a) {
		function i(o, n) {
			if (!r[o]) {
				if (!t[o]) {
					var u = "function" == typeof require && require;
					if (!n && u) return u(o, !0);
					if (s) return s(o, !0);
					var p = new Error("Cannot find module '" + o + "'");
					throw p.code = "MODULE_NOT_FOUND", p
				}
				var m = r[o] = {
					exports: {}
				};
				t[o][0].call(m.exports, function(e) {
					return i(t[o][1][e] || e)
				}, m, m.exports, e, t, r, a)
			}
			return r[o].exports
		}
		for (var s = "function" == typeof require && require, o = 0; o < a.length; o++) i(a[o]);
		return i
	}
	return e
}()({
	1: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2015-12-08",
				endpointPrefix: "acm",
				jsonVersion: "1.1",
				protocol: "json",
				serviceAbbreviation: "ACM",
				serviceFullName: "AWS Certificate Manager",
				serviceId: "ACM",
				signatureVersion: "v4",
				targetPrefix: "CertificateManager",
				uid: "acm-2015-12-08"
			},
			operations: {
				AddTagsToCertificate: {
					input: {
						type: "structure",
						required: ["CertificateArn", "Tags"],
						members: {
							CertificateArn: {},
							Tags: {
								shape: "S3"
							}
						}
					}
				},
				DeleteCertificate: {
					input: {
						type: "structure",
						required: ["CertificateArn"],
						members: {
							CertificateArn: {}
						}
					}
				},
				DescribeCertificate: {
					input: {
						type: "structure",
						required: ["CertificateArn"],
						members: {
							CertificateArn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Certificate: {
								type: "structure",
								members: {
									CertificateArn: {},
									DomainName: {},
									SubjectAlternativeNames: {
										shape: "Sc"
									},
									DomainValidationOptions: {
										shape: "Sd"
									},
									Serial: {},
									Subject: {},
									Issuer: {},
									CreatedAt: {
										type: "timestamp"
									},
									IssuedAt: {
										type: "timestamp"
									},
									ImportedAt: {
										type: "timestamp"
									},
									Status: {},
									RevokedAt: {
										type: "timestamp"
									},
									RevocationReason: {},
									NotBefore: {
										type: "timestamp"
									},
									NotAfter: {
										type: "timestamp"
									},
									KeyAlgorithm: {},
									SignatureAlgorithm: {},
									InUseBy: {
										type: "list",
										member: {}
									},
									FailureReason: {},
									Type: {},
									RenewalSummary: {
										type: "structure",
										required: ["RenewalStatus", "DomainValidationOptions"],
										members: {
											RenewalStatus: {},
											DomainValidationOptions: {
												shape: "Sd"
											}
										}
									},
									KeyUsages: {
										type: "list",
										member: {
											type: "structure",
											members: {
												Name: {}
											}
										}
									},
									ExtendedKeyUsages: {
										type: "list",
										member: {
											type: "structure",
											members: {
												Name: {},
												OID: {}
											}
										}
									},
									CertificateAuthorityArn: {},
									RenewalEligibility: {},
									Options: {
										shape: "S11"
									}
								}
							}
						}
					}
				},
				ExportCertificate: {
					input: {
						type: "structure",
						required: ["CertificateArn", "Passphrase"],
						members: {
							CertificateArn: {},
							Passphrase: {
								type: "blob",
								sensitive: !0
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Certificate: {},
							CertificateChain: {},
							PrivateKey: {
								type: "string",
								sensitive: !0
							}
						}
					}
				},
				GetCertificate: {
					input: {
						type: "structure",
						required: ["CertificateArn"],
						members: {
							CertificateArn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Certificate: {},
							CertificateChain: {}
						}
					}
				},
				ImportCertificate: {
					input: {
						type: "structure",
						required: ["Certificate", "PrivateKey"],
						members: {
							CertificateArn: {},
							Certificate: {
								type: "blob"
							},
							PrivateKey: {
								type: "blob",
								sensitive: !0
							},
							CertificateChain: {
								type: "blob"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							CertificateArn: {}
						}
					}
				},
				ListCertificates: {
					input: {
						type: "structure",
						members: {
							CertificateStatuses: {
								type: "list",
								member: {}
							},
							Includes: {
								type: "structure",
								members: {
									extendedKeyUsage: {
										type: "list",
										member: {}
									},
									keyUsage: {
										type: "list",
										member: {}
									},
									keyTypes: {
										type: "list",
										member: {}
									}
								}
							},
							NextToken: {},
							MaxItems: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							NextToken: {},
							CertificateSummaryList: {
								type: "list",
								member: {
									type: "structure",
									members: {
										CertificateArn: {},
										DomainName: {}
									}
								}
							}
						}
					}
				},
				ListTagsForCertificate: {
					input: {
						type: "structure",
						required: ["CertificateArn"],
						members: {
							CertificateArn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Tags: {
								shape: "S3"
							}
						}
					}
				},
				RemoveTagsFromCertificate: {
					input: {
						type: "structure",
						required: ["CertificateArn", "Tags"],
						members: {
							CertificateArn: {},
							Tags: {
								shape: "S3"
							}
						}
					}
				},
				RequestCertificate: {
					input: {
						type: "structure",
						required: ["DomainName"],
						members: {
							DomainName: {},
							ValidationMethod: {},
							SubjectAlternativeNames: {
								shape: "Sc"
							},
							IdempotencyToken: {},
							DomainValidationOptions: {
								type: "list",
								member: {
									type: "structure",
									required: ["DomainName", "ValidationDomain"],
									members: {
										DomainName: {},
										ValidationDomain: {}
									}
								}
							},
							Options: {
								shape: "S11"
							},
							CertificateAuthorityArn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							CertificateArn: {}
						}
					}
				},
				ResendValidationEmail: {
					input: {
						type: "structure",
						required: ["CertificateArn", "Domain", "ValidationDomain"],
						members: {
							CertificateArn: {},
							Domain: {},
							ValidationDomain: {}
						}
					}
				},
				UpdateCertificateOptions: {
					input: {
						type: "structure",
						required: ["CertificateArn", "Options"],
						members: {
							CertificateArn: {},
							Options: {
								shape: "S11"
							}
						}
					}
				}
			},
			shapes: {
				S3: {
					type: "list",
					member: {
						type: "structure",
						required: ["Key"],
						members: {
							Key: {},
							Value: {}
						}
					}
				},
				Sc: {
					type: "list",
					member: {}
				},
				Sd: {
					type: "list",
					member: {
						type: "structure",
						required: ["DomainName"],
						members: {
							DomainName: {},
							ValidationEmails: {
								type: "list",
								member: {}
							},
							ValidationDomain: {},
							ValidationStatus: {},
							ResourceRecord: {
								type: "structure",
								required: ["Name", "Type", "Value"],
								members: {
									Name: {},
									Type: {},
									Value: {}
								}
							},
							ValidationMethod: {}
						}
					}
				},
				S11: {
					type: "structure",
					members: {
						CertificateTransparencyLoggingPreference: {}
					}
				}
			}
		}
	}, {}],
	2: [function(e, t, r) {
		t.exports = {
			pagination: {
				ListCertificates: {
					input_token: "NextToken",
					limit_key: "MaxItems",
					output_token: "NextToken",
					result_key: "CertificateSummaryList"
				}
			}
		}
	}, {}],
	3: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2015-07-09",
				endpointPrefix: "apigateway",
				protocol: "rest-json",
				serviceFullName: "Amazon API Gateway",
				serviceId: "API Gateway",
				signatureVersion: "v4",
				uid: "apigateway-2015-07-09"
			},
			operations: {
				CreateApiKey: {
					http: {
						requestUri: "/apikeys",
						responseCode: 201
					},
					input: {
						type: "structure",
						members: {
							name: {},
							description: {},
							enabled: {
								type: "boolean"
							},
							generateDistinctId: {
								type: "boolean"
							},
							value: {},
							stageKeys: {
								type: "list",
								member: {
									type: "structure",
									members: {
										restApiId: {},
										stageName: {}
									}
								}
							},
							customerId: {}
						}
					},
					output: {
						shape: "S6"
					}
				},
				CreateAuthorizer: {
					http: {
						requestUri: "/restapis/{restapi_id}/authorizers",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["restApiId", "name", "type"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							name: {},
							type: {},
							providerARNs: {
								shape: "Sb"
							},
							authType: {},
							authorizerUri: {},
							authorizerCredentials: {},
							identitySource: {},
							identityValidationExpression: {},
							authorizerResultTtlInSeconds: {
								type: "integer"
							}
						}
					},
					output: {
						shape: "Se"
					}
				},
				CreateBasePathMapping: {
					http: {
						requestUri: "/domainnames/{domain_name}/basepathmappings",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["domainName", "restApiId"],
						members: {
							domainName: {
								location: "uri",
								locationName: "domain_name"
							},
							basePath: {},
							restApiId: {},
							stage: {}
						}
					},
					output: {
						shape: "Sg"
					}
				},
				CreateDeployment: {
					http: {
						requestUri: "/restapis/{restapi_id}/deployments",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["restApiId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							stageName: {},
							stageDescription: {},
							description: {},
							cacheClusterEnabled: {
								type: "boolean"
							},
							cacheClusterSize: {},
							variables: {
								shape: "Sk"
							},
							canarySettings: {
								type: "structure",
								members: {
									percentTraffic: {
										type: "double"
									},
									stageVariableOverrides: {
										shape: "Sk"
									},
									useStageCache: {
										type: "boolean"
									}
								}
							}
						}
					},
					output: {
						shape: "Sn"
					}
				},
				CreateDocumentationPart: {
					http: {
						requestUri: "/restapis/{restapi_id}/documentation/parts",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["restApiId", "location", "properties"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							location: {
								shape: "Ss"
							},
							properties: {}
						}
					},
					output: {
						shape: "Sv"
					}
				},
				CreateDocumentationVersion: {
					http: {
						requestUri: "/restapis/{restapi_id}/documentation/versions",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["restApiId", "documentationVersion"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							documentationVersion: {},
							stageName: {},
							description: {}
						}
					},
					output: {
						shape: "Sx"
					}
				},
				CreateDomainName: {
					http: {
						requestUri: "/domainnames",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["domainName"],
						members: {
							domainName: {},
							certificateName: {},
							certificateBody: {},
							certificatePrivateKey: {},
							certificateChain: {},
							certificateArn: {},
							regionalCertificateName: {},
							regionalCertificateArn: {},
							endpointConfiguration: {
								shape: "Sz"
							}
						}
					},
					output: {
						shape: "S12"
					}
				},
				CreateModel: {
					http: {
						requestUri: "/restapis/{restapi_id}/models",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["restApiId", "name", "contentType"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							name: {},
							description: {},
							schema: {},
							contentType: {}
						}
					},
					output: {
						shape: "S14"
					}
				},
				CreateRequestValidator: {
					http: {
						requestUri: "/restapis/{restapi_id}/requestvalidators",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["restApiId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							name: {},
							validateRequestBody: {
								type: "boolean"
							},
							validateRequestParameters: {
								type: "boolean"
							}
						}
					},
					output: {
						shape: "S16"
					}
				},
				CreateResource: {
					http: {
						requestUri: "/restapis/{restapi_id}/resources/{parent_id}",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["restApiId", "parentId", "pathPart"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							parentId: {
								location: "uri",
								locationName: "parent_id"
							},
							pathPart: {}
						}
					},
					output: {
						shape: "S18"
					}
				},
				CreateRestApi: {
					http: {
						requestUri: "/restapis",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["name"],
						members: {
							name: {},
							description: {},
							version: {},
							cloneFrom: {},
							binaryMediaTypes: {
								shape: "S8"
							},
							minimumCompressionSize: {
								type: "integer"
							},
							apiKeySource: {},
							endpointConfiguration: {
								shape: "Sz"
							},
							policy: {}
						}
					},
					output: {
						shape: "S1o"
					}
				},
				CreateStage: {
					http: {
						requestUri: "/restapis/{restapi_id}/stages",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["restApiId", "stageName", "deploymentId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							stageName: {},
							deploymentId: {},
							description: {},
							cacheClusterEnabled: {
								type: "boolean"
							},
							cacheClusterSize: {},
							variables: {
								shape: "Sk"
							},
							documentationVersion: {},
							canarySettings: {
								shape: "S1q"
							},
							tags: {
								shape: "Sk"
							}
						}
					},
					output: {
						shape: "S1r"
					}
				},
				CreateUsagePlan: {
					http: {
						requestUri: "/usageplans",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["name"],
						members: {
							name: {},
							description: {},
							apiStages: {
								shape: "S1y"
							},
							throttle: {
								shape: "S20"
							},
							quota: {
								shape: "S21"
							}
						}
					},
					output: {
						shape: "S23"
					}
				},
				CreateUsagePlanKey: {
					http: {
						requestUri: "/usageplans/{usageplanId}/keys",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["usagePlanId", "keyId", "keyType"],
						members: {
							usagePlanId: {
								location: "uri",
								locationName: "usageplanId"
							},
							keyId: {},
							keyType: {}
						}
					},
					output: {
						shape: "S25"
					}
				},
				CreateVpcLink: {
					http: {
						requestUri: "/vpclinks",
						responseCode: 202
					},
					input: {
						type: "structure",
						required: ["name", "targetArns"],
						members: {
							name: {},
							description: {},
							targetArns: {
								shape: "S8"
							}
						}
					},
					output: {
						shape: "S27"
					}
				},
				DeleteApiKey: {
					http: {
						method: "DELETE",
						requestUri: "/apikeys/{api_Key}",
						responseCode: 202
					},
					input: {
						type: "structure",
						required: ["apiKey"],
						members: {
							apiKey: {
								location: "uri",
								locationName: "api_Key"
							}
						}
					}
				},
				DeleteAuthorizer: {
					http: {
						method: "DELETE",
						requestUri: "/restapis/{restapi_id}/authorizers/{authorizer_id}",
						responseCode: 202
					},
					input: {
						type: "structure",
						required: ["restApiId", "authorizerId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							authorizerId: {
								location: "uri",
								locationName: "authorizer_id"
							}
						}
					}
				},
				DeleteBasePathMapping: {
					http: {
						method: "DELETE",
						requestUri: "/domainnames/{domain_name}/basepathmappings/{base_path}",
						responseCode: 202
					},
					input: {
						type: "structure",
						required: ["domainName", "basePath"],
						members: {
							domainName: {
								location: "uri",
								locationName: "domain_name"
							},
							basePath: {
								location: "uri",
								locationName: "base_path"
							}
						}
					}
				},
				DeleteClientCertificate: {
					http: {
						method: "DELETE",
						requestUri: "/clientcertificates/{clientcertificate_id}",
						responseCode: 202
					},
					input: {
						type: "structure",
						required: ["clientCertificateId"],
						members: {
							clientCertificateId: {
								location: "uri",
								locationName: "clientcertificate_id"
							}
						}
					}
				},
				DeleteDeployment: {
					http: {
						method: "DELETE",
						requestUri: "/restapis/{restapi_id}/deployments/{deployment_id}",
						responseCode: 202
					},
					input: {
						type: "structure",
						required: ["restApiId", "deploymentId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							deploymentId: {
								location: "uri",
								locationName: "deployment_id"
							}
						}
					}
				},
				DeleteDocumentationPart: {
					http: {
						method: "DELETE",
						requestUri: "/restapis/{restapi_id}/documentation/parts/{part_id}",
						responseCode: 202
					},
					input: {
						type: "structure",
						required: ["restApiId", "documentationPartId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							documentationPartId: {
								location: "uri",
								locationName: "part_id"
							}
						}
					}
				},
				DeleteDocumentationVersion: {
					http: {
						method: "DELETE",
						requestUri: "/restapis/{restapi_id}/documentation/versions/{doc_version}",
						responseCode: 202
					},
					input: {
						type: "structure",
						required: ["restApiId", "documentationVersion"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							documentationVersion: {
								location: "uri",
								locationName: "doc_version"
							}
						}
					}
				},
				DeleteDomainName: {
					http: {
						method: "DELETE",
						requestUri: "/domainnames/{domain_name}",
						responseCode: 202
					},
					input: {
						type: "structure",
						required: ["domainName"],
						members: {
							domainName: {
								location: "uri",
								locationName: "domain_name"
							}
						}
					}
				},
				DeleteGatewayResponse: {
					http: {
						method: "DELETE",
						requestUri: "/restapis/{restapi_id}/gatewayresponses/{response_type}",
						responseCode: 202
					},
					input: {
						type: "structure",
						required: ["restApiId", "responseType"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							responseType: {
								location: "uri",
								locationName: "response_type"
							}
						}
					}
				},
				DeleteIntegration: {
					http: {
						method: "DELETE",
						requestUri: "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration",
						responseCode: 204
					},
					input: {
						type: "structure",
						required: ["restApiId", "resourceId", "httpMethod"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							resourceId: {
								location: "uri",
								locationName: "resource_id"
							},
							httpMethod: {
								location: "uri",
								locationName: "http_method"
							}
						}
					}
				},
				DeleteIntegrationResponse: {
					http: {
						method: "DELETE",
						requestUri: "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}",
						responseCode: 204
					},
					input: {
						type: "structure",
						required: ["restApiId", "resourceId", "httpMethod", "statusCode"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							resourceId: {
								location: "uri",
								locationName: "resource_id"
							},
							httpMethod: {
								location: "uri",
								locationName: "http_method"
							},
							statusCode: {
								location: "uri",
								locationName: "status_code"
							}
						}
					}
				},
				DeleteMethod: {
					http: {
						method: "DELETE",
						requestUri: "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}",
						responseCode: 204
					},
					input: {
						type: "structure",
						required: ["restApiId", "resourceId", "httpMethod"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							resourceId: {
								location: "uri",
								locationName: "resource_id"
							},
							httpMethod: {
								location: "uri",
								locationName: "http_method"
							}
						}
					}
				},
				DeleteMethodResponse: {
					http: {
						method: "DELETE",
						requestUri: "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}",
						responseCode: 204
					},
					input: {
						type: "structure",
						required: ["restApiId", "resourceId", "httpMethod", "statusCode"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							resourceId: {
								location: "uri",
								locationName: "resource_id"
							},
							httpMethod: {
								location: "uri",
								locationName: "http_method"
							},
							statusCode: {
								location: "uri",
								locationName: "status_code"
							}
						}
					}
				},
				DeleteModel: {
					http: {
						method: "DELETE",
						requestUri: "/restapis/{restapi_id}/models/{model_name}",
						responseCode: 202
					},
					input: {
						type: "structure",
						required: ["restApiId", "modelName"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							modelName: {
								location: "uri",
								locationName: "model_name"
							}
						}
					}
				},
				DeleteRequestValidator: {
					http: {
						method: "DELETE",
						requestUri: "/restapis/{restapi_id}/requestvalidators/{requestvalidator_id}",
						responseCode: 202
					},
					input: {
						type: "structure",
						required: ["restApiId", "requestValidatorId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							requestValidatorId: {
								location: "uri",
								locationName: "requestvalidator_id"
							}
						}
					}
				},
				DeleteResource: {
					http: {
						method: "DELETE",
						requestUri: "/restapis/{restapi_id}/resources/{resource_id}",
						responseCode: 202
					},
					input: {
						type: "structure",
						required: ["restApiId", "resourceId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							resourceId: {
								location: "uri",
								locationName: "resource_id"
							}
						}
					}
				},
				DeleteRestApi: {
					http: {
						method: "DELETE",
						requestUri: "/restapis/{restapi_id}",
						responseCode: 202
					},
					input: {
						type: "structure",
						required: ["restApiId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							}
						}
					}
				},
				DeleteStage: {
					http: {
						method: "DELETE",
						requestUri: "/restapis/{restapi_id}/stages/{stage_name}",
						responseCode: 202
					},
					input: {
						type: "structure",
						required: ["restApiId", "stageName"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							stageName: {
								location: "uri",
								locationName: "stage_name"
							}
						}
					}
				},
				DeleteUsagePlan: {
					http: {
						method: "DELETE",
						requestUri: "/usageplans/{usageplanId}",
						responseCode: 202
					},
					input: {
						type: "structure",
						required: ["usagePlanId"],
						members: {
							usagePlanId: {
								location: "uri",
								locationName: "usageplanId"
							}
						}
					}
				},
				DeleteUsagePlanKey: {
					http: {
						method: "DELETE",
						requestUri: "/usageplans/{usageplanId}/keys/{keyId}",
						responseCode: 202
					},
					input: {
						type: "structure",
						required: ["usagePlanId", "keyId"],
						members: {
							usagePlanId: {
								location: "uri",
								locationName: "usageplanId"
							},
							keyId: {
								location: "uri",
								locationName: "keyId"
							}
						}
					}
				},
				DeleteVpcLink: {
					http: {
						method: "DELETE",
						requestUri: "/vpclinks/{vpclink_id}",
						responseCode: 202
					},
					input: {
						type: "structure",
						required: ["vpcLinkId"],
						members: {
							vpcLinkId: {
								location: "uri",
								locationName: "vpclink_id"
							}
						}
					}
				},
				FlushStageAuthorizersCache: {
					http: {
						method: "DELETE",
						requestUri: "/restapis/{restapi_id}/stages/{stage_name}/cache/authorizers",
						responseCode: 202
					},
					input: {
						type: "structure",
						required: ["restApiId", "stageName"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							stageName: {
								location: "uri",
								locationName: "stage_name"
							}
						}
					}
				},
				FlushStageCache: {
					http: {
						method: "DELETE",
						requestUri: "/restapis/{restapi_id}/stages/{stage_name}/cache/data",
						responseCode: 202
					},
					input: {
						type: "structure",
						required: ["restApiId", "stageName"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							stageName: {
								location: "uri",
								locationName: "stage_name"
							}
						}
					}
				},
				GenerateClientCertificate: {
					http: {
						requestUri: "/clientcertificates",
						responseCode: 201
					},
					input: {
						type: "structure",
						members: {
							description: {}
						}
					},
					output: {
						shape: "S2y"
					}
				},
				GetAccount: {
					http: {
						method: "GET",
						requestUri: "/account"
					},
					input: {
						type: "structure",
						members: {}
					},
					output: {
						shape: "S30"
					}
				},
				GetApiKey: {
					http: {
						method: "GET",
						requestUri: "/apikeys/{api_Key}"
					},
					input: {
						type: "structure",
						required: ["apiKey"],
						members: {
							apiKey: {
								location: "uri",
								locationName: "api_Key"
							},
							includeValue: {
								location: "querystring",
								locationName: "includeValue",
								type: "boolean"
							}
						}
					},
					output: {
						shape: "S6"
					}
				},
				GetApiKeys: {
					http: {
						method: "GET",
						requestUri: "/apikeys"
					},
					input: {
						type: "structure",
						members: {
							position: {
								location: "querystring",
								locationName: "position"
							},
							limit: {
								location: "querystring",
								locationName: "limit",
								type: "integer"
							},
							nameQuery: {
								location: "querystring",
								locationName: "name"
							},
							customerId: {
								location: "querystring",
								locationName: "customerId"
							},
							includeValues: {
								location: "querystring",
								locationName: "includeValues",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							warnings: {
								shape: "S8"
							},
							position: {},
							items: {
								locationName: "item",
								type: "list",
								member: {
									shape: "S6"
								}
							}
						}
					}
				},
				GetAuthorizer: {
					http: {
						method: "GET",
						requestUri: "/restapis/{restapi_id}/authorizers/{authorizer_id}"
					},
					input: {
						type: "structure",
						required: ["restApiId", "authorizerId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							authorizerId: {
								location: "uri",
								locationName: "authorizer_id"
							}
						}
					},
					output: {
						shape: "Se"
					}
				},
				GetAuthorizers: {
					http: {
						method: "GET",
						requestUri: "/restapis/{restapi_id}/authorizers"
					},
					input: {
						type: "structure",
						required: ["restApiId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							position: {
								location: "querystring",
								locationName: "position"
							},
							limit: {
								location: "querystring",
								locationName: "limit",
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							position: {},
							items: {
								locationName: "item",
								type: "list",
								member: {
									shape: "Se"
								}
							}
						}
					}
				},
				GetBasePathMapping: {
					http: {
						method: "GET",
						requestUri: "/domainnames/{domain_name}/basepathmappings/{base_path}"
					},
					input: {
						type: "structure",
						required: ["domainName", "basePath"],
						members: {
							domainName: {
								location: "uri",
								locationName: "domain_name"
							},
							basePath: {
								location: "uri",
								locationName: "base_path"
							}
						}
					},
					output: {
						shape: "Sg"
					}
				},
				GetBasePathMappings: {
					http: {
						method: "GET",
						requestUri: "/domainnames/{domain_name}/basepathmappings"
					},
					input: {
						type: "structure",
						required: ["domainName"],
						members: {
							domainName: {
								location: "uri",
								locationName: "domain_name"
							},
							position: {
								location: "querystring",
								locationName: "position"
							},
							limit: {
								location: "querystring",
								locationName: "limit",
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							position: {},
							items: {
								locationName: "item",
								type: "list",
								member: {
									shape: "Sg"
								}
							}
						}
					}
				},
				GetClientCertificate: {
					http: {
						method: "GET",
						requestUri: "/clientcertificates/{clientcertificate_id}"
					},
					input: {
						type: "structure",
						required: ["clientCertificateId"],
						members: {
							clientCertificateId: {
								location: "uri",
								locationName: "clientcertificate_id"
							}
						}
					},
					output: {
						shape: "S2y"
					}
				},
				GetClientCertificates: {
					http: {
						method: "GET",
						requestUri: "/clientcertificates"
					},
					input: {
						type: "structure",
						members: {
							position: {
								location: "querystring",
								locationName: "position"
							},
							limit: {
								location: "querystring",
								locationName: "limit",
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							position: {},
							items: {
								locationName: "item",
								type: "list",
								member: {
									shape: "S2y"
								}
							}
						}
					}
				},
				GetDeployment: {
					http: {
						method: "GET",
						requestUri: "/restapis/{restapi_id}/deployments/{deployment_id}"
					},
					input: {
						type: "structure",
						required: ["restApiId", "deploymentId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							deploymentId: {
								location: "uri",
								locationName: "deployment_id"
							},
							embed: {
								shape: "S8",
								location: "querystring",
								locationName: "embed"
							}
						}
					},
					output: {
						shape: "Sn"
					}
				},
				GetDeployments: {
					http: {
						method: "GET",
						requestUri: "/restapis/{restapi_id}/deployments"
					},
					input: {
						type: "structure",
						required: ["restApiId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							position: {
								location: "querystring",
								locationName: "position"
							},
							limit: {
								location: "querystring",
								locationName: "limit",
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							position: {},
							items: {
								locationName: "item",
								type: "list",
								member: {
									shape: "Sn"
								}
							}
						}
					}
				},
				GetDocumentationPart: {
					http: {
						method: "GET",
						requestUri: "/restapis/{restapi_id}/documentation/parts/{part_id}"
					},
					input: {
						type: "structure",
						required: ["restApiId", "documentationPartId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							documentationPartId: {
								location: "uri",
								locationName: "part_id"
							}
						}
					},
					output: {
						shape: "Sv"
					}
				},
				GetDocumentationParts: {
					http: {
						method: "GET",
						requestUri: "/restapis/{restapi_id}/documentation/parts"
					},
					input: {
						type: "structure",
						required: ["restApiId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							type: {
								location: "querystring",
								locationName: "type"
							},
							nameQuery: {
								location: "querystring",
								locationName: "name"
							},
							path: {
								location: "querystring",
								locationName: "path"
							},
							position: {
								location: "querystring",
								locationName: "position"
							},
							limit: {
								location: "querystring",
								locationName: "limit",
								type: "integer"
							},
							locationStatus: {
								location: "querystring",
								locationName: "locationStatus"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							position: {},
							items: {
								locationName: "item",
								type: "list",
								member: {
									shape: "Sv"
								}
							}
						}
					}
				},
				GetDocumentationVersion: {
					http: {
						method: "GET",
						requestUri: "/restapis/{restapi_id}/documentation/versions/{doc_version}"
					},
					input: {
						type: "structure",
						required: ["restApiId", "documentationVersion"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							documentationVersion: {
								location: "uri",
								locationName: "doc_version"
							}
						}
					},
					output: {
						shape: "Sx"
					}
				},
				GetDocumentationVersions: {
					http: {
						method: "GET",
						requestUri: "/restapis/{restapi_id}/documentation/versions"
					},
					input: {
						type: "structure",
						required: ["restApiId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							position: {
								location: "querystring",
								locationName: "position"
							},
							limit: {
								location: "querystring",
								locationName: "limit",
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							position: {},
							items: {
								locationName: "item",
								type: "list",
								member: {
									shape: "Sx"
								}
							}
						}
					}
				},
				GetDomainName: {
					http: {
						method: "GET",
						requestUri: "/domainnames/{domain_name}"
					},
					input: {
						type: "structure",
						required: ["domainName"],
						members: {
							domainName: {
								location: "uri",
								locationName: "domain_name"
							}
						}
					},
					output: {
						shape: "S12"
					}
				},
				GetDomainNames: {
					http: {
						method: "GET",
						requestUri: "/domainnames"
					},
					input: {
						type: "structure",
						members: {
							position: {
								location: "querystring",
								locationName: "position"
							},
							limit: {
								location: "querystring",
								locationName: "limit",
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							position: {},
							items: {
								locationName: "item",
								type: "list",
								member: {
									shape: "S12"
								}
							}
						}
					}
				},
				GetExport: {
					http: {
						method: "GET",
						requestUri: "/restapis/{restapi_id}/stages/{stage_name}/exports/{export_type}",
						responseCode: 200
					},
					input: {
						type: "structure",
						required: ["restApiId", "stageName", "exportType"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							stageName: {
								location: "uri",
								locationName: "stage_name"
							},
							exportType: {
								location: "uri",
								locationName: "export_type"
							},
							parameters: {
								shape: "Sk",
								location: "querystring"
							},
							accepts: {
								location: "header",
								locationName: "Accept"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							contentType: {
								location: "header",
								locationName: "Content-Type"
							},
							contentDisposition: {
								location: "header",
								locationName: "Content-Disposition"
							},
							body: {
								type: "blob"
							}
						},
						payload: "body"
					}
				},
				GetGatewayResponse: {
					http: {
						method: "GET",
						requestUri: "/restapis/{restapi_id}/gatewayresponses/{response_type}"
					},
					input: {
						type: "structure",
						required: ["restApiId", "responseType"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							responseType: {
								location: "uri",
								locationName: "response_type"
							}
						}
					},
					output: {
						shape: "S42"
					}
				},
				GetGatewayResponses: {
					http: {
						method: "GET",
						requestUri: "/restapis/{restapi_id}/gatewayresponses"
					},
					input: {
						type: "structure",
						required: ["restApiId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							position: {
								location: "querystring",
								locationName: "position"
							},
							limit: {
								location: "querystring",
								locationName: "limit",
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							position: {},
							items: {
								locationName: "item",
								type: "list",
								member: {
									shape: "S42"
								}
							}
						}
					}
				},
				GetIntegration: {
					http: {
						method: "GET",
						requestUri: "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration"
					},
					input: {
						type: "structure",
						required: ["restApiId", "resourceId", "httpMethod"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							resourceId: {
								location: "uri",
								locationName: "resource_id"
							},
							httpMethod: {
								location: "uri",
								locationName: "http_method"
							}
						}
					},
					output: {
						shape: "S1f"
					}
				},
				GetIntegrationResponse: {
					http: {
						method: "GET",
						requestUri: "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}"
					},
					input: {
						type: "structure",
						required: ["restApiId", "resourceId", "httpMethod", "statusCode"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							resourceId: {
								location: "uri",
								locationName: "resource_id"
							},
							httpMethod: {
								location: "uri",
								locationName: "http_method"
							},
							statusCode: {
								location: "uri",
								locationName: "status_code"
							}
						}
					},
					output: {
						shape: "S1l"
					}
				},
				GetMethod: {
					http: {
						method: "GET",
						requestUri: "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}"
					},
					input: {
						type: "structure",
						required: ["restApiId", "resourceId", "httpMethod"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							resourceId: {
								location: "uri",
								locationName: "resource_id"
							},
							httpMethod: {
								location: "uri",
								locationName: "http_method"
							}
						}
					},
					output: {
						shape: "S1a"
					}
				},
				GetMethodResponse: {
					http: {
						method: "GET",
						requestUri: "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}"
					},
					input: {
						type: "structure",
						required: ["restApiId", "resourceId", "httpMethod", "statusCode"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							resourceId: {
								location: "uri",
								locationName: "resource_id"
							},
							httpMethod: {
								location: "uri",
								locationName: "http_method"
							},
							statusCode: {
								location: "uri",
								locationName: "status_code"
							}
						}
					},
					output: {
						shape: "S1d"
					}
				},
				GetModel: {
					http: {
						method: "GET",
						requestUri: "/restapis/{restapi_id}/models/{model_name}"
					},
					input: {
						type: "structure",
						required: ["restApiId", "modelName"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							modelName: {
								location: "uri",
								locationName: "model_name"
							},
							flatten: {
								location: "querystring",
								locationName: "flatten",
								type: "boolean"
							}
						}
					},
					output: {
						shape: "S14"
					}
				},
				GetModelTemplate: {
					http: {
						method: "GET",
						requestUri: "/restapis/{restapi_id}/models/{model_name}/default_template"
					},
					input: {
						type: "structure",
						required: ["restApiId", "modelName"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							modelName: {
								location: "uri",
								locationName: "model_name"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							value: {}
						}
					}
				},
				GetModels: {
					http: {
						method: "GET",
						requestUri: "/restapis/{restapi_id}/models"
					},
					input: {
						type: "structure",
						required: ["restApiId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							position: {
								location: "querystring",
								locationName: "position"
							},
							limit: {
								location: "querystring",
								locationName: "limit",
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							position: {},
							items: {
								locationName: "item",
								type: "list",
								member: {
									shape: "S14"
								}
							}
						}
					}
				},
				GetRequestValidator: {
					http: {
						method: "GET",
						requestUri: "/restapis/{restapi_id}/requestvalidators/{requestvalidator_id}"
					},
					input: {
						type: "structure",
						required: ["restApiId", "requestValidatorId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							requestValidatorId: {
								location: "uri",
								locationName: "requestvalidator_id"
							}
						}
					},
					output: {
						shape: "S16"
					}
				},
				GetRequestValidators: {
					http: {
						method: "GET",
						requestUri: "/restapis/{restapi_id}/requestvalidators"
					},
					input: {
						type: "structure",
						required: ["restApiId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							position: {
								location: "querystring",
								locationName: "position"
							},
							limit: {
								location: "querystring",
								locationName: "limit",
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							position: {},
							items: {
								locationName: "item",
								type: "list",
								member: {
									shape: "S16"
								}
							}
						}
					}
				},
				GetResource: {
					http: {
						method: "GET",
						requestUri: "/restapis/{restapi_id}/resources/{resource_id}"
					},
					input: {
						type: "structure",
						required: ["restApiId", "resourceId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							resourceId: {
								location: "uri",
								locationName: "resource_id"
							},
							embed: {
								shape: "S8",
								location: "querystring",
								locationName: "embed"
							}
						}
					},
					output: {
						shape: "S18"
					}
				},
				GetResources: {
					http: {
						method: "GET",
						requestUri: "/restapis/{restapi_id}/resources"
					},
					input: {
						type: "structure",
						required: ["restApiId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							position: {
								location: "querystring",
								locationName: "position"
							},
							limit: {
								location: "querystring",
								locationName: "limit",
								type: "integer"
							},
							embed: {
								shape: "S8",
								location: "querystring",
								locationName: "embed"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							position: {},
							items: {
								locationName: "item",
								type: "list",
								member: {
									shape: "S18"
								}
							}
						}
					}
				},
				GetRestApi: {
					http: {
						method: "GET",
						requestUri: "/restapis/{restapi_id}"
					},
					input: {
						type: "structure",
						required: ["restApiId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							}
						}
					},
					output: {
						shape: "S1o"
					}
				},
				GetRestApis: {
					http: {
						method: "GET",
						requestUri: "/restapis"
					},
					input: {
						type: "structure",
						members: {
							position: {
								location: "querystring",
								locationName: "position"
							},
							limit: {
								location: "querystring",
								locationName: "limit",
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							position: {},
							items: {
								locationName: "item",
								type: "list",
								member: {
									shape: "S1o"
								}
							}
						}
					}
				},
				GetSdk: {
					http: {
						method: "GET",
						requestUri: "/restapis/{restapi_id}/stages/{stage_name}/sdks/{sdk_type}",
						responseCode: 200
					},
					input: {
						type: "structure",
						required: ["restApiId", "stageName", "sdkType"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							stageName: {
								location: "uri",
								locationName: "stage_name"
							},
							sdkType: {
								location: "uri",
								locationName: "sdk_type"
							},
							parameters: {
								shape: "Sk",
								location: "querystring"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							contentType: {
								location: "header",
								locationName: "Content-Type"
							},
							contentDisposition: {
								location: "header",
								locationName: "Content-Disposition"
							},
							body: {
								type: "blob"
							}
						},
						payload: "body"
					}
				},
				GetSdkType: {
					http: {
						method: "GET",
						requestUri: "/sdktypes/{sdktype_id}"
					},
					input: {
						type: "structure",
						required: ["id"],
						members: {
							id: {
								location: "uri",
								locationName: "sdktype_id"
							}
						}
					},
					output: {
						shape: "S4v"
					}
				},
				GetSdkTypes: {
					http: {
						method: "GET",
						requestUri: "/sdktypes"
					},
					input: {
						type: "structure",
						members: {
							position: {
								location: "querystring",
								locationName: "position"
							},
							limit: {
								location: "querystring",
								locationName: "limit",
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							position: {},
							items: {
								locationName: "item",
								type: "list",
								member: {
									shape: "S4v"
								}
							}
						}
					}
				},
				GetStage: {
					http: {
						method: "GET",
						requestUri: "/restapis/{restapi_id}/stages/{stage_name}"
					},
					input: {
						type: "structure",
						required: ["restApiId", "stageName"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							stageName: {
								location: "uri",
								locationName: "stage_name"
							}
						}
					},
					output: {
						shape: "S1r"
					}
				},
				GetStages: {
					http: {
						method: "GET",
						requestUri: "/restapis/{restapi_id}/stages"
					},
					input: {
						type: "structure",
						required: ["restApiId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							deploymentId: {
								location: "querystring",
								locationName: "deploymentId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							item: {
								type: "list",
								member: {
									shape: "S1r"
								}
							}
						}
					}
				},
				GetTags: {
					http: {
						method: "GET",
						requestUri: "/tags/{resource_arn}"
					},
					input: {
						type: "structure",
						required: ["resourceArn"],
						members: {
							resourceArn: {
								location: "uri",
								locationName: "resource_arn"
							},
							position: {
								location: "querystring",
								locationName: "position"
							},
							limit: {
								location: "querystring",
								locationName: "limit",
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							tags: {
								shape: "Sk"
							}
						}
					}
				},
				GetUsage: {
					http: {
						method: "GET",
						requestUri: "/usageplans/{usageplanId}/usage"
					},
					input: {
						type: "structure",
						required: ["usagePlanId", "startDate", "endDate"],
						members: {
							usagePlanId: {
								location: "uri",
								locationName: "usageplanId"
							},
							keyId: {
								location: "querystring",
								locationName: "keyId"
							},
							startDate: {
								location: "querystring",
								locationName: "startDate"
							},
							endDate: {
								location: "querystring",
								locationName: "endDate"
							},
							position: {
								location: "querystring",
								locationName: "position"
							},
							limit: {
								location: "querystring",
								locationName: "limit",
								type: "integer"
							}
						}
					},
					output: {
						shape: "S58"
					}
				},
				GetUsagePlan: {
					http: {
						method: "GET",
						requestUri: "/usageplans/{usageplanId}"
					},
					input: {
						type: "structure",
						required: ["usagePlanId"],
						members: {
							usagePlanId: {
								location: "uri",
								locationName: "usageplanId"
							}
						}
					},
					output: {
						shape: "S23"
					}
				},
				GetUsagePlanKey: {
					http: {
						method: "GET",
						requestUri: "/usageplans/{usageplanId}/keys/{keyId}",
						responseCode: 200
					},
					input: {
						type: "structure",
						required: ["usagePlanId", "keyId"],
						members: {
							usagePlanId: {
								location: "uri",
								locationName: "usageplanId"
							},
							keyId: {
								location: "uri",
								locationName: "keyId"
							}
						}
					},
					output: {
						shape: "S25"
					}
				},
				GetUsagePlanKeys: {
					http: {
						method: "GET",
						requestUri: "/usageplans/{usageplanId}/keys"
					},
					input: {
						type: "structure",
						required: ["usagePlanId"],
						members: {
							usagePlanId: {
								location: "uri",
								locationName: "usageplanId"
							},
							position: {
								location: "querystring",
								locationName: "position"
							},
							limit: {
								location: "querystring",
								locationName: "limit",
								type: "integer"
							},
							nameQuery: {
								location: "querystring",
								locationName: "name"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							position: {},
							items: {
								locationName: "item",
								type: "list",
								member: {
									shape: "S25"
								}
							}
						}
					}
				},
				GetUsagePlans: {
					http: {
						method: "GET",
						requestUri: "/usageplans"
					},
					input: {
						type: "structure",
						members: {
							position: {
								location: "querystring",
								locationName: "position"
							},
							keyId: {
								location: "querystring",
								locationName: "keyId"
							},
							limit: {
								location: "querystring",
								locationName: "limit",
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							position: {},
							items: {
								locationName: "item",
								type: "list",
								member: {
									shape: "S23"
								}
							}
						}
					}
				},
				GetVpcLink: {
					http: {
						method: "GET",
						requestUri: "/vpclinks/{vpclink_id}"
					},
					input: {
						type: "structure",
						required: ["vpcLinkId"],
						members: {
							vpcLinkId: {
								location: "uri",
								locationName: "vpclink_id"
							}
						}
					},
					output: {
						shape: "S27"
					}
				},
				GetVpcLinks: {
					http: {
						method: "GET",
						requestUri: "/vpclinks"
					},
					input: {
						type: "structure",
						members: {
							position: {
								location: "querystring",
								locationName: "position"
							},
							limit: {
								location: "querystring",
								locationName: "limit",
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							position: {},
							items: {
								locationName: "item",
								type: "list",
								member: {
									shape: "S27"
								}
							}
						}
					}
				},
				ImportApiKeys: {
					http: {
						requestUri: "/apikeys?mode=import",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["body", "format"],
						members: {
							body: {
								type: "blob"
							},
							format: {
								location: "querystring",
								locationName: "format"
							},
							failOnWarnings: {
								location: "querystring",
								locationName: "failonwarnings",
								type: "boolean"
							}
						},
						payload: "body"
					},
					output: {
						type: "structure",
						members: {
							ids: {
								shape: "S8"
							},
							warnings: {
								shape: "S8"
							}
						}
					}
				},
				ImportDocumentationParts: {
					http: {
						method: "PUT",
						requestUri: "/restapis/{restapi_id}/documentation/parts"
					},
					input: {
						type: "structure",
						required: ["restApiId", "body"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							mode: {
								location: "querystring",
								locationName: "mode"
							},
							failOnWarnings: {
								location: "querystring",
								locationName: "failonwarnings",
								type: "boolean"
							},
							body: {
								type: "blob"
							}
						},
						payload: "body"
					},
					output: {
						type: "structure",
						members: {
							ids: {
								shape: "S8"
							},
							warnings: {
								shape: "S8"
							}
						}
					}
				},
				ImportRestApi: {
					http: {
						requestUri: "/restapis?mode=import",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["body"],
						members: {
							failOnWarnings: {
								location: "querystring",
								locationName: "failonwarnings",
								type: "boolean"
							},
							parameters: {
								shape: "Sk",
								location: "querystring"
							},
							body: {
								type: "blob"
							}
						},
						payload: "body"
					},
					output: {
						shape: "S1o"
					}
				},
				PutGatewayResponse: {
					http: {
						method: "PUT",
						requestUri: "/restapis/{restapi_id}/gatewayresponses/{response_type}",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["restApiId", "responseType"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							responseType: {
								location: "uri",
								locationName: "response_type"
							},
							statusCode: {},
							responseParameters: {
								shape: "Sk"
							},
							responseTemplates: {
								shape: "Sk"
							}
						}
					},
					output: {
						shape: "S42"
					}
				},
				PutIntegration: {
					http: {
						method: "PUT",
						requestUri: "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["restApiId", "resourceId", "httpMethod", "type"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							resourceId: {
								location: "uri",
								locationName: "resource_id"
							},
							httpMethod: {
								location: "uri",
								locationName: "http_method"
							},
							type: {},
							integrationHttpMethod: {
								locationName: "httpMethod"
							},
							uri: {},
							connectionType: {},
							connectionId: {},
							credentials: {},
							requestParameters: {
								shape: "Sk"
							},
							requestTemplates: {
								shape: "Sk"
							},
							passthroughBehavior: {},
							cacheNamespace: {},
							cacheKeyParameters: {
								shape: "S8"
							},
							contentHandling: {},
							timeoutInMillis: {
								type: "integer"
							}
						}
					},
					output: {
						shape: "S1f"
					}
				},
				PutIntegrationResponse: {
					http: {
						method: "PUT",
						requestUri: "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["restApiId", "resourceId", "httpMethod", "statusCode"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							resourceId: {
								location: "uri",
								locationName: "resource_id"
							},
							httpMethod: {
								location: "uri",
								locationName: "http_method"
							},
							statusCode: {
								location: "uri",
								locationName: "status_code"
							},
							selectionPattern: {},
							responseParameters: {
								shape: "Sk"
							},
							responseTemplates: {
								shape: "Sk"
							},
							contentHandling: {}
						}
					},
					output: {
						shape: "S1l"
					}
				},
				PutMethod: {
					http: {
						method: "PUT",
						requestUri: "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["restApiId", "resourceId", "httpMethod", "authorizationType"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							resourceId: {
								location: "uri",
								locationName: "resource_id"
							},
							httpMethod: {
								location: "uri",
								locationName: "http_method"
							},
							authorizationType: {},
							authorizerId: {},
							apiKeyRequired: {
								type: "boolean"
							},
							operationName: {},
							requestParameters: {
								shape: "S1b"
							},
							requestModels: {
								shape: "Sk"
							},
							requestValidatorId: {},
							authorizationScopes: {
								shape: "S8"
							}
						}
					},
					output: {
						shape: "S1a"
					}
				},
				PutMethodResponse: {
					http: {
						method: "PUT",
						requestUri: "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["restApiId", "resourceId", "httpMethod", "statusCode"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							resourceId: {
								location: "uri",
								locationName: "resource_id"
							},
							httpMethod: {
								location: "uri",
								locationName: "http_method"
							},
							statusCode: {
								location: "uri",
								locationName: "status_code"
							},
							responseParameters: {
								shape: "S1b"
							},
							responseModels: {
								shape: "Sk"
							}
						}
					},
					output: {
						shape: "S1d"
					}
				},
				PutRestApi: {
					http: {
						method: "PUT",
						requestUri: "/restapis/{restapi_id}"
					},
					input: {
						type: "structure",
						required: ["restApiId", "body"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							mode: {
								location: "querystring",
								locationName: "mode"
							},
							failOnWarnings: {
								location: "querystring",
								locationName: "failonwarnings",
								type: "boolean"
							},
							parameters: {
								shape: "Sk",
								location: "querystring"
							},
							body: {
								type: "blob"
							}
						},
						payload: "body"
					},
					output: {
						shape: "S1o"
					}
				},
				TagResource: {
					http: {
						method: "PUT",
						requestUri: "/tags/{resource_arn}",
						responseCode: 204
					},
					input: {
						type: "structure",
						required: ["resourceArn", "tags"],
						members: {
							resourceArn: {
								location: "uri",
								locationName: "resource_arn"
							},
							tags: {
								shape: "Sk"
							}
						}
					}
				},
				TestInvokeAuthorizer: {
					http: {
						requestUri: "/restapis/{restapi_id}/authorizers/{authorizer_id}"
					},
					input: {
						type: "structure",
						required: ["restApiId", "authorizerId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							authorizerId: {
								location: "uri",
								locationName: "authorizer_id"
							},
							headers: {
								shape: "S64"
							},
							pathWithQueryString: {},
							body: {},
							stageVariables: {
								shape: "Sk"
							},
							additionalContext: {
								shape: "Sk"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							clientStatus: {
								type: "integer"
							},
							log: {},
							latency: {
								type: "long"
							},
							principalId: {},
							policy: {},
							authorization: {
								type: "map",
								key: {},
								value: {
									shape: "S8"
								}
							},
							claims: {
								shape: "Sk"
							}
						}
					}
				},
				TestInvokeMethod: {
					http: {
						requestUri: "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}"
					},
					input: {
						type: "structure",
						required: ["restApiId", "resourceId", "httpMethod"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							resourceId: {
								location: "uri",
								locationName: "resource_id"
							},
							httpMethod: {
								location: "uri",
								locationName: "http_method"
							},
							pathWithQueryString: {},
							body: {},
							headers: {
								shape: "S64"
							},
							clientCertificateId: {},
							stageVariables: {
								shape: "Sk"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							status: {
								type: "integer"
							},
							body: {},
							headers: {
								shape: "S64"
							},
							log: {},
							latency: {
								type: "long"
							}
						}
					}
				},
				UntagResource: {
					http: {
						method: "DELETE",
						requestUri: "/tags/{resource_arn}",
						responseCode: 204
					},
					input: {
						type: "structure",
						required: ["resourceArn", "tagKeys"],
						members: {
							resourceArn: {
								location: "uri",
								locationName: "resource_arn"
							},
							tagKeys: {
								shape: "S8",
								location: "querystring",
								locationName: "tagKeys"
							}
						}
					}
				},
				UpdateAccount: {
					http: {
						method: "PATCH",
						requestUri: "/account"
					},
					input: {
						type: "structure",
						members: {
							patchOperations: {
								shape: "S6b"
							}
						}
					},
					output: {
						shape: "S30"
					}
				},
				UpdateApiKey: {
					http: {
						method: "PATCH",
						requestUri: "/apikeys/{api_Key}"
					},
					input: {
						type: "structure",
						required: ["apiKey"],
						members: {
							apiKey: {
								location: "uri",
								locationName: "api_Key"
							},
							patchOperations: {
								shape: "S6b"
							}
						}
					},
					output: {
						shape: "S6"
					}
				},
				UpdateAuthorizer: {
					http: {
						method: "PATCH",
						requestUri: "/restapis/{restapi_id}/authorizers/{authorizer_id}"
					},
					input: {
						type: "structure",
						required: ["restApiId", "authorizerId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							authorizerId: {
								location: "uri",
								locationName: "authorizer_id"
							},
							patchOperations: {
								shape: "S6b"
							}
						}
					},
					output: {
						shape: "Se"
					}
				},
				UpdateBasePathMapping: {
					http: {
						method: "PATCH",
						requestUri: "/domainnames/{domain_name}/basepathmappings/{base_path}"
					},
					input: {
						type: "structure",
						required: ["domainName", "basePath"],
						members: {
							domainName: {
								location: "uri",
								locationName: "domain_name"
							},
							basePath: {
								location: "uri",
								locationName: "base_path"
							},
							patchOperations: {
								shape: "S6b"
							}
						}
					},
					output: {
						shape: "Sg"
					}
				},
				UpdateClientCertificate: {
					http: {
						method: "PATCH",
						requestUri: "/clientcertificates/{clientcertificate_id}"
					},
					input: {
						type: "structure",
						required: ["clientCertificateId"],
						members: {
							clientCertificateId: {
								location: "uri",
								locationName: "clientcertificate_id"
							},
							patchOperations: {
								shape: "S6b"
							}
						}
					},
					output: {
						shape: "S2y"
					}
				},
				UpdateDeployment: {
					http: {
						method: "PATCH",
						requestUri: "/restapis/{restapi_id}/deployments/{deployment_id}"
					},
					input: {
						type: "structure",
						required: ["restApiId", "deploymentId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							deploymentId: {
								location: "uri",
								locationName: "deployment_id"
							},
							patchOperations: {
								shape: "S6b"
							}
						}
					},
					output: {
						shape: "Sn"
					}
				},
				UpdateDocumentationPart: {
					http: {
						method: "PATCH",
						requestUri: "/restapis/{restapi_id}/documentation/parts/{part_id}"
					},
					input: {
						type: "structure",
						required: ["restApiId", "documentationPartId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							documentationPartId: {
								location: "uri",
								locationName: "part_id"
							},
							patchOperations: {
								shape: "S6b"
							}
						}
					},
					output: {
						shape: "Sv"
					}
				},
				UpdateDocumentationVersion: {
					http: {
						method: "PATCH",
						requestUri: "/restapis/{restapi_id}/documentation/versions/{doc_version}"
					},
					input: {
						type: "structure",
						required: ["restApiId", "documentationVersion"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							documentationVersion: {
								location: "uri",
								locationName: "doc_version"
							},
							patchOperations: {
								shape: "S6b"
							}
						}
					},
					output: {
						shape: "Sx"
					}
				},
				UpdateDomainName: {
					http: {
						method: "PATCH",
						requestUri: "/domainnames/{domain_name}"
					},
					input: {
						type: "structure",
						required: ["domainName"],
						members: {
							domainName: {
								location: "uri",
								locationName: "domain_name"
							},
							patchOperations: {
								shape: "S6b"
							}
						}
					},
					output: {
						shape: "S12"
					}
				},
				UpdateGatewayResponse: {
					http: {
						method: "PATCH",
						requestUri: "/restapis/{restapi_id}/gatewayresponses/{response_type}"
					},
					input: {
						type: "structure",
						required: ["restApiId", "responseType"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							responseType: {
								location: "uri",
								locationName: "response_type"
							},
							patchOperations: {
								shape: "S6b"
							}
						}
					},
					output: {
						shape: "S42"
					}
				},
				UpdateIntegration: {
					http: {
						method: "PATCH",
						requestUri: "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration"
					},
					input: {
						type: "structure",
						required: ["restApiId", "resourceId", "httpMethod"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							resourceId: {
								location: "uri",
								locationName: "resource_id"
							},
							httpMethod: {
								location: "uri",
								locationName: "http_method"
							},
							patchOperations: {
								shape: "S6b"
							}
						}
					},
					output: {
						shape: "S1f"
					}
				},
				UpdateIntegrationResponse: {
					http: {
						method: "PATCH",
						requestUri: "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}"
					},
					input: {
						type: "structure",
						required: ["restApiId", "resourceId", "httpMethod", "statusCode"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							resourceId: {
								location: "uri",
								locationName: "resource_id"
							},
							httpMethod: {
								location: "uri",
								locationName: "http_method"
							},
							statusCode: {
								location: "uri",
								locationName: "status_code"
							},
							patchOperations: {
								shape: "S6b"
							}
						}
					},
					output: {
						shape: "S1l"
					}
				},
				UpdateMethod: {
					http: {
						method: "PATCH",
						requestUri: "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}"
					},
					input: {
						type: "structure",
						required: ["restApiId", "resourceId", "httpMethod"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							resourceId: {
								location: "uri",
								locationName: "resource_id"
							},
							httpMethod: {
								location: "uri",
								locationName: "http_method"
							},
							patchOperations: {
								shape: "S6b"
							}
						}
					},
					output: {
						shape: "S1a"
					}
				},
				UpdateMethodResponse: {
					http: {
						method: "PATCH",
						requestUri: "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["restApiId", "resourceId", "httpMethod", "statusCode"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							resourceId: {
								location: "uri",
								locationName: "resource_id"
							},
							httpMethod: {
								location: "uri",
								locationName: "http_method"
							},
							statusCode: {
								location: "uri",
								locationName: "status_code"
							},
							patchOperations: {
								shape: "S6b"
							}
						}
					},
					output: {
						shape: "S1d"
					}
				},
				UpdateModel: {
					http: {
						method: "PATCH",
						requestUri: "/restapis/{restapi_id}/models/{model_name}"
					},
					input: {
						type: "structure",
						required: ["restApiId", "modelName"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							modelName: {
								location: "uri",
								locationName: "model_name"
							},
							patchOperations: {
								shape: "S6b"
							}
						}
					},
					output: {
						shape: "S14"
					}
				},
				UpdateRequestValidator: {
					http: {
						method: "PATCH",
						requestUri: "/restapis/{restapi_id}/requestvalidators/{requestvalidator_id}"
					},
					input: {
						type: "structure",
						required: ["restApiId", "requestValidatorId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							requestValidatorId: {
								location: "uri",
								locationName: "requestvalidator_id"
							},
							patchOperations: {
								shape: "S6b"
							}
						}
					},
					output: {
						shape: "S16"
					}
				},
				UpdateResource: {
					http: {
						method: "PATCH",
						requestUri: "/restapis/{restapi_id}/resources/{resource_id}"
					},
					input: {
						type: "structure",
						required: ["restApiId", "resourceId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							resourceId: {
								location: "uri",
								locationName: "resource_id"
							},
							patchOperations: {
								shape: "S6b"
							}
						}
					},
					output: {
						shape: "S18"
					}
				},
				UpdateRestApi: {
					http: {
						method: "PATCH",
						requestUri: "/restapis/{restapi_id}"
					},
					input: {
						type: "structure",
						required: ["restApiId"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							patchOperations: {
								shape: "S6b"
							}
						}
					},
					output: {
						shape: "S1o"
					}
				},
				UpdateStage: {
					http: {
						method: "PATCH",
						requestUri: "/restapis/{restapi_id}/stages/{stage_name}"
					},
					input: {
						type: "structure",
						required: ["restApiId", "stageName"],
						members: {
							restApiId: {
								location: "uri",
								locationName: "restapi_id"
							},
							stageName: {
								location: "uri",
								locationName: "stage_name"
							},
							patchOperations: {
								shape: "S6b"
							}
						}
					},
					output: {
						shape: "S1r"
					}
				},
				UpdateUsage: {
					http: {
						method: "PATCH",
						requestUri: "/usageplans/{usageplanId}/keys/{keyId}/usage"
					},
					input: {
						type: "structure",
						required: ["usagePlanId", "keyId"],
						members: {
							usagePlanId: {
								location: "uri",
								locationName: "usageplanId"
							},
							keyId: {
								location: "uri",
								locationName: "keyId"
							},
							patchOperations: {
								shape: "S6b"
							}
						}
					},
					output: {
						shape: "S58"
					}
				},
				UpdateUsagePlan: {
					http: {
						method: "PATCH",
						requestUri: "/usageplans/{usageplanId}"
					},
					input: {
						type: "structure",
						required: ["usagePlanId"],
						members: {
							usagePlanId: {
								location: "uri",
								locationName: "usageplanId"
							},
							patchOperations: {
								shape: "S6b"
							}
						}
					},
					output: {
						shape: "S23"
					}
				},
				UpdateVpcLink: {
					http: {
						method: "PATCH",
						requestUri: "/vpclinks/{vpclink_id}"
					},
					input: {
						type: "structure",
						required: ["vpcLinkId"],
						members: {
							vpcLinkId: {
								location: "uri",
								locationName: "vpclink_id"
							},
							patchOperations: {
								shape: "S6b"
							}
						}
					},
					output: {
						shape: "S27"
					}
				}
			},
			shapes: {
				S6: {
					type: "structure",
					members: {
						id: {},
						value: {},
						name: {},
						customerId: {},
						description: {},
						enabled: {
							type: "boolean"
						},
						createdDate: {
							type: "timestamp"
						},
						lastUpdatedDate: {
							type: "timestamp"
						},
						stageKeys: {
							shape: "S8"
						}
					}
				},
				S8: {
					type: "list",
					member: {}
				},
				Sb: {
					type: "list",
					member: {}
				},
				Se: {
					type: "structure",
					members: {
						id: {},
						name: {},
						type: {},
						providerARNs: {
							shape: "Sb"
						},
						authType: {},
						authorizerUri: {},
						authorizerCredentials: {},
						identitySource: {},
						identityValidationExpression: {},
						authorizerResultTtlInSeconds: {
							type: "integer"
						}
					}
				},
				Sg: {
					type: "structure",
					members: {
						basePath: {},
						restApiId: {},
						stage: {}
					}
				},
				Sk: {
					type: "map",
					key: {},
					value: {}
				},
				Sn: {
					type: "structure",
					members: {
						id: {},
						description: {},
						createdDate: {
							type: "timestamp"
						},
						apiSummary: {
							type: "map",
							key: {},
							value: {
								type: "map",
								key: {},
								value: {
									type: "structure",
									members: {
										authorizationType: {},
										apiKeyRequired: {
											type: "boolean"
										}
									}
								}
							}
						}
					}
				},
				Ss: {
					type: "structure",
					required: ["type"],
					members: {
						type: {},
						path: {},
						method: {},
						statusCode: {},
						name: {}
					}
				},
				Sv: {
					type: "structure",
					members: {
						id: {},
						location: {
							shape: "Ss"
						},
						properties: {}
					}
				},
				Sx: {
					type: "structure",
					members: {
						version: {},
						createdDate: {
							type: "timestamp"
						},
						description: {}
					}
				},
				Sz: {
					type: "structure",
					members: {
						types: {
							type: "list",
							member: {}
						}
					}
				},
				S12: {
					type: "structure",
					members: {
						domainName: {},
						certificateName: {},
						certificateArn: {},
						certificateUploadDate: {
							type: "timestamp"
						},
						regionalDomainName: {},
						regionalHostedZoneId: {},
						regionalCertificateName: {},
						regionalCertificateArn: {},
						distributionDomainName: {},
						distributionHostedZoneId: {},
						endpointConfiguration: {
							shape: "Sz"
						}
					}
				},
				S14: {
					type: "structure",
					members: {
						id: {},
						name: {},
						description: {},
						schema: {},
						contentType: {}
					}
				},
				S16: {
					type: "structure",
					members: {
						id: {},
						name: {},
						validateRequestBody: {
							type: "boolean"
						},
						validateRequestParameters: {
							type: "boolean"
						}
					}
				},
				S18: {
					type: "structure",
					members: {
						id: {},
						parentId: {},
						pathPart: {},
						path: {},
						resourceMethods: {
							type: "map",
							key: {},
							value: {
								shape: "S1a"
							}
						}
					}
				},
				S1a: {
					type: "structure",
					members: {
						httpMethod: {},
						authorizationType: {},
						authorizerId: {},
						apiKeyRequired: {
							type: "boolean"
						},
						requestValidatorId: {},
						operationName: {},
						requestParameters: {
							shape: "S1b"
						},
						requestModels: {
							shape: "Sk"
						},
						methodResponses: {
							type: "map",
							key: {},
							value: {
								shape: "S1d"
							}
						},
						methodIntegration: {
							shape: "S1f"
						},
						authorizationScopes: {
							shape: "S8"
						}
					}
				},
				S1b: {
					type: "map",
					key: {},
					value: {
						type: "boolean"
					}
				},
				S1d: {
					type: "structure",
					members: {
						statusCode: {},
						responseParameters: {
							shape: "S1b"
						},
						responseModels: {
							shape: "Sk"
						}
					}
				},
				S1f: {
					type: "structure",
					members: {
						type: {},
						httpMethod: {},
						uri: {},
						connectionType: {},
						connectionId: {},
						credentials: {},
						requestParameters: {
							shape: "Sk"
						},
						requestTemplates: {
							shape: "Sk"
						},
						passthroughBehavior: {},
						contentHandling: {},
						timeoutInMillis: {
							type: "integer"
						},
						cacheNamespace: {},
						cacheKeyParameters: {
							shape: "S8"
						},
						integrationResponses: {
							type: "map",
							key: {},
							value: {
								shape: "S1l"
							}
						}
					}
				},
				S1l: {
					type: "structure",
					members: {
						statusCode: {},
						selectionPattern: {},
						responseParameters: {
							shape: "Sk"
						},
						responseTemplates: {
							shape: "Sk"
						},
						contentHandling: {}
					}
				},
				S1o: {
					type: "structure",
					members: {
						id: {},
						name: {},
						description: {},
						createdDate: {
							type: "timestamp"
						},
						version: {},
						warnings: {
							shape: "S8"
						},
						binaryMediaTypes: {
							shape: "S8"
						},
						minimumCompressionSize: {
							type: "integer"
						},
						apiKeySource: {},
						endpointConfiguration: {
							shape: "Sz"
						},
						policy: {}
					}
				},
				S1q: {
					type: "structure",
					members: {
						percentTraffic: {
							type: "double"
						},
						deploymentId: {},
						stageVariableOverrides: {
							shape: "Sk"
						},
						useStageCache: {
							type: "boolean"
						}
					}
				},
				S1r: {
					type: "structure",
					members: {
						deploymentId: {},
						clientCertificateId: {},
						stageName: {},
						description: {},
						cacheClusterEnabled: {
							type: "boolean"
						},
						cacheClusterSize: {},
						cacheClusterStatus: {},
						methodSettings: {
							type: "map",
							key: {},
							value: {
								type: "structure",
								members: {
									metricsEnabled: {
										type: "boolean"
									},
									loggingLevel: {},
									dataTraceEnabled: {
										type: "boolean"
									},
									throttlingBurstLimit: {
										type: "integer"
									},
									throttlingRateLimit: {
										type: "double"
									},
									cachingEnabled: {
										type: "boolean"
									},
									cacheTtlInSeconds: {
										type: "integer"
									},
									cacheDataEncrypted: {
										type: "boolean"
									},
									requireAuthorizationForCacheControl: {
										type: "boolean"
									},
									unauthorizedCacheControlHeaderStrategy: {}
								}
							}
						},
						variables: {
							shape: "Sk"
						},
						documentationVersion: {},
						accessLogSettings: {
							type: "structure",
							members: {
								format: {},
								destinationArn: {}
							}
						},
						canarySettings: {
							shape: "S1q"
						},
						tags: {
							shape: "Sk"
						},
						createdDate: {
							type: "timestamp"
						},
						lastUpdatedDate: {
							type: "timestamp"
						}
					}
				},
				S1y: {
					type: "list",
					member: {
						type: "structure",
						members: {
							apiId: {},
							stage: {}
						}
					}
				},
				S20: {
					type: "structure",
					members: {
						burstLimit: {
							type: "integer"
						},
						rateLimit: {
							type: "double"
						}
					}
				},
				S21: {
					type: "structure",
					members: {
						limit: {
							type: "integer"
						},
						offset: {
							type: "integer"
						},
						period: {}
					}
				},
				S23: {
					type: "structure",
					members: {
						id: {},
						name: {},
						description: {},
						apiStages: {
							shape: "S1y"
						},
						throttle: {
							shape: "S20"
						},
						quota: {
							shape: "S21"
						},
						productCode: {}
					}
				},
				S25: {
					type: "structure",
					members: {
						id: {},
						type: {},
						value: {},
						name: {}
					}
				},
				S27: {
					type: "structure",
					members: {
						id: {},
						name: {},
						description: {},
						targetArns: {
							shape: "S8"
						},
						status: {},
						statusMessage: {}
					}
				},
				S2y: {
					type: "structure",
					members: {
						clientCertificateId: {},
						description: {},
						pemEncodedCertificate: {},
						createdDate: {
							type: "timestamp"
						},
						expirationDate: {
							type: "timestamp"
						}
					}
				},
				S30: {
					type: "structure",
					members: {
						cloudwatchRoleArn: {},
						throttleSettings: {
							shape: "S20"
						},
						features: {
							shape: "S8"
						},
						apiKeyVersion: {}
					}
				},
				S42: {
					type: "structure",
					members: {
						responseType: {},
						statusCode: {},
						responseParameters: {
							shape: "Sk"
						},
						responseTemplates: {
							shape: "Sk"
						},
						defaultResponse: {
							type: "boolean"
						}
					}
				},
				S4v: {
					type: "structure",
					members: {
						id: {},
						friendlyName: {},
						description: {},
						configurationProperties: {
							type: "list",
							member: {
								type: "structure",
								members: {
									name: {},
									friendlyName: {},
									description: {},
									required: {
										type: "boolean"
									},
									defaultValue: {}
								}
							}
						}
					}
				},
				S58: {
					type: "structure",
					members: {
						usagePlanId: {},
						startDate: {},
						endDate: {},
						position: {},
						items: {
							locationName: "values",
							type: "map",
							key: {},
							value: {
								type: "list",
								member: {
									type: "list",
									member: {
										type: "long"
									}
								}
							}
						}
					}
				},
				S64: {
					type: "map",
					key: {},
					value: {}
				},
				S6b: {
					type: "list",
					member: {
						type: "structure",
						members: {
							op: {},
							path: {},
							value: {},
							from: {}
						}
					}
				}
			}
		}
	}, {}],
	4: [function(e, t, r) {
		t.exports = {
			pagination: {
				GetApiKeys: {
					input_token: "position",
					limit_key: "limit",
					output_token: "position",
					result_key: "items"
				},
				GetBasePathMappings: {
					input_token: "position",
					limit_key: "limit",
					output_token: "position",
					result_key: "items"
				},
				GetClientCertificates: {
					input_token: "position",
					limit_key: "limit",
					output_token: "position",
					result_key: "items"
				},
				GetDeployments: {
					input_token: "position",
					limit_key: "limit",
					output_token: "position",
					result_key: "items"
				},
				GetDomainNames: {
					input_token: "position",
					limit_key: "limit",
					output_token: "position",
					result_key: "items"
				},
				GetModels: {
					input_token: "position",
					limit_key: "limit",
					output_token: "position",
					result_key: "items"
				},
				GetResources: {
					input_token: "position",
					limit_key: "limit",
					output_token: "position",
					result_key: "items"
				},
				GetRestApis: {
					input_token: "position",
					limit_key: "limit",
					output_token: "position",
					result_key: "items"
				},
				GetUsage: {
					input_token: "position",
					limit_key: "limit",
					output_token: "position",
					result_key: "items"
				},
				GetUsagePlanKeys: {
					input_token: "position",
					limit_key: "limit",
					output_token: "position",
					result_key: "items"
				},
				GetUsagePlans: {
					input_token: "position",
					limit_key: "limit",
					output_token: "position",
					result_key: "items"
				},
				GetVpcLinks: {
					input_token: "position",
					limit_key: "limit",
					output_token: "position",
					result_key: "items"
				}
			}
		}
	}, {}],
	5: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2016-02-06",
				endpointPrefix: "autoscaling",
				jsonVersion: "1.1",
				protocol: "json",
				serviceFullName: "Application Auto Scaling",
				serviceId: "Application Auto Scaling",
				signatureVersion: "v4",
				signingName: "application-autoscaling",
				targetPrefix: "AnyScaleFrontendService",
				uid: "application-autoscaling-2016-02-06"
			},
			operations: {
				DeleteScalingPolicy: {
					input: {
						type: "structure",
						required: ["PolicyName", "ServiceNamespace", "ResourceId", "ScalableDimension"],
						members: {
							PolicyName: {},
							ServiceNamespace: {},
							ResourceId: {},
							ScalableDimension: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				DeleteScheduledAction: {
					input: {
						type: "structure",
						required: ["ServiceNamespace", "ScheduledActionName", "ResourceId"],
						members: {
							ServiceNamespace: {},
							ScheduledActionName: {},
							ResourceId: {},
							ScalableDimension: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				DeregisterScalableTarget: {
					input: {
						type: "structure",
						required: ["ServiceNamespace", "ResourceId", "ScalableDimension"],
						members: {
							ServiceNamespace: {},
							ResourceId: {},
							ScalableDimension: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				DescribeScalableTargets: {
					input: {
						type: "structure",
						required: ["ServiceNamespace"],
						members: {
							ServiceNamespace: {},
							ResourceIds: {
								shape: "Sb"
							},
							ScalableDimension: {},
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ScalableTargets: {
								type: "list",
								member: {
									type: "structure",
									required: ["ServiceNamespace", "ResourceId", "ScalableDimension", "MinCapacity", "MaxCapacity", "RoleARN", "CreationTime"],
									members: {
										ServiceNamespace: {},
										ResourceId: {},
										ScalableDimension: {},
										MinCapacity: {
											type: "integer"
										},
										MaxCapacity: {
											type: "integer"
										},
										RoleARN: {},
										CreationTime: {
											type: "timestamp"
										}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				DescribeScalingActivities: {
					input: {
						type: "structure",
						required: ["ServiceNamespace"],
						members: {
							ServiceNamespace: {},
							ResourceId: {},
							ScalableDimension: {},
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ScalingActivities: {
								type: "list",
								member: {
									type: "structure",
									required: ["ActivityId", "ServiceNamespace", "ResourceId", "ScalableDimension", "Description", "Cause", "StartTime", "StatusCode"],
									members: {
										ActivityId: {},
										ServiceNamespace: {},
										ResourceId: {},
										ScalableDimension: {},
										Description: {},
										Cause: {},
										StartTime: {
											type: "timestamp"
										},
										EndTime: {
											type: "timestamp"
										},
										StatusCode: {},
										StatusMessage: {},
										Details: {}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				DescribeScalingPolicies: {
					input: {
						type: "structure",
						required: ["ServiceNamespace"],
						members: {
							PolicyNames: {
								shape: "Sb"
							},
							ServiceNamespace: {},
							ResourceId: {},
							ScalableDimension: {},
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ScalingPolicies: {
								type: "list",
								member: {
									type: "structure",
									required: ["PolicyARN", "PolicyName", "ServiceNamespace", "ResourceId", "ScalableDimension", "PolicyType", "CreationTime"],
									members: {
										PolicyARN: {},
										PolicyName: {},
										ServiceNamespace: {},
										ResourceId: {},
										ScalableDimension: {},
										PolicyType: {},
										StepScalingPolicyConfiguration: {
											shape: "Sv"
										},
										TargetTrackingScalingPolicyConfiguration: {
											shape: "S14"
										},
										Alarms: {
											shape: "S1i"
										},
										CreationTime: {
											type: "timestamp"
										}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				DescribeScheduledActions: {
					input: {
						type: "structure",
						required: ["ServiceNamespace"],
						members: {
							ScheduledActionNames: {
								shape: "Sb"
							},
							ServiceNamespace: {},
							ResourceId: {},
							ScalableDimension: {},
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ScheduledActions: {
								type: "list",
								member: {
									type: "structure",
									required: ["ScheduledActionName", "ScheduledActionARN", "ServiceNamespace", "Schedule", "ResourceId", "CreationTime"],
									members: {
										ScheduledActionName: {},
										ScheduledActionARN: {},
										ServiceNamespace: {},
										Schedule: {},
										ResourceId: {},
										ScalableDimension: {},
										StartTime: {
											type: "timestamp"
										},
										EndTime: {
											type: "timestamp"
										},
										ScalableTargetAction: {
											shape: "S1p"
										},
										CreationTime: {
											type: "timestamp"
										}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				PutScalingPolicy: {
					input: {
						type: "structure",
						required: ["PolicyName", "ServiceNamespace", "ResourceId", "ScalableDimension"],
						members: {
							PolicyName: {},
							ServiceNamespace: {},
							ResourceId: {},
							ScalableDimension: {},
							PolicyType: {},
							StepScalingPolicyConfiguration: {
								shape: "Sv"
							},
							TargetTrackingScalingPolicyConfiguration: {
								shape: "S14"
							}
						}
					},
					output: {
						type: "structure",
						required: ["PolicyARN"],
						members: {
							PolicyARN: {},
							Alarms: {
								shape: "S1i"
							}
						}
					}
				},
				PutScheduledAction: {
					input: {
						type: "structure",
						required: ["ServiceNamespace", "ScheduledActionName", "ResourceId"],
						members: {
							ServiceNamespace: {},
							Schedule: {},
							ScheduledActionName: {},
							ResourceId: {},
							ScalableDimension: {},
							StartTime: {
								type: "timestamp"
							},
							EndTime: {
								type: "timestamp"
							},
							ScalableTargetAction: {
								shape: "S1p"
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				RegisterScalableTarget: {
					input: {
						type: "structure",
						required: ["ServiceNamespace", "ResourceId", "ScalableDimension"],
						members: {
							ServiceNamespace: {},
							ResourceId: {},
							ScalableDimension: {},
							MinCapacity: {
								type: "integer"
							},
							MaxCapacity: {
								type: "integer"
							},
							RoleARN: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				}
			},
			shapes: {
				Sb: {
					type: "list",
					member: {}
				},
				Sv: {
					type: "structure",
					members: {
						AdjustmentType: {},
						StepAdjustments: {
							type: "list",
							member: {
								type: "structure",
								required: ["ScalingAdjustment"],
								members: {
									MetricIntervalLowerBound: {
										type: "double"
									},
									MetricIntervalUpperBound: {
										type: "double"
									},
									ScalingAdjustment: {
										type: "integer"
									}
								}
							}
						},
						MinAdjustmentMagnitude: {
							type: "integer"
						},
						Cooldown: {
							type: "integer"
						},
						MetricAggregationType: {}
					}
				},
				S14: {
					type: "structure",
					required: ["TargetValue"],
					members: {
						TargetValue: {
							type: "double"
						},
						PredefinedMetricSpecification: {
							type: "structure",
							required: ["PredefinedMetricType"],
							members: {
								PredefinedMetricType: {},
								ResourceLabel: {}
							}
						},
						CustomizedMetricSpecification: {
							type: "structure",
							required: ["MetricName", "Namespace", "Statistic"],
							members: {
								MetricName: {},
								Namespace: {},
								Dimensions: {
									type: "list",
									member: {
										type: "structure",
										required: ["Name", "Value"],
										members: {
											Name: {},
											Value: {}
										}
									}
								},
								Statistic: {},
								Unit: {}
							}
						},
						ScaleOutCooldown: {
							type: "integer"
						},
						ScaleInCooldown: {
							type: "integer"
						},
						DisableScaleIn: {
							type: "boolean"
						}
					}
				},
				S1i: {
					type: "list",
					member: {
						type: "structure",
						required: ["AlarmName", "AlarmARN"],
						members: {
							AlarmName: {},
							AlarmARN: {}
						}
					}
				},
				S1p: {
					type: "structure",
					members: {
						MinCapacity: {
							type: "integer"
						},
						MaxCapacity: {
							type: "integer"
						}
					}
				}
			}
		}
	}, {}],
	6: [function(e, t, r) {
		t.exports = {
			pagination: {
				DescribeScalableTargets: {
					input_token: "NextToken",
					limit_key: "MaxResults",
					output_token: "NextToken",
					result_key: "ScalableTargets"
				},
				DescribeScalingActivities: {
					input_token: "NextToken",
					limit_key: "MaxResults",
					output_token: "NextToken",
					result_key: "ScalingActivities"
				},
				DescribeScalingPolicies: {
					input_token: "NextToken",
					limit_key: "MaxResults",
					output_token: "NextToken",
					result_key: "ScalingPolicies"
				}
			}
		}
	}, {}],
	7: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2011-01-01",
				endpointPrefix: "autoscaling",
				protocol: "query",
				serviceFullName: "Auto Scaling",
				signatureVersion: "v4",
				uid: "autoscaling-2011-01-01",
				xmlNamespace: "http://autoscaling.amazonaws.com/doc/2011-01-01/"
			},
			operations: {
				AttachInstances: {
					input: {
						type: "structure",
						required: ["AutoScalingGroupName"],
						members: {
							InstanceIds: {
								shape: "S2"
							},
							AutoScalingGroupName: {}
						}
					}
				},
				AttachLoadBalancerTargetGroups: {
					input: {
						type: "structure",
						required: ["AutoScalingGroupName", "TargetGroupARNs"],
						members: {
							AutoScalingGroupName: {},
							TargetGroupARNs: {
								shape: "S6"
							}
						}
					},
					output: {
						resultWrapper: "AttachLoadBalancerTargetGroupsResult",
						type: "structure",
						members: {}
					}
				},
				AttachLoadBalancers: {
					input: {
						type: "structure",
						required: ["AutoScalingGroupName", "LoadBalancerNames"],
						members: {
							AutoScalingGroupName: {},
							LoadBalancerNames: {
								shape: "Sa"
							}
						}
					},
					output: {
						resultWrapper: "AttachLoadBalancersResult",
						type: "structure",
						members: {}
					}
				},
				CompleteLifecycleAction: {
					input: {
						type: "structure",
						required: ["LifecycleHookName", "AutoScalingGroupName", "LifecycleActionResult"],
						members: {
							LifecycleHookName: {},
							AutoScalingGroupName: {},
							LifecycleActionToken: {},
							LifecycleActionResult: {},
							InstanceId: {}
						}
					},
					output: {
						resultWrapper: "CompleteLifecycleActionResult",
						type: "structure",
						members: {}
					}
				},
				CreateAutoScalingGroup: {
					input: {
						type: "structure",
						required: ["AutoScalingGroupName", "MinSize", "MaxSize"],
						members: {
							AutoScalingGroupName: {},
							LaunchConfigurationName: {},
							LaunchTemplate: {
								shape: "Sj"
							},
							InstanceId: {},
							MinSize: {
								type: "integer"
							},
							MaxSize: {
								type: "integer"
							},
							DesiredCapacity: {
								type: "integer"
							},
							DefaultCooldown: {
								type: "integer"
							},
							AvailabilityZones: {
								shape: "Sp"
							},
							LoadBalancerNames: {
								shape: "Sa"
							},
							TargetGroupARNs: {
								shape: "S6"
							},
							HealthCheckType: {},
							HealthCheckGracePeriod: {
								type: "integer"
							},
							PlacementGroup: {},
							VPCZoneIdentifier: {},
							TerminationPolicies: {
								shape: "St"
							},
							NewInstancesProtectedFromScaleIn: {
								type: "boolean"
							},
							LifecycleHookSpecificationList: {
								type: "list",
								member: {
									type: "structure",
									required: ["LifecycleHookName", "LifecycleTransition"],
									members: {
										LifecycleHookName: {},
										LifecycleTransition: {},
										NotificationMetadata: {},
										HeartbeatTimeout: {
											type: "integer"
										},
										DefaultResult: {},
										NotificationTargetARN: {},
										RoleARN: {}
									}
								}
							},
							Tags: {
								shape: "S12"
							},
							ServiceLinkedRoleARN: {}
						}
					}
				},
				CreateLaunchConfiguration: {
					input: {
						type: "structure",
						required: ["LaunchConfigurationName"],
						members: {
							LaunchConfigurationName: {},
							ImageId: {},
							KeyName: {},
							SecurityGroups: {
								shape: "S19"
							},
							ClassicLinkVPCId: {},
							ClassicLinkVPCSecurityGroups: {
								shape: "S1a"
							},
							UserData: {},
							InstanceId: {},
							InstanceType: {},
							KernelId: {},
							RamdiskId: {},
							BlockDeviceMappings: {
								shape: "S1c"
							},
							InstanceMonitoring: {
								shape: "S1l"
							},
							SpotPrice: {},
							IamInstanceProfile: {},
							EbsOptimized: {
								type: "boolean"
							},
							AssociatePublicIpAddress: {
								type: "boolean"
							},
							PlacementTenancy: {}
						}
					}
				},
				CreateOrUpdateTags: {
					input: {
						type: "structure",
						required: ["Tags"],
						members: {
							Tags: {
								shape: "S12"
							}
						}
					}
				},
				DeleteAutoScalingGroup: {
					input: {
						type: "structure",
						required: ["AutoScalingGroupName"],
						members: {
							AutoScalingGroupName: {},
							ForceDelete: {
								type: "boolean"
							}
						}
					}
				},
				DeleteLaunchConfiguration: {
					input: {
						type: "structure",
						required: ["LaunchConfigurationName"],
						members: {
							LaunchConfigurationName: {}
						}
					}
				},
				DeleteLifecycleHook: {
					input: {
						type: "structure",
						required: ["LifecycleHookName", "AutoScalingGroupName"],
						members: {
							LifecycleHookName: {},
							AutoScalingGroupName: {}
						}
					},
					output: {
						resultWrapper: "DeleteLifecycleHookResult",
						type: "structure",
						members: {}
					}
				},
				DeleteNotificationConfiguration: {
					input: {
						type: "structure",
						required: ["AutoScalingGroupName", "TopicARN"],
						members: {
							AutoScalingGroupName: {},
							TopicARN: {}
						}
					}
				},
				DeletePolicy: {
					input: {
						type: "structure",
						required: ["PolicyName"],
						members: {
							AutoScalingGroupName: {},
							PolicyName: {}
						}
					}
				},
				DeleteScheduledAction: {
					input: {
						type: "structure",
						required: ["AutoScalingGroupName", "ScheduledActionName"],
						members: {
							AutoScalingGroupName: {},
							ScheduledActionName: {}
						}
					}
				},
				DeleteTags: {
					input: {
						type: "structure",
						required: ["Tags"],
						members: {
							Tags: {
								shape: "S12"
							}
						}
					}
				},
				DescribeAccountLimits: {
					output: {
						resultWrapper: "DescribeAccountLimitsResult",
						type: "structure",
						members: {
							MaxNumberOfAutoScalingGroups: {
								type: "integer"
							},
							MaxNumberOfLaunchConfigurations: {
								type: "integer"
							},
							NumberOfAutoScalingGroups: {
								type: "integer"
							},
							NumberOfLaunchConfigurations: {
								type: "integer"
							}
						}
					}
				},
				DescribeAdjustmentTypes: {
					output: {
						resultWrapper: "DescribeAdjustmentTypesResult",
						type: "structure",
						members: {
							AdjustmentTypes: {
								type: "list",
								member: {
									type: "structure",
									members: {
										AdjustmentType: {}
									}
								}
							}
						}
					}
				},
				DescribeAutoScalingGroups: {
					input: {
						type: "structure",
						members: {
							AutoScalingGroupNames: {
								shape: "S2a"
							},
							NextToken: {},
							MaxRecords: {
								type: "integer"
							}
						}
					},
					output: {
						resultWrapper: "DescribeAutoScalingGroupsResult",
						type: "structure",
						required: ["AutoScalingGroups"],
						members: {
							AutoScalingGroups: {
								type: "list",
								member: {
									type: "structure",
									required: ["AutoScalingGroupName", "MinSize", "MaxSize", "DesiredCapacity", "DefaultCooldown", "AvailabilityZones", "HealthCheckType", "CreatedTime"],
									members: {
										AutoScalingGroupName: {},
										AutoScalingGroupARN: {},
										LaunchConfigurationName: {},
										LaunchTemplate: {
											shape: "Sj"
										},
										MinSize: {
											type: "integer"
										},
										MaxSize: {
											type: "integer"
										},
										DesiredCapacity: {
											type: "integer"
										},
										DefaultCooldown: {
											type: "integer"
										},
										AvailabilityZones: {
											shape: "Sp"
										},
										LoadBalancerNames: {
											shape: "Sa"
										},
										TargetGroupARNs: {
											shape: "S6"
										},
										HealthCheckType: {},
										HealthCheckGracePeriod: {
											type: "integer"
										},
										Instances: {
											type: "list",
											member: {
												type: "structure",
												required: ["InstanceId", "AvailabilityZone", "LifecycleState", "HealthStatus", "ProtectedFromScaleIn"],
												members: {
													InstanceId: {},
													AvailabilityZone: {},
													LifecycleState: {},
													HealthStatus: {},
													LaunchConfigurationName: {},
													LaunchTemplate: {
														shape: "Sj"
													},
													ProtectedFromScaleIn: {
														type: "boolean"
													}
												}
											}
										},
										CreatedTime: {
											type: "timestamp"
										},
										SuspendedProcesses: {
											type: "list",
											member: {
												type: "structure",
												members: {
													ProcessName: {},
													SuspensionReason: {}
												}
											}
										},
										PlacementGroup: {},
										VPCZoneIdentifier: {},
										EnabledMetrics: {
											type: "list",
											member: {
												type: "structure",
												members: {
													Metric: {},
													Granularity: {}
												}
											}
										},
										Status: {},
										Tags: {
											shape: "S2n"
										},
										TerminationPolicies: {
											shape: "St"
										},
										NewInstancesProtectedFromScaleIn: {
											type: "boolean"
										},
										ServiceLinkedRoleARN: {}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				DescribeAutoScalingInstances: {
					input: {
						type: "structure",
						members: {
							InstanceIds: {
								shape: "S2"
							},
							MaxRecords: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						resultWrapper: "DescribeAutoScalingInstancesResult",
						type: "structure",
						members: {
							AutoScalingInstances: {
								type: "list",
								member: {
									type: "structure",
									required: ["InstanceId", "AutoScalingGroupName", "AvailabilityZone", "LifecycleState", "HealthStatus", "ProtectedFromScaleIn"],
									members: {
										InstanceId: {},
										AutoScalingGroupName: {},
										AvailabilityZone: {},
										LifecycleState: {},
										HealthStatus: {},
										LaunchConfigurationName: {},
										LaunchTemplate: {
											shape: "Sj"
										},
										ProtectedFromScaleIn: {
											type: "boolean"
										}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				DescribeAutoScalingNotificationTypes: {
					output: {
						resultWrapper: "DescribeAutoScalingNotificationTypesResult",
						type: "structure",
						members: {
							AutoScalingNotificationTypes: {
								shape: "S2u"
							}
						}
					}
				},
				DescribeLaunchConfigurations: {
					input: {
						type: "structure",
						members: {
							LaunchConfigurationNames: {
								type: "list",
								member: {}
							},
							NextToken: {},
							MaxRecords: {
								type: "integer"
							}
						}
					},
					output: {
						resultWrapper: "DescribeLaunchConfigurationsResult",
						type: "structure",
						required: ["LaunchConfigurations"],
						members: {
							LaunchConfigurations: {
								type: "list",
								member: {
									type: "structure",
									required: ["LaunchConfigurationName", "ImageId", "InstanceType", "CreatedTime"],
									members: {
										LaunchConfigurationName: {},
										LaunchConfigurationARN: {},
										ImageId: {},
										KeyName: {},
										SecurityGroups: {
											shape: "S19"
										},
										ClassicLinkVPCId: {},
										ClassicLinkVPCSecurityGroups: {
											shape: "S1a"
										},
										UserData: {},
										InstanceType: {},
										KernelId: {},
										RamdiskId: {},
										BlockDeviceMappings: {
											shape: "S1c"
										},
										InstanceMonitoring: {
											shape: "S1l"
										},
										SpotPrice: {},
										IamInstanceProfile: {},
										CreatedTime: {
											type: "timestamp"
										},
										EbsOptimized: {
											type: "boolean"
										},
										AssociatePublicIpAddress: {
											type: "boolean"
										},
										PlacementTenancy: {}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				DescribeLifecycleHookTypes: {
					output: {
						resultWrapper: "DescribeLifecycleHookTypesResult",
						type: "structure",
						members: {
							LifecycleHookTypes: {
								shape: "S2u"
							}
						}
					}
				},
				DescribeLifecycleHooks: {
					input: {
						type: "structure",
						required: ["AutoScalingGroupName"],
						members: {
							AutoScalingGroupName: {},
							LifecycleHookNames: {
								type: "list",
								member: {}
							}
						}
					},
					output: {
						resultWrapper: "DescribeLifecycleHooksResult",
						type: "structure",
						members: {
							LifecycleHooks: {
								type: "list",
								member: {
									type: "structure",
									members: {
										LifecycleHookName: {},
										AutoScalingGroupName: {},
										LifecycleTransition: {},
										NotificationTargetARN: {},
										RoleARN: {},
										NotificationMetadata: {},
										HeartbeatTimeout: {
											type: "integer"
										},
										GlobalTimeout: {
											type: "integer"
										},
										DefaultResult: {}
									}
								}
							}
						}
					}
				},
				DescribeLoadBalancerTargetGroups: {
					input: {
						type: "structure",
						required: ["AutoScalingGroupName"],
						members: {
							AutoScalingGroupName: {},
							NextToken: {},
							MaxRecords: {
								type: "integer"
							}
						}
					},
					output: {
						resultWrapper: "DescribeLoadBalancerTargetGroupsResult",
						type: "structure",
						members: {
							LoadBalancerTargetGroups: {
								type: "list",
								member: {
									type: "structure",
									members: {
										LoadBalancerTargetGroupARN: {},
										State: {}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				DescribeLoadBalancers: {
					input: {
						type: "structure",
						required: ["AutoScalingGroupName"],
						members: {
							AutoScalingGroupName: {},
							NextToken: {},
							MaxRecords: {
								type: "integer"
							}
						}
					},
					output: {
						resultWrapper: "DescribeLoadBalancersResult",
						type: "structure",
						members: {
							LoadBalancers: {
								type: "list",
								member: {
									type: "structure",
									members: {
										LoadBalancerName: {},
										State: {}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				DescribeMetricCollectionTypes: {
					output: {
						resultWrapper: "DescribeMetricCollectionTypesResult",
						type: "structure",
						members: {
							Metrics: {
								type: "list",
								member: {
									type: "structure",
									members: {
										Metric: {}
									}
								}
							},
							Granularities: {
								type: "list",
								member: {
									type: "structure",
									members: {
										Granularity: {}
									}
								}
							}
						}
					}
				},
				DescribeNotificationConfigurations: {
					input: {
						type: "structure",
						members: {
							AutoScalingGroupNames: {
								shape: "S2a"
							},
							NextToken: {},
							MaxRecords: {
								type: "integer"
							}
						}
					},
					output: {
						resultWrapper: "DescribeNotificationConfigurationsResult",
						type: "structure",
						required: ["NotificationConfigurations"],
						members: {
							NotificationConfigurations: {
								type: "list",
								member: {
									type: "structure",
									members: {
										AutoScalingGroupName: {},
										TopicARN: {},
										NotificationType: {}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				DescribePolicies: {
					input: {
						type: "structure",
						members: {
							AutoScalingGroupName: {},
							PolicyNames: {
								type: "list",
								member: {}
							},
							PolicyTypes: {
								type: "list",
								member: {}
							},
							NextToken: {},
							MaxRecords: {
								type: "integer"
							}
						}
					},
					output: {
						resultWrapper: "DescribePoliciesResult",
						type: "structure",
						members: {
							ScalingPolicies: {
								type: "list",
								member: {
									type: "structure",
									members: {
										AutoScalingGroupName: {},
										PolicyName: {},
										PolicyARN: {},
										PolicyType: {},
										AdjustmentType: {},
										MinAdjustmentStep: {
											shape: "S3u"
										},
										MinAdjustmentMagnitude: {
											type: "integer"
										},
										ScalingAdjustment: {
											type: "integer"
										},
										Cooldown: {
											type: "integer"
										},
										StepAdjustments: {
											shape: "S3x"
										},
										MetricAggregationType: {},
										EstimatedInstanceWarmup: {
											type: "integer"
										},
										Alarms: {
											shape: "S41"
										},
										TargetTrackingConfiguration: {
											shape: "S43"
										}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				DescribeScalingActivities: {
					input: {
						type: "structure",
						members: {
							ActivityIds: {
								type: "list",
								member: {}
							},
							AutoScalingGroupName: {},
							MaxRecords: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						resultWrapper: "DescribeScalingActivitiesResult",
						type: "structure",
						required: ["Activities"],
						members: {
							Activities: {
								shape: "S4j"
							},
							NextToken: {}
						}
					}
				},
				DescribeScalingProcessTypes: {
					output: {
						resultWrapper: "DescribeScalingProcessTypesResult",
						type: "structure",
						members: {
							Processes: {
								type: "list",
								member: {
									type: "structure",
									required: ["ProcessName"],
									members: {
										ProcessName: {}
									}
								}
							}
						}
					}
				},
				DescribeScheduledActions: {
					input: {
						type: "structure",
						members: {
							AutoScalingGroupName: {},
							ScheduledActionNames: {
								type: "list",
								member: {}
							},
							StartTime: {
								type: "timestamp"
							},
							EndTime: {
								type: "timestamp"
							},
							NextToken: {},
							MaxRecords: {
								type: "integer"
							}
						}
					},
					output: {
						resultWrapper: "DescribeScheduledActionsResult",
						type: "structure",
						members: {
							ScheduledUpdateGroupActions: {
								type: "list",
								member: {
									type: "structure",
									members: {
										AutoScalingGroupName: {},
										ScheduledActionName: {},
										ScheduledActionARN: {},
										Time: {
											type: "timestamp"
										},
										StartTime: {
											type: "timestamp"
										},
										EndTime: {
											type: "timestamp"
										},
										Recurrence: {},
										MinSize: {
											type: "integer"
										},
										MaxSize: {
											type: "integer"
										},
										DesiredCapacity: {
											type: "integer"
										}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				DescribeTags: {
					input: {
						type: "structure",
						members: {
							Filters: {
								type: "list",
								member: {
									type: "structure",
									members: {
										Name: {},
										Values: {
											type: "list",
											member: {}
										}
									}
								}
							},
							NextToken: {},
							MaxRecords: {
								type: "integer"
							}
						}
					},
					output: {
						resultWrapper: "DescribeTagsResult",
						type: "structure",
						members: {
							Tags: {
								shape: "S2n"
							},
							NextToken: {}
						}
					}
				},
				DescribeTerminationPolicyTypes: {
					output: {
						resultWrapper: "DescribeTerminationPolicyTypesResult",
						type: "structure",
						members: {
							TerminationPolicyTypes: {
								shape: "St"
							}
						}
					}
				},
				DetachInstances: {
					input: {
						type: "structure",
						required: ["AutoScalingGroupName", "ShouldDecrementDesiredCapacity"],
						members: {
							InstanceIds: {
								shape: "S2"
							},
							AutoScalingGroupName: {},
							ShouldDecrementDesiredCapacity: {
								type: "boolean"
							}
						}
					},
					output: {
						resultWrapper: "DetachInstancesResult",
						type: "structure",
						members: {
							Activities: {
								shape: "S4j"
							}
						}
					}
				},
				DetachLoadBalancerTargetGroups: {
					input: {
						type: "structure",
						required: ["AutoScalingGroupName", "TargetGroupARNs"],
						members: {
							AutoScalingGroupName: {},
							TargetGroupARNs: {
								shape: "S6"
							}
						}
					},
					output: {
						resultWrapper: "DetachLoadBalancerTargetGroupsResult",
						type: "structure",
						members: {}
					}
				},
				DetachLoadBalancers: {
					input: {
						type: "structure",
						required: ["AutoScalingGroupName", "LoadBalancerNames"],
						members: {
							AutoScalingGroupName: {},
							LoadBalancerNames: {
								shape: "Sa"
							}
						}
					},
					output: {
						resultWrapper: "DetachLoadBalancersResult",
						type: "structure",
						members: {}
					}
				},
				DisableMetricsCollection: {
					input: {
						type: "structure",
						required: ["AutoScalingGroupName"],
						members: {
							AutoScalingGroupName: {},
							Metrics: {
								shape: "S59"
							}
						}
					}
				},
				EnableMetricsCollection: {
					input: {
						type: "structure",
						required: ["AutoScalingGroupName", "Granularity"],
						members: {
							AutoScalingGroupName: {},
							Metrics: {
								shape: "S59"
							},
							Granularity: {}
						}
					}
				},
				EnterStandby: {
					input: {
						type: "structure",
						required: ["AutoScalingGroupName", "ShouldDecrementDesiredCapacity"],
						members: {
							InstanceIds: {
								shape: "S2"
							},
							AutoScalingGroupName: {},
							ShouldDecrementDesiredCapacity: {
								type: "boolean"
							}
						}
					},
					output: {
						resultWrapper: "EnterStandbyResult",
						type: "structure",
						members: {
							Activities: {
								shape: "S4j"
							}
						}
					}
				},
				ExecutePolicy: {
					input: {
						type: "structure",
						required: ["PolicyName"],
						members: {
							AutoScalingGroupName: {},
							PolicyName: {},
							HonorCooldown: {
								type: "boolean"
							},
							MetricValue: {
								type: "double"
							},
							BreachThreshold: {
								type: "double"
							}
						}
					}
				},
				ExitStandby: {
					input: {
						type: "structure",
						required: ["AutoScalingGroupName"],
						members: {
							InstanceIds: {
								shape: "S2"
							},
							AutoScalingGroupName: {}
						}
					},
					output: {
						resultWrapper: "ExitStandbyResult",
						type: "structure",
						members: {
							Activities: {
								shape: "S4j"
							}
						}
					}
				},
				PutLifecycleHook: {
					input: {
						type: "structure",
						required: ["LifecycleHookName", "AutoScalingGroupName"],
						members: {
							LifecycleHookName: {},
							AutoScalingGroupName: {},
							LifecycleTransition: {},
							RoleARN: {},
							NotificationTargetARN: {},
							NotificationMetadata: {},
							HeartbeatTimeout: {
								type: "integer"
							},
							DefaultResult: {}
						}
					},
					output: {
						resultWrapper: "PutLifecycleHookResult",
						type: "structure",
						members: {}
					}
				},
				PutNotificationConfiguration: {
					input: {
						type: "structure",
						required: ["AutoScalingGroupName", "TopicARN", "NotificationTypes"],
						members: {
							AutoScalingGroupName: {},
							TopicARN: {},
							NotificationTypes: {
								shape: "S2u"
							}
						}
					}
				},
				PutScalingPolicy: {
					input: {
						type: "structure",
						required: ["AutoScalingGroupName", "PolicyName"],
						members: {
							AutoScalingGroupName: {},
							PolicyName: {},
							PolicyType: {},
							AdjustmentType: {},
							MinAdjustmentStep: {
								shape: "S3u"
							},
							MinAdjustmentMagnitude: {
								type: "integer"
							},
							ScalingAdjustment: {
								type: "integer"
							},
							Cooldown: {
								type: "integer"
							},
							MetricAggregationType: {},
							StepAdjustments: {
								shape: "S3x"
							},
							EstimatedInstanceWarmup: {
								type: "integer"
							},
							TargetTrackingConfiguration: {
								shape: "S43"
							}
						}
					},
					output: {
						resultWrapper: "PutScalingPolicyResult",
						type: "structure",
						members: {
							PolicyARN: {},
							Alarms: {
								shape: "S41"
							}
						}
					}
				},
				PutScheduledUpdateGroupAction: {
					input: {
						type: "structure",
						required: ["AutoScalingGroupName", "ScheduledActionName"],
						members: {
							AutoScalingGroupName: {},
							ScheduledActionName: {},
							Time: {
								type: "timestamp"
							},
							StartTime: {
								type: "timestamp"
							},
							EndTime: {
								type: "timestamp"
							},
							Recurrence: {},
							MinSize: {
								type: "integer"
							},
							MaxSize: {
								type: "integer"
							},
							DesiredCapacity: {
								type: "integer"
							}
						}
					}
				},
				RecordLifecycleActionHeartbeat: {
					input: {
						type: "structure",
						required: ["LifecycleHookName", "AutoScalingGroupName"],
						members: {
							LifecycleHookName: {},
							AutoScalingGroupName: {},
							LifecycleActionToken: {},
							InstanceId: {}
						}
					},
					output: {
						resultWrapper: "RecordLifecycleActionHeartbeatResult",
						type: "structure",
						members: {}
					}
				},
				ResumeProcesses: {
					input: {
						shape: "S5p"
					}
				},
				SetDesiredCapacity: {
					input: {
						type: "structure",
						required: ["AutoScalingGroupName", "DesiredCapacity"],
						members: {
							AutoScalingGroupName: {},
							DesiredCapacity: {
								type: "integer"
							},
							HonorCooldown: {
								type: "boolean"
							}
						}
					}
				},
				SetInstanceHealth: {
					input: {
						type: "structure",
						required: ["InstanceId", "HealthStatus"],
						members: {
							InstanceId: {},
							HealthStatus: {},
							ShouldRespectGracePeriod: {
								type: "boolean"
							}
						}
					}
				},
				SetInstanceProtection: {
					input: {
						type: "structure",
						required: ["InstanceIds", "AutoScalingGroupName", "ProtectedFromScaleIn"],
						members: {
							InstanceIds: {
								shape: "S2"
							},
							AutoScalingGroupName: {},
							ProtectedFromScaleIn: {
								type: "boolean"
							}
						}
					},
					output: {
						resultWrapper: "SetInstanceProtectionResult",
						type: "structure",
						members: {}
					}
				},
				SuspendProcesses: {
					input: {
						shape: "S5p"
					}
				},
				TerminateInstanceInAutoScalingGroup: {
					input: {
						type: "structure",
						required: ["InstanceId", "ShouldDecrementDesiredCapacity"],
						members: {
							InstanceId: {},
							ShouldDecrementDesiredCapacity: {
								type: "boolean"
							}
						}
					},
					output: {
						resultWrapper: "TerminateInstanceInAutoScalingGroupResult",
						type: "structure",
						members: {
							Activity: {
								shape: "S4k"
							}
						}
					}
				},
				UpdateAutoScalingGroup: {
					input: {
						type: "structure",
						required: ["AutoScalingGroupName"],
						members: {
							AutoScalingGroupName: {},
							LaunchConfigurationName: {},
							LaunchTemplate: {
								shape: "Sj"
							},
							MinSize: {
								type: "integer"
							},
							MaxSize: {
								type: "integer"
							},
							DesiredCapacity: {
								type: "integer"
							},
							DefaultCooldown: {
								type: "integer"
							},
							AvailabilityZones: {
								shape: "Sp"
							},
							HealthCheckType: {},
							HealthCheckGracePeriod: {
								type: "integer"
							},
							PlacementGroup: {},
							VPCZoneIdentifier: {},
							TerminationPolicies: {
								shape: "St"
							},
							NewInstancesProtectedFromScaleIn: {
								type: "boolean"
							},
							ServiceLinkedRoleARN: {}
						}
					}
				}
			},
			shapes: {
				S2: {
					type: "list",
					member: {}
				},
				S6: {
					type: "list",
					member: {}
				},
				Sa: {
					type: "list",
					member: {}
				},
				Sj: {
					type: "structure",
					members: {
						LaunchTemplateId: {},
						LaunchTemplateName: {},
						Version: {}
					}
				},
				Sp: {
					type: "list",
					member: {}
				},
				St: {
					type: "list",
					member: {}
				},
				S12: {
					type: "list",
					member: {
						type: "structure",
						required: ["Key"],
						members: {
							ResourceId: {},
							ResourceType: {},
							Key: {},
							Value: {},
							PropagateAtLaunch: {
								type: "boolean"
							}
						}
					}
				},
				S19: {
					type: "list",
					member: {}
				},
				S1a: {
					type: "list",
					member: {}
				},
				S1c: {
					type: "list",
					member: {
						type: "structure",
						required: ["DeviceName"],
						members: {
							VirtualName: {},
							DeviceName: {},
							Ebs: {
								type: "structure",
								members: {
									SnapshotId: {},
									VolumeSize: {
										type: "integer"
									},
									VolumeType: {},
									DeleteOnTermination: {
										type: "boolean"
									},
									Iops: {
										type: "integer"
									},
									Encrypted: {
										type: "boolean"
									}
								}
							},
							NoDevice: {
								type: "boolean"
							}
						}
					}
				},
				S1l: {
					type: "structure",
					members: {
						Enabled: {
							type: "boolean"
						}
					}
				},
				S2a: {
					type: "list",
					member: {}
				},
				S2n: {
					type: "list",
					member: {
						type: "structure",
						members: {
							ResourceId: {},
							ResourceType: {},
							Key: {},
							Value: {},
							PropagateAtLaunch: {
								type: "boolean"
							}
						}
					}
				},
				S2u: {
					type: "list",
					member: {}
				},
				S3u: {
					type: "integer",
					deprecated: !0
				},
				S3x: {
					type: "list",
					member: {
						type: "structure",
						required: ["ScalingAdjustment"],
						members: {
							MetricIntervalLowerBound: {
								type: "double"
							},
							MetricIntervalUpperBound: {
								type: "double"
							},
							ScalingAdjustment: {
								type: "integer"
							}
						}
					}
				},
				S41: {
					type: "list",
					member: {
						type: "structure",
						members: {
							AlarmName: {},
							AlarmARN: {}
						}
					}
				},
				S43: {
					type: "structure",
					required: ["TargetValue"],
					members: {
						PredefinedMetricSpecification: {
							type: "structure",
							required: ["PredefinedMetricType"],
							members: {
								PredefinedMetricType: {},
								ResourceLabel: {}
							}
						},
						CustomizedMetricSpecification: {
							type: "structure",
							required: ["MetricName", "Namespace", "Statistic"],
							members: {
								MetricName: {},
								Namespace: {},
								Dimensions: {
									type: "list",
									member: {
										type: "structure",
										required: ["Name", "Value"],
										members: {
											Name: {},
											Value: {}
										}
									}
								},
								Statistic: {},
								Unit: {}
							}
						},
						TargetValue: {
							type: "double"
						},
						DisableScaleIn: {
							type: "boolean"
						}
					}
				},
				S4j: {
					type: "list",
					member: {
						shape: "S4k"
					}
				},
				S4k: {
					type: "structure",
					required: ["ActivityId", "AutoScalingGroupName", "Cause", "StartTime", "StatusCode"],
					members: {
						ActivityId: {},
						AutoScalingGroupName: {},
						Description: {},
						Cause: {},
						StartTime: {
							type: "timestamp"
						},
						EndTime: {
							type: "timestamp"
						},
						StatusCode: {},
						StatusMessage: {},
						Progress: {
							type: "integer"
						},
						Details: {}
					}
				},
				S59: {
					type: "list",
					member: {}
				},
				S5p: {
					type: "structure",
					required: ["AutoScalingGroupName"],
					members: {
						AutoScalingGroupName: {},
						ScalingProcesses: {
							type: "list",
							member: {}
						}
					}
				}
			}
		}
	}, {}],
	8: [function(e, t, r) {
		t.exports = {
			pagination: {
				DescribeAutoScalingGroups: {
					input_token: "NextToken",
					limit_key: "MaxRecords",
					output_token: "NextToken",
					result_key: "AutoScalingGroups"
				},
				DescribeAutoScalingInstances: {
					input_token: "NextToken",
					limit_key: "MaxRecords",
					output_token: "NextToken",
					result_key: "AutoScalingInstances"
				},
				DescribeLaunchConfigurations: {
					input_token: "NextToken",
					limit_key: "MaxRecords",
					output_token: "NextToken",
					result_key: "LaunchConfigurations"
				},
				DescribeNotificationConfigurations: {
					input_token: "NextToken",
					limit_key: "MaxRecords",
					output_token: "NextToken",
					result_key: "NotificationConfigurations"
				},
				DescribePolicies: {
					input_token: "NextToken",
					limit_key: "MaxRecords",
					output_token: "NextToken",
					result_key: "ScalingPolicies"
				},
				DescribeScalingActivities: {
					input_token: "NextToken",
					limit_key: "MaxRecords",
					output_token: "NextToken",
					result_key: "Activities"
				},
				DescribeScheduledActions: {
					input_token: "NextToken",
					limit_key: "MaxRecords",
					output_token: "NextToken",
					result_key: "ScheduledUpdateGroupActions"
				},
				DescribeTags: {
					input_token: "NextToken",
					limit_key: "MaxRecords",
					output_token: "NextToken",
					result_key: "Tags"
				}
			}
		}
	}, {}],
	9: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2010-05-15",
				endpointPrefix: "cloudformation",
				protocol: "query",
				serviceFullName: "AWS CloudFormation",
				serviceId: "CloudFormation",
				signatureVersion: "v4",
				uid: "cloudformation-2010-05-15",
				xmlNamespace: "http://cloudformation.amazonaws.com/doc/2010-05-15/"
			},
			operations: {
				CancelUpdateStack: {
					input: {
						type: "structure",
						required: ["StackName"],
						members: {
							StackName: {},
							ClientRequestToken: {}
						}
					}
				},
				ContinueUpdateRollback: {
					input: {
						type: "structure",
						required: ["StackName"],
						members: {
							StackName: {},
							RoleARN: {},
							ResourcesToSkip: {
								type: "list",
								member: {}
							},
							ClientRequestToken: {}
						}
					},
					output: {
						resultWrapper: "ContinueUpdateRollbackResult",
						type: "structure",
						members: {}
					}
				},
				CreateChangeSet: {
					input: {
						type: "structure",
						required: ["StackName", "ChangeSetName"],
						members: {
							StackName: {},
							TemplateBody: {},
							TemplateURL: {},
							UsePreviousTemplate: {
								type: "boolean"
							},
							Parameters: {
								shape: "Se"
							},
							Capabilities: {
								shape: "Sj"
							},
							ResourceTypes: {
								shape: "Sl"
							},
							RoleARN: {},
							RollbackConfiguration: {
								shape: "Sn"
							},
							NotificationARNs: {
								shape: "St"
							},
							Tags: {
								shape: "Sv"
							},
							ChangeSetName: {},
							ClientToken: {},
							Description: {},
							ChangeSetType: {}
						}
					},
					output: {
						resultWrapper: "CreateChangeSetResult",
						type: "structure",
						members: {
							Id: {},
							StackId: {}
						}
					}
				},
				CreateStack: {
					input: {
						type: "structure",
						required: ["StackName"],
						members: {
							StackName: {},
							TemplateBody: {},
							TemplateURL: {},
							Parameters: {
								shape: "Se"
							},
							DisableRollback: {
								type: "boolean"
							},
							RollbackConfiguration: {
								shape: "Sn"
							},
							TimeoutInMinutes: {
								type: "integer"
							},
							NotificationARNs: {
								shape: "St"
							},
							Capabilities: {
								shape: "Sj"
							},
							ResourceTypes: {
								shape: "Sl"
							},
							RoleARN: {},
							OnFailure: {},
							StackPolicyBody: {},
							StackPolicyURL: {},
							Tags: {
								shape: "Sv"
							},
							ClientRequestToken: {},
							EnableTerminationProtection: {
								type: "boolean"
							}
						}
					},
					output: {
						resultWrapper: "CreateStackResult",
						type: "structure",
						members: {
							StackId: {}
						}
					}
				},
				CreateStackInstances: {
					input: {
						type: "structure",
						required: ["StackSetName", "Accounts", "Regions"],
						members: {
							StackSetName: {},
							Accounts: {
								shape: "S1g"
							},
							Regions: {
								shape: "S1i"
							},
							ParameterOverrides: {
								shape: "Se"
							},
							OperationPreferences: {
								shape: "S1k"
							},
							OperationId: {
								idempotencyToken: !0
							}
						}
					},
					output: {
						resultWrapper: "CreateStackInstancesResult",
						type: "structure",
						members: {
							OperationId: {}
						}
					}
				},
				CreateStackSet: {
					input: {
						type: "structure",
						required: ["StackSetName"],
						members: {
							StackSetName: {},
							Description: {},
							TemplateBody: {},
							TemplateURL: {},
							Parameters: {
								shape: "Se"
							},
							Capabilities: {
								shape: "Sj"
							},
							Tags: {
								shape: "Sv"
							},
							AdministrationRoleARN: {},
							ClientRequestToken: {
								idempotencyToken: !0
							}
						}
					},
					output: {
						resultWrapper: "CreateStackSetResult",
						type: "structure",
						members: {
							StackSetId: {}
						}
					}
				},
				DeleteChangeSet: {
					input: {
						type: "structure",
						required: ["ChangeSetName"],
						members: {
							ChangeSetName: {},
							StackName: {}
						}
					},
					output: {
						resultWrapper: "DeleteChangeSetResult",
						type: "structure",
						members: {}
					}
				},
				DeleteStack: {
					input: {
						type: "structure",
						required: ["StackName"],
						members: {
							StackName: {},
							RetainResources: {
								type: "list",
								member: {}
							},
							RoleARN: {},
							ClientRequestToken: {}
						}
					}
				},
				DeleteStackInstances: {
					input: {
						type: "structure",
						required: ["StackSetName", "Accounts", "Regions", "RetainStacks"],
						members: {
							StackSetName: {},
							Accounts: {
								shape: "S1g"
							},
							Regions: {
								shape: "S1i"
							},
							OperationPreferences: {
								shape: "S1k"
							},
							RetainStacks: {
								type: "boolean"
							},
							OperationId: {
								idempotencyToken: !0
							}
						}
					},
					output: {
						resultWrapper: "DeleteStackInstancesResult",
						type: "structure",
						members: {
							OperationId: {}
						}
					}
				},
				DeleteStackSet: {
					input: {
						type: "structure",
						required: ["StackSetName"],
						members: {
							StackSetName: {}
						}
					},
					output: {
						resultWrapper: "DeleteStackSetResult",
						type: "structure",
						members: {}
					}
				},
				DescribeAccountLimits: {
					input: {
						type: "structure",
						members: {
							NextToken: {}
						}
					},
					output: {
						resultWrapper: "DescribeAccountLimitsResult",
						type: "structure",
						members: {
							AccountLimits: {
								type: "list",
								member: {
									type: "structure",
									members: {
										Name: {},
										Value: {
											type: "integer"
										}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				DescribeChangeSet: {
					input: {
						type: "structure",
						required: ["ChangeSetName"],
						members: {
							ChangeSetName: {},
							StackName: {},
							NextToken: {}
						}
					},
					output: {
						resultWrapper: "DescribeChangeSetResult",
						type: "structure",
						members: {
							ChangeSetName: {},
							ChangeSetId: {},
							StackId: {},
							StackName: {},
							Description: {},
							Parameters: {
								shape: "Se"
							},
							CreationTime: {
								type: "timestamp"
							},
							ExecutionStatus: {},
							Status: {},
							StatusReason: {},
							NotificationARNs: {
								shape: "St"
							},
							RollbackConfiguration: {
								shape: "Sn"
							},
							Capabilities: {
								shape: "Sj"
							},
							Tags: {
								shape: "Sv"
							},
							Changes: {
								type: "list",
								member: {
									type: "structure",
									members: {
										Type: {},
										ResourceChange: {
											type: "structure",
											members: {
												Action: {},
												LogicalResourceId: {},
												PhysicalResourceId: {},
												ResourceType: {},
												Replacement: {},
												Scope: {
													type: "list",
													member: {}
												},
												Details: {
													type: "list",
													member: {
														type: "structure",
														members: {
															Target: {
																type: "structure",
																members: {
																	Attribute: {},
																	Name: {},
																	RequiresRecreation: {}
																}
															},
															Evaluation: {},
															ChangeSource: {},
															CausingEntity: {}
														}
													}
												}
											}
										}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				DescribeStackEvents: {
					input: {
						type: "structure",
						members: {
							StackName: {},
							NextToken: {}
						}
					},
					output: {
						resultWrapper: "DescribeStackEventsResult",
						type: "structure",
						members: {
							StackEvents: {
								type: "list",
								member: {
									type: "structure",
									required: ["StackId", "EventId", "StackName", "Timestamp"],
									members: {
										StackId: {},
										EventId: {},
										StackName: {},
										LogicalResourceId: {},
										PhysicalResourceId: {},
										ResourceType: {},
										Timestamp: {
											type: "timestamp"
										},
										ResourceStatus: {},
										ResourceStatusReason: {},
										ResourceProperties: {},
										ClientRequestToken: {}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				DescribeStackInstance: {
					input: {
						type: "structure",
						required: ["StackSetName", "StackInstanceAccount", "StackInstanceRegion"],
						members: {
							StackSetName: {},
							StackInstanceAccount: {},
							StackInstanceRegion: {}
						}
					},
					output: {
						resultWrapper: "DescribeStackInstanceResult",
						type: "structure",
						members: {
							StackInstance: {
								type: "structure",
								members: {
									StackSetId: {},
									Region: {},
									Account: {},
									StackId: {},
									ParameterOverrides: {
										shape: "Se"
									},
									Status: {},
									StatusReason: {}
								}
							}
						}
					}
				},
				DescribeStackResource: {
					input: {
						type: "structure",
						required: ["StackName", "LogicalResourceId"],
						members: {
							StackName: {},
							LogicalResourceId: {}
						}
					},
					output: {
						resultWrapper: "DescribeStackResourceResult",
						type: "structure",
						members: {
							StackResourceDetail: {
								type: "structure",
								required: ["LogicalResourceId", "ResourceType", "LastUpdatedTimestamp", "ResourceStatus"],
								members: {
									StackName: {},
									StackId: {},
									LogicalResourceId: {},
									PhysicalResourceId: {},
									ResourceType: {},
									LastUpdatedTimestamp: {
										type: "timestamp"
									},
									ResourceStatus: {},
									ResourceStatusReason: {},
									Description: {},
									Metadata: {}
								}
							}
						}
					}
				},
				DescribeStackResources: {
					input: {
						type: "structure",
						members: {
							StackName: {},
							LogicalResourceId: {},
							PhysicalResourceId: {}
						}
					},
					output: {
						resultWrapper: "DescribeStackResourcesResult",
						type: "structure",
						members: {
							StackResources: {
								type: "list",
								member: {
									type: "structure",
									required: ["LogicalResourceId", "ResourceType", "Timestamp", "ResourceStatus"],
									members: {
										StackName: {},
										StackId: {},
										LogicalResourceId: {},
										PhysicalResourceId: {},
										ResourceType: {},
										Timestamp: {
											type: "timestamp"
										},
										ResourceStatus: {},
										ResourceStatusReason: {},
										Description: {}
									}
								}
							}
						}
					}
				},
				DescribeStackSet: {
					input: {
						type: "structure",
						required: ["StackSetName"],
						members: {
							StackSetName: {}
						}
					},
					output: {
						resultWrapper: "DescribeStackSetResult",
						type: "structure",
						members: {
							StackSet: {
								type: "structure",
								members: {
									StackSetName: {},
									StackSetId: {},
									Description: {},
									Status: {},
									TemplateBody: {},
									Parameters: {
										shape: "Se"
									},
									Capabilities: {
										shape: "Sj"
									},
									Tags: {
										shape: "Sv"
									},
									StackSetARN: {},
									AdministrationRoleARN: {}
								}
							}
						}
					}
				},
				DescribeStackSetOperation: {
					input: {
						type: "structure",
						required: ["StackSetName", "OperationId"],
						members: {
							StackSetName: {},
							OperationId: {}
						}
					},
					output: {
						resultWrapper: "DescribeStackSetOperationResult",
						type: "structure",
						members: {
							StackSetOperation: {
								type: "structure",
								members: {
									OperationId: {},
									StackSetId: {},
									Action: {},
									Status: {},
									OperationPreferences: {
										shape: "S1k"
									},
									RetainStacks: {
										type: "boolean"
									},
									AdministrationRoleARN: {},
									CreationTimestamp: {
										type: "timestamp"
									},
									EndTimestamp: {
										type: "timestamp"
									}
								}
							}
						}
					}
				},
				DescribeStacks: {
					input: {
						type: "structure",
						members: {
							StackName: {},
							NextToken: {}
						}
					},
					output: {
						resultWrapper: "DescribeStacksResult",
						type: "structure",
						members: {
							Stacks: {
								type: "list",
								member: {
									type: "structure",
									required: ["StackName", "CreationTime", "StackStatus"],
									members: {
										StackId: {},
										StackName: {},
										ChangeSetId: {},
										Description: {},
										Parameters: {
											shape: "Se"
										},
										CreationTime: {
											type: "timestamp"
										},
										DeletionTime: {
											type: "timestamp"
										},
										LastUpdatedTime: {
											type: "timestamp"
										},
										RollbackConfiguration: {
											shape: "Sn"
										},
										StackStatus: {},
										StackStatusReason: {},
										DisableRollback: {
											type: "boolean"
										},
										NotificationARNs: {
											shape: "St"
										},
										TimeoutInMinutes: {
											type: "integer"
										},
										Capabilities: {
											shape: "Sj"
										},
										Outputs: {
											type: "list",
											member: {
												type: "structure",
												members: {
													OutputKey: {},
													OutputValue: {},
													Description: {},
													ExportName: {}
												}
											}
										},
										RoleARN: {},
										Tags: {
											shape: "Sv"
										},
										EnableTerminationProtection: {
											type: "boolean"
										},
										ParentId: {},
										RootId: {}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				EstimateTemplateCost: {
					input: {
						type: "structure",
						members: {
							TemplateBody: {},
							TemplateURL: {},
							Parameters: {
								shape: "Se"
							}
						}
					},
					output: {
						resultWrapper: "EstimateTemplateCostResult",
						type: "structure",
						members: {
							Url: {}
						}
					}
				},
				ExecuteChangeSet: {
					input: {
						type: "structure",
						required: ["ChangeSetName"],
						members: {
							ChangeSetName: {},
							StackName: {},
							ClientRequestToken: {}
						}
					},
					output: {
						resultWrapper: "ExecuteChangeSetResult",
						type: "structure",
						members: {}
					}
				},
				GetStackPolicy: {
					input: {
						type: "structure",
						required: ["StackName"],
						members: {
							StackName: {}
						}
					},
					output: {
						resultWrapper: "GetStackPolicyResult",
						type: "structure",
						members: {
							StackPolicyBody: {}
						}
					}
				},
				GetTemplate: {
					input: {
						type: "structure",
						members: {
							StackName: {},
							ChangeSetName: {},
							TemplateStage: {}
						}
					},
					output: {
						resultWrapper: "GetTemplateResult",
						type: "structure",
						members: {
							TemplateBody: {},
							StagesAvailable: {
								type: "list",
								member: {}
							}
						}
					}
				},
				GetTemplateSummary: {
					input: {
						type: "structure",
						members: {
							TemplateBody: {},
							TemplateURL: {},
							StackName: {},
							StackSetName: {}
						}
					},
					output: {
						resultWrapper: "GetTemplateSummaryResult",
						type: "structure",
						members: {
							Parameters: {
								type: "list",
								member: {
									type: "structure",
									members: {
										ParameterKey: {},
										DefaultValue: {},
										ParameterType: {},
										NoEcho: {
											type: "boolean"
										},
										Description: {},
										ParameterConstraints: {
											type: "structure",
											members: {
												AllowedValues: {
													type: "list",
													member: {}
												}
											}
										}
									}
								}
							},
							Description: {},
							Capabilities: {
								shape: "Sj"
							},
							CapabilitiesReason: {},
							ResourceTypes: {
								shape: "Sl"
							},
							Version: {},
							Metadata: {},
							DeclaredTransforms: {
								shape: "S4v"
							}
						}
					}
				},
				ListChangeSets: {
					input: {
						type: "structure",
						required: ["StackName"],
						members: {
							StackName: {},
							NextToken: {}
						}
					},
					output: {
						resultWrapper: "ListChangeSetsResult",
						type: "structure",
						members: {
							Summaries: {
								type: "list",
								member: {
									type: "structure",
									members: {
										StackId: {},
										StackName: {},
										ChangeSetId: {},
										ChangeSetName: {},
										ExecutionStatus: {},
										Status: {},
										StatusReason: {},
										CreationTime: {
											type: "timestamp"
										},
										Description: {}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				ListExports: {
					input: {
						type: "structure",
						members: {
							NextToken: {}
						}
					},
					output: {
						resultWrapper: "ListExportsResult",
						type: "structure",
						members: {
							Exports: {
								type: "list",
								member: {
									type: "structure",
									members: {
										ExportingStackId: {},
										Name: {},
										Value: {}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				ListImports: {
					input: {
						type: "structure",
						required: ["ExportName"],
						members: {
							ExportName: {},
							NextToken: {}
						}
					},
					output: {
						resultWrapper: "ListImportsResult",
						type: "structure",
						members: {
							Imports: {
								type: "list",
								member: {}
							},
							NextToken: {}
						}
					}
				},
				ListStackInstances: {
					input: {
						type: "structure",
						required: ["StackSetName"],
						members: {
							StackSetName: {},
							NextToken: {},
							MaxResults: {
								type: "integer"
							},
							StackInstanceAccount: {},
							StackInstanceRegion: {}
						}
					},
					output: {
						resultWrapper: "ListStackInstancesResult",
						type: "structure",
						members: {
							Summaries: {
								type: "list",
								member: {
									type: "structure",
									members: {
										StackSetId: {},
										Region: {},
										Account: {},
										StackId: {},
										Status: {},
										StatusReason: {}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				ListStackResources: {
					input: {
						type: "structure",
						required: ["StackName"],
						members: {
							StackName: {},
							NextToken: {}
						}
					},
					output: {
						resultWrapper: "ListStackResourcesResult",
						type: "structure",
						members: {
							StackResourceSummaries: {
								type: "list",
								member: {
									type: "structure",
									required: ["LogicalResourceId", "ResourceType", "LastUpdatedTimestamp", "ResourceStatus"],
									members: {
										LogicalResourceId: {},
										PhysicalResourceId: {},
										ResourceType: {},
										LastUpdatedTimestamp: {
											type: "timestamp"
										},
										ResourceStatus: {},
										ResourceStatusReason: {}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				ListStackSetOperationResults: {
					input: {
						type: "structure",
						required: ["StackSetName", "OperationId"],
						members: {
							StackSetName: {},
							OperationId: {},
							NextToken: {},
							MaxResults: {
								type: "integer"
							}
						}
					},
					output: {
						resultWrapper: "ListStackSetOperationResultsResult",
						type: "structure",
						members: {
							Summaries: {
								type: "list",
								member: {
									type: "structure",
									members: {
										Account: {},
										Region: {},
										Status: {},
										StatusReason: {},
										AccountGateResult: {
											type: "structure",
											members: {
												Status: {},
												StatusReason: {}
											}
										}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				ListStackSetOperations: {
					input: {
						type: "structure",
						required: ["StackSetName"],
						members: {
							StackSetName: {},
							NextToken: {},
							MaxResults: {
								type: "integer"
							}
						}
					},
					output: {
						resultWrapper: "ListStackSetOperationsResult",
						type: "structure",
						members: {
							Summaries: {
								type: "list",
								member: {
									type: "structure",
									members: {
										OperationId: {},
										Action: {},
										Status: {},
										CreationTimestamp: {
											type: "timestamp"
										},
										EndTimestamp: {
											type: "timestamp"
										}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				ListStackSets: {
					input: {
						type: "structure",
						members: {
							NextToken: {},
							MaxResults: {
								type: "integer"
							},
							Status: {}
						}
					},
					output: {
						resultWrapper: "ListStackSetsResult",
						type: "structure",
						members: {
							Summaries: {
								type: "list",
								member: {
									type: "structure",
									members: {
										StackSetName: {},
										StackSetId: {},
										Description: {},
										Status: {}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				ListStacks: {
					input: {
						type: "structure",
						members: {
							NextToken: {},
							StackStatusFilter: {
								type: "list",
								member: {}
							}
						}
					},
					output: {
						resultWrapper: "ListStacksResult",
						type: "structure",
						members: {
							StackSummaries: {
								type: "list",
								member: {
									type: "structure",
									required: ["StackName", "CreationTime", "StackStatus"],
									members: {
										StackId: {},
										StackName: {},
										TemplateDescription: {},
										CreationTime: {
											type: "timestamp"
										},
										LastUpdatedTime: {
											type: "timestamp"
										},
										DeletionTime: {
											type: "timestamp"
										},
										StackStatus: {},
										StackStatusReason: {},
										ParentId: {},
										RootId: {}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				SetStackPolicy: {
					input: {
						type: "structure",
						required: ["StackName"],
						members: {
							StackName: {},
							StackPolicyBody: {},
							StackPolicyURL: {}
						}
					}
				},
				SignalResource: {
					input: {
						type: "structure",
						required: ["StackName", "LogicalResourceId", "UniqueId", "Status"],
						members: {
							StackName: {},
							LogicalResourceId: {},
							UniqueId: {},
							Status: {}
						}
					}
				},
				StopStackSetOperation: {
					input: {
						type: "structure",
						required: ["StackSetName", "OperationId"],
						members: {
							StackSetName: {},
							OperationId: {}
						}
					},
					output: {
						resultWrapper: "StopStackSetOperationResult",
						type: "structure",
						members: {}
					}
				},
				UpdateStack: {
					input: {
						type: "structure",
						required: ["StackName"],
						members: {
							StackName: {},
							TemplateBody: {},
							TemplateURL: {},
							UsePreviousTemplate: {
								type: "boolean"
							},
							StackPolicyDuringUpdateBody: {},
							StackPolicyDuringUpdateURL: {},
							Parameters: {
								shape: "Se"
							},
							Capabilities: {
								shape: "Sj"
							},
							ResourceTypes: {
								shape: "Sl"
							},
							RoleARN: {},
							RollbackConfiguration: {
								shape: "Sn"
							},
							StackPolicyBody: {},
							StackPolicyURL: {},
							NotificationARNs: {
								shape: "St"
							},
							Tags: {
								shape: "Sv"
							},
							ClientRequestToken: {}
						}
					},
					output: {
						resultWrapper: "UpdateStackResult",
						type: "structure",
						members: {
							StackId: {}
						}
					}
				},
				UpdateStackInstances: {
					input: {
						type: "structure",
						required: ["StackSetName", "Accounts", "Regions"],
						members: {
							StackSetName: {},
							Accounts: {
								shape: "S1g"
							},
							Regions: {
								shape: "S1i"
							},
							ParameterOverrides: {
								shape: "Se"
							},
							OperationPreferences: {
								shape: "S1k"
							},
							OperationId: {
								idempotencyToken: !0
							}
						}
					},
					output: {
						resultWrapper: "UpdateStackInstancesResult",
						type: "structure",
						members: {
							OperationId: {}
						}
					}
				},
				UpdateStackSet: {
					input: {
						type: "structure",
						required: ["StackSetName"],
						members: {
							StackSetName: {},
							Description: {},
							TemplateBody: {},
							TemplateURL: {},
							UsePreviousTemplate: {
								type: "boolean"
							},
							Parameters: {
								shape: "Se"
							},
							Capabilities: {
								shape: "Sj"
							},
							Tags: {
								shape: "Sv"
							},
							OperationPreferences: {
								shape: "S1k"
							},
							AdministrationRoleARN: {},
							OperationId: {
								idempotencyToken: !0
							}
						}
					},
					output: {
						resultWrapper: "UpdateStackSetResult",
						type: "structure",
						members: {
							OperationId: {}
						}
					}
				},
				UpdateTerminationProtection: {
					input: {
						type: "structure",
						required: ["EnableTerminationProtection", "StackName"],
						members: {
							EnableTerminationProtection: {
								type: "boolean"
							},
							StackName: {}
						}
					},
					output: {
						resultWrapper: "UpdateTerminationProtectionResult",
						type: "structure",
						members: {
							StackId: {}
						}
					}
				},
				ValidateTemplate: {
					input: {
						type: "structure",
						members: {
							TemplateBody: {},
							TemplateURL: {}
						}
					},
					output: {
						resultWrapper: "ValidateTemplateResult",
						type: "structure",
						members: {
							Parameters: {
								type: "list",
								member: {
									type: "structure",
									members: {
										ParameterKey: {},
										DefaultValue: {},
										NoEcho: {
											type: "boolean"
										},
										Description: {}
									}
								}
							},
							Description: {},
							Capabilities: {
								shape: "Sj"
							},
							CapabilitiesReason: {},
							DeclaredTransforms: {
								shape: "S4v"
							}
						}
					}
				}
			},
			shapes: {
				Se: {
					type: "list",
					member: {
						type: "structure",
						members: {
							ParameterKey: {},
							ParameterValue: {},
							UsePreviousValue: {
								type: "boolean"
							},
							ResolvedValue: {}
						}
					}
				},
				Sj: {
					type: "list",
					member: {}
				},
				Sl: {
					type: "list",
					member: {}
				},
				Sn: {
					type: "structure",
					members: {
						RollbackTriggers: {
							type: "list",
							member: {
								type: "structure",
								required: ["Arn", "Type"],
								members: {
									Arn: {},
									Type: {}
								}
							}
						},
						MonitoringTimeInMinutes: {
							type: "integer"
						}
					}
				},
				St: {
					type: "list",
					member: {}
				},
				Sv: {
					type: "list",
					member: {
						type: "structure",
						required: ["Key", "Value"],
						members: {
							Key: {},
							Value: {}
						}
					}
				},
				S1g: {
					type: "list",
					member: {}
				},
				S1i: {
					type: "list",
					member: {}
				},
				S1k: {
					type: "structure",
					members: {
						RegionOrder: {
							shape: "S1i"
						},
						FailureToleranceCount: {
							type: "integer"
						},
						FailureTolerancePercentage: {
							type: "integer"
						},
						MaxConcurrentCount: {
							type: "integer"
						},
						MaxConcurrentPercentage: {
							type: "integer"
						}
					}
				},
				S4v: {
					type: "list",
					member: {}
				}
			}
		}
	}, {}],
	10: [function(e, t, r) {
		t.exports = {
			pagination: {
				DescribeStackEvents: {
					input_token: "NextToken",
					output_token: "NextToken",
					result_key: "StackEvents"
				},
				DescribeStackResources: {
					result_key: "StackResources"
				},
				DescribeStacks: {
					input_token: "NextToken",
					output_token: "NextToken",
					result_key: "Stacks"
				},
				ListExports: {
					input_token: "NextToken",
					output_token: "NextToken",
					result_key: "Exports"
				},
				ListImports: {
					input_token: "NextToken",
					output_token: "NextToken",
					result_key: "Imports"
				},
				ListStackResources: {
					input_token: "NextToken",
					output_token: "NextToken",
					result_key: "StackResourceSummaries"
				},
				ListStacks: {
					input_token: "NextToken",
					output_token: "NextToken",
					result_key: "StackSummaries"
				}
			}
		}
	}, {}],
	11: [function(e, t, r) {
		t.exports = {
			version: 2,
			waiters: {
				StackExists: {
					delay: 5,
					operation: "DescribeStacks",
					maxAttempts: 20,
					acceptors: [{
						matcher: "status",
						expected: 200,
						state: "success"
					}, {
						matcher: "error",
						expected: "ValidationError",
						state: "retry"
					}]
				},
				StackCreateComplete: {
					delay: 30,
					operation: "DescribeStacks",
					maxAttempts: 120,
					description: "Wait until stack status is CREATE_COMPLETE.",
					acceptors: [{
						argument: "Stacks[].StackStatus",
						expected: "CREATE_COMPLETE",
						matcher: "pathAll",
						state: "success"
					}, {
						argument: "Stacks[].StackStatus",
						expected: "CREATE_FAILED",
						matcher: "pathAny",
						state: "failure"
					}, {
						argument: "Stacks[].StackStatus",
						expected: "DELETE_COMPLETE",
						matcher: "pathAny",
						state: "failure"
					}, {
						argument: "Stacks[].StackStatus",
						expected: "DELETE_FAILED",
						matcher: "pathAny",
						state: "failure"
					}, {
						argument: "Stacks[].StackStatus",
						expected: "ROLLBACK_FAILED",
						matcher: "pathAny",
						state: "failure"
					}, {
						argument: "Stacks[].StackStatus",
						expected: "ROLLBACK_COMPLETE",
						matcher: "pathAny",
						state: "failure"
					}, {
						expected: "ValidationError",
						matcher: "error",
						state: "failure"
					}]
				},
				StackDeleteComplete: {
					delay: 30,
					operation: "DescribeStacks",
					maxAttempts: 120,
					description: "Wait until stack status is DELETE_COMPLETE.",
					acceptors: [{
						argument: "Stacks[].StackStatus",
						expected: "DELETE_COMPLETE",
						matcher: "pathAll",
						state: "success"
					}, {
						expected: "ValidationError",
						matcher: "error",
						state: "success"
					}, {
						argument: "Stacks[].StackStatus",
						expected: "DELETE_FAILED",
						matcher: "pathAny",
						state: "failure"
					}, {
						argument: "Stacks[].StackStatus",
						expected: "CREATE_FAILED",
						matcher: "pathAny",
						state: "failure"
					}, {
						argument: "Stacks[].StackStatus",
						expected: "ROLLBACK_FAILED",
						matcher: "pathAny",
						state: "failure"
					}, {
						argument: "Stacks[].StackStatus",
						expected: "UPDATE_ROLLBACK_FAILED",
						matcher: "pathAny",
						state: "failure"
					}, {
						argument: "Stacks[].StackStatus",
						expected: "UPDATE_ROLLBACK_IN_PROGRESS",
						matcher: "pathAny",
						state: "failure"
					}]
				},
				StackUpdateComplete: {
					delay: 30,
					maxAttempts: 120,
					operation: "DescribeStacks",
					description: "Wait until stack status is UPDATE_COMPLETE.",
					acceptors: [{
						argument: "Stacks[].StackStatus",
						expected: "UPDATE_COMPLETE",
						matcher: "pathAll",
						state: "success"
					}, {
						expected: "UPDATE_FAILED",
						matcher: "pathAny",
						state: "failure",
						argument: "Stacks[].StackStatus"
					}, {
						argument: "Stacks[].StackStatus",
						expected: "UPDATE_ROLLBACK_FAILED",
						matcher: "pathAny",
						state: "failure"
					}, {
						expected: "UPDATE_ROLLBACK_COMPLETE",
						matcher: "pathAny",
						state: "failure",
						argument: "Stacks[].StackStatus"
					}, {
						expected: "ValidationError",
						matcher: "error",
						state: "failure"
					}]
				},
				ChangeSetCreateComplete: {
					delay: 30,
					operation: "DescribeChangeSet",
					maxAttempts: 120,
					description: "Wait until change set status is CREATE_COMPLETE.",
					acceptors: [{
						argument: "Status",
						expected: "CREATE_COMPLETE",
						matcher: "path",
						state: "success"
					}, {
						argument: "Status",
						expected: "FAILED",
						matcher: "path",
						state: "failure"
					}, {
						expected: "ValidationError",
						matcher: "error",
						state: "failure"
					}]
				}
			}
		}
	}, {}],
	12: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2016-11-25",
				endpointPrefix: "cloudfront",
				globalEndpoint: "cloudfront.amazonaws.com",
				protocol: "rest-xml",
				serviceAbbreviation: "CloudFront",
				serviceFullName: "Amazon CloudFront",
				signatureVersion: "v4",
				uid: "cloudfront-2016-11-25"
			},
			operations: {
				CreateCloudFrontOriginAccessIdentity: {
					http: {
						requestUri: "/2016-11-25/origin-access-identity/cloudfront",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["CloudFrontOriginAccessIdentityConfig"],
						members: {
							CloudFrontOriginAccessIdentityConfig: {
								shape: "S2",
								locationName: "CloudFrontOriginAccessIdentityConfig",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2016-11-25/"
								}
							}
						},
						payload: "CloudFrontOriginAccessIdentityConfig"
					},
					output: {
						type: "structure",
						members: {
							CloudFrontOriginAccessIdentity: {
								shape: "S5"
							},
							Location: {
								location: "header",
								locationName: "Location"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "CloudFrontOriginAccessIdentity"
					}
				},
				CreateDistribution: {
					http: {
						requestUri: "/2016-11-25/distribution",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["DistributionConfig"],
						members: {
							DistributionConfig: {
								shape: "S7",
								locationName: "DistributionConfig",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2016-11-25/"
								}
							}
						},
						payload: "DistributionConfig"
					},
					output: {
						type: "structure",
						members: {
							Distribution: {
								shape: "S1s"
							},
							Location: {
								location: "header",
								locationName: "Location"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "Distribution"
					}
				},
				CreateDistributionWithTags: {
					http: {
						requestUri: "/2016-11-25/distribution?WithTags",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["DistributionConfigWithTags"],
						members: {
							DistributionConfigWithTags: {
								locationName: "DistributionConfigWithTags",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2016-11-25/"
								},
								type: "structure",
								required: ["DistributionConfig", "Tags"],
								members: {
									DistributionConfig: {
										shape: "S7"
									},
									Tags: {
										shape: "S21"
									}
								}
							}
						},
						payload: "DistributionConfigWithTags"
					},
					output: {
						type: "structure",
						members: {
							Distribution: {
								shape: "S1s"
							},
							Location: {
								location: "header",
								locationName: "Location"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "Distribution"
					}
				},
				CreateInvalidation: {
					http: {
						requestUri: "/2016-11-25/distribution/{DistributionId}/invalidation",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["DistributionId", "InvalidationBatch"],
						members: {
							DistributionId: {
								location: "uri",
								locationName: "DistributionId"
							},
							InvalidationBatch: {
								shape: "S28",
								locationName: "InvalidationBatch",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2016-11-25/"
								}
							}
						},
						payload: "InvalidationBatch"
					},
					output: {
						type: "structure",
						members: {
							Location: {
								location: "header",
								locationName: "Location"
							},
							Invalidation: {
								shape: "S2c"
							}
						},
						payload: "Invalidation"
					}
				},
				CreateStreamingDistribution: {
					http: {
						requestUri: "/2016-11-25/streaming-distribution",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["StreamingDistributionConfig"],
						members: {
							StreamingDistributionConfig: {
								shape: "S2e",
								locationName: "StreamingDistributionConfig",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2016-11-25/"
								}
							}
						},
						payload: "StreamingDistributionConfig"
					},
					output: {
						type: "structure",
						members: {
							StreamingDistribution: {
								shape: "S2i"
							},
							Location: {
								location: "header",
								locationName: "Location"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "StreamingDistribution"
					}
				},
				CreateStreamingDistributionWithTags: {
					http: {
						requestUri: "/2016-11-25/streaming-distribution?WithTags",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["StreamingDistributionConfigWithTags"],
						members: {
							StreamingDistributionConfigWithTags: {
								locationName: "StreamingDistributionConfigWithTags",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2016-11-25/"
								},
								type: "structure",
								required: ["StreamingDistributionConfig", "Tags"],
								members: {
									StreamingDistributionConfig: {
										shape: "S2e"
									},
									Tags: {
										shape: "S21"
									}
								}
							}
						},
						payload: "StreamingDistributionConfigWithTags"
					},
					output: {
						type: "structure",
						members: {
							StreamingDistribution: {
								shape: "S2i"
							},
							Location: {
								location: "header",
								locationName: "Location"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "StreamingDistribution"
					}
				},
				DeleteCloudFrontOriginAccessIdentity: {
					http: {
						method: "DELETE",
						requestUri: "/2016-11-25/origin-access-identity/cloudfront/{Id}",
						responseCode: 204
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							},
							IfMatch: {
								location: "header",
								locationName: "If-Match"
							}
						}
					}
				},
				DeleteDistribution: {
					http: {
						method: "DELETE",
						requestUri: "/2016-11-25/distribution/{Id}",
						responseCode: 204
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							},
							IfMatch: {
								location: "header",
								locationName: "If-Match"
							}
						}
					}
				},
				DeleteStreamingDistribution: {
					http: {
						method: "DELETE",
						requestUri: "/2016-11-25/streaming-distribution/{Id}",
						responseCode: 204
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							},
							IfMatch: {
								location: "header",
								locationName: "If-Match"
							}
						}
					}
				},
				GetCloudFrontOriginAccessIdentity: {
					http: {
						method: "GET",
						requestUri: "/2016-11-25/origin-access-identity/cloudfront/{Id}"
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							CloudFrontOriginAccessIdentity: {
								shape: "S5"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "CloudFrontOriginAccessIdentity"
					}
				},
				GetCloudFrontOriginAccessIdentityConfig: {
					http: {
						method: "GET",
						requestUri: "/2016-11-25/origin-access-identity/cloudfront/{Id}/config"
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							CloudFrontOriginAccessIdentityConfig: {
								shape: "S2"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "CloudFrontOriginAccessIdentityConfig"
					}
				},
				GetDistribution: {
					http: {
						method: "GET",
						requestUri: "/2016-11-25/distribution/{Id}"
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Distribution: {
								shape: "S1s"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "Distribution"
					}
				},
				GetDistributionConfig: {
					http: {
						method: "GET",
						requestUri: "/2016-11-25/distribution/{Id}/config"
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							DistributionConfig: {
								shape: "S7"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "DistributionConfig"
					}
				},
				GetInvalidation: {
					http: {
						method: "GET",
						requestUri: "/2016-11-25/distribution/{DistributionId}/invalidation/{Id}"
					},
					input: {
						type: "structure",
						required: ["DistributionId", "Id"],
						members: {
							DistributionId: {
								location: "uri",
								locationName: "DistributionId"
							},
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Invalidation: {
								shape: "S2c"
							}
						},
						payload: "Invalidation"
					}
				},
				GetStreamingDistribution: {
					http: {
						method: "GET",
						requestUri: "/2016-11-25/streaming-distribution/{Id}"
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							StreamingDistribution: {
								shape: "S2i"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "StreamingDistribution"
					}
				},
				GetStreamingDistributionConfig: {
					http: {
						method: "GET",
						requestUri: "/2016-11-25/streaming-distribution/{Id}/config"
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							StreamingDistributionConfig: {
								shape: "S2e"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "StreamingDistributionConfig"
					}
				},
				ListCloudFrontOriginAccessIdentities: {
					http: {
						method: "GET",
						requestUri: "/2016-11-25/origin-access-identity/cloudfront"
					},
					input: {
						type: "structure",
						members: {
							Marker: {
								location: "querystring",
								locationName: "Marker"
							},
							MaxItems: {
								location: "querystring",
								locationName: "MaxItems"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							CloudFrontOriginAccessIdentityList: {
								type: "structure",
								required: ["Marker", "MaxItems", "IsTruncated", "Quantity"],
								members: {
									Marker: {},
									NextMarker: {},
									MaxItems: {
										type: "integer"
									},
									IsTruncated: {
										type: "boolean"
									},
									Quantity: {
										type: "integer"
									},
									Items: {
										type: "list",
										member: {
											locationName: "CloudFrontOriginAccessIdentitySummary",
											type: "structure",
											required: ["Id", "S3CanonicalUserId", "Comment"],
											members: {
												Id: {},
												S3CanonicalUserId: {},
												Comment: {}
											}
										}
									}
								}
							}
						},
						payload: "CloudFrontOriginAccessIdentityList"
					}
				},
				ListDistributions: {
					http: {
						method: "GET",
						requestUri: "/2016-11-25/distribution"
					},
					input: {
						type: "structure",
						members: {
							Marker: {
								location: "querystring",
								locationName: "Marker"
							},
							MaxItems: {
								location: "querystring",
								locationName: "MaxItems"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							DistributionList: {
								shape: "S3a"
							}
						},
						payload: "DistributionList"
					}
				},
				ListDistributionsByWebACLId: {
					http: {
						method: "GET",
						requestUri: "/2016-11-25/distributionsByWebACLId/{WebACLId}"
					},
					input: {
						type: "structure",
						required: ["WebACLId"],
						members: {
							Marker: {
								location: "querystring",
								locationName: "Marker"
							},
							MaxItems: {
								location: "querystring",
								locationName: "MaxItems"
							},
							WebACLId: {
								location: "uri",
								locationName: "WebACLId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							DistributionList: {
								shape: "S3a"
							}
						},
						payload: "DistributionList"
					}
				},
				ListInvalidations: {
					http: {
						method: "GET",
						requestUri: "/2016-11-25/distribution/{DistributionId}/invalidation"
					},
					input: {
						type: "structure",
						required: ["DistributionId"],
						members: {
							DistributionId: {
								location: "uri",
								locationName: "DistributionId"
							},
							Marker: {
								location: "querystring",
								locationName: "Marker"
							},
							MaxItems: {
								location: "querystring",
								locationName: "MaxItems"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							InvalidationList: {
								type: "structure",
								required: ["Marker", "MaxItems", "IsTruncated", "Quantity"],
								members: {
									Marker: {},
									NextMarker: {},
									MaxItems: {
										type: "integer"
									},
									IsTruncated: {
										type: "boolean"
									},
									Quantity: {
										type: "integer"
									},
									Items: {
										type: "list",
										member: {
											locationName: "InvalidationSummary",
											type: "structure",
											required: ["Id", "CreateTime", "Status"],
											members: {
												Id: {},
												CreateTime: {
													type: "timestamp"
												},
												Status: {}
											}
										}
									}
								}
							}
						},
						payload: "InvalidationList"
					}
				},
				ListStreamingDistributions: {
					http: {
						method: "GET",
						requestUri: "/2016-11-25/streaming-distribution"
					},
					input: {
						type: "structure",
						members: {
							Marker: {
								location: "querystring",
								locationName: "Marker"
							},
							MaxItems: {
								location: "querystring",
								locationName: "MaxItems"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							StreamingDistributionList: {
								type: "structure",
								required: ["Marker", "MaxItems", "IsTruncated", "Quantity"],
								members: {
									Marker: {},
									NextMarker: {},
									MaxItems: {
										type: "integer"
									},
									IsTruncated: {
										type: "boolean"
									},
									Quantity: {
										type: "integer"
									},
									Items: {
										type: "list",
										member: {
											locationName: "StreamingDistributionSummary",
											type: "structure",
											required: ["Id", "ARN", "Status", "LastModifiedTime", "DomainName", "S3Origin", "Aliases", "TrustedSigners", "Comment", "PriceClass", "Enabled"],
											members: {
												Id: {},
												ARN: {},
												Status: {},
												LastModifiedTime: {
													type: "timestamp"
												},
												DomainName: {},
												S3Origin: {
													shape: "S2f"
												},
												Aliases: {
													shape: "S8"
												},
												TrustedSigners: {
													shape: "Sy"
												},
												Comment: {},
												PriceClass: {},
												Enabled: {
													type: "boolean"
												}
											}
										}
									}
								}
							}
						},
						payload: "StreamingDistributionList"
					}
				},
				ListTagsForResource: {
					http: {
						method: "GET",
						requestUri: "/2016-11-25/tagging"
					},
					input: {
						type: "structure",
						required: ["Resource"],
						members: {
							Resource: {
								location: "querystring",
								locationName: "Resource"
							}
						}
					},
					output: {
						type: "structure",
						required: ["Tags"],
						members: {
							Tags: {
								shape: "S21"
							}
						},
						payload: "Tags"
					}
				},
				TagResource: {
					http: {
						requestUri: "/2016-11-25/tagging?Operation=Tag",
						responseCode: 204
					},
					input: {
						type: "structure",
						required: ["Resource", "Tags"],
						members: {
							Resource: {
								location: "querystring",
								locationName: "Resource"
							},
							Tags: {
								shape: "S21",
								locationName: "Tags",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2016-11-25/"
								}
							}
						},
						payload: "Tags"
					}
				},
				UntagResource: {
					http: {
						requestUri: "/2016-11-25/tagging?Operation=Untag",
						responseCode: 204
					},
					input: {
						type: "structure",
						required: ["Resource", "TagKeys"],
						members: {
							Resource: {
								location: "querystring",
								locationName: "Resource"
							},
							TagKeys: {
								locationName: "TagKeys",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2016-11-25/"
								},
								type: "structure",
								members: {
									Items: {
										type: "list",
										member: {
											locationName: "Key"
										}
									}
								}
							}
						},
						payload: "TagKeys"
					}
				},
				UpdateCloudFrontOriginAccessIdentity: {
					http: {
						method: "PUT",
						requestUri: "/2016-11-25/origin-access-identity/cloudfront/{Id}/config"
					},
					input: {
						type: "structure",
						required: ["CloudFrontOriginAccessIdentityConfig", "Id"],
						members: {
							CloudFrontOriginAccessIdentityConfig: {
								shape: "S2",
								locationName: "CloudFrontOriginAccessIdentityConfig",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2016-11-25/"
								}
							},
							Id: {
								location: "uri",
								locationName: "Id"
							},
							IfMatch: {
								location: "header",
								locationName: "If-Match"
							}
						},
						payload: "CloudFrontOriginAccessIdentityConfig"
					},
					output: {
						type: "structure",
						members: {
							CloudFrontOriginAccessIdentity: {
								shape: "S5"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "CloudFrontOriginAccessIdentity"
					}
				},
				UpdateDistribution: {
					http: {
						method: "PUT",
						requestUri: "/2016-11-25/distribution/{Id}/config"
					},
					input: {
						type: "structure",
						required: ["DistributionConfig", "Id"],
						members: {
							DistributionConfig: {
								shape: "S7",
								locationName: "DistributionConfig",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2016-11-25/"
								}
							},
							Id: {
								location: "uri",
								locationName: "Id"
							},
							IfMatch: {
								location: "header",
								locationName: "If-Match"
							}
						},
						payload: "DistributionConfig"
					},
					output: {
						type: "structure",
						members: {
							Distribution: {
								shape: "S1s"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "Distribution"
					}
				},
				UpdateStreamingDistribution: {
					http: {
						method: "PUT",
						requestUri: "/2016-11-25/streaming-distribution/{Id}/config"
					},
					input: {
						type: "structure",
						required: ["StreamingDistributionConfig", "Id"],
						members: {
							StreamingDistributionConfig: {
								shape: "S2e",
								locationName: "StreamingDistributionConfig",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2016-11-25/"
								}
							},
							Id: {
								location: "uri",
								locationName: "Id"
							},
							IfMatch: {
								location: "header",
								locationName: "If-Match"
							}
						},
						payload: "StreamingDistributionConfig"
					},
					output: {
						type: "structure",
						members: {
							StreamingDistribution: {
								shape: "S2i"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "StreamingDistribution"
					}
				}
			},
			shapes: {
				S2: {
					type: "structure",
					required: ["CallerReference", "Comment"],
					members: {
						CallerReference: {},
						Comment: {}
					}
				},
				S5: {
					type: "structure",
					required: ["Id", "S3CanonicalUserId"],
					members: {
						Id: {},
						S3CanonicalUserId: {},
						CloudFrontOriginAccessIdentityConfig: {
							shape: "S2"
						}
					}
				},
				S7: {
					type: "structure",
					required: ["CallerReference", "Origins", "DefaultCacheBehavior", "Comment", "Enabled"],
					members: {
						CallerReference: {},
						Aliases: {
							shape: "S8"
						},
						DefaultRootObject: {},
						Origins: {
							shape: "Sb"
						},
						DefaultCacheBehavior: {
							shape: "Sn"
						},
						CacheBehaviors: {
							shape: "S1a"
						},
						CustomErrorResponses: {
							shape: "S1d"
						},
						Comment: {},
						Logging: {
							type: "structure",
							required: ["Enabled", "IncludeCookies", "Bucket", "Prefix"],
							members: {
								Enabled: {
									type: "boolean"
								},
								IncludeCookies: {
									type: "boolean"
								},
								Bucket: {},
								Prefix: {}
							}
						},
						PriceClass: {},
						Enabled: {
							type: "boolean"
						},
						ViewerCertificate: {
							shape: "S1i"
						},
						Restrictions: {
							shape: "S1m"
						},
						WebACLId: {},
						HttpVersion: {},
						IsIPV6Enabled: {
							type: "boolean"
						}
					}
				},
				S8: {
					type: "structure",
					required: ["Quantity"],
					members: {
						Quantity: {
							type: "integer"
						},
						Items: {
							type: "list",
							member: {
								locationName: "CNAME"
							}
						}
					}
				},
				Sb: {
					type: "structure",
					required: ["Quantity"],
					members: {
						Quantity: {
							type: "integer"
						},
						Items: {
							type: "list",
							member: {
								locationName: "Origin",
								type: "structure",
								required: ["Id", "DomainName"],
								members: {
									Id: {},
									DomainName: {},
									OriginPath: {},
									CustomHeaders: {
										type: "structure",
										required: ["Quantity"],
										members: {
											Quantity: {
												type: "integer"
											},
											Items: {
												type: "list",
												member: {
													locationName: "OriginCustomHeader",
													type: "structure",
													required: ["HeaderName", "HeaderValue"],
													members: {
														HeaderName: {},
														HeaderValue: {}
													}
												}
											}
										}
									},
									S3OriginConfig: {
										type: "structure",
										required: ["OriginAccessIdentity"],
										members: {
											OriginAccessIdentity: {}
										}
									},
									CustomOriginConfig: {
										type: "structure",
										required: ["HTTPPort", "HTTPSPort", "OriginProtocolPolicy"],
										members: {
											HTTPPort: {
												type: "integer"
											},
											HTTPSPort: {
												type: "integer"
											},
											OriginProtocolPolicy: {},
											OriginSslProtocols: {
												type: "structure",
												required: ["Quantity", "Items"],
												members: {
													Quantity: {
														type: "integer"
													},
													Items: {
														type: "list",
														member: {
															locationName: "SslProtocol"
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				},
				Sn: {
					type: "structure",
					required: ["TargetOriginId", "ForwardedValues", "TrustedSigners", "ViewerProtocolPolicy", "MinTTL"],
					members: {
						TargetOriginId: {},
						ForwardedValues: {
							shape: "So"
						},
						TrustedSigners: {
							shape: "Sy"
						},
						ViewerProtocolPolicy: {},
						MinTTL: {
							type: "long"
						},
						AllowedMethods: {
							shape: "S12"
						},
						SmoothStreaming: {
							type: "boolean"
						},
						DefaultTTL: {
							type: "long"
						},
						MaxTTL: {
							type: "long"
						},
						Compress: {
							type: "boolean"
						},
						LambdaFunctionAssociations: {
							shape: "S16"
						}
					}
				},
				So: {
					type: "structure",
					required: ["QueryString", "Cookies"],
					members: {
						QueryString: {
							type: "boolean"
						},
						Cookies: {
							type: "structure",
							required: ["Forward"],
							members: {
								Forward: {},
								WhitelistedNames: {
									type: "structure",
									required: ["Quantity"],
									members: {
										Quantity: {
											type: "integer"
										},
										Items: {
											type: "list",
											member: {
												locationName: "Name"
											}
										}
									}
								}
							}
						},
						Headers: {
							type: "structure",
							required: ["Quantity"],
							members: {
								Quantity: {
									type: "integer"
								},
								Items: {
									type: "list",
									member: {
										locationName: "Name"
									}
								}
							}
						},
						QueryStringCacheKeys: {
							type: "structure",
							required: ["Quantity"],
							members: {
								Quantity: {
									type: "integer"
								},
								Items: {
									type: "list",
									member: {
										locationName: "Name"
									}
								}
							}
						}
					}
				},
				Sy: {
					type: "structure",
					required: ["Enabled", "Quantity"],
					members: {
						Enabled: {
							type: "boolean"
						},
						Quantity: {
							type: "integer"
						},
						Items: {
							type: "list",
							member: {
								locationName: "AwsAccountNumber"
							}
						}
					}
				},
				S12: {
					type: "structure",
					required: ["Quantity", "Items"],
					members: {
						Quantity: {
							type: "integer"
						},
						Items: {
							shape: "S13"
						},
						CachedMethods: {
							type: "structure",
							required: ["Quantity", "Items"],
							members: {
								Quantity: {
									type: "integer"
								},
								Items: {
									shape: "S13"
								}
							}
						}
					}
				},
				S13: {
					type: "list",
					member: {
						locationName: "Method"
					}
				},
				S16: {
					type: "structure",
					required: ["Quantity"],
					members: {
						Quantity: {
							type: "integer"
						},
						Items: {
							type: "list",
							member: {
								locationName: "LambdaFunctionAssociation",
								type: "structure",
								members: {
									LambdaFunctionARN: {},
									EventType: {}
								}
							}
						}
					}
				},
				S1a: {
					type: "structure",
					required: ["Quantity"],
					members: {
						Quantity: {
							type: "integer"
						},
						Items: {
							type: "list",
							member: {
								locationName: "CacheBehavior",
								type: "structure",
								required: ["PathPattern", "TargetOriginId", "ForwardedValues", "TrustedSigners", "ViewerProtocolPolicy", "MinTTL"],
								members: {
									PathPattern: {},
									TargetOriginId: {},
									ForwardedValues: {
										shape: "So"
									},
									TrustedSigners: {
										shape: "Sy"
									},
									ViewerProtocolPolicy: {},
									MinTTL: {
										type: "long"
									},
									AllowedMethods: {
										shape: "S12"
									},
									SmoothStreaming: {
										type: "boolean"
									},
									DefaultTTL: {
										type: "long"
									},
									MaxTTL: {
										type: "long"
									},
									Compress: {
										type: "boolean"
									},
									LambdaFunctionAssociations: {
										shape: "S16"
									}
								}
							}
						}
					}
				},
				S1d: {
					type: "structure",
					required: ["Quantity"],
					members: {
						Quantity: {
							type: "integer"
						},
						Items: {
							type: "list",
							member: {
								locationName: "CustomErrorResponse",
								type: "structure",
								required: ["ErrorCode"],
								members: {
									ErrorCode: {
										type: "integer"
									},
									ResponsePagePath: {},
									ResponseCode: {},
									ErrorCachingMinTTL: {
										type: "long"
									}
								}
							}
						}
					}
				},
				S1i: {
					type: "structure",
					members: {
						CloudFrontDefaultCertificate: {
							type: "boolean"
						},
						IAMCertificateId: {},
						ACMCertificateArn: {},
						SSLSupportMethod: {},
						MinimumProtocolVersion: {},
						Certificate: {
							deprecated: !0
						},
						CertificateSource: {
							deprecated: !0
						}
					}
				},
				S1m: {
					type: "structure",
					required: ["GeoRestriction"],
					members: {
						GeoRestriction: {
							type: "structure",
							required: ["RestrictionType", "Quantity"],
							members: {
								RestrictionType: {},
								Quantity: {
									type: "integer"
								},
								Items: {
									type: "list",
									member: {
										locationName: "Location"
									}
								}
							}
						}
					}
				},
				S1s: {
					type: "structure",
					required: ["Id", "ARN", "Status", "LastModifiedTime", "InProgressInvalidationBatches", "DomainName", "ActiveTrustedSigners", "DistributionConfig"],
					members: {
						Id: {},
						ARN: {},
						Status: {},
						LastModifiedTime: {
							type: "timestamp"
						},
						InProgressInvalidationBatches: {
							type: "integer"
						},
						DomainName: {},
						ActiveTrustedSigners: {
							shape: "S1u"
						},
						DistributionConfig: {
							shape: "S7"
						}
					}
				},
				S1u: {
					type: "structure",
					required: ["Enabled", "Quantity"],
					members: {
						Enabled: {
							type: "boolean"
						},
						Quantity: {
							type: "integer"
						},
						Items: {
							type: "list",
							member: {
								locationName: "Signer",
								type: "structure",
								members: {
									AwsAccountNumber: {},
									KeyPairIds: {
										type: "structure",
										required: ["Quantity"],
										members: {
											Quantity: {
												type: "integer"
											},
											Items: {
												type: "list",
												member: {
													locationName: "KeyPairId"
												}
											}
										}
									}
								}
							}
						}
					}
				},
				S21: {
					type: "structure",
					members: {
						Items: {
							type: "list",
							member: {
								locationName: "Tag",
								type: "structure",
								required: ["Key"],
								members: {
									Key: {},
									Value: {}
								}
							}
						}
					}
				},
				S28: {
					type: "structure",
					required: ["Paths", "CallerReference"],
					members: {
						Paths: {
							type: "structure",
							required: ["Quantity"],
							members: {
								Quantity: {
									type: "integer"
								},
								Items: {
									type: "list",
									member: {
										locationName: "Path"
									}
								}
							}
						},
						CallerReference: {}
					}
				},
				S2c: {
					type: "structure",
					required: ["Id", "Status", "CreateTime", "InvalidationBatch"],
					members: {
						Id: {},
						Status: {},
						CreateTime: {
							type: "timestamp"
						},
						InvalidationBatch: {
							shape: "S28"
						}
					}
				},
				S2e: {
					type: "structure",
					required: ["CallerReference", "S3Origin", "Comment", "TrustedSigners", "Enabled"],
					members: {
						CallerReference: {},
						S3Origin: {
							shape: "S2f"
						},
						Aliases: {
							shape: "S8"
						},
						Comment: {},
						Logging: {
							type: "structure",
							required: ["Enabled", "Bucket", "Prefix"],
							members: {
								Enabled: {
									type: "boolean"
								},
								Bucket: {},
								Prefix: {}
							}
						},
						TrustedSigners: {
							shape: "Sy"
						},
						PriceClass: {},
						Enabled: {
							type: "boolean"
						}
					}
				},
				S2f: {
					type: "structure",
					required: ["DomainName", "OriginAccessIdentity"],
					members: {
						DomainName: {},
						OriginAccessIdentity: {}
					}
				},
				S2i: {
					type: "structure",
					required: ["Id", "ARN", "Status", "DomainName", "ActiveTrustedSigners", "StreamingDistributionConfig"],
					members: {
						Id: {},
						ARN: {},
						Status: {},
						LastModifiedTime: {
							type: "timestamp"
						},
						DomainName: {},
						ActiveTrustedSigners: {
							shape: "S1u"
						},
						StreamingDistributionConfig: {
							shape: "S2e"
						}
					}
				},
				S3a: {
					type: "structure",
					required: ["Marker", "MaxItems", "IsTruncated", "Quantity"],
					members: {
						Marker: {},
						NextMarker: {},
						MaxItems: {
							type: "integer"
						},
						IsTruncated: {
							type: "boolean"
						},
						Quantity: {
							type: "integer"
						},
						Items: {
							type: "list",
							member: {
								locationName: "DistributionSummary",
								type: "structure",
								required: ["Id", "ARN", "Status", "LastModifiedTime", "DomainName", "Aliases", "Origins", "DefaultCacheBehavior", "CacheBehaviors", "CustomErrorResponses", "Comment", "PriceClass", "Enabled", "ViewerCertificate", "Restrictions", "WebACLId", "HttpVersion", "IsIPV6Enabled"],
								members: {
									Id: {},
									ARN: {},
									Status: {},
									LastModifiedTime: {
										type: "timestamp"
									},
									DomainName: {},
									Aliases: {
										shape: "S8"
									},
									Origins: {
										shape: "Sb"
									},
									DefaultCacheBehavior: {
										shape: "Sn"
									},
									CacheBehaviors: {
										shape: "S1a"
									},
									CustomErrorResponses: {
										shape: "S1d"
									},
									Comment: {},
									PriceClass: {},
									Enabled: {
										type: "boolean"
									},
									ViewerCertificate: {
										shape: "S1i"
									},
									Restrictions: {
										shape: "S1m"
									},
									WebACLId: {},
									HttpVersion: {},
									IsIPV6Enabled: {
										type: "boolean"
									}
								}
							}
						}
					}
				}
			}
		}
	}, {}],
	13: [function(e, t, r) {
		t.exports = {
			pagination: {
				ListCloudFrontOriginAccessIdentities: {
					input_token: "Marker",
					output_token: "CloudFrontOriginAccessIdentityList.NextMarker",
					limit_key: "MaxItems",
					more_results: "CloudFrontOriginAccessIdentityList.IsTruncated",
					result_key: "CloudFrontOriginAccessIdentityList.Items"
				},
				ListDistributions: {
					input_token: "Marker",
					output_token: "DistributionList.NextMarker",
					limit_key: "MaxItems",
					more_results: "DistributionList.IsTruncated",
					result_key: "DistributionList.Items"
				},
				ListInvalidations: {
					input_token: "Marker",
					output_token: "InvalidationList.NextMarker",
					limit_key: "MaxItems",
					more_results: "InvalidationList.IsTruncated",
					result_key: "InvalidationList.Items"
				},
				ListStreamingDistributions: {
					input_token: "Marker",
					output_token: "StreamingDistributionList.NextMarker",
					limit_key: "MaxItems",
					more_results: "StreamingDistributionList.IsTruncated",
					result_key: "StreamingDistributionList.Items"
				}
			}
		}
	}, {}],
	14: [function(e, t, r) {
		t.exports = {
			version: 2,
			waiters: {
				DistributionDeployed: {
					delay: 60,
					operation: "GetDistribution",
					maxAttempts: 25,
					description: "Wait until a distribution is deployed.",
					acceptors: [{
						expected: "Deployed",
						matcher: "path",
						state: "success",
						argument: "Distribution.Status"
					}]
				},
				InvalidationCompleted: {
					delay: 20,
					operation: "GetInvalidation",
					maxAttempts: 30,
					description: "Wait until an invalidation has completed.",
					acceptors: [{
						expected: "Completed",
						matcher: "path",
						state: "success",
						argument: "Invalidation.Status"
					}]
				},
				StreamingDistributionDeployed: {
					delay: 60,
					operation: "GetStreamingDistribution",
					maxAttempts: 25,
					description: "Wait until a streaming distribution is deployed.",
					acceptors: [{
						expected: "Deployed",
						matcher: "path",
						state: "success",
						argument: "StreamingDistribution.Status"
					}]
				}
			}
		}
	}, {}],
	15: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2017-03-25",
				endpointPrefix: "cloudfront",
				globalEndpoint: "cloudfront.amazonaws.com",
				protocol: "rest-xml",
				serviceAbbreviation: "CloudFront",
				serviceFullName: "Amazon CloudFront",
				signatureVersion: "v4",
				uid: "cloudfront-2017-03-25"
			},
			operations: {
				CreateCloudFrontOriginAccessIdentity: {
					http: {
						requestUri: "/2017-03-25/origin-access-identity/cloudfront",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["CloudFrontOriginAccessIdentityConfig"],
						members: {
							CloudFrontOriginAccessIdentityConfig: {
								shape: "S2",
								locationName: "CloudFrontOriginAccessIdentityConfig",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-03-25/"
								}
							}
						},
						payload: "CloudFrontOriginAccessIdentityConfig"
					},
					output: {
						type: "structure",
						members: {
							CloudFrontOriginAccessIdentity: {
								shape: "S5"
							},
							Location: {
								location: "header",
								locationName: "Location"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "CloudFrontOriginAccessIdentity"
					}
				},
				CreateDistribution: {
					http: {
						requestUri: "/2017-03-25/distribution",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["DistributionConfig"],
						members: {
							DistributionConfig: {
								shape: "S7",
								locationName: "DistributionConfig",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-03-25/"
								}
							}
						},
						payload: "DistributionConfig"
					},
					output: {
						type: "structure",
						members: {
							Distribution: {
								shape: "S1s"
							},
							Location: {
								location: "header",
								locationName: "Location"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "Distribution"
					}
				},
				CreateDistributionWithTags: {
					http: {
						requestUri: "/2017-03-25/distribution?WithTags",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["DistributionConfigWithTags"],
						members: {
							DistributionConfigWithTags: {
								locationName: "DistributionConfigWithTags",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-03-25/"
								},
								type: "structure",
								required: ["DistributionConfig", "Tags"],
								members: {
									DistributionConfig: {
										shape: "S7"
									},
									Tags: {
										shape: "S21"
									}
								}
							}
						},
						payload: "DistributionConfigWithTags"
					},
					output: {
						type: "structure",
						members: {
							Distribution: {
								shape: "S1s"
							},
							Location: {
								location: "header",
								locationName: "Location"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "Distribution"
					}
				},
				CreateInvalidation: {
					http: {
						requestUri: "/2017-03-25/distribution/{DistributionId}/invalidation",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["DistributionId", "InvalidationBatch"],
						members: {
							DistributionId: {
								location: "uri",
								locationName: "DistributionId"
							},
							InvalidationBatch: {
								shape: "S28",
								locationName: "InvalidationBatch",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-03-25/"
								}
							}
						},
						payload: "InvalidationBatch"
					},
					output: {
						type: "structure",
						members: {
							Location: {
								location: "header",
								locationName: "Location"
							},
							Invalidation: {
								shape: "S2c"
							}
						},
						payload: "Invalidation"
					}
				},
				CreateStreamingDistribution: {
					http: {
						requestUri: "/2017-03-25/streaming-distribution",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["StreamingDistributionConfig"],
						members: {
							StreamingDistributionConfig: {
								shape: "S2e",
								locationName: "StreamingDistributionConfig",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-03-25/"
								}
							}
						},
						payload: "StreamingDistributionConfig"
					},
					output: {
						type: "structure",
						members: {
							StreamingDistribution: {
								shape: "S2i"
							},
							Location: {
								location: "header",
								locationName: "Location"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "StreamingDistribution"
					}
				},
				CreateStreamingDistributionWithTags: {
					http: {
						requestUri: "/2017-03-25/streaming-distribution?WithTags",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["StreamingDistributionConfigWithTags"],
						members: {
							StreamingDistributionConfigWithTags: {
								locationName: "StreamingDistributionConfigWithTags",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-03-25/"
								},
								type: "structure",
								required: ["StreamingDistributionConfig", "Tags"],
								members: {
									StreamingDistributionConfig: {
										shape: "S2e"
									},
									Tags: {
										shape: "S21"
									}
								}
							}
						},
						payload: "StreamingDistributionConfigWithTags"
					},
					output: {
						type: "structure",
						members: {
							StreamingDistribution: {
								shape: "S2i"
							},
							Location: {
								location: "header",
								locationName: "Location"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "StreamingDistribution"
					}
				},
				DeleteCloudFrontOriginAccessIdentity: {
					http: {
						method: "DELETE",
						requestUri: "/2017-03-25/origin-access-identity/cloudfront/{Id}",
						responseCode: 204
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							},
							IfMatch: {
								location: "header",
								locationName: "If-Match"
							}
						}
					}
				},
				DeleteDistribution: {
					http: {
						method: "DELETE",
						requestUri: "/2017-03-25/distribution/{Id}",
						responseCode: 204
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							},
							IfMatch: {
								location: "header",
								locationName: "If-Match"
							}
						}
					}
				},
				DeleteServiceLinkedRole: {
					http: {
						method: "DELETE",
						requestUri: "/2017-03-25/service-linked-role/{RoleName}",
						responseCode: 204
					},
					input: {
						type: "structure",
						required: ["RoleName"],
						members: {
							RoleName: {
								location: "uri",
								locationName: "RoleName"
							}
						}
					}
				},
				DeleteStreamingDistribution: {
					http: {
						method: "DELETE",
						requestUri: "/2017-03-25/streaming-distribution/{Id}",
						responseCode: 204
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							},
							IfMatch: {
								location: "header",
								locationName: "If-Match"
							}
						}
					}
				},
				GetCloudFrontOriginAccessIdentity: {
					http: {
						method: "GET",
						requestUri: "/2017-03-25/origin-access-identity/cloudfront/{Id}"
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							CloudFrontOriginAccessIdentity: {
								shape: "S5"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "CloudFrontOriginAccessIdentity"
					}
				},
				GetCloudFrontOriginAccessIdentityConfig: {
					http: {
						method: "GET",
						requestUri: "/2017-03-25/origin-access-identity/cloudfront/{Id}/config"
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							CloudFrontOriginAccessIdentityConfig: {
								shape: "S2"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "CloudFrontOriginAccessIdentityConfig"
					}
				},
				GetDistribution: {
					http: {
						method: "GET",
						requestUri: "/2017-03-25/distribution/{Id}"
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Distribution: {
								shape: "S1s"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "Distribution"
					}
				},
				GetDistributionConfig: {
					http: {
						method: "GET",
						requestUri: "/2017-03-25/distribution/{Id}/config"
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							DistributionConfig: {
								shape: "S7"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "DistributionConfig"
					}
				},
				GetInvalidation: {
					http: {
						method: "GET",
						requestUri: "/2017-03-25/distribution/{DistributionId}/invalidation/{Id}"
					},
					input: {
						type: "structure",
						required: ["DistributionId", "Id"],
						members: {
							DistributionId: {
								location: "uri",
								locationName: "DistributionId"
							},
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Invalidation: {
								shape: "S2c"
							}
						},
						payload: "Invalidation"
					}
				},
				GetStreamingDistribution: {
					http: {
						method: "GET",
						requestUri: "/2017-03-25/streaming-distribution/{Id}"
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							StreamingDistribution: {
								shape: "S2i"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "StreamingDistribution"
					}
				},
				GetStreamingDistributionConfig: {
					http: {
						method: "GET",
						requestUri: "/2017-03-25/streaming-distribution/{Id}/config"
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							StreamingDistributionConfig: {
								shape: "S2e"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "StreamingDistributionConfig"
					}
				},
				ListCloudFrontOriginAccessIdentities: {
					http: {
						method: "GET",
						requestUri: "/2017-03-25/origin-access-identity/cloudfront"
					},
					input: {
						type: "structure",
						members: {
							Marker: {
								location: "querystring",
								locationName: "Marker"
							},
							MaxItems: {
								location: "querystring",
								locationName: "MaxItems"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							CloudFrontOriginAccessIdentityList: {
								type: "structure",
								required: ["Marker", "MaxItems", "IsTruncated", "Quantity"],
								members: {
									Marker: {},
									NextMarker: {},
									MaxItems: {
										type: "integer"
									},
									IsTruncated: {
										type: "boolean"
									},
									Quantity: {
										type: "integer"
									},
									Items: {
										type: "list",
										member: {
											locationName: "CloudFrontOriginAccessIdentitySummary",
											type: "structure",
											required: ["Id", "S3CanonicalUserId", "Comment"],
											members: {
												Id: {},
												S3CanonicalUserId: {},
												Comment: {}
											}
										}
									}
								}
							}
						},
						payload: "CloudFrontOriginAccessIdentityList"
					}
				},
				ListDistributions: {
					http: {
						method: "GET",
						requestUri: "/2017-03-25/distribution"
					},
					input: {
						type: "structure",
						members: {
							Marker: {
								location: "querystring",
								locationName: "Marker"
							},
							MaxItems: {
								location: "querystring",
								locationName: "MaxItems"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							DistributionList: {
								shape: "S3b"
							}
						},
						payload: "DistributionList"
					}
				},
				ListDistributionsByWebACLId: {
					http: {
						method: "GET",
						requestUri: "/2017-03-25/distributionsByWebACLId/{WebACLId}"
					},
					input: {
						type: "structure",
						required: ["WebACLId"],
						members: {
							Marker: {
								location: "querystring",
								locationName: "Marker"
							},
							MaxItems: {
								location: "querystring",
								locationName: "MaxItems"
							},
							WebACLId: {
								location: "uri",
								locationName: "WebACLId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							DistributionList: {
								shape: "S3b"
							}
						},
						payload: "DistributionList"
					}
				},
				ListInvalidations: {
					http: {
						method: "GET",
						requestUri: "/2017-03-25/distribution/{DistributionId}/invalidation"
					},
					input: {
						type: "structure",
						required: ["DistributionId"],
						members: {
							DistributionId: {
								location: "uri",
								locationName: "DistributionId"
							},
							Marker: {
								location: "querystring",
								locationName: "Marker"
							},
							MaxItems: {
								location: "querystring",
								locationName: "MaxItems"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							InvalidationList: {
								type: "structure",
								required: ["Marker", "MaxItems", "IsTruncated", "Quantity"],
								members: {
									Marker: {},
									NextMarker: {},
									MaxItems: {
										type: "integer"
									},
									IsTruncated: {
										type: "boolean"
									},
									Quantity: {
										type: "integer"
									},
									Items: {
										type: "list",
										member: {
											locationName: "InvalidationSummary",
											type: "structure",
											required: ["Id", "CreateTime", "Status"],
											members: {
												Id: {},
												CreateTime: {
													type: "timestamp"
												},
												Status: {}
											}
										}
									}
								}
							}
						},
						payload: "InvalidationList"
					}
				},
				ListStreamingDistributions: {
					http: {
						method: "GET",
						requestUri: "/2017-03-25/streaming-distribution"
					},
					input: {
						type: "structure",
						members: {
							Marker: {
								location: "querystring",
								locationName: "Marker"
							},
							MaxItems: {
								location: "querystring",
								locationName: "MaxItems"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							StreamingDistributionList: {
								type: "structure",
								required: ["Marker", "MaxItems", "IsTruncated", "Quantity"],
								members: {
									Marker: {},
									NextMarker: {},
									MaxItems: {
										type: "integer"
									},
									IsTruncated: {
										type: "boolean"
									},
									Quantity: {
										type: "integer"
									},
									Items: {
										type: "list",
										member: {
											locationName: "StreamingDistributionSummary",
											type: "structure",
											required: ["Id", "ARN", "Status", "LastModifiedTime", "DomainName", "S3Origin", "Aliases", "TrustedSigners", "Comment", "PriceClass", "Enabled"],
											members: {
												Id: {},
												ARN: {},
												Status: {},
												LastModifiedTime: {
													type: "timestamp"
												},
												DomainName: {},
												S3Origin: {
													shape: "S2f"
												},
												Aliases: {
													shape: "S8"
												},
												TrustedSigners: {
													shape: "Sy"
												},
												Comment: {},
												PriceClass: {},
												Enabled: {
													type: "boolean"
												}
											}
										}
									}
								}
							}
						},
						payload: "StreamingDistributionList"
					}
				},
				ListTagsForResource: {
					http: {
						method: "GET",
						requestUri: "/2017-03-25/tagging"
					},
					input: {
						type: "structure",
						required: ["Resource"],
						members: {
							Resource: {
								location: "querystring",
								locationName: "Resource"
							}
						}
					},
					output: {
						type: "structure",
						required: ["Tags"],
						members: {
							Tags: {
								shape: "S21"
							}
						},
						payload: "Tags"
					}
				},
				TagResource: {
					http: {
						requestUri: "/2017-03-25/tagging?Operation=Tag",
						responseCode: 204
					},
					input: {
						type: "structure",
						required: ["Resource", "Tags"],
						members: {
							Resource: {
								location: "querystring",
								locationName: "Resource"
							},
							Tags: {
								shape: "S21",
								locationName: "Tags",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-03-25/"
								}
							}
						},
						payload: "Tags"
					}
				},
				UntagResource: {
					http: {
						requestUri: "/2017-03-25/tagging?Operation=Untag",
						responseCode: 204
					},
					input: {
						type: "structure",
						required: ["Resource", "TagKeys"],
						members: {
							Resource: {
								location: "querystring",
								locationName: "Resource"
							},
							TagKeys: {
								locationName: "TagKeys",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-03-25/"
								},
								type: "structure",
								members: {
									Items: {
										type: "list",
										member: {
											locationName: "Key"
										}
									}
								}
							}
						},
						payload: "TagKeys"
					}
				},
				UpdateCloudFrontOriginAccessIdentity: {
					http: {
						method: "PUT",
						requestUri: "/2017-03-25/origin-access-identity/cloudfront/{Id}/config"
					},
					input: {
						type: "structure",
						required: ["CloudFrontOriginAccessIdentityConfig", "Id"],
						members: {
							CloudFrontOriginAccessIdentityConfig: {
								shape: "S2",
								locationName: "CloudFrontOriginAccessIdentityConfig",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-03-25/"
								}
							},
							Id: {
								location: "uri",
								locationName: "Id"
							},
							IfMatch: {
								location: "header",
								locationName: "If-Match"
							}
						},
						payload: "CloudFrontOriginAccessIdentityConfig"
					},
					output: {
						type: "structure",
						members: {
							CloudFrontOriginAccessIdentity: {
								shape: "S5"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "CloudFrontOriginAccessIdentity"
					}
				},
				UpdateDistribution: {
					http: {
						method: "PUT",
						requestUri: "/2017-03-25/distribution/{Id}/config"
					},
					input: {
						type: "structure",
						required: ["DistributionConfig", "Id"],
						members: {
							DistributionConfig: {
								shape: "S7",
								locationName: "DistributionConfig",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-03-25/"
								}
							},
							Id: {
								location: "uri",
								locationName: "Id"
							},
							IfMatch: {
								location: "header",
								locationName: "If-Match"
							}
						},
						payload: "DistributionConfig"
					},
					output: {
						type: "structure",
						members: {
							Distribution: {
								shape: "S1s"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "Distribution"
					}
				},
				UpdateStreamingDistribution: {
					http: {
						method: "PUT",
						requestUri: "/2017-03-25/streaming-distribution/{Id}/config"
					},
					input: {
						type: "structure",
						required: ["StreamingDistributionConfig", "Id"],
						members: {
							StreamingDistributionConfig: {
								shape: "S2e",
								locationName: "StreamingDistributionConfig",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-03-25/"
								}
							},
							Id: {
								location: "uri",
								locationName: "Id"
							},
							IfMatch: {
								location: "header",
								locationName: "If-Match"
							}
						},
						payload: "StreamingDistributionConfig"
					},
					output: {
						type: "structure",
						members: {
							StreamingDistribution: {
								shape: "S2i"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "StreamingDistribution"
					}
				}
			},
			shapes: {
				S2: {
					type: "structure",
					required: ["CallerReference", "Comment"],
					members: {
						CallerReference: {},
						Comment: {}
					}
				},
				S5: {
					type: "structure",
					required: ["Id", "S3CanonicalUserId"],
					members: {
						Id: {},
						S3CanonicalUserId: {},
						CloudFrontOriginAccessIdentityConfig: {
							shape: "S2"
						}
					}
				},
				S7: {
					type: "structure",
					required: ["CallerReference", "Origins", "DefaultCacheBehavior", "Comment", "Enabled"],
					members: {
						CallerReference: {},
						Aliases: {
							shape: "S8"
						},
						DefaultRootObject: {},
						Origins: {
							shape: "Sb"
						},
						DefaultCacheBehavior: {
							shape: "Sn"
						},
						CacheBehaviors: {
							shape: "S1a"
						},
						CustomErrorResponses: {
							shape: "S1d"
						},
						Comment: {},
						Logging: {
							type: "structure",
							required: ["Enabled", "IncludeCookies", "Bucket", "Prefix"],
							members: {
								Enabled: {
									type: "boolean"
								},
								IncludeCookies: {
									type: "boolean"
								},
								Bucket: {},
								Prefix: {}
							}
						},
						PriceClass: {},
						Enabled: {
							type: "boolean"
						},
						ViewerCertificate: {
							shape: "S1i"
						},
						Restrictions: {
							shape: "S1m"
						},
						WebACLId: {},
						HttpVersion: {},
						IsIPV6Enabled: {
							type: "boolean"
						}
					}
				},
				S8: {
					type: "structure",
					required: ["Quantity"],
					members: {
						Quantity: {
							type: "integer"
						},
						Items: {
							type: "list",
							member: {
								locationName: "CNAME"
							}
						}
					}
				},
				Sb: {
					type: "structure",
					required: ["Quantity"],
					members: {
						Quantity: {
							type: "integer"
						},
						Items: {
							type: "list",
							member: {
								locationName: "Origin",
								type: "structure",
								required: ["Id", "DomainName"],
								members: {
									Id: {},
									DomainName: {},
									OriginPath: {},
									CustomHeaders: {
										type: "structure",
										required: ["Quantity"],
										members: {
											Quantity: {
												type: "integer"
											},
											Items: {
												type: "list",
												member: {
													locationName: "OriginCustomHeader",
													type: "structure",
													required: ["HeaderName", "HeaderValue"],
													members: {
														HeaderName: {},
														HeaderValue: {}
													}
												}
											}
										}
									},
									S3OriginConfig: {
										type: "structure",
										required: ["OriginAccessIdentity"],
										members: {
											OriginAccessIdentity: {}
										}
									},
									CustomOriginConfig: {
										type: "structure",
										required: ["HTTPPort", "HTTPSPort", "OriginProtocolPolicy"],
										members: {
											HTTPPort: {
												type: "integer"
											},
											HTTPSPort: {
												type: "integer"
											},
											OriginProtocolPolicy: {},
											OriginSslProtocols: {
												type: "structure",
												required: ["Quantity", "Items"],
												members: {
													Quantity: {
														type: "integer"
													},
													Items: {
														type: "list",
														member: {
															locationName: "SslProtocol"
														}
													}
												}
											},
											OriginReadTimeout: {
												type: "integer"
											},
											OriginKeepaliveTimeout: {
												type: "integer"
											}
										}
									}
								}
							}
						}
					}
				},
				Sn: {
					type: "structure",
					required: ["TargetOriginId", "ForwardedValues", "TrustedSigners", "ViewerProtocolPolicy", "MinTTL"],
					members: {
						TargetOriginId: {},
						ForwardedValues: {
							shape: "So"
						},
						TrustedSigners: {
							shape: "Sy"
						},
						ViewerProtocolPolicy: {},
						MinTTL: {
							type: "long"
						},
						AllowedMethods: {
							shape: "S12"
						},
						SmoothStreaming: {
							type: "boolean"
						},
						DefaultTTL: {
							type: "long"
						},
						MaxTTL: {
							type: "long"
						},
						Compress: {
							type: "boolean"
						},
						LambdaFunctionAssociations: {
							shape: "S16"
						}
					}
				},
				So: {
					type: "structure",
					required: ["QueryString", "Cookies"],
					members: {
						QueryString: {
							type: "boolean"
						},
						Cookies: {
							type: "structure",
							required: ["Forward"],
							members: {
								Forward: {},
								WhitelistedNames: {
									type: "structure",
									required: ["Quantity"],
									members: {
										Quantity: {
											type: "integer"
										},
										Items: {
											type: "list",
											member: {
												locationName: "Name"
											}
										}
									}
								}
							}
						},
						Headers: {
							type: "structure",
							required: ["Quantity"],
							members: {
								Quantity: {
									type: "integer"
								},
								Items: {
									type: "list",
									member: {
										locationName: "Name"
									}
								}
							}
						},
						QueryStringCacheKeys: {
							type: "structure",
							required: ["Quantity"],
							members: {
								Quantity: {
									type: "integer"
								},
								Items: {
									type: "list",
									member: {
										locationName: "Name"
									}
								}
							}
						}
					}
				},
				Sy: {
					type: "structure",
					required: ["Enabled", "Quantity"],
					members: {
						Enabled: {
							type: "boolean"
						},
						Quantity: {
							type: "integer"
						},
						Items: {
							type: "list",
							member: {
								locationName: "AwsAccountNumber"
							}
						}
					}
				},
				S12: {
					type: "structure",
					required: ["Quantity", "Items"],
					members: {
						Quantity: {
							type: "integer"
						},
						Items: {
							shape: "S13"
						},
						CachedMethods: {
							type: "structure",
							required: ["Quantity", "Items"],
							members: {
								Quantity: {
									type: "integer"
								},
								Items: {
									shape: "S13"
								}
							}
						}
					}
				},
				S13: {
					type: "list",
					member: {
						locationName: "Method"
					}
				},
				S16: {
					type: "structure",
					required: ["Quantity"],
					members: {
						Quantity: {
							type: "integer"
						},
						Items: {
							type: "list",
							member: {
								locationName: "LambdaFunctionAssociation",
								type: "structure",
								members: {
									LambdaFunctionARN: {},
									EventType: {}
								}
							}
						}
					}
				},
				S1a: {
					type: "structure",
					required: ["Quantity"],
					members: {
						Quantity: {
							type: "integer"
						},
						Items: {
							type: "list",
							member: {
								locationName: "CacheBehavior",
								type: "structure",
								required: ["PathPattern", "TargetOriginId", "ForwardedValues", "TrustedSigners", "ViewerProtocolPolicy", "MinTTL"],
								members: {
									PathPattern: {},
									TargetOriginId: {},
									ForwardedValues: {
										shape: "So"
									},
									TrustedSigners: {
										shape: "Sy"
									},
									ViewerProtocolPolicy: {},
									MinTTL: {
										type: "long"
									},
									AllowedMethods: {
										shape: "S12"
									},
									SmoothStreaming: {
										type: "boolean"
									},
									DefaultTTL: {
										type: "long"
									},
									MaxTTL: {
										type: "long"
									},
									Compress: {
										type: "boolean"
									},
									LambdaFunctionAssociations: {
										shape: "S16"
									}
								}
							}
						}
					}
				},
				S1d: {
					type: "structure",
					required: ["Quantity"],
					members: {
						Quantity: {
							type: "integer"
						},
						Items: {
							type: "list",
							member: {
								locationName: "CustomErrorResponse",
								type: "structure",
								required: ["ErrorCode"],
								members: {
									ErrorCode: {
										type: "integer"
									},
									ResponsePagePath: {},
									ResponseCode: {},
									ErrorCachingMinTTL: {
										type: "long"
									}
								}
							}
						}
					}
				},
				S1i: {
					type: "structure",
					members: {
						CloudFrontDefaultCertificate: {
							type: "boolean"
						},
						IAMCertificateId: {},
						ACMCertificateArn: {},
						SSLSupportMethod: {},
						MinimumProtocolVersion: {},
						Certificate: {
							deprecated: !0
						},
						CertificateSource: {
							deprecated: !0
						}
					}
				},
				S1m: {
					type: "structure",
					required: ["GeoRestriction"],
					members: {
						GeoRestriction: {
							type: "structure",
							required: ["RestrictionType", "Quantity"],
							members: {
								RestrictionType: {},
								Quantity: {
									type: "integer"
								},
								Items: {
									type: "list",
									member: {
										locationName: "Location"
									}
								}
							}
						}
					}
				},
				S1s: {
					type: "structure",
					required: ["Id", "ARN", "Status", "LastModifiedTime", "InProgressInvalidationBatches", "DomainName", "ActiveTrustedSigners", "DistributionConfig"],
					members: {
						Id: {},
						ARN: {},
						Status: {},
						LastModifiedTime: {
							type: "timestamp"
						},
						InProgressInvalidationBatches: {
							type: "integer"
						},
						DomainName: {},
						ActiveTrustedSigners: {
							shape: "S1u"
						},
						DistributionConfig: {
							shape: "S7"
						}
					}
				},
				S1u: {
					type: "structure",
					required: ["Enabled", "Quantity"],
					members: {
						Enabled: {
							type: "boolean"
						},
						Quantity: {
							type: "integer"
						},
						Items: {
							type: "list",
							member: {
								locationName: "Signer",
								type: "structure",
								members: {
									AwsAccountNumber: {},
									KeyPairIds: {
										type: "structure",
										required: ["Quantity"],
										members: {
											Quantity: {
												type: "integer"
											},
											Items: {
												type: "list",
												member: {
													locationName: "KeyPairId"
												}
											}
										}
									}
								}
							}
						}
					}
				},
				S21: {
					type: "structure",
					members: {
						Items: {
							type: "list",
							member: {
								locationName: "Tag",
								type: "structure",
								required: ["Key"],
								members: {
									Key: {},
									Value: {}
								}
							}
						}
					}
				},
				S28: {
					type: "structure",
					required: ["Paths", "CallerReference"],
					members: {
						Paths: {
							type: "structure",
							required: ["Quantity"],
							members: {
								Quantity: {
									type: "integer"
								},
								Items: {
									type: "list",
									member: {
										locationName: "Path"
									}
								}
							}
						},
						CallerReference: {}
					}
				},
				S2c: {
					type: "structure",
					required: ["Id", "Status", "CreateTime", "InvalidationBatch"],
					members: {
						Id: {},
						Status: {},
						CreateTime: {
							type: "timestamp"
						},
						InvalidationBatch: {
							shape: "S28"
						}
					}
				},
				S2e: {
					type: "structure",
					required: ["CallerReference", "S3Origin", "Comment", "TrustedSigners", "Enabled"],
					members: {
						CallerReference: {},
						S3Origin: {
							shape: "S2f"
						},
						Aliases: {
							shape: "S8"
						},
						Comment: {},
						Logging: {
							type: "structure",
							required: ["Enabled", "Bucket", "Prefix"],
							members: {
								Enabled: {
									type: "boolean"
								},
								Bucket: {},
								Prefix: {}
							}
						},
						TrustedSigners: {
							shape: "Sy"
						},
						PriceClass: {},
						Enabled: {
							type: "boolean"
						}
					}
				},
				S2f: {
					type: "structure",
					required: ["DomainName", "OriginAccessIdentity"],
					members: {
						DomainName: {},
						OriginAccessIdentity: {}
					}
				},
				S2i: {
					type: "structure",
					required: ["Id", "ARN", "Status", "DomainName", "ActiveTrustedSigners", "StreamingDistributionConfig"],
					members: {
						Id: {},
						ARN: {},
						Status: {},
						LastModifiedTime: {
							type: "timestamp"
						},
						DomainName: {},
						ActiveTrustedSigners: {
							shape: "S1u"
						},
						StreamingDistributionConfig: {
							shape: "S2e"
						}
					}
				},
				S3b: {
					type: "structure",
					required: ["Marker", "MaxItems", "IsTruncated", "Quantity"],
					members: {
						Marker: {},
						NextMarker: {},
						MaxItems: {
							type: "integer"
						},
						IsTruncated: {
							type: "boolean"
						},
						Quantity: {
							type: "integer"
						},
						Items: {
							type: "list",
							member: {
								locationName: "DistributionSummary",
								type: "structure",
								required: ["Id", "ARN", "Status", "LastModifiedTime", "DomainName", "Aliases", "Origins", "DefaultCacheBehavior", "CacheBehaviors", "CustomErrorResponses", "Comment", "PriceClass", "Enabled", "ViewerCertificate", "Restrictions", "WebACLId", "HttpVersion", "IsIPV6Enabled"],
								members: {
									Id: {},
									ARN: {},
									Status: {},
									LastModifiedTime: {
										type: "timestamp"
									},
									DomainName: {},
									Aliases: {
										shape: "S8"
									},
									Origins: {
										shape: "Sb"
									},
									DefaultCacheBehavior: {
										shape: "Sn"
									},
									CacheBehaviors: {
										shape: "S1a"
									},
									CustomErrorResponses: {
										shape: "S1d"
									},
									Comment: {},
									PriceClass: {},
									Enabled: {
										type: "boolean"
									},
									ViewerCertificate: {
										shape: "S1i"
									},
									Restrictions: {
										shape: "S1m"
									},
									WebACLId: {},
									HttpVersion: {},
									IsIPV6Enabled: {
										type: "boolean"
									}
								}
							}
						}
					}
				}
			}
		}
	}, {}],
	16: [function(e, t, r) {
		t.exports = {
			pagination: {
				ListCloudFrontOriginAccessIdentities: {
					input_token: "Marker",
					limit_key: "MaxItems",
					more_results: "CloudFrontOriginAccessIdentityList.IsTruncated",
					output_token: "CloudFrontOriginAccessIdentityList.NextMarker",
					result_key: "CloudFrontOriginAccessIdentityList.Items"
				},
				ListDistributions: {
					input_token: "Marker",
					limit_key: "MaxItems",
					more_results: "DistributionList.IsTruncated",
					output_token: "DistributionList.NextMarker",
					result_key: "DistributionList.Items"
				},
				ListInvalidations: {
					input_token: "Marker",
					limit_key: "MaxItems",
					more_results: "InvalidationList.IsTruncated",
					output_token: "InvalidationList.NextMarker",
					result_key: "InvalidationList.Items"
				},
				ListStreamingDistributions: {
					input_token: "Marker",
					limit_key: "MaxItems",
					more_results: "StreamingDistributionList.IsTruncated",
					output_token: "StreamingDistributionList.NextMarker",
					result_key: "StreamingDistributionList.Items"
				}
			}
		}
	}, {}],
	17: [function(e, t, r) {
		arguments[4][14][0].apply(r, arguments)
	}, {
		dup: 14
	}],
	18: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2017-10-30",
				endpointPrefix: "cloudfront",
				globalEndpoint: "cloudfront.amazonaws.com",
				protocol: "rest-xml",
				serviceAbbreviation: "CloudFront",
				serviceFullName: "Amazon CloudFront",
				serviceId: "CloudFront",
				signatureVersion: "v4",
				uid: "cloudfront-2017-10-30"
			},
			operations: {
				CreateCloudFrontOriginAccessIdentity: {
					http: {
						requestUri: "/2017-10-30/origin-access-identity/cloudfront",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["CloudFrontOriginAccessIdentityConfig"],
						members: {
							CloudFrontOriginAccessIdentityConfig: {
								shape: "S2",
								locationName: "CloudFrontOriginAccessIdentityConfig",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-10-30/"
								}
							}
						},
						payload: "CloudFrontOriginAccessIdentityConfig"
					},
					output: {
						type: "structure",
						members: {
							CloudFrontOriginAccessIdentity: {
								shape: "S5"
							},
							Location: {
								location: "header",
								locationName: "Location"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "CloudFrontOriginAccessIdentity"
					}
				},
				CreateDistribution: {
					http: {
						requestUri: "/2017-10-30/distribution",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["DistributionConfig"],
						members: {
							DistributionConfig: {
								shape: "S7",
								locationName: "DistributionConfig",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-10-30/"
								}
							}
						},
						payload: "DistributionConfig"
					},
					output: {
						type: "structure",
						members: {
							Distribution: {
								shape: "S1t"
							},
							Location: {
								location: "header",
								locationName: "Location"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "Distribution"
					}
				},
				CreateDistributionWithTags: {
					http: {
						requestUri: "/2017-10-30/distribution?WithTags",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["DistributionConfigWithTags"],
						members: {
							DistributionConfigWithTags: {
								locationName: "DistributionConfigWithTags",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-10-30/"
								},
								type: "structure",
								required: ["DistributionConfig", "Tags"],
								members: {
									DistributionConfig: {
										shape: "S7"
									},
									Tags: {
										shape: "S22"
									}
								}
							}
						},
						payload: "DistributionConfigWithTags"
					},
					output: {
						type: "structure",
						members: {
							Distribution: {
								shape: "S1t"
							},
							Location: {
								location: "header",
								locationName: "Location"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "Distribution"
					}
				},
				CreateFieldLevelEncryptionConfig: {
					http: {
						requestUri: "/2017-10-30/field-level-encryption",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["FieldLevelEncryptionConfig"],
						members: {
							FieldLevelEncryptionConfig: {
								shape: "S29",
								locationName: "FieldLevelEncryptionConfig",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-10-30/"
								}
							}
						},
						payload: "FieldLevelEncryptionConfig"
					},
					output: {
						type: "structure",
						members: {
							FieldLevelEncryption: {
								shape: "S2k"
							},
							Location: {
								location: "header",
								locationName: "Location"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "FieldLevelEncryption"
					}
				},
				CreateFieldLevelEncryptionProfile: {
					http: {
						requestUri: "/2017-10-30/field-level-encryption-profile",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["FieldLevelEncryptionProfileConfig"],
						members: {
							FieldLevelEncryptionProfileConfig: {
								shape: "S2m",
								locationName: "FieldLevelEncryptionProfileConfig",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-10-30/"
								}
							}
						},
						payload: "FieldLevelEncryptionProfileConfig"
					},
					output: {
						type: "structure",
						members: {
							FieldLevelEncryptionProfile: {
								shape: "S2t"
							},
							Location: {
								location: "header",
								locationName: "Location"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "FieldLevelEncryptionProfile"
					}
				},
				CreateInvalidation: {
					http: {
						requestUri: "/2017-10-30/distribution/{DistributionId}/invalidation",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["DistributionId", "InvalidationBatch"],
						members: {
							DistributionId: {
								location: "uri",
								locationName: "DistributionId"
							},
							InvalidationBatch: {
								shape: "S2v",
								locationName: "InvalidationBatch",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-10-30/"
								}
							}
						},
						payload: "InvalidationBatch"
					},
					output: {
						type: "structure",
						members: {
							Location: {
								location: "header",
								locationName: "Location"
							},
							Invalidation: {
								shape: "S2z"
							}
						},
						payload: "Invalidation"
					}
				},
				CreatePublicKey: {
					http: {
						requestUri: "/2017-10-30/public-key",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["PublicKeyConfig"],
						members: {
							PublicKeyConfig: {
								shape: "S31",
								locationName: "PublicKeyConfig",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-10-30/"
								}
							}
						},
						payload: "PublicKeyConfig"
					},
					output: {
						type: "structure",
						members: {
							PublicKey: {
								shape: "S33"
							},
							Location: {
								location: "header",
								locationName: "Location"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "PublicKey"
					}
				},
				CreateStreamingDistribution: {
					http: {
						requestUri: "/2017-10-30/streaming-distribution",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["StreamingDistributionConfig"],
						members: {
							StreamingDistributionConfig: {
								shape: "S35",
								locationName: "StreamingDistributionConfig",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-10-30/"
								}
							}
						},
						payload: "StreamingDistributionConfig"
					},
					output: {
						type: "structure",
						members: {
							StreamingDistribution: {
								shape: "S39"
							},
							Location: {
								location: "header",
								locationName: "Location"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "StreamingDistribution"
					}
				},
				CreateStreamingDistributionWithTags: {
					http: {
						requestUri: "/2017-10-30/streaming-distribution?WithTags",
						responseCode: 201
					},
					input: {
						type: "structure",
						required: ["StreamingDistributionConfigWithTags"],
						members: {
							StreamingDistributionConfigWithTags: {
								locationName: "StreamingDistributionConfigWithTags",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-10-30/"
								},
								type: "structure",
								required: ["StreamingDistributionConfig", "Tags"],
								members: {
									StreamingDistributionConfig: {
										shape: "S35"
									},
									Tags: {
										shape: "S22"
									}
								}
							}
						},
						payload: "StreamingDistributionConfigWithTags"
					},
					output: {
						type: "structure",
						members: {
							StreamingDistribution: {
								shape: "S39"
							},
							Location: {
								location: "header",
								locationName: "Location"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "StreamingDistribution"
					}
				},
				DeleteCloudFrontOriginAccessIdentity: {
					http: {
						method: "DELETE",
						requestUri: "/2017-10-30/origin-access-identity/cloudfront/{Id}",
						responseCode: 204
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							},
							IfMatch: {
								location: "header",
								locationName: "If-Match"
							}
						}
					}
				},
				DeleteDistribution: {
					http: {
						method: "DELETE",
						requestUri: "/2017-10-30/distribution/{Id}",
						responseCode: 204
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							},
							IfMatch: {
								location: "header",
								locationName: "If-Match"
							}
						}
					}
				},
				DeleteFieldLevelEncryptionConfig: {
					http: {
						method: "DELETE",
						requestUri: "/2017-10-30/field-level-encryption/{Id}",
						responseCode: 204
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							},
							IfMatch: {
								location: "header",
								locationName: "If-Match"
							}
						}
					}
				},
				DeleteFieldLevelEncryptionProfile: {
					http: {
						method: "DELETE",
						requestUri: "/2017-10-30/field-level-encryption-profile/{Id}",
						responseCode: 204
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							},
							IfMatch: {
								location: "header",
								locationName: "If-Match"
							}
						}
					}
				},
				DeletePublicKey: {
					http: {
						method: "DELETE",
						requestUri: "/2017-10-30/public-key/{Id}",
						responseCode: 204
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							},
							IfMatch: {
								location: "header",
								locationName: "If-Match"
							}
						}
					}
				},
				DeleteServiceLinkedRole: {
					http: {
						method: "DELETE",
						requestUri: "/2017-10-30/service-linked-role/{RoleName}",
						responseCode: 204
					},
					input: {
						type: "structure",
						required: ["RoleName"],
						members: {
							RoleName: {
								location: "uri",
								locationName: "RoleName"
							}
						}
					}
				},
				DeleteStreamingDistribution: {
					http: {
						method: "DELETE",
						requestUri: "/2017-10-30/streaming-distribution/{Id}",
						responseCode: 204
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							},
							IfMatch: {
								location: "header",
								locationName: "If-Match"
							}
						}
					}
				},
				GetCloudFrontOriginAccessIdentity: {
					http: {
						method: "GET",
						requestUri: "/2017-10-30/origin-access-identity/cloudfront/{Id}"
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							CloudFrontOriginAccessIdentity: {
								shape: "S5"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "CloudFrontOriginAccessIdentity"
					}
				},
				GetCloudFrontOriginAccessIdentityConfig: {
					http: {
						method: "GET",
						requestUri: "/2017-10-30/origin-access-identity/cloudfront/{Id}/config"
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							CloudFrontOriginAccessIdentityConfig: {
								shape: "S2"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "CloudFrontOriginAccessIdentityConfig"
					}
				},
				GetDistribution: {
					http: {
						method: "GET",
						requestUri: "/2017-10-30/distribution/{Id}"
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Distribution: {
								shape: "S1t"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "Distribution"
					}
				},
				GetDistributionConfig: {
					http: {
						method: "GET",
						requestUri: "/2017-10-30/distribution/{Id}/config"
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							DistributionConfig: {
								shape: "S7"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "DistributionConfig"
					}
				},
				GetFieldLevelEncryption: {
					http: {
						method: "GET",
						requestUri: "/2017-10-30/field-level-encryption/{Id}"
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							FieldLevelEncryption: {
								shape: "S2k"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "FieldLevelEncryption"
					}
				},
				GetFieldLevelEncryptionConfig: {
					http: {
						method: "GET",
						requestUri: "/2017-10-30/field-level-encryption/{Id}/config"
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							FieldLevelEncryptionConfig: {
								shape: "S29"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "FieldLevelEncryptionConfig"
					}
				},
				GetFieldLevelEncryptionProfile: {
					http: {
						method: "GET",
						requestUri: "/2017-10-30/field-level-encryption-profile/{Id}"
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							FieldLevelEncryptionProfile: {
								shape: "S2t"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "FieldLevelEncryptionProfile"
					}
				},
				GetFieldLevelEncryptionProfileConfig: {
					http: {
						method: "GET",
						requestUri: "/2017-10-30/field-level-encryption-profile/{Id}/config"
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							FieldLevelEncryptionProfileConfig: {
								shape: "S2m"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "FieldLevelEncryptionProfileConfig"
					}
				},
				GetInvalidation: {
					http: {
						method: "GET",
						requestUri: "/2017-10-30/distribution/{DistributionId}/invalidation/{Id}"
					},
					input: {
						type: "structure",
						required: ["DistributionId", "Id"],
						members: {
							DistributionId: {
								location: "uri",
								locationName: "DistributionId"
							},
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Invalidation: {
								shape: "S2z"
							}
						},
						payload: "Invalidation"
					}
				},
				GetPublicKey: {
					http: {
						method: "GET",
						requestUri: "/2017-10-30/public-key/{Id}"
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							PublicKey: {
								shape: "S33"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "PublicKey"
					}
				},
				GetPublicKeyConfig: {
					http: {
						method: "GET",
						requestUri: "/2017-10-30/public-key/{Id}/config"
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							PublicKeyConfig: {
								shape: "S31"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "PublicKeyConfig"
					}
				},
				GetStreamingDistribution: {
					http: {
						method: "GET",
						requestUri: "/2017-10-30/streaming-distribution/{Id}"
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							StreamingDistribution: {
								shape: "S39"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "StreamingDistribution"
					}
				},
				GetStreamingDistributionConfig: {
					http: {
						method: "GET",
						requestUri: "/2017-10-30/streaming-distribution/{Id}/config"
					},
					input: {
						type: "structure",
						required: ["Id"],
						members: {
							Id: {
								location: "uri",
								locationName: "Id"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							StreamingDistributionConfig: {
								shape: "S35"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "StreamingDistributionConfig"
					}
				},
				ListCloudFrontOriginAccessIdentities: {
					http: {
						method: "GET",
						requestUri: "/2017-10-30/origin-access-identity/cloudfront"
					},
					input: {
						type: "structure",
						members: {
							Marker: {
								location: "querystring",
								locationName: "Marker"
							},
							MaxItems: {
								location: "querystring",
								locationName: "MaxItems"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							CloudFrontOriginAccessIdentityList: {
								type: "structure",
								required: ["Marker", "MaxItems", "IsTruncated", "Quantity"],
								members: {
									Marker: {},
									NextMarker: {},
									MaxItems: {
										type: "integer"
									},
									IsTruncated: {
										type: "boolean"
									},
									Quantity: {
										type: "integer"
									},
									Items: {
										type: "list",
										member: {
											locationName: "CloudFrontOriginAccessIdentitySummary",
											type: "structure",
											required: ["Id", "S3CanonicalUserId", "Comment"],
											members: {
												Id: {},
												S3CanonicalUserId: {},
												Comment: {}
											}
										}
									}
								}
							}
						},
						payload: "CloudFrontOriginAccessIdentityList"
					}
				},
				ListDistributions: {
					http: {
						method: "GET",
						requestUri: "/2017-10-30/distribution"
					},
					input: {
						type: "structure",
						members: {
							Marker: {
								location: "querystring",
								locationName: "Marker"
							},
							MaxItems: {
								location: "querystring",
								locationName: "MaxItems"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							DistributionList: {
								shape: "S4h"
							}
						},
						payload: "DistributionList"
					}
				},
				ListDistributionsByWebACLId: {
					http: {
						method: "GET",
						requestUri: "/2017-10-30/distributionsByWebACLId/{WebACLId}"
					},
					input: {
						type: "structure",
						required: ["WebACLId"],
						members: {
							Marker: {
								location: "querystring",
								locationName: "Marker"
							},
							MaxItems: {
								location: "querystring",
								locationName: "MaxItems"
							},
							WebACLId: {
								location: "uri",
								locationName: "WebACLId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							DistributionList: {
								shape: "S4h"
							}
						},
						payload: "DistributionList"
					}
				},
				ListFieldLevelEncryptionConfigs: {
					http: {
						method: "GET",
						requestUri: "/2017-10-30/field-level-encryption"
					},
					input: {
						type: "structure",
						members: {
							Marker: {
								location: "querystring",
								locationName: "Marker"
							},
							MaxItems: {
								location: "querystring",
								locationName: "MaxItems"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							FieldLevelEncryptionList: {
								type: "structure",
								required: ["MaxItems", "Quantity"],
								members: {
									NextMarker: {},
									MaxItems: {
										type: "integer"
									},
									Quantity: {
										type: "integer"
									},
									Items: {
										type: "list",
										member: {
											locationName: "FieldLevelEncryptionSummary",
											type: "structure",
											required: ["Id", "LastModifiedTime"],
											members: {
												Id: {},
												LastModifiedTime: {
													type: "timestamp"
												},
												Comment: {},
												QueryArgProfileConfig: {
													shape: "S2a"
												},
												ContentTypeProfileConfig: {
													shape: "S2e"
												}
											}
										}
									}
								}
							}
						},
						payload: "FieldLevelEncryptionList"
					}
				},
				ListFieldLevelEncryptionProfiles: {
					http: {
						method: "GET",
						requestUri: "/2017-10-30/field-level-encryption-profile"
					},
					input: {
						type: "structure",
						members: {
							Marker: {
								location: "querystring",
								locationName: "Marker"
							},
							MaxItems: {
								location: "querystring",
								locationName: "MaxItems"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							FieldLevelEncryptionProfileList: {
								type: "structure",
								required: ["MaxItems", "Quantity"],
								members: {
									NextMarker: {},
									MaxItems: {
										type: "integer"
									},
									Quantity: {
										type: "integer"
									},
									Items: {
										type: "list",
										member: {
											locationName: "FieldLevelEncryptionProfileSummary",
											type: "structure",
											required: ["Id", "LastModifiedTime", "Name", "EncryptionEntities"],
											members: {
												Id: {},
												LastModifiedTime: {
													type: "timestamp"
												},
												Name: {},
												EncryptionEntities: {
													shape: "S2n"
												},
												Comment: {}
											}
										}
									}
								}
							}
						},
						payload: "FieldLevelEncryptionProfileList"
					}
				},
				ListInvalidations: {
					http: {
						method: "GET",
						requestUri: "/2017-10-30/distribution/{DistributionId}/invalidation"
					},
					input: {
						type: "structure",
						required: ["DistributionId"],
						members: {
							DistributionId: {
								location: "uri",
								locationName: "DistributionId"
							},
							Marker: {
								location: "querystring",
								locationName: "Marker"
							},
							MaxItems: {
								location: "querystring",
								locationName: "MaxItems"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							InvalidationList: {
								type: "structure",
								required: ["Marker", "MaxItems", "IsTruncated", "Quantity"],
								members: {
									Marker: {},
									NextMarker: {},
									MaxItems: {
										type: "integer"
									},
									IsTruncated: {
										type: "boolean"
									},
									Quantity: {
										type: "integer"
									},
									Items: {
										type: "list",
										member: {
											locationName: "InvalidationSummary",
											type: "structure",
											required: ["Id", "CreateTime", "Status"],
											members: {
												Id: {},
												CreateTime: {
													type: "timestamp"
												},
												Status: {}
											}
										}
									}
								}
							}
						},
						payload: "InvalidationList"
					}
				},
				ListPublicKeys: {
					http: {
						method: "GET",
						requestUri: "/2017-10-30/public-key"
					},
					input: {
						type: "structure",
						members: {
							Marker: {
								location: "querystring",
								locationName: "Marker"
							},
							MaxItems: {
								location: "querystring",
								locationName: "MaxItems"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							PublicKeyList: {
								type: "structure",
								required: ["MaxItems", "Quantity"],
								members: {
									NextMarker: {},
									MaxItems: {
										type: "integer"
									},
									Quantity: {
										type: "integer"
									},
									Items: {
										type: "list",
										member: {
											locationName: "PublicKeySummary",
											type: "structure",
											required: ["Id", "Name", "CreatedTime", "EncodedKey"],
											members: {
												Id: {},
												Name: {},
												CreatedTime: {
													type: "timestamp"
												},
												EncodedKey: {},
												Comment: {}
											}
										}
									}
								}
							}
						},
						payload: "PublicKeyList"
					}
				},
				ListStreamingDistributions: {
					http: {
						method: "GET",
						requestUri: "/2017-10-30/streaming-distribution"
					},
					input: {
						type: "structure",
						members: {
							Marker: {
								location: "querystring",
								locationName: "Marker"
							},
							MaxItems: {
								location: "querystring",
								locationName: "MaxItems"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							StreamingDistributionList: {
								type: "structure",
								required: ["Marker", "MaxItems", "IsTruncated", "Quantity"],
								members: {
									Marker: {},
									NextMarker: {},
									MaxItems: {
										type: "integer"
									},
									IsTruncated: {
										type: "boolean"
									},
									Quantity: {
										type: "integer"
									},
									Items: {
										type: "list",
										member: {
											locationName: "StreamingDistributionSummary",
											type: "structure",
											required: ["Id", "ARN", "Status", "LastModifiedTime", "DomainName", "S3Origin", "Aliases", "TrustedSigners", "Comment", "PriceClass", "Enabled"],
											members: {
												Id: {},
												ARN: {},
												Status: {},
												LastModifiedTime: {
													type: "timestamp"
												},
												DomainName: {},
												S3Origin: {
													shape: "S36"
												},
												Aliases: {
													shape: "S8"
												},
												TrustedSigners: {
													shape: "Sy"
												},
												Comment: {},
												PriceClass: {},
												Enabled: {
													type: "boolean"
												}
											}
										}
									}
								}
							}
						},
						payload: "StreamingDistributionList"
					}
				},
				ListTagsForResource: {
					http: {
						method: "GET",
						requestUri: "/2017-10-30/tagging"
					},
					input: {
						type: "structure",
						required: ["Resource"],
						members: {
							Resource: {
								location: "querystring",
								locationName: "Resource"
							}
						}
					},
					output: {
						type: "structure",
						required: ["Tags"],
						members: {
							Tags: {
								shape: "S22"
							}
						},
						payload: "Tags"
					}
				},
				TagResource: {
					http: {
						requestUri: "/2017-10-30/tagging?Operation=Tag",
						responseCode: 204
					},
					input: {
						type: "structure",
						required: ["Resource", "Tags"],
						members: {
							Resource: {
								location: "querystring",
								locationName: "Resource"
							},
							Tags: {
								shape: "S22",
								locationName: "Tags",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-10-30/"
								}
							}
						},
						payload: "Tags"
					}
				},
				UntagResource: {
					http: {
						requestUri: "/2017-10-30/tagging?Operation=Untag",
						responseCode: 204
					},
					input: {
						type: "structure",
						required: ["Resource", "TagKeys"],
						members: {
							Resource: {
								location: "querystring",
								locationName: "Resource"
							},
							TagKeys: {
								locationName: "TagKeys",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-10-30/"
								},
								type: "structure",
								members: {
									Items: {
										type: "list",
										member: {
											locationName: "Key"
										}
									}
								}
							}
						},
						payload: "TagKeys"
					}
				},
				UpdateCloudFrontOriginAccessIdentity: {
					http: {
						method: "PUT",
						requestUri: "/2017-10-30/origin-access-identity/cloudfront/{Id}/config"
					},
					input: {
						type: "structure",
						required: ["CloudFrontOriginAccessIdentityConfig", "Id"],
						members: {
							CloudFrontOriginAccessIdentityConfig: {
								shape: "S2",
								locationName: "CloudFrontOriginAccessIdentityConfig",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-10-30/"
								}
							},
							Id: {
								location: "uri",
								locationName: "Id"
							},
							IfMatch: {
								location: "header",
								locationName: "If-Match"
							}
						},
						payload: "CloudFrontOriginAccessIdentityConfig"
					},
					output: {
						type: "structure",
						members: {
							CloudFrontOriginAccessIdentity: {
								shape: "S5"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "CloudFrontOriginAccessIdentity"
					}
				},
				UpdateDistribution: {
					http: {
						method: "PUT",
						requestUri: "/2017-10-30/distribution/{Id}/config"
					},
					input: {
						type: "structure",
						required: ["DistributionConfig", "Id"],
						members: {
							DistributionConfig: {
								shape: "S7",
								locationName: "DistributionConfig",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-10-30/"
								}
							},
							Id: {
								location: "uri",
								locationName: "Id"
							},
							IfMatch: {
								location: "header",
								locationName: "If-Match"
							}
						},
						payload: "DistributionConfig"
					},
					output: {
						type: "structure",
						members: {
							Distribution: {
								shape: "S1t"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "Distribution"
					}
				},
				UpdateFieldLevelEncryptionConfig: {
					http: {
						method: "PUT",
						requestUri: "/2017-10-30/field-level-encryption/{Id}/config"
					},
					input: {
						type: "structure",
						required: ["FieldLevelEncryptionConfig", "Id"],
						members: {
							FieldLevelEncryptionConfig: {
								shape: "S29",
								locationName: "FieldLevelEncryptionConfig",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-10-30/"
								}
							},
							Id: {
								location: "uri",
								locationName: "Id"
							},
							IfMatch: {
								location: "header",
								locationName: "If-Match"
							}
						},
						payload: "FieldLevelEncryptionConfig"
					},
					output: {
						type: "structure",
						members: {
							FieldLevelEncryption: {
								shape: "S2k"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "FieldLevelEncryption"
					}
				},
				UpdateFieldLevelEncryptionProfile: {
					http: {
						method: "PUT",
						requestUri: "/2017-10-30/field-level-encryption-profile/{Id}/config"
					},
					input: {
						type: "structure",
						required: ["FieldLevelEncryptionProfileConfig", "Id"],
						members: {
							FieldLevelEncryptionProfileConfig: {
								shape: "S2m",
								locationName: "FieldLevelEncryptionProfileConfig",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-10-30/"
								}
							},
							Id: {
								location: "uri",
								locationName: "Id"
							},
							IfMatch: {
								location: "header",
								locationName: "If-Match"
							}
						},
						payload: "FieldLevelEncryptionProfileConfig"
					},
					output: {
						type: "structure",
						members: {
							FieldLevelEncryptionProfile: {
								shape: "S2t"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "FieldLevelEncryptionProfile"
					}
				},
				UpdatePublicKey: {
					http: {
						method: "PUT",
						requestUri: "/2017-10-30/public-key/{Id}/config"
					},
					input: {
						type: "structure",
						required: ["PublicKeyConfig", "Id"],
						members: {
							PublicKeyConfig: {
								shape: "S31",
								locationName: "PublicKeyConfig",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-10-30/"
								}
							},
							Id: {
								location: "uri",
								locationName: "Id"
							},
							IfMatch: {
								location: "header",
								locationName: "If-Match"
							}
						},
						payload: "PublicKeyConfig"
					},
					output: {
						type: "structure",
						members: {
							PublicKey: {
								shape: "S33"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "PublicKey"
					}
				},
				UpdateStreamingDistribution: {
					http: {
						method: "PUT",
						requestUri: "/2017-10-30/streaming-distribution/{Id}/config"
					},
					input: {
						type: "structure",
						required: ["StreamingDistributionConfig", "Id"],
						members: {
							StreamingDistributionConfig: {
								shape: "S35",
								locationName: "StreamingDistributionConfig",
								xmlNamespace: {
									uri: "http://cloudfront.amazonaws.com/doc/2017-10-30/"
								}
							},
							Id: {
								location: "uri",
								locationName: "Id"
							},
							IfMatch: {
								location: "header",
								locationName: "If-Match"
							}
						},
						payload: "StreamingDistributionConfig"
					},
					output: {
						type: "structure",
						members: {
							StreamingDistribution: {
								shape: "S39"
							},
							ETag: {
								location: "header",
								locationName: "ETag"
							}
						},
						payload: "StreamingDistribution"
					}
				}
			},
			shapes: {
				S2: {
					type: "structure",
					required: ["CallerReference", "Comment"],
					members: {
						CallerReference: {},
						Comment: {}
					}
				},
				S5: {
					type: "structure",
					required: ["Id", "S3CanonicalUserId"],
					members: {
						Id: {},
						S3CanonicalUserId: {},
						CloudFrontOriginAccessIdentityConfig: {
							shape: "S2"
						}
					}
				},
				S7: {
					type: "structure",
					required: ["CallerReference", "Origins", "DefaultCacheBehavior", "Comment", "Enabled"],
					members: {
						CallerReference: {},
						Aliases: {
							shape: "S8"
						},
						DefaultRootObject: {},
						Origins: {
							shape: "Sb"
						},
						DefaultCacheBehavior: {
							shape: "Sn"
						},
						CacheBehaviors: {
							shape: "S1b"
						},
						CustomErrorResponses: {
							shape: "S1e"
						},
						Comment: {},
						Logging: {
							type: "structure",
							required: ["Enabled", "IncludeCookies", "Bucket", "Prefix"],
							members: {
								Enabled: {
									type: "boolean"
								},
								IncludeCookies: {
									type: "boolean"
								},
								Bucket: {},
								Prefix: {}
							}
						},
						PriceClass: {},
						Enabled: {
							type: "boolean"
						},
						ViewerCertificate: {
							shape: "S1j"
						},
						Restrictions: {
							shape: "S1n"
						},
						WebACLId: {},
						HttpVersion: {},
						IsIPV6Enabled: {
							type: "boolean"
						}
					}
				},
				S8: {
					type: "structure",
					required: ["Quantity"],
					members: {
						Quantity: {
							type: "integer"
						},
						Items: {
							type: "list",
							member: {
								locationName: "CNAME"
							}
						}
					}
				},
				Sb: {
					type: "structure",
					required: ["Quantity"],
					members: {
						Quantity: {
							type: "integer"
						},
						Items: {
							type: "list",
							member: {
								locationName: "Origin",
								type: "structure",
								required: ["Id", "DomainName"],
								members: {
									Id: {},
									DomainName: {},
									OriginPath: {},
									CustomHeaders: {
										type: "structure",
										required: ["Quantity"],
										members: {
											Quantity: {
												type: "integer"
											},
											Items: {
												type: "list",
												member: {
													locationName: "OriginCustomHeader",
													type: "structure",
													required: ["HeaderName", "HeaderValue"],
													members: {
														HeaderName: {},
														HeaderValue: {}
													}
												}
											}
										}
									},
									S3OriginConfig: {
										type: "structure",
										required: ["OriginAccessIdentity"],
										members: {
											OriginAccessIdentity: {}
										}
									},
									CustomOriginConfig: {
										type: "structure",
										required: ["HTTPPort", "HTTPSPort", "OriginProtocolPolicy"],
										members: {
											HTTPPort: {
												type: "integer"
											},
											HTTPSPort: {
												type: "integer"
											},
											OriginProtocolPolicy: {},
											OriginSslProtocols: {
												type: "structure",
												required: ["Quantity", "Items"],
												members: {
													Quantity: {
														type: "integer"
													},
													Items: {
														type: "list",
														member: {
															locationName: "SslProtocol"
														}
													}
												}
											},
											OriginReadTimeout: {
												type: "integer"
											},
											OriginKeepaliveTimeout: {
												type: "integer"
											}
										}
									}
								}
							}
						}
					}
				},
				Sn: {
					type: "structure",
					required: ["TargetOriginId", "ForwardedValues", "TrustedSigners", "ViewerProtocolPolicy", "MinTTL"],
					members: {
						TargetOriginId: {},
						ForwardedValues: {
							shape: "So"
						},
						TrustedSigners: {
							shape: "Sy"
						},
						ViewerProtocolPolicy: {},
						MinTTL: {
							type: "long"
						},
						AllowedMethods: {
							shape: "S12"
						},
						SmoothStreaming: {
							type: "boolean"
						},
						DefaultTTL: {
							type: "long"
						},
						MaxTTL: {
							type: "long"
						},
						Compress: {
							type: "boolean"
						},
						LambdaFunctionAssociations: {
							shape: "S16"
						},
						FieldLevelEncryptionId: {}
					}
				},
				So: {
					type: "structure",
					required: ["QueryString", "Cookies"],
					members: {
						QueryString: {
							type: "boolean"
						},
						Cookies: {
							type: "structure",
							required: ["Forward"],
							members: {
								Forward: {},
								WhitelistedNames: {
									type: "structure",
									required: ["Quantity"],
									members: {
										Quantity: {
											type: "integer"
										},
										Items: {
											type: "list",
											member: {
												locationName: "Name"
											}
										}
									}
								}
							}
						},
						Headers: {
							type: "structure",
							required: ["Quantity"],
							members: {
								Quantity: {
									type: "integer"
								},
								Items: {
									type: "list",
									member: {
										locationName: "Name"
									}
								}
							}
						},
						QueryStringCacheKeys: {
							type: "structure",
							required: ["Quantity"],
							members: {
								Quantity: {
									type: "integer"
								},
								Items: {
									type: "list",
									member: {
										locationName: "Name"
									}
								}
							}
						}
					}
				},
				Sy: {
					type: "structure",
					required: ["Enabled", "Quantity"],
					members: {
						Enabled: {
							type: "boolean"
						},
						Quantity: {
							type: "integer"
						},
						Items: {
							type: "list",
							member: {
								locationName: "AwsAccountNumber"
							}
						}
					}
				},
				S12: {
					type: "structure",
					required: ["Quantity", "Items"],
					members: {
						Quantity: {
							type: "integer"
						},
						Items: {
							shape: "S13"
						},
						CachedMethods: {
							type: "structure",
							required: ["Quantity", "Items"],
							members: {
								Quantity: {
									type: "integer"
								},
								Items: {
									shape: "S13"
								}
							}
						}
					}
				},
				S13: {
					type: "list",
					member: {
						locationName: "Method"
					}
				},
				S16: {
					type: "structure",
					required: ["Quantity"],
					members: {
						Quantity: {
							type: "integer"
						},
						Items: {
							type: "list",
							member: {
								locationName: "LambdaFunctionAssociation",
								type: "structure",
								required: ["LambdaFunctionARN", "EventType"],
								members: {
									LambdaFunctionARN: {},
									EventType: {}
								}
							}
						}
					}
				},
				S1b: {
					type: "structure",
					required: ["Quantity"],
					members: {
						Quantity: {
							type: "integer"
						},
						Items: {
							type: "list",
							member: {
								locationName: "CacheBehavior",
								type: "structure",
								required: ["PathPattern", "TargetOriginId", "ForwardedValues", "TrustedSigners", "ViewerProtocolPolicy", "MinTTL"],
								members: {
									PathPattern: {},
									TargetOriginId: {},
									ForwardedValues: {
										shape: "So"
									},
									TrustedSigners: {
										shape: "Sy"
									},
									ViewerProtocolPolicy: {},
									MinTTL: {
										type: "long"
									},
									AllowedMethods: {
										shape: "S12"
									},
									SmoothStreaming: {
										type: "boolean"
									},
									DefaultTTL: {
										type: "long"
									},
									MaxTTL: {
										type: "long"
									},
									Compress: {
										type: "boolean"
									},
									LambdaFunctionAssociations: {
										shape: "S16"
									},
									FieldLevelEncryptionId: {}
								}
							}
						}
					}
				},
				S1e: {
					type: "structure",
					required: ["Quantity"],
					members: {
						Quantity: {
							type: "integer"
						},
						Items: {
							type: "list",
							member: {
								locationName: "CustomErrorResponse",
								type: "structure",
								required: ["ErrorCode"],
								members: {
									ErrorCode: {
										type: "integer"
									},
									ResponsePagePath: {},
									ResponseCode: {},
									ErrorCachingMinTTL: {
										type: "long"
									}
								}
							}
						}
					}
				},
				S1j: {
					type: "structure",
					members: {
						CloudFrontDefaultCertificate: {
							type: "boolean"
						},
						IAMCertificateId: {},
						ACMCertificateArn: {},
						SSLSupportMethod: {},
						MinimumProtocolVersion: {},
						Certificate: {
							deprecated: !0
						},
						CertificateSource: {
							deprecated: !0
						}
					}
				},
				S1n: {
					type: "structure",
					required: ["GeoRestriction"],
					members: {
						GeoRestriction: {
							type: "structure",
							required: ["RestrictionType", "Quantity"],
							members: {
								RestrictionType: {},
								Quantity: {
									type: "integer"
								},
								Items: {
									type: "list",
									member: {
										locationName: "Location"
									}
								}
							}
						}
					}
				},
				S1t: {
					type: "structure",
					required: ["Id", "ARN", "Status", "LastModifiedTime", "InProgressInvalidationBatches", "DomainName", "ActiveTrustedSigners", "DistributionConfig"],
					members: {
						Id: {},
						ARN: {},
						Status: {},
						LastModifiedTime: {
							type: "timestamp"
						},
						InProgressInvalidationBatches: {
							type: "integer"
						},
						DomainName: {},
						ActiveTrustedSigners: {
							shape: "S1v"
						},
						DistributionConfig: {
							shape: "S7"
						}
					}
				},
				S1v: {
					type: "structure",
					required: ["Enabled", "Quantity"],
					members: {
						Enabled: {
							type: "boolean"
						},
						Quantity: {
							type: "integer"
						},
						Items: {
							type: "list",
							member: {
								locationName: "Signer",
								type: "structure",
								members: {
									AwsAccountNumber: {},
									KeyPairIds: {
										type: "structure",
										required: ["Quantity"],
										members: {
											Quantity: {
												type: "integer"
											},
											Items: {
												type: "list",
												member: {
													locationName: "KeyPairId"
												}
											}
										}
									}
								}
							}
						}
					}
				},
				S22: {
					type: "structure",
					members: {
						Items: {
							type: "list",
							member: {
								locationName: "Tag",
								type: "structure",
								required: ["Key"],
								members: {
									Key: {},
									Value: {}
								}
							}
						}
					}
				},
				S29: {
					type: "structure",
					required: ["CallerReference"],
					members: {
						CallerReference: {},
						Comment: {},
						QueryArgProfileConfig: {
							shape: "S2a"
						},
						ContentTypeProfileConfig: {
							shape: "S2e"
						}
					}
				},
				S2a: {
					type: "structure",
					required: ["ForwardWhenQueryArgProfileIsUnknown"],
					members: {
						ForwardWhenQueryArgProfileIsUnknown: {
							type: "boolean"
						},
						QueryArgProfiles: {
							type: "structure",
							required: ["Quantity"],
							members: {
								Quantity: {
									type: "integer"
								},
								Items: {
									type: "list",
									member: {
										locationName: "QueryArgProfile",
										type: "structure",
										required: ["QueryArg", "ProfileId"],
										members: {
											QueryArg: {},
											ProfileId: {}
										}
									}
								}
							}
						}
					}
				},
				S2e: {
					type: "structure",
					required: ["ForwardWhenContentTypeIsUnknown"],
					members: {
						ForwardWhenContentTypeIsUnknown: {
							type: "boolean"
						},
						ContentTypeProfiles: {
							type: "structure",
							required: ["Quantity"],
							members: {
								Quantity: {
									type: "integer"
								},
								Items: {
									type: "list",
									member: {
										locationName: "ContentTypeProfile",
										type: "structure",
										required: ["Format", "ContentType"],
										members: {
											Format: {},
											ProfileId: {},
											ContentType: {}
										}
									}
								}
							}
						}
					}
				},
				S2k: {
					type: "structure",
					required: ["Id", "LastModifiedTime", "FieldLevelEncryptionConfig"],
					members: {
						Id: {},
						LastModifiedTime: {
							type: "timestamp"
						},
						FieldLevelEncryptionConfig: {
							shape: "S29"
						}
					}
				},
				S2m: {
					type: "structure",
					required: ["Name", "CallerReference", "EncryptionEntities"],
					members: {
						Name: {},
						CallerReference: {},
						Comment: {},
						EncryptionEntities: {
							shape: "S2n"
						}
					}
				},
				S2n: {
					type: "structure",
					required: ["Quantity"],
					members: {
						Quantity: {
							type: "integer"
						},
						Items: {
							type: "list",
							member: {
								locationName: "EncryptionEntity",
								type: "structure",
								required: ["PublicKeyId", "ProviderId", "FieldPatterns"],
								members: {
									PublicKeyId: {},
									ProviderId: {},
									FieldPatterns: {
										type: "structure",
										required: ["Quantity"],
										members: {
											Quantity: {
												type: "integer"
											},
											Items: {
												type: "list",
												member: {
													locationName: "FieldPattern"
												}
											}
										}
									}
								}
							}
						}
					}
				},
				S2t: {
					type: "structure",
					required: ["Id", "LastModifiedTime", "FieldLevelEncryptionProfileConfig"],
					members: {
						Id: {},
						LastModifiedTime: {
							type: "timestamp"
						},
						FieldLevelEncryptionProfileConfig: {
							shape: "S2m"
						}
					}
				},
				S2v: {
					type: "structure",
					required: ["Paths", "CallerReference"],
					members: {
						Paths: {
							type: "structure",
							required: ["Quantity"],
							members: {
								Quantity: {
									type: "integer"
								},
								Items: {
									type: "list",
									member: {
										locationName: "Path"
									}
								}
							}
						},
						CallerReference: {}
					}
				},
				S2z: {
					type: "structure",
					required: ["Id", "Status", "CreateTime", "InvalidationBatch"],
					members: {
						Id: {},
						Status: {},
						CreateTime: {
							type: "timestamp"
						},
						InvalidationBatch: {
							shape: "S2v"
						}
					}
				},
				S31: {
					type: "structure",
					required: ["CallerReference", "Name", "EncodedKey"],
					members: {
						CallerReference: {},
						Name: {},
						EncodedKey: {},
						Comment: {}
					}
				},
				S33: {
					type: "structure",
					required: ["Id", "CreatedTime", "PublicKeyConfig"],
					members: {
						Id: {},
						CreatedTime: {
							type: "timestamp"
						},
						PublicKeyConfig: {
							shape: "S31"
						}
					}
				},
				S35: {
					type: "structure",
					required: ["CallerReference", "S3Origin", "Comment", "TrustedSigners", "Enabled"],
					members: {
						CallerReference: {},
						S3Origin: {
							shape: "S36"
						},
						Aliases: {
							shape: "S8"
						},
						Comment: {},
						Logging: {
							type: "structure",
							required: ["Enabled", "Bucket", "Prefix"],
							members: {
								Enabled: {
									type: "boolean"
								},
								Bucket: {},
								Prefix: {}
							}
						},
						TrustedSigners: {
							shape: "Sy"
						},
						PriceClass: {},
						Enabled: {
							type: "boolean"
						}
					}
				},
				S36: {
					type: "structure",
					required: ["DomainName", "OriginAccessIdentity"],
					members: {
						DomainName: {},
						OriginAccessIdentity: {}
					}
				},
				S39: {
					type: "structure",
					required: ["Id", "ARN", "Status", "DomainName", "ActiveTrustedSigners", "StreamingDistributionConfig"],
					members: {
						Id: {},
						ARN: {},
						Status: {},
						LastModifiedTime: {
							type: "timestamp"
						},
						DomainName: {},
						ActiveTrustedSigners: {
							shape: "S1v"
						},
						StreamingDistributionConfig: {
							shape: "S35"
						}
					}
				},
				S4h: {
					type: "structure",
					required: ["Marker", "MaxItems", "IsTruncated", "Quantity"],
					members: {
						Marker: {},
						NextMarker: {},
						MaxItems: {
							type: "integer"
						},
						IsTruncated: {
							type: "boolean"
						},
						Quantity: {
							type: "integer"
						},
						Items: {
							type: "list",
							member: {
								locationName: "DistributionSummary",
								type: "structure",
								required: ["Id", "ARN", "Status", "LastModifiedTime", "DomainName", "Aliases", "Origins", "DefaultCacheBehavior", "CacheBehaviors", "CustomErrorResponses", "Comment", "PriceClass", "Enabled", "ViewerCertificate", "Restrictions", "WebACLId", "HttpVersion", "IsIPV6Enabled"],
								members: {
									Id: {},
									ARN: {},
									Status: {},
									LastModifiedTime: {
										type: "timestamp"
									},
									DomainName: {},
									Aliases: {
										shape: "S8"
									},
									Origins: {
										shape: "Sb"
									},
									DefaultCacheBehavior: {
										shape: "Sn"
									},
									CacheBehaviors: {
										shape: "S1b"
									},
									CustomErrorResponses: {
										shape: "S1e"
									},
									Comment: {},
									PriceClass: {},
									Enabled: {
										type: "boolean"
									},
									ViewerCertificate: {
										shape: "S1j"
									},
									Restrictions: {
										shape: "S1n"
									},
									WebACLId: {},
									HttpVersion: {},
									IsIPV6Enabled: {
										type: "boolean"
									}
								}
							}
						}
					}
				}
			}
		}
	}, {}],
	19: [function(e, t, r) {
		arguments[4][16][0].apply(r, arguments)
	}, {
		dup: 16
	}],
	20: [function(e, t, r) {
		arguments[4][14][0].apply(r, arguments)
	}, {
		dup: 14
	}],
	21: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2014-05-30",
				endpointPrefix: "cloudhsm",
				jsonVersion: "1.1",
				protocol: "json",
				serviceAbbreviation: "CloudHSM",
				serviceFullName: "Amazon CloudHSM",
				serviceId: "CloudHSM",
				signatureVersion: "v4",
				targetPrefix: "CloudHsmFrontendService",
				uid: "cloudhsm-2014-05-30"
			},
			operations: {
				AddTagsToResource: {
					input: {
						type: "structure",
						required: ["ResourceArn", "TagList"],
						members: {
							ResourceArn: {},
							TagList: {
								shape: "S3"
							}
						}
					},
					output: {
						type: "structure",
						required: ["Status"],
						members: {
							Status: {}
						}
					}
				},
				CreateHapg: {
					input: {
						type: "structure",
						required: ["Label"],
						members: {
							Label: {}
						}
					},
					output: {
						type: "structure",
						members: {
							HapgArn: {}
						}
					}
				},
				CreateHsm: {
					input: {
						type: "structure",
						required: ["SubnetId", "SshKey", "IamRoleArn", "SubscriptionType"],
						members: {
							SubnetId: {
								locationName: "SubnetId"
							},
							SshKey: {
								locationName: "SshKey"
							},
							EniIp: {
								locationName: "EniIp"
							},
							IamRoleArn: {
								locationName: "IamRoleArn"
							},
							ExternalId: {
								locationName: "ExternalId"
							},
							SubscriptionType: {
								locationName: "SubscriptionType"
							},
							ClientToken: {
								locationName: "ClientToken"
							},
							SyslogIp: {
								locationName: "SyslogIp"
							}
						},
						locationName: "CreateHsmRequest"
					},
					output: {
						type: "structure",
						members: {
							HsmArn: {}
						}
					}
				},
				CreateLunaClient: {
					input: {
						type: "structure",
						required: ["Certificate"],
						members: {
							Label: {},
							Certificate: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ClientArn: {}
						}
					}
				},
				DeleteHapg: {
					input: {
						type: "structure",
						required: ["HapgArn"],
						members: {
							HapgArn: {}
						}
					},
					output: {
						type: "structure",
						required: ["Status"],
						members: {
							Status: {}
						}
					}
				},
				DeleteHsm: {
					input: {
						type: "structure",
						required: ["HsmArn"],
						members: {
							HsmArn: {
								locationName: "HsmArn"
							}
						},
						locationName: "DeleteHsmRequest"
					},
					output: {
						type: "structure",
						required: ["Status"],
						members: {
							Status: {}
						}
					}
				},
				DeleteLunaClient: {
					input: {
						type: "structure",
						required: ["ClientArn"],
						members: {
							ClientArn: {}
						}
					},
					output: {
						type: "structure",
						required: ["Status"],
						members: {
							Status: {}
						}
					}
				},
				DescribeHapg: {
					input: {
						type: "structure",
						required: ["HapgArn"],
						members: {
							HapgArn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							HapgArn: {},
							HapgSerial: {},
							HsmsLastActionFailed: {
								shape: "Sz"
							},
							HsmsPendingDeletion: {
								shape: "Sz"
							},
							HsmsPendingRegistration: {
								shape: "Sz"
							},
							Label: {},
							LastModifiedTimestamp: {},
							PartitionSerialList: {
								shape: "S11"
							},
							State: {}
						}
					}
				},
				DescribeHsm: {
					input: {
						type: "structure",
						members: {
							HsmArn: {},
							HsmSerialNumber: {}
						}
					},
					output: {
						type: "structure",
						members: {
							HsmArn: {},
							Status: {},
							StatusDetails: {},
							AvailabilityZone: {},
							EniId: {},
							EniIp: {},
							SubscriptionType: {},
							SubscriptionStartDate: {},
							SubscriptionEndDate: {},
							VpcId: {},
							SubnetId: {},
							IamRoleArn: {},
							SerialNumber: {},
							VendorName: {},
							HsmType: {},
							SoftwareVersion: {},
							SshPublicKey: {},
							SshKeyLastUpdated: {},
							ServerCertUri: {},
							ServerCertLastUpdated: {},
							Partitions: {
								type: "list",
								member: {}
							}
						}
					}
				},
				DescribeLunaClient: {
					input: {
						type: "structure",
						members: {
							ClientArn: {},
							CertificateFingerprint: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ClientArn: {},
							Certificate: {},
							CertificateFingerprint: {},
							LastModifiedTimestamp: {},
							Label: {}
						}
					}
				},
				GetConfig: {
					input: {
						type: "structure",
						required: ["ClientArn", "ClientVersion", "HapgList"],
						members: {
							ClientArn: {},
							ClientVersion: {},
							HapgList: {
								shape: "S1i"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ConfigType: {},
							ConfigFile: {},
							ConfigCred: {}
						}
					}
				},
				ListAvailableZones: {
					input: {
						type: "structure",
						members: {}
					},
					output: {
						type: "structure",
						members: {
							AZList: {
								type: "list",
								member: {}
							}
						}
					}
				},
				ListHapgs: {
					input: {
						type: "structure",
						members: {
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						required: ["HapgList"],
						members: {
							HapgList: {
								shape: "S1i"
							},
							NextToken: {}
						}
					}
				},
				ListHsms: {
					input: {
						type: "structure",
						members: {
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							HsmList: {
								shape: "Sz"
							},
							NextToken: {}
						}
					}
				},
				ListLunaClients: {
					input: {
						type: "structure",
						members: {
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						required: ["ClientList"],
						members: {
							ClientList: {
								type: "list",
								member: {}
							},
							NextToken: {}
						}
					}
				},
				ListTagsForResource: {
					input: {
						type: "structure",
						required: ["ResourceArn"],
						members: {
							ResourceArn: {}
						}
					},
					output: {
						type: "structure",
						required: ["TagList"],
						members: {
							TagList: {
								shape: "S3"
							}
						}
					}
				},
				ModifyHapg: {
					input: {
						type: "structure",
						required: ["HapgArn"],
						members: {
							HapgArn: {},
							Label: {},
							PartitionSerialList: {
								shape: "S11"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							HapgArn: {}
						}
					}
				},
				ModifyHsm: {
					input: {
						type: "structure",
						required: ["HsmArn"],
						members: {
							HsmArn: {
								locationName: "HsmArn"
							},
							SubnetId: {
								locationName: "SubnetId"
							},
							EniIp: {
								locationName: "EniIp"
							},
							IamRoleArn: {
								locationName: "IamRoleArn"
							},
							ExternalId: {
								locationName: "ExternalId"
							},
							SyslogIp: {
								locationName: "SyslogIp"
							}
						},
						locationName: "ModifyHsmRequest"
					},
					output: {
						type: "structure",
						members: {
							HsmArn: {}
						}
					}
				},
				ModifyLunaClient: {
					input: {
						type: "structure",
						required: ["ClientArn", "Certificate"],
						members: {
							ClientArn: {},
							Certificate: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ClientArn: {}
						}
					}
				},
				RemoveTagsFromResource: {
					input: {
						type: "structure",
						required: ["ResourceArn", "TagKeyList"],
						members: {
							ResourceArn: {},
							TagKeyList: {
								type: "list",
								member: {}
							}
						}
					},
					output: {
						type: "structure",
						required: ["Status"],
						members: {
							Status: {}
						}
					}
				}
			},
			shapes: {
				S3: {
					type: "list",
					member: {
						type: "structure",
						required: ["Key", "Value"],
						members: {
							Key: {},
							Value: {}
						}
					}
				},
				Sz: {
					type: "list",
					member: {}
				},
				S11: {
					type: "list",
					member: {}
				},
				S1i: {
					type: "list",
					member: {}
				}
			}
		}
	}, {}],
	22: [function(e, t, r) {
		t.exports = {
			pagination: {}
		}
	}, {}],
	23: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2013-11-01",
				endpointPrefix: "cloudtrail",
				jsonVersion: "1.1",
				protocol: "json",
				serviceAbbreviation: "CloudTrail",
				serviceFullName: "AWS CloudTrail",
				signatureVersion: "v4",
				targetPrefix: "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101",
				uid: "cloudtrail-2013-11-01"
			},
			operations: {
				AddTags: {
					input: {
						type: "structure",
						required: ["ResourceId"],
						members: {
							ResourceId: {},
							TagsList: {
								shape: "S3"
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					},
					idempotent: !0
				},
				CreateTrail: {
					input: {
						type: "structure",
						required: ["Name", "S3BucketName"],
						members: {
							Name: {},
							S3BucketName: {},
							S3KeyPrefix: {},
							SnsTopicName: {},
							IncludeGlobalServiceEvents: {
								type: "boolean"
							},
							IsMultiRegionTrail: {
								type: "boolean"
							},
							EnableLogFileValidation: {
								type: "boolean"
							},
							CloudWatchLogsLogGroupArn: {},
							CloudWatchLogsRoleArn: {},
							KmsKeyId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Name: {},
							S3BucketName: {},
							S3KeyPrefix: {},
							SnsTopicName: {
								deprecated: !0
							},
							SnsTopicARN: {},
							IncludeGlobalServiceEvents: {
								type: "boolean"
							},
							IsMultiRegionTrail: {
								type: "boolean"
							},
							TrailARN: {},
							LogFileValidationEnabled: {
								type: "boolean"
							},
							CloudWatchLogsLogGroupArn: {},
							CloudWatchLogsRoleArn: {},
							KmsKeyId: {}
						}
					},
					idempotent: !0
				},
				DeleteTrail: {
					input: {
						type: "structure",
						required: ["Name"],
						members: {
							Name: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					},
					idempotent: !0
				},
				DescribeTrails: {
					input: {
						type: "structure",
						members: {
							trailNameList: {
								type: "list",
								member: {}
							},
							includeShadowTrails: {
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							trailList: {
								type: "list",
								member: {
									type: "structure",
									members: {
										Name: {},
										S3BucketName: {},
										S3KeyPrefix: {},
										SnsTopicName: {
											deprecated: !0
										},
										SnsTopicARN: {},
										IncludeGlobalServiceEvents: {
											type: "boolean"
										},
										IsMultiRegionTrail: {
											type: "boolean"
										},
										HomeRegion: {},
										TrailARN: {},
										LogFileValidationEnabled: {
											type: "boolean"
										},
										CloudWatchLogsLogGroupArn: {},
										CloudWatchLogsRoleArn: {},
										KmsKeyId: {},
										HasCustomEventSelectors: {
											type: "boolean"
										}
									}
								}
							}
						}
					},
					idempotent: !0
				},
				GetEventSelectors: {
					input: {
						type: "structure",
						required: ["TrailName"],
						members: {
							TrailName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							TrailARN: {},
							EventSelectors: {
								shape: "Si"
							}
						}
					},
					idempotent: !0
				},
				GetTrailStatus: {
					input: {
						type: "structure",
						required: ["Name"],
						members: {
							Name: {}
						}
					},
					output: {
						type: "structure",
						members: {
							IsLogging: {
								type: "boolean"
							},
							LatestDeliveryError: {},
							LatestNotificationError: {},
							LatestDeliveryTime: {
								type: "timestamp"
							},
							LatestNotificationTime: {
								type: "timestamp"
							},
							StartLoggingTime: {
								type: "timestamp"
							},
							StopLoggingTime: {
								type: "timestamp"
							},
							LatestCloudWatchLogsDeliveryError: {},
							LatestCloudWatchLogsDeliveryTime: {
								type: "timestamp"
							},
							LatestDigestDeliveryTime: {
								type: "timestamp"
							},
							LatestDigestDeliveryError: {},
							LatestDeliveryAttemptTime: {},
							LatestNotificationAttemptTime: {},
							LatestNotificationAttemptSucceeded: {},
							LatestDeliveryAttemptSucceeded: {},
							TimeLoggingStarted: {},
							TimeLoggingStopped: {}
						}
					},
					idempotent: !0
				},
				ListPublicKeys: {
					input: {
						type: "structure",
						members: {
							StartTime: {
								type: "timestamp"
							},
							EndTime: {
								type: "timestamp"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							PublicKeyList: {
								type: "list",
								member: {
									type: "structure",
									members: {
										Value: {
											type: "blob"
										},
										ValidityStartTime: {
											type: "timestamp"
										},
										ValidityEndTime: {
											type: "timestamp"
										},
										Fingerprint: {}
									}
								}
							},
							NextToken: {}
						}
					},
					idempotent: !0
				},
				ListTags: {
					input: {
						type: "structure",
						required: ["ResourceIdList"],
						members: {
							ResourceIdList: {
								type: "list",
								member: {}
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ResourceTagList: {
								type: "list",
								member: {
									type: "structure",
									members: {
										ResourceId: {},
										TagsList: {
											shape: "S3"
										}
									}
								}
							},
							NextToken: {}
						}
					},
					idempotent: !0
				},
				LookupEvents: {
					input: {
						type: "structure",
						members: {
							LookupAttributes: {
								type: "list",
								member: {
									type: "structure",
									required: ["AttributeKey", "AttributeValue"],
									members: {
										AttributeKey: {},
										AttributeValue: {}
									}
								}
							},
							StartTime: {
								type: "timestamp"
							},
							EndTime: {
								type: "timestamp"
							},
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Events: {
								type: "list",
								member: {
									type: "structure",
									members: {
										EventId: {},
										EventName: {},
										EventTime: {
											type: "timestamp"
										},
										EventSource: {},
										Username: {},
										Resources: {
											type: "list",
											member: {
												type: "structure",
												members: {
													ResourceType: {},
													ResourceName: {}
												}
											}
										},
										CloudTrailEvent: {}
									}
								}
							},
							NextToken: {}
						}
					},
					idempotent: !0
				},
				PutEventSelectors: {
					input: {
						type: "structure",
						required: ["TrailName", "EventSelectors"],
						members: {
							TrailName: {},
							EventSelectors: {
								shape: "Si"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							TrailARN: {},
							EventSelectors: {
								shape: "Si"
							}
						}
					},
					idempotent: !0
				},
				RemoveTags: {
					input: {
						type: "structure",
						required: ["ResourceId"],
						members: {
							ResourceId: {},
							TagsList: {
								shape: "S3"
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					},
					idempotent: !0
				},
				StartLogging: {
					input: {
						type: "structure",
						required: ["Name"],
						members: {
							Name: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					},
					idempotent: !0
				},
				StopLogging: {
					input: {
						type: "structure",
						required: ["Name"],
						members: {
							Name: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					},
					idempotent: !0
				},
				UpdateTrail: {
					input: {
						type: "structure",
						required: ["Name"],
						members: {
							Name: {},
							S3BucketName: {},
							S3KeyPrefix: {},
							SnsTopicName: {},
							IncludeGlobalServiceEvents: {
								type: "boolean"
							},
							IsMultiRegionTrail: {
								type: "boolean"
							},
							EnableLogFileValidation: {
								type: "boolean"
							},
							CloudWatchLogsLogGroupArn: {},
							CloudWatchLogsRoleArn: {},
							KmsKeyId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Name: {},
							S3BucketName: {},
							S3KeyPrefix: {},
							SnsTopicName: {
								deprecated: !0
							},
							SnsTopicARN: {},
							IncludeGlobalServiceEvents: {
								type: "boolean"
							},
							IsMultiRegionTrail: {
								type: "boolean"
							},
							TrailARN: {},
							LogFileValidationEnabled: {
								type: "boolean"
							},
							CloudWatchLogsLogGroupArn: {},
							CloudWatchLogsRoleArn: {},
							KmsKeyId: {}
						}
					},
					idempotent: !0
				}
			},
			shapes: {
				S3: {
					type: "list",
					member: {
						type: "structure",
						required: ["Key"],
						members: {
							Key: {},
							Value: {}
						}
					}
				},
				Si: {
					type: "list",
					member: {
						type: "structure",
						members: {
							ReadWriteType: {},
							IncludeManagementEvents: {
								type: "boolean"
							},
							DataResources: {
								type: "list",
								member: {
									type: "structure",
									members: {
										Type: {},
										Values: {
											type: "list",
											member: {}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}, {}],
	24: [function(e, t, r) {
		t.exports = {
			pagination: {
				DescribeTrails: {
					result_key: "trailList"
				},
				LookupEvents: {
					input_token: "NextToken",
					limit_key: "MaxResults",
					output_token: "NextToken",
					result_key: "Events"
				}
			}
		}
	}, {}],
	25: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2016-10-06",
				endpointPrefix: "codebuild",
				jsonVersion: "1.1",
				protocol: "json",
				serviceFullName: "AWS CodeBuild",
				signatureVersion: "v4",
				targetPrefix: "CodeBuild_20161006",
				uid: "codebuild-2016-10-06"
			},
			operations: {
				BatchDeleteBuilds: {
					input: {
						type: "structure",
						required: ["ids"],
						members: {
							ids: {
								shape: "S2"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							buildsDeleted: {
								shape: "S2"
							},
							buildsNotDeleted: {
								type: "list",
								member: {
									type: "structure",
									members: {
										id: {},
										statusCode: {}
									}
								}
							}
						}
					}
				},
				BatchGetBuilds: {
					input: {
						type: "structure",
						required: ["ids"],
						members: {
							ids: {
								shape: "S2"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							builds: {
								type: "list",
								member: {
									shape: "Sb"
								}
							},
							buildsNotFound: {
								shape: "S2"
							}
						}
					}
				},
				BatchGetProjects: {
					input: {
						type: "structure",
						required: ["names"],
						members: {
							names: {
								shape: "S17"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							projects: {
								type: "list",
								member: {
									shape: "S1a"
								}
							},
							projectsNotFound: {
								shape: "S17"
							}
						}
					}
				},
				CreateProject: {
					input: {
						type: "structure",
						required: ["name", "source", "artifacts", "environment"],
						members: {
							name: {},
							description: {},
							source: {
								shape: "Sk"
							},
							artifacts: {
								shape: "S1d"
							},
							cache: {
								shape: "Sr"
							},
							environment: {
								shape: "St"
							},
							serviceRole: {},
							timeoutInMinutes: {
								type: "integer"
							},
							encryptionKey: {},
							tags: {
								shape: "S1i"
							},
							vpcConfig: {
								shape: "S12"
							},
							badgeEnabled: {
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							project: {
								shape: "S1a"
							}
						}
					}
				},
				CreateWebhook: {
					input: {
						type: "structure",
						required: ["projectName"],
						members: {
							projectName: {},
							branchFilter: {}
						}
					},
					output: {
						type: "structure",
						members: {
							webhook: {
								shape: "S1m"
							}
						}
					}
				},
				DeleteProject: {
					input: {
						type: "structure",
						required: ["name"],
						members: {
							name: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				DeleteWebhook: {
					input: {
						type: "structure",
						required: ["projectName"],
						members: {
							projectName: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				InvalidateProjectCache: {
					input: {
						type: "structure",
						required: ["projectName"],
						members: {
							projectName: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				ListBuilds: {
					input: {
						type: "structure",
						members: {
							sortOrder: {},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ids: {
								shape: "S2"
							},
							nextToken: {}
						}
					}
				},
				ListBuildsForProject: {
					input: {
						type: "structure",
						required: ["projectName"],
						members: {
							projectName: {},
							sortOrder: {},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ids: {
								shape: "S2"
							},
							nextToken: {}
						}
					}
				},
				ListCuratedEnvironmentImages: {
					input: {
						type: "structure",
						members: {}
					},
					output: {
						type: "structure",
						members: {
							platforms: {
								type: "list",
								member: {
									type: "structure",
									members: {
										platform: {},
										languages: {
											type: "list",
											member: {
												type: "structure",
												members: {
													language: {},
													images: {
														type: "list",
														member: {
															type: "structure",
															members: {
																name: {},
																description: {},
																versions: {
																	type: "list",
																	member: {}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				},
				ListProjects: {
					input: {
						type: "structure",
						members: {
							sortBy: {},
							sortOrder: {},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							nextToken: {},
							projects: {
								shape: "S17"
							}
						}
					}
				},
				StartBuild: {
					input: {
						type: "structure",
						required: ["projectName"],
						members: {
							projectName: {},
							sourceVersion: {},
							artifactsOverride: {
								shape: "S1d"
							},
							environmentVariablesOverride: {
								shape: "Sw"
							},
							gitCloneDepthOverride: {
								type: "integer"
							},
							buildspecOverride: {},
							timeoutInMinutesOverride: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							build: {
								shape: "Sb"
							}
						}
					}
				},
				StopBuild: {
					input: {
						type: "structure",
						required: ["id"],
						members: {
							id: {}
						}
					},
					output: {
						type: "structure",
						members: {
							build: {
								shape: "Sb"
							}
						}
					}
				},
				UpdateProject: {
					input: {
						type: "structure",
						required: ["name"],
						members: {
							name: {},
							description: {},
							source: {
								shape: "Sk"
							},
							artifacts: {
								shape: "S1d"
							},
							cache: {
								shape: "Sr"
							},
							environment: {
								shape: "St"
							},
							serviceRole: {},
							timeoutInMinutes: {
								type: "integer"
							},
							encryptionKey: {},
							tags: {
								shape: "S1i"
							},
							vpcConfig: {
								shape: "S12"
							},
							badgeEnabled: {
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							project: {
								shape: "S1a"
							}
						}
					}
				},
				UpdateWebhook: {
					input: {
						type: "structure",
						required: ["projectName"],
						members: {
							projectName: {},
							branchFilter: {},
							rotateSecret: {
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							webhook: {
								shape: "S1m"
							}
						}
					}
				}
			},
			shapes: {
				S2: {
					type: "list",
					member: {}
				},
				Sb: {
					type: "structure",
					members: {
						id: {},
						arn: {},
						startTime: {
							type: "timestamp"
						},
						endTime: {
							type: "timestamp"
						},
						currentPhase: {},
						buildStatus: {},
						sourceVersion: {},
						projectName: {},
						phases: {
							type: "list",
							member: {
								type: "structure",
								members: {
									phaseType: {},
									phaseStatus: {},
									startTime: {
										type: "timestamp"
									},
									endTime: {
										type: "timestamp"
									},
									durationInSeconds: {
										type: "long"
									},
									contexts: {
										type: "list",
										member: {
											type: "structure",
											members: {
												statusCode: {},
												message: {}
											}
										}
									}
								}
							}
						},
						source: {
							shape: "Sk"
						},
						artifacts: {
							type: "structure",
							members: {
								location: {},
								sha256sum: {},
								md5sum: {}
							}
						},
						cache: {
							shape: "Sr"
						},
						environment: {
							shape: "St"
						},
						logs: {
							type: "structure",
							members: {
								groupName: {},
								streamName: {},
								deepLink: {}
							}
						},
						timeoutInMinutes: {
							type: "integer"
						},
						buildComplete: {
							type: "boolean"
						},
						initiator: {},
						vpcConfig: {
							shape: "S12"
						},
						networkInterface: {
							type: "structure",
							members: {
								subnetId: {},
								networkInterfaceId: {}
							}
						}
					}
				},
				Sk: {
					type: "structure",
					required: ["type"],
					members: {
						type: {},
						location: {},
						gitCloneDepth: {
							type: "integer"
						},
						buildspec: {},
						auth: {
							type: "structure",
							required: ["type"],
							members: {
								type: {},
								resource: {}
							}
						},
						insecureSsl: {
							type: "boolean"
						}
					}
				},
				Sr: {
					type: "structure",
					required: ["type"],
					members: {
						type: {},
						location: {}
					}
				},
				St: {
					type: "structure",
					required: ["type", "image", "computeType"],
					members: {
						type: {},
						image: {},
						computeType: {},
						environmentVariables: {
							shape: "Sw"
						},
						privilegedMode: {
							type: "boolean"
						},
						certificate: {}
					}
				},
				Sw: {
					type: "list",
					member: {
						type: "structure",
						required: ["name", "value"],
						members: {
							name: {},
							value: {},
							type: {}
						}
					}
				},
				S12: {
					type: "structure",
					members: {
						vpcId: {},
						subnets: {
							type: "list",
							member: {}
						},
						securityGroupIds: {
							type: "list",
							member: {}
						}
					}
				},
				S17: {
					type: "list",
					member: {}
				},
				S1a: {
					type: "structure",
					members: {
						name: {},
						arn: {},
						description: {},
						source: {
							shape: "Sk"
						},
						artifacts: {
							shape: "S1d"
						},
						cache: {
							shape: "Sr"
						},
						environment: {
							shape: "St"
						},
						serviceRole: {},
						timeoutInMinutes: {
							type: "integer"
						},
						encryptionKey: {},
						tags: {
							shape: "S1i"
						},
						created: {
							type: "timestamp"
						},
						lastModified: {
							type: "timestamp"
						},
						webhook: {
							shape: "S1m"
						},
						vpcConfig: {
							shape: "S12"
						},
						badge: {
							type: "structure",
							members: {
								badgeEnabled: {
									type: "boolean"
								},
								badgeRequestUrl: {}
							}
						}
					}
				},
				S1d: {
					type: "structure",
					required: ["type"],
					members: {
						type: {},
						location: {},
						path: {},
						namespaceType: {},
						name: {},
						packaging: {}
					}
				},
				S1i: {
					type: "list",
					member: {
						type: "structure",
						members: {
							key: {},
							value: {}
						}
					}
				},
				S1m: {
					type: "structure",
					members: {
						url: {},
						payloadUrl: {},
						secret: {},
						branchFilter: {},
						lastModifiedSecret: {
							type: "timestamp"
						}
					}
				}
			}
		}
	}, {}],
	26: [function(e, t, r) {
		arguments[4][22][0].apply(r, arguments)
	}, {
		dup: 22
	}],
	27: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2015-04-13",
				endpointPrefix: "codecommit",
				jsonVersion: "1.1",
				protocol: "json",
				serviceAbbreviation: "CodeCommit",
				serviceFullName: "AWS CodeCommit",
				serviceId: "CodeCommit",
				signatureVersion: "v4",
				targetPrefix: "CodeCommit_20150413",
				uid: "codecommit-2015-04-13"
			},
			operations: {
				BatchGetRepositories: {
					input: {
						type: "structure",
						required: ["repositoryNames"],
						members: {
							repositoryNames: {
								type: "list",
								member: {}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							repositories: {
								type: "list",
								member: {
									shape: "S6"
								}
							},
							repositoriesNotFound: {
								type: "list",
								member: {}
							}
						}
					}
				},
				CreateBranch: {
					input: {
						type: "structure",
						required: ["repositoryName", "branchName", "commitId"],
						members: {
							repositoryName: {},
							branchName: {},
							commitId: {}
						}
					}
				},
				CreatePullRequest: {
					input: {
						type: "structure",
						required: ["title", "targets"],
						members: {
							title: {},
							description: {},
							targets: {
								type: "list",
								member: {
									type: "structure",
									required: ["repositoryName", "sourceReference"],
									members: {
										repositoryName: {},
										sourceReference: {},
										destinationReference: {}
									}
								}
							},
							clientRequestToken: {
								idempotencyToken: !0
							}
						}
					},
					output: {
						type: "structure",
						required: ["pullRequest"],
						members: {
							pullRequest: {
								shape: "Sr"
							}
						}
					}
				},
				CreateRepository: {
					input: {
						type: "structure",
						required: ["repositoryName"],
						members: {
							repositoryName: {},
							repositoryDescription: {}
						}
					},
					output: {
						type: "structure",
						members: {
							repositoryMetadata: {
								shape: "S6"
							}
						}
					}
				},
				DeleteBranch: {
					input: {
						type: "structure",
						required: ["repositoryName", "branchName"],
						members: {
							repositoryName: {},
							branchName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							deletedBranch: {
								shape: "S12"
							}
						}
					}
				},
				DeleteCommentContent: {
					input: {
						type: "structure",
						required: ["commentId"],
						members: {
							commentId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							comment: {
								shape: "S16"
							}
						}
					}
				},
				DeleteRepository: {
					input: {
						type: "structure",
						required: ["repositoryName"],
						members: {
							repositoryName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							repositoryId: {}
						}
					}
				},
				DescribePullRequestEvents: {
					input: {
						type: "structure",
						required: ["pullRequestId"],
						members: {
							pullRequestId: {},
							pullRequestEventType: {},
							actorArn: {},
							nextToken: {},
							maxResults: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						required: ["pullRequestEvents"],
						members: {
							pullRequestEvents: {
								type: "list",
								member: {
									type: "structure",
									members: {
										pullRequestId: {},
										eventDate: {
											type: "timestamp"
										},
										pullRequestEventType: {},
										actorArn: {},
										pullRequestStatusChangedEventMetadata: {
											type: "structure",
											members: {
												pullRequestStatus: {}
											}
										},
										pullRequestSourceReferenceUpdatedEventMetadata: {
											type: "structure",
											members: {
												repositoryName: {},
												beforeCommitId: {},
												afterCommitId: {}
											}
										},
										pullRequestMergedStateChangedEventMetadata: {
											type: "structure",
											members: {
												repositoryName: {},
												destinationReference: {},
												mergeMetadata: {
													shape: "Sw"
												}
											}
										}
									}
								}
							},
							nextToken: {}
						}
					}
				},
				GetBlob: {
					input: {
						type: "structure",
						required: ["repositoryName", "blobId"],
						members: {
							repositoryName: {},
							blobId: {}
						}
					},
					output: {
						type: "structure",
						required: ["content"],
						members: {
							content: {
								type: "blob"
							}
						}
					}
				},
				GetBranch: {
					input: {
						type: "structure",
						members: {
							repositoryName: {},
							branchName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							branch: {
								shape: "S12"
							}
						}
					}
				},
				GetComment: {
					input: {
						type: "structure",
						required: ["commentId"],
						members: {
							commentId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							comment: {
								shape: "S16"
							}
						}
					}
				},
				GetCommentsForComparedCommit: {
					input: {
						type: "structure",
						required: ["repositoryName", "afterCommitId"],
						members: {
							repositoryName: {},
							beforeCommitId: {},
							afterCommitId: {},
							nextToken: {},
							maxResults: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							commentsForComparedCommitData: {
								type: "list",
								member: {
									type: "structure",
									members: {
										repositoryName: {},
										beforeCommitId: {},
										afterCommitId: {},
										beforeBlobId: {},
										afterBlobId: {},
										location: {
											shape: "S1y"
										},
										comments: {
											shape: "S22"
										}
									}
								}
							},
							nextToken: {}
						}
					}
				},
				GetCommentsForPullRequest: {
					input: {
						type: "structure",
						required: ["pullRequestId"],
						members: {
							pullRequestId: {},
							repositoryName: {},
							beforeCommitId: {},
							afterCommitId: {},
							nextToken: {},
							maxResults: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							commentsForPullRequestData: {
								type: "list",
								member: {
									type: "structure",
									members: {
										pullRequestId: {},
										repositoryName: {},
										beforeCommitId: {},
										afterCommitId: {},
										beforeBlobId: {},
										afterBlobId: {},
										location: {
											shape: "S1y"
										},
										comments: {
											shape: "S22"
										}
									}
								}
							},
							nextToken: {}
						}
					}
				},
				GetCommit: {
					input: {
						type: "structure",
						required: ["repositoryName", "commitId"],
						members: {
							repositoryName: {},
							commitId: {}
						}
					},
					output: {
						type: "structure",
						required: ["commit"],
						members: {
							commit: {
								type: "structure",
								members: {
									commitId: {},
									treeId: {},
									parents: {
										type: "list",
										member: {}
									},
									message: {},
									author: {
										shape: "S2c"
									},
									committer: {
										shape: "S2c"
									},
									additionalData: {}
								}
							}
						}
					}
				},
				GetDifferences: {
					input: {
						type: "structure",
						required: ["repositoryName", "afterCommitSpecifier"],
						members: {
							repositoryName: {},
							beforeCommitSpecifier: {},
							afterCommitSpecifier: {},
							beforePath: {},
							afterPath: {},
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							differences: {
								type: "list",
								member: {
									type: "structure",
									members: {
										beforeBlob: {
											shape: "S2n"
										},
										afterBlob: {
											shape: "S2n"
										},
										changeType: {}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				GetMergeConflicts: {
					input: {
						type: "structure",
						required: ["repositoryName", "destinationCommitSpecifier", "sourceCommitSpecifier", "mergeOption"],
						members: {
							repositoryName: {},
							destinationCommitSpecifier: {},
							sourceCommitSpecifier: {},
							mergeOption: {}
						}
					},
					output: {
						type: "structure",
						required: ["mergeable", "destinationCommitId", "sourceCommitId"],
						members: {
							mergeable: {
								type: "boolean"
							},
							destinationCommitId: {},
							sourceCommitId: {}
						}
					}
				},
				GetPullRequest: {
					input: {
						type: "structure",
						required: ["pullRequestId"],
						members: {
							pullRequestId: {}
						}
					},
					output: {
						type: "structure",
						required: ["pullRequest"],
						members: {
							pullRequest: {
								shape: "Sr"
							}
						}
					}
				},
				GetRepository: {
					input: {
						type: "structure",
						required: ["repositoryName"],
						members: {
							repositoryName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							repositoryMetadata: {
								shape: "S6"
							}
						}
					}
				},
				GetRepositoryTriggers: {
					input: {
						type: "structure",
						required: ["repositoryName"],
						members: {
							repositoryName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							configurationId: {},
							triggers: {
								shape: "S31"
							}
						}
					}
				},
				ListBranches: {
					input: {
						type: "structure",
						required: ["repositoryName"],
						members: {
							repositoryName: {},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							branches: {
								shape: "S35"
							},
							nextToken: {}
						}
					}
				},
				ListPullRequests: {
					input: {
						type: "structure",
						required: ["repositoryName"],
						members: {
							repositoryName: {},
							authorArn: {},
							pullRequestStatus: {},
							nextToken: {},
							maxResults: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						required: ["pullRequestIds"],
						members: {
							pullRequestIds: {
								type: "list",
								member: {}
							},
							nextToken: {}
						}
					}
				},
				ListRepositories: {
					input: {
						type: "structure",
						members: {
							nextToken: {},
							sortBy: {},
							order: {}
						}
					},
					output: {
						type: "structure",
						members: {
							repositories: {
								type: "list",
								member: {
									type: "structure",
									members: {
										repositoryName: {},
										repositoryId: {}
									}
								}
							},
							nextToken: {}
						}
					}
				},
				MergePullRequestByFastForward: {
					input: {
						type: "structure",
						required: ["pullRequestId", "repositoryName"],
						members: {
							pullRequestId: {},
							repositoryName: {},
							sourceCommitId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							pullRequest: {
								shape: "Sr"
							}
						}
					}
				},
				PostCommentForComparedCommit: {
					input: {
						type: "structure",
						required: ["repositoryName", "afterCommitId", "content"],
						members: {
							repositoryName: {},
							beforeCommitId: {},
							afterCommitId: {},
							location: {
								shape: "S1y"
							},
							content: {},
							clientRequestToken: {
								idempotencyToken: !0
							}
						}
					},
					output: {
						type: "structure",
						members: {
							repositoryName: {},
							beforeCommitId: {},
							afterCommitId: {},
							beforeBlobId: {},
							afterBlobId: {},
							location: {
								shape: "S1y"
							},
							comment: {
								shape: "S16"
							}
						}
					},
					idempotent: !0
				},
				PostCommentForPullRequest: {
					input: {
						type: "structure",
						required: ["pullRequestId", "repositoryName", "beforeCommitId", "afterCommitId", "content"],
						members: {
							pullRequestId: {},
							repositoryName: {},
							beforeCommitId: {},
							afterCommitId: {},
							location: {
								shape: "S1y"
							},
							content: {},
							clientRequestToken: {
								idempotencyToken: !0
							}
						}
					},
					output: {
						type: "structure",
						members: {
							repositoryName: {},
							pullRequestId: {},
							beforeCommitId: {},
							afterCommitId: {},
							beforeBlobId: {},
							afterBlobId: {},
							location: {
								shape: "S1y"
							},
							comment: {
								shape: "S16"
							}
						}
					},
					idempotent: !0
				},
				PostCommentReply: {
					input: {
						type: "structure",
						required: ["inReplyTo", "content"],
						members: {
							inReplyTo: {},
							clientRequestToken: {
								idempotencyToken: !0
							},
							content: {}
						}
					},
					output: {
						type: "structure",
						members: {
							comment: {
								shape: "S16"
							}
						}
					},
					idempotent: !0
				},
				PutFile: {
					input: {
						type: "structure",
						required: ["repositoryName", "branchName", "fileContent", "filePath"],
						members: {
							repositoryName: {},
							branchName: {},
							fileContent: {
								type: "blob"
							},
							filePath: {},
							fileMode: {},
							parentCommitId: {},
							commitMessage: {},
							name: {},
							email: {}
						}
					},
					output: {
						type: "structure",
						required: ["commitId", "blobId", "treeId"],
						members: {
							commitId: {},
							blobId: {},
							treeId: {}
						}
					}
				},
				PutRepositoryTriggers: {
					input: {
						type: "structure",
						required: ["repositoryName", "triggers"],
						members: {
							repositoryName: {},
							triggers: {
								shape: "S31"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							configurationId: {}
						}
					}
				},
				TestRepositoryTriggers: {
					input: {
						type: "structure",
						required: ["repositoryName", "triggers"],
						members: {
							repositoryName: {},
							triggers: {
								shape: "S31"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							successfulExecutions: {
								type: "list",
								member: {}
							},
							failedExecutions: {
								type: "list",
								member: {
									type: "structure",
									members: {
										trigger: {},
										failureMessage: {}
									}
								}
							}
						}
					}
				},
				UpdateComment: {
					input: {
						type: "structure",
						required: ["commentId", "content"],
						members: {
							commentId: {},
							content: {}
						}
					},
					output: {
						type: "structure",
						members: {
							comment: {
								shape: "S16"
							}
						}
					}
				},
				UpdateDefaultBranch: {
					input: {
						type: "structure",
						required: ["repositoryName", "defaultBranchName"],
						members: {
							repositoryName: {},
							defaultBranchName: {}
						}
					}
				},
				UpdatePullRequestDescription: {
					input: {
						type: "structure",
						required: ["pullRequestId", "description"],
						members: {
							pullRequestId: {},
							description: {}
						}
					},
					output: {
						type: "structure",
						required: ["pullRequest"],
						members: {
							pullRequest: {
								shape: "Sr"
							}
						}
					}
				},
				UpdatePullRequestStatus: {
					input: {
						type: "structure",
						required: ["pullRequestId", "pullRequestStatus"],
						members: {
							pullRequestId: {},
							pullRequestStatus: {}
						}
					},
					output: {
						type: "structure",
						required: ["pullRequest"],
						members: {
							pullRequest: {
								shape: "Sr"
							}
						}
					}
				},
				UpdatePullRequestTitle: {
					input: {
						type: "structure",
						required: ["pullRequestId", "title"],
						members: {
							pullRequestId: {},
							title: {}
						}
					},
					output: {
						type: "structure",
						required: ["pullRequest"],
						members: {
							pullRequest: {
								shape: "Sr"
							}
						}
					}
				},
				UpdateRepositoryDescription: {
					input: {
						type: "structure",
						required: ["repositoryName"],
						members: {
							repositoryName: {},
							repositoryDescription: {}
						}
					}
				},
				UpdateRepositoryName: {
					input: {
						type: "structure",
						required: ["oldName", "newName"],
						members: {
							oldName: {},
							newName: {}
						}
					}
				}
			},
			shapes: {
				S6: {
					type: "structure",
					members: {
						accountId: {},
						repositoryId: {},
						repositoryName: {},
						repositoryDescription: {},
						defaultBranch: {},
						lastModifiedDate: {
							type: "timestamp"
						},
						creationDate: {
							type: "timestamp"
						},
						cloneUrlHttp: {},
						cloneUrlSsh: {},
						Arn: {}
					}
				},
				Sr: {
					type: "structure",
					members: {
						pullRequestId: {},
						title: {},
						description: {},
						lastActivityDate: {
							type: "timestamp"
						},
						creationDate: {
							type: "timestamp"
						},
						pullRequestStatus: {},
						authorArn: {},
						pullRequestTargets: {
							type: "list",
							member: {
								type: "structure",
								members: {
									repositoryName: {},
									sourceReference: {},
									destinationReference: {},
									destinationCommit: {},
									sourceCommit: {},
									mergeMetadata: {
										shape: "Sw"
									}
								}
							}
						},
						clientRequestToken: {}
					}
				},
				Sw: {
					type: "structure",
					members: {
						isMerged: {
							type: "boolean"
						},
						mergedBy: {}
					}
				},
				S12: {
					type: "structure",
					members: {
						branchName: {},
						commitId: {}
					}
				},
				S16: {
					type: "structure",
					members: {
						commentId: {},
						content: {},
						inReplyTo: {},
						creationDate: {
							type: "timestamp"
						},
						lastModifiedDate: {
							type: "timestamp"
						},
						authorArn: {},
						deleted: {
							type: "boolean"
						},
						clientRequestToken: {}
					}
				},
				S1y: {
					type: "structure",
					members: {
						filePath: {},
						filePosition: {
							type: "long"
						},
						relativeFileVersion: {}
					}
				},
				S22: {
					type: "list",
					member: {
						shape: "S16"
					}
				},
				S2c: {
					type: "structure",
					members: {
						name: {},
						email: {},
						date: {}
					}
				},
				S2n: {
					type: "structure",
					members: {
						blobId: {},
						path: {},
						mode: {}
					}
				},
				S31: {
					type: "list",
					member: {
						type: "structure",
						required: ["name", "destinationArn", "events"],
						members: {
							name: {},
							destinationArn: {},
							customData: {},
							branches: {
								shape: "S35"
							},
							events: {
								type: "list",
								member: {}
							}
						}
					}
				},
				S35: {
					type: "list",
					member: {}
				}
			}
		}
	}, {}],
	28: [function(e, t, r) {
		t.exports = {
			pagination: {
				DescribePullRequestEvents: {
					input_token: "nextToken",
					limit_key: "maxResults",
					output_token: "nextToken"
				},
				GetCommentsForComparedCommit: {
					input_token: "nextToken",
					limit_key: "maxResults",
					output_token: "nextToken"
				},
				GetCommentsForPullRequest: {
					input_token: "nextToken",
					limit_key: "maxResults",
					output_token: "nextToken"
				},
				GetDifferences: {
					input_token: "NextToken",
					limit_key: "MaxResults",
					output_token: "NextToken"
				},
				ListBranches: {
					input_token: "nextToken",
					output_token: "nextToken",
					result_key: "branches"
				},
				ListPullRequests: {
					input_token: "nextToken",
					limit_key: "maxResults",
					output_token: "nextToken"
				},
				ListRepositories: {
					input_token: "nextToken",
					output_token: "nextToken",
					result_key: "repositories"
				}
			}
		}
	}, {}],
	29: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2014-10-06",
				endpointPrefix: "codedeploy",
				jsonVersion: "1.1",
				protocol: "json",
				serviceAbbreviation: "CodeDeploy",
				serviceFullName: "AWS CodeDeploy",
				serviceId: "CodeDeploy",
				signatureVersion: "v4",
				targetPrefix: "CodeDeploy_20141006",
				timestampFormat: "unixTimestamp",
				uid: "codedeploy-2014-10-06"
			},
			operations: {
				AddTagsToOnPremisesInstances: {
					input: {
						type: "structure",
						required: ["tags", "instanceNames"],
						members: {
							tags: {
								shape: "S2"
							},
							instanceNames: {
								shape: "S6"
							}
						}
					}
				},
				BatchGetApplicationRevisions: {
					input: {
						type: "structure",
						required: ["applicationName", "revisions"],
						members: {
							applicationName: {},
							revisions: {
								shape: "Sa"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							applicationName: {},
							errorMessage: {},
							revisions: {
								type: "list",
								member: {
									type: "structure",
									members: {
										revisionLocation: {
											shape: "Sb"
										},
										genericRevisionInfo: {
											shape: "St"
										}
									}
								}
							}
						}
					}
				},
				BatchGetApplications: {
					input: {
						type: "structure",
						required: ["applicationNames"],
						members: {
							applicationNames: {
								shape: "Sz"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							applicationsInfo: {
								type: "list",
								member: {
									shape: "S12"
								}
							}
						}
					}
				},
				BatchGetDeploymentGroups: {
					input: {
						type: "structure",
						required: ["applicationName", "deploymentGroupNames"],
						members: {
							applicationName: {},
							deploymentGroupNames: {
								shape: "Sv"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							deploymentGroupsInfo: {
								type: "list",
								member: {
									shape: "S1a"
								}
							},
							errorMessage: {}
						}
					}
				},
				BatchGetDeploymentInstances: {
					input: {
						type: "structure",
						required: ["deploymentId", "instanceIds"],
						members: {
							deploymentId: {},
							instanceIds: {
								shape: "S2r"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							instancesSummary: {
								type: "list",
								member: {
									shape: "S2v"
								}
							},
							errorMessage: {}
						}
					}
				},
				BatchGetDeployments: {
					input: {
						type: "structure",
						required: ["deploymentIds"],
						members: {
							deploymentIds: {
								shape: "S38"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							deploymentsInfo: {
								type: "list",
								member: {
									shape: "S3b"
								}
							}
						}
					}
				},
				BatchGetOnPremisesInstances: {
					input: {
						type: "structure",
						required: ["instanceNames"],
						members: {
							instanceNames: {
								shape: "S6"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							instanceInfos: {
								type: "list",
								member: {
									shape: "S3q"
								}
							}
						}
					}
				},
				ContinueDeployment: {
					input: {
						type: "structure",
						members: {
							deploymentId: {}
						}
					}
				},
				CreateApplication: {
					input: {
						type: "structure",
						required: ["applicationName"],
						members: {
							applicationName: {},
							computePlatform: {}
						}
					},
					output: {
						type: "structure",
						members: {
							applicationId: {}
						}
					}
				},
				CreateDeployment: {
					input: {
						type: "structure",
						required: ["applicationName"],
						members: {
							applicationName: {},
							deploymentGroupName: {},
							revision: {
								shape: "Sb"
							},
							deploymentConfigName: {},
							description: {},
							ignoreApplicationStopFailures: {
								type: "boolean"
							},
							targetInstances: {
								shape: "S3i"
							},
							autoRollbackConfiguration: {
								shape: "S1y"
							},
							updateOutdatedInstancesOnly: {
								type: "boolean"
							},
							fileExistsBehavior: {}
						}
					},
					output: {
						type: "structure",
						members: {
							deploymentId: {}
						}
					}
				},
				CreateDeploymentConfig: {
					input: {
						type: "structure",
						required: ["deploymentConfigName"],
						members: {
							deploymentConfigName: {},
							minimumHealthyHosts: {
								shape: "S40"
							},
							trafficRoutingConfig: {
								shape: "S43"
							},
							computePlatform: {}
						}
					},
					output: {
						type: "structure",
						members: {
							deploymentConfigId: {}
						}
					}
				},
				CreateDeploymentGroup: {
					input: {
						type: "structure",
						required: ["applicationName", "deploymentGroupName", "serviceRoleArn"],
						members: {
							applicationName: {},
							deploymentGroupName: {},
							deploymentConfigName: {},
							ec2TagFilters: {
								shape: "S1d"
							},
							onPremisesInstanceTagFilters: {
								shape: "S1g"
							},
							autoScalingGroups: {
								shape: "S3j"
							},
							serviceRoleArn: {},
							triggerConfigurations: {
								shape: "S1o"
							},
							alarmConfiguration: {
								shape: "S1u"
							},
							autoRollbackConfiguration: {
								shape: "S1y"
							},
							deploymentStyle: {
								shape: "S21"
							},
							blueGreenDeploymentConfiguration: {
								shape: "S24"
							},
							loadBalancerInfo: {
								shape: "S2c"
							},
							ec2TagSet: {
								shape: "S2m"
							},
							onPremisesTagSet: {
								shape: "S2o"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							deploymentGroupId: {}
						}
					}
				},
				DeleteApplication: {
					input: {
						type: "structure",
						required: ["applicationName"],
						members: {
							applicationName: {}
						}
					}
				},
				DeleteDeploymentConfig: {
					input: {
						type: "structure",
						required: ["deploymentConfigName"],
						members: {
							deploymentConfigName: {}
						}
					}
				},
				DeleteDeploymentGroup: {
					input: {
						type: "structure",
						required: ["applicationName", "deploymentGroupName"],
						members: {
							applicationName: {},
							deploymentGroupName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							hooksNotCleanedUp: {
								shape: "S1j"
							}
						}
					}
				},
				DeleteGitHubAccountToken: {
					input: {
						type: "structure",
						members: {
							tokenName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							tokenName: {}
						}
					}
				},
				DeregisterOnPremisesInstance: {
					input: {
						type: "structure",
						required: ["instanceName"],
						members: {
							instanceName: {}
						}
					}
				},
				GetApplication: {
					input: {
						type: "structure",
						required: ["applicationName"],
						members: {
							applicationName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							application: {
								shape: "S12"
							}
						}
					}
				},
				GetApplicationRevision: {
					input: {
						type: "structure",
						required: ["applicationName", "revision"],
						members: {
							applicationName: {},
							revision: {
								shape: "Sb"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							applicationName: {},
							revision: {
								shape: "Sb"
							},
							revisionInfo: {
								shape: "St"
							}
						}
					}
				},
				GetDeployment: {
					input: {
						type: "structure",
						required: ["deploymentId"],
						members: {
							deploymentId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							deploymentInfo: {
								shape: "S3b"
							}
						}
					}
				},
				GetDeploymentConfig: {
					input: {
						type: "structure",
						required: ["deploymentConfigName"],
						members: {
							deploymentConfigName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							deploymentConfigInfo: {
								type: "structure",
								members: {
									deploymentConfigId: {},
									deploymentConfigName: {},
									minimumHealthyHosts: {
										shape: "S40"
									},
									createTime: {
										type: "timestamp"
									},
									computePlatform: {},
									trafficRoutingConfig: {
										shape: "S43"
									}
								}
							}
						}
					}
				},
				GetDeploymentGroup: {
					input: {
						type: "structure",
						required: ["applicationName", "deploymentGroupName"],
						members: {
							applicationName: {},
							deploymentGroupName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							deploymentGroupInfo: {
								shape: "S1a"
							}
						}
					}
				},
				GetDeploymentInstance: {
					input: {
						type: "structure",
						required: ["deploymentId", "instanceId"],
						members: {
							deploymentId: {},
							instanceId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							instanceSummary: {
								shape: "S2v"
							}
						}
					}
				},
				GetOnPremisesInstance: {
					input: {
						type: "structure",
						required: ["instanceName"],
						members: {
							instanceName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							instanceInfo: {
								shape: "S3q"
							}
						}
					}
				},
				ListApplicationRevisions: {
					input: {
						type: "structure",
						required: ["applicationName"],
						members: {
							applicationName: {},
							sortBy: {},
							sortOrder: {},
							s3Bucket: {},
							s3KeyPrefix: {},
							deployed: {},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							revisions: {
								shape: "Sa"
							},
							nextToken: {}
						}
					}
				},
				ListApplications: {
					input: {
						type: "structure",
						members: {
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							applications: {
								shape: "Sz"
							},
							nextToken: {}
						}
					}
				},
				ListDeploymentConfigs: {
					input: {
						type: "structure",
						members: {
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							deploymentConfigsList: {
								type: "list",
								member: {}
							},
							nextToken: {}
						}
					}
				},
				ListDeploymentGroups: {
					input: {
						type: "structure",
						required: ["applicationName"],
						members: {
							applicationName: {},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							applicationName: {},
							deploymentGroups: {
								shape: "Sv"
							},
							nextToken: {}
						}
					}
				},
				ListDeploymentInstances: {
					input: {
						type: "structure",
						required: ["deploymentId"],
						members: {
							deploymentId: {},
							nextToken: {},
							instanceStatusFilter: {
								type: "list",
								member: {}
							},
							instanceTypeFilter: {
								type: "list",
								member: {}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							instancesList: {
								shape: "S2r"
							},
							nextToken: {}
						}
					}
				},
				ListDeployments: {
					input: {
						type: "structure",
						members: {
							applicationName: {},
							deploymentGroupName: {},
							includeOnlyStatuses: {
								type: "list",
								member: {}
							},
							createTimeRange: {
								type: "structure",
								members: {
									start: {
										type: "timestamp"
									},
									end: {
										type: "timestamp"
									}
								}
							},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							deployments: {
								shape: "S38"
							},
							nextToken: {}
						}
					}
				},
				ListGitHubAccountTokenNames: {
					input: {
						type: "structure",
						members: {
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							tokenNameList: {
								type: "list",
								member: {}
							},
							nextToken: {}
						}
					}
				},
				ListOnPremisesInstances: {
					input: {
						type: "structure",
						members: {
							registrationStatus: {},
							tagFilters: {
								shape: "S1g"
							},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							instanceNames: {
								shape: "S6"
							},
							nextToken: {}
						}
					}
				},
				PutLifecycleEventHookExecutionStatus: {
					input: {
						type: "structure",
						members: {
							deploymentId: {},
							lifecycleEventHookExecutionId: {},
							status: {}
						}
					},
					output: {
						type: "structure",
						members: {
							lifecycleEventHookExecutionId: {}
						}
					}
				},
				RegisterApplicationRevision: {
					input: {
						type: "structure",
						required: ["applicationName", "revision"],
						members: {
							applicationName: {},
							description: {},
							revision: {
								shape: "Sb"
							}
						}
					}
				},
				RegisterOnPremisesInstance: {
					input: {
						type: "structure",
						required: ["instanceName"],
						members: {
							instanceName: {},
							iamSessionArn: {},
							iamUserArn: {}
						}
					}
				},
				RemoveTagsFromOnPremisesInstances: {
					input: {
						type: "structure",
						required: ["tags", "instanceNames"],
						members: {
							tags: {
								shape: "S2"
							},
							instanceNames: {
								shape: "S6"
							}
						}
					}
				},
				SkipWaitTimeForInstanceTermination: {
					input: {
						type: "structure",
						members: {
							deploymentId: {}
						}
					}
				},
				StopDeployment: {
					input: {
						type: "structure",
						required: ["deploymentId"],
						members: {
							deploymentId: {},
							autoRollbackEnabled: {
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							status: {},
							statusMessage: {}
						}
					}
				},
				UpdateApplication: {
					input: {
						type: "structure",
						members: {
							applicationName: {},
							newApplicationName: {}
						}
					}
				},
				UpdateDeploymentGroup: {
					input: {
						type: "structure",
						required: ["applicationName", "currentDeploymentGroupName"],
						members: {
							applicationName: {},
							currentDeploymentGroupName: {},
							newDeploymentGroupName: {},
							deploymentConfigName: {},
							ec2TagFilters: {
								shape: "S1d"
							},
							onPremisesInstanceTagFilters: {
								shape: "S1g"
							},
							autoScalingGroups: {
								shape: "S3j"
							},
							serviceRoleArn: {},
							triggerConfigurations: {
								shape: "S1o"
							},
							alarmConfiguration: {
								shape: "S1u"
							},
							autoRollbackConfiguration: {
								shape: "S1y"
							},
							deploymentStyle: {
								shape: "S21"
							},
							blueGreenDeploymentConfiguration: {
								shape: "S24"
							},
							loadBalancerInfo: {
								shape: "S2c"
							},
							ec2TagSet: {
								shape: "S2m"
							},
							onPremisesTagSet: {
								shape: "S2o"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							hooksNotCleanedUp: {
								shape: "S1j"
							}
						}
					}
				}
			},
			shapes: {
				S2: {
					type: "list",
					member: {
						type: "structure",
						members: {
							Key: {},
							Value: {}
						}
					}
				},
				S6: {
					type: "list",
					member: {}
				},
				Sa: {
					type: "list",
					member: {
						shape: "Sb"
					}
				},
				Sb: {
					type: "structure",
					members: {
						revisionType: {},
						s3Location: {
							type: "structure",
							members: {
								bucket: {},
								key: {},
								bundleType: {},
								version: {},
								eTag: {}
							}
						},
						gitHubLocation: {
							type: "structure",
							members: {
								repository: {},
								commitId: {}
							}
						},
						string: {
							type: "structure",
							members: {
								content: {},
								sha256: {}
							}
						}
					}
				},
				St: {
					type: "structure",
					members: {
						description: {},
						deploymentGroups: {
							shape: "Sv"
						},
						firstUsedTime: {
							type: "timestamp"
						},
						lastUsedTime: {
							type: "timestamp"
						},
						registerTime: {
							type: "timestamp"
						}
					}
				},
				Sv: {
					type: "list",
					member: {}
				},
				Sz: {
					type: "list",
					member: {}
				},
				S12: {
					type: "structure",
					members: {
						applicationId: {},
						applicationName: {},
						createTime: {
							type: "timestamp"
						},
						linkedToGitHub: {
							type: "boolean"
						},
						gitHubAccountName: {},
						computePlatform: {}
					}
				},
				S1a: {
					type: "structure",
					members: {
						applicationName: {},
						deploymentGroupId: {},
						deploymentGroupName: {},
						deploymentConfigName: {},
						ec2TagFilters: {
							shape: "S1d"
						},
						onPremisesInstanceTagFilters: {
							shape: "S1g"
						},
						autoScalingGroups: {
							shape: "S1j"
						},
						serviceRoleArn: {},
						targetRevision: {
							shape: "Sb"
						},
						triggerConfigurations: {
							shape: "S1o"
						},
						alarmConfiguration: {
							shape: "S1u"
						},
						autoRollbackConfiguration: {
							shape: "S1y"
						},
						deploymentStyle: {
							shape: "S21"
						},
						blueGreenDeploymentConfiguration: {
							shape: "S24"
						},
						loadBalancerInfo: {
							shape: "S2c"
						},
						lastSuccessfulDeployment: {
							shape: "S2j"
						},
						lastAttemptedDeployment: {
							shape: "S2j"
						},
						ec2TagSet: {
							shape: "S2m"
						},
						onPremisesTagSet: {
							shape: "S2o"
						},
						computePlatform: {}
					}
				},
				S1d: {
					type: "list",
					member: {
						type: "structure",
						members: {
							Key: {},
							Value: {},
							Type: {}
						}
					}
				},
				S1g: {
					type: "list",
					member: {
						type: "structure",
						members: {
							Key: {},
							Value: {},
							Type: {}
						}
					}
				},
				S1j: {
					type: "list",
					member: {
						type: "structure",
						members: {
							name: {},
							hook: {}
						}
					}
				},
				S1o: {
					type: "list",
					member: {
						type: "structure",
						members: {
							triggerName: {},
							triggerTargetArn: {},
							triggerEvents: {
								type: "list",
								member: {}
							}
						}
					}
				},
				S1u: {
					type: "structure",
					members: {
						enabled: {
							type: "boolean"
						},
						ignorePollAlarmFailure: {
							type: "boolean"
						},
						alarms: {
							type: "list",
							member: {
								type: "structure",
								members: {
									name: {}
								}
							}
						}
					}
				},
				S1y: {
					type: "structure",
					members: {
						enabled: {
							type: "boolean"
						},
						events: {
							type: "list",
							member: {}
						}
					}
				},
				S21: {
					type: "structure",
					members: {
						deploymentType: {},
						deploymentOption: {}
					}
				},
				S24: {
					type: "structure",
					members: {
						terminateBlueInstancesOnDeploymentSuccess: {
							type: "structure",
							members: {
								action: {},
								terminationWaitTimeInMinutes: {
									type: "integer"
								}
							}
						},
						deploymentReadyOption: {
							type: "structure",
							members: {
								actionOnTimeout: {},
								waitTimeInMinutes: {
									type: "integer"
								}
							}
						},
						greenFleetProvisioningOption: {
							type: "structure",
							members: {
								action: {}
							}
						}
					}
				},
				S2c: {
					type: "structure",
					members: {
						elbInfoList: {
							type: "list",
							member: {
								type: "structure",
								members: {
									name: {}
								}
							}
						},
						targetGroupInfoList: {
							type: "list",
							member: {
								type: "structure",
								members: {
									name: {}
								}
							}
						}
					}
				},
				S2j: {
					type: "structure",
					members: {
						deploymentId: {},
						status: {},
						endTime: {
							type: "timestamp"
						},
						createTime: {
							type: "timestamp"
						}
					}
				},
				S2m: {
					type: "structure",
					members: {
						ec2TagSetList: {
							type: "list",
							member: {
								shape: "S1d"
							}
						}
					}
				},
				S2o: {
					type: "structure",
					members: {
						onPremisesTagSetList: {
							type: "list",
							member: {
								shape: "S1g"
							}
						}
					}
				},
				S2r: {
					type: "list",
					member: {}
				},
				S2v: {
					type: "structure",
					members: {
						deploymentId: {},
						instanceId: {},
						status: {},
						lastUpdatedAt: {
							type: "timestamp"
						},
						lifecycleEvents: {
							type: "list",
							member: {
								type: "structure",
								members: {
									lifecycleEventName: {},
									diagnostics: {
										type: "structure",
										members: {
											errorCode: {},
											scriptName: {},
											message: {},
											logTail: {}
										}
									},
									startTime: {
										type: "timestamp"
									},
									endTime: {
										type: "timestamp"
									},
									status: {}
								}
							}
						},
						instanceType: {}
					}
				},
				S38: {
					type: "list",
					member: {}
				},
				S3b: {
					type: "structure",
					members: {
						applicationName: {},
						deploymentGroupName: {},
						deploymentConfigName: {},
						deploymentId: {},
						previousRevision: {
							shape: "Sb"
						},
						revision: {
							shape: "Sb"
						},
						status: {},
						errorInformation: {
							type: "structure",
							members: {
								code: {},
								message: {}
							}
						},
						createTime: {
							type: "timestamp"
						},
						startTime: {
							type: "timestamp"
						},
						completeTime: {
							type: "timestamp"
						},
						deploymentOverview: {
							type: "structure",
							members: {
								Pending: {
									type: "long"
								},
								InProgress: {
									type: "long"
								},
								Succeeded: {
									type: "long"
								},
								Failed: {
									type: "long"
								},
								Skipped: {
									type: "long"
								},
								Ready: {
									type: "long"
								}
							}
						},
						description: {},
						creator: {},
						ignoreApplicationStopFailures: {
							type: "boolean"
						},
						autoRollbackConfiguration: {
							shape: "S1y"
						},
						updateOutdatedInstancesOnly: {
							type: "boolean"
						},
						rollbackInfo: {
							type: "structure",
							members: {
								rollbackDeploymentId: {},
								rollbackTriggeringDeploymentId: {},
								rollbackMessage: {}
							}
						},
						deploymentStyle: {
							shape: "S21"
						},
						targetInstances: {
							shape: "S3i"
						},
						instanceTerminationWaitTimeStarted: {
							type: "boolean"
						},
						blueGreenDeploymentConfiguration: {
							shape: "S24"
						},
						loadBalancerInfo: {
							shape: "S2c"
						},
						additionalDeploymentStatusInfo: {
							type: "string",
							deprecated: !0
						},
						fileExistsBehavior: {},
						deploymentStatusMessages: {
							type: "list",
							member: {}
						},
						computePlatform: {}
					}
				},
				S3i: {
					type: "structure",
					members: {
						tagFilters: {
							shape: "S1d"
						},
						autoScalingGroups: {
							shape: "S3j"
						},
						ec2TagSet: {
							shape: "S2m"
						}
					}
				},
				S3j: {
					type: "list",
					member: {}
				},
				S3q: {
					type: "structure",
					members: {
						instanceName: {},
						iamSessionArn: {},
						iamUserArn: {},
						instanceArn: {},
						registerTime: {
							type: "timestamp"
						},
						deregisterTime: {
							type: "timestamp"
						},
						tags: {
							shape: "S2"
						}
					}
				},
				S40: {
					type: "structure",
					members: {
						value: {
							type: "integer"
						},
						type: {}
					}
				},
				S43: {
					type: "structure",
					members: {
						type: {},
						timeBasedCanary: {
							type: "structure",
							members: {
								canaryPercentage: {
									type: "integer"
								},
								canaryInterval: {
									type: "integer"
								}
							}
						},
						timeBasedLinear: {
							type: "structure",
							members: {
								linearPercentage: {
									type: "integer"
								},
								linearInterval: {
									type: "integer"
								}
							}
						}
					}
				}
			}
		}
	}, {}],
	30: [function(e, t, r) {
		t.exports = {
			pagination: {
				ListApplicationRevisions: {
					input_token: "nextToken",
					output_token: "nextToken",
					result_key: "revisions"
				},
				ListApplications: {
					input_token: "nextToken",
					output_token: "nextToken",
					result_key: "applications"
				},
				ListDeploymentConfigs: {
					input_token: "nextToken",
					output_token: "nextToken",
					result_key: "deploymentConfigsList"
				},
				ListDeploymentGroups: {
					input_token: "nextToken",
					output_token: "nextToken",
					result_key: "deploymentGroups"
				},
				ListDeploymentInstances: {
					input_token: "nextToken",
					output_token: "nextToken",
					result_key: "instancesList"
				},
				ListDeployments: {
					input_token: "nextToken",
					output_token: "nextToken",
					result_key: "deployments"
				}
			}
		}
	}, {}],
	31: [function(e, t, r) {
		t.exports = {
			version: 2,
			waiters: {
				DeploymentSuccessful: {
					delay: 15,
					operation: "GetDeployment",
					maxAttempts: 120,
					acceptors: [{
						expected: "Succeeded",
						matcher: "path",
						state: "success",
						argument: "deploymentInfo.status"
					}, {
						expected: "Failed",
						matcher: "path",
						state: "failure",
						argument: "deploymentInfo.status"
					}, {
						expected: "Stopped",
						matcher: "path",
						state: "failure",
						argument: "deploymentInfo.status"
					}]
				}
			}
		}
	}, {}],
	32: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2015-07-09",
				endpointPrefix: "codepipeline",
				jsonVersion: "1.1",
				protocol: "json",
				serviceAbbreviation: "CodePipeline",
				serviceFullName: "AWS CodePipeline",
				signatureVersion: "v4",
				targetPrefix: "CodePipeline_20150709",
				uid: "codepipeline-2015-07-09"
			},
			operations: {
				AcknowledgeJob: {
					input: {
						type: "structure",
						required: ["jobId", "nonce"],
						members: {
							jobId: {},
							nonce: {}
						}
					},
					output: {
						type: "structure",
						members: {
							status: {}
						}
					}
				},
				AcknowledgeThirdPartyJob: {
					input: {
						type: "structure",
						required: ["jobId", "nonce", "clientToken"],
						members: {
							jobId: {},
							nonce: {},
							clientToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							status: {}
						}
					}
				},
				CreateCustomActionType: {
					input: {
						type: "structure",
						required: ["category", "provider", "version", "inputArtifactDetails", "outputArtifactDetails"],
						members: {
							category: {},
							provider: {},
							version: {},
							settings: {
								shape: "Se"
							},
							configurationProperties: {
								shape: "Sh"
							},
							inputArtifactDetails: {
								shape: "Sn"
							},
							outputArtifactDetails: {
								shape: "Sn"
							}
						}
					},
					output: {
						type: "structure",
						required: ["actionType"],
						members: {
							actionType: {
								shape: "Sr"
							}
						}
					}
				},
				CreatePipeline: {
					input: {
						type: "structure",
						required: ["pipeline"],
						members: {
							pipeline: {
								shape: "Sv"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							pipeline: {
								shape: "Sv"
							}
						}
					}
				},
				DeleteCustomActionType: {
					input: {
						type: "structure",
						required: ["category", "provider", "version"],
						members: {
							category: {},
							provider: {},
							version: {}
						}
					}
				},
				DeletePipeline: {
					input: {
						type: "structure",
						required: ["name"],
						members: {
							name: {}
						}
					}
				},
				DeleteWebhook: {
					input: {
						type: "structure",
						required: ["name"],
						members: {
							name: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				DeregisterWebhookWithThirdParty: {
					input: {
						type: "structure",
						members: {
							webhookName: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				DisableStageTransition: {
					input: {
						type: "structure",
						required: ["pipelineName", "stageName", "transitionType", "reason"],
						members: {
							pipelineName: {},
							stageName: {},
							transitionType: {},
							reason: {}
						}
					}
				},
				EnableStageTransition: {
					input: {
						type: "structure",
						required: ["pipelineName", "stageName", "transitionType"],
						members: {
							pipelineName: {},
							stageName: {},
							transitionType: {}
						}
					}
				},
				GetJobDetails: {
					input: {
						type: "structure",
						required: ["jobId"],
						members: {
							jobId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							jobDetails: {
								type: "structure",
								members: {
									id: {},
									data: {
										shape: "S22"
									},
									accountId: {}
								}
							}
						}
					}
				},
				GetPipeline: {
					input: {
						type: "structure",
						required: ["name"],
						members: {
							name: {},
							version: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							pipeline: {
								shape: "Sv"
							},
							metadata: {
								type: "structure",
								members: {
									pipelineArn: {},
									created: {
										type: "timestamp"
									},
									updated: {
										type: "timestamp"
									}
								}
							}
						}
					}
				},
				GetPipelineExecution: {
					input: {
						type: "structure",
						required: ["pipelineName", "pipelineExecutionId"],
						members: {
							pipelineName: {},
							pipelineExecutionId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							pipelineExecution: {
								type: "structure",
								members: {
									pipelineName: {},
									pipelineVersion: {
										type: "integer"
									},
									pipelineExecutionId: {},
									status: {},
									artifactRevisions: {
										type: "list",
										member: {
											type: "structure",
											members: {
												name: {},
												revisionId: {},
												revisionChangeIdentifier: {},
												revisionSummary: {},
												created: {
													type: "timestamp"
												},
												revisionUrl: {}
											}
										}
									}
								}
							}
						}
					}
				},
				GetPipelineState: {
					input: {
						type: "structure",
						required: ["name"],
						members: {
							name: {}
						}
					},
					output: {
						type: "structure",
						members: {
							pipelineName: {},
							pipelineVersion: {
								type: "integer"
							},
							stageStates: {
								type: "list",
								member: {
									type: "structure",
									members: {
										stageName: {},
										inboundTransitionState: {
											type: "structure",
											members: {
												enabled: {
													type: "boolean"
												},
												lastChangedBy: {},
												lastChangedAt: {
													type: "timestamp"
												},
												disabledReason: {}
											}
										},
										actionStates: {
											type: "list",
											member: {
												type: "structure",
												members: {
													actionName: {},
													currentRevision: {
														shape: "S39"
													},
													latestExecution: {
														type: "structure",
														members: {
															status: {},
															summary: {},
															lastStatusChange: {
																type: "timestamp"
															},
															token: {},
															lastUpdatedBy: {},
															externalExecutionId: {},
															externalExecutionUrl: {},
															percentComplete: {
																type: "integer"
															},
															errorDetails: {
																type: "structure",
																members: {
																	code: {},
																	message: {}
																}
															}
														}
													},
													entityUrl: {},
													revisionUrl: {}
												}
											}
										},
										latestExecution: {
											type: "structure",
											required: ["pipelineExecutionId", "status"],
											members: {
												pipelineExecutionId: {},
												status: {}
											}
										}
									}
								}
							},
							created: {
								type: "timestamp"
							},
							updated: {
								type: "timestamp"
							}
						}
					}
				},
				GetThirdPartyJobDetails: {
					input: {
						type: "structure",
						required: ["jobId", "clientToken"],
						members: {
							jobId: {},
							clientToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							jobDetails: {
								type: "structure",
								members: {
									id: {},
									data: {
										type: "structure",
										members: {
											actionTypeId: {
												shape: "Ss"
											},
											actionConfiguration: {
												shape: "S23"
											},
											pipelineContext: {
												shape: "S24"
											},
											inputArtifacts: {
												shape: "S27"
											},
											outputArtifacts: {
												shape: "S27"
											},
											artifactCredentials: {
												shape: "S2f"
											},
											continuationToken: {},
											encryptionKey: {
												shape: "S11"
											}
										}
									},
									nonce: {}
								}
							}
						}
					}
				},
				ListActionTypes: {
					input: {
						type: "structure",
						members: {
							actionOwnerFilter: {},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						required: ["actionTypes"],
						members: {
							actionTypes: {
								type: "list",
								member: {
									shape: "Sr"
								}
							},
							nextToken: {}
						}
					}
				},
				ListPipelineExecutions: {
					input: {
						type: "structure",
						required: ["pipelineName"],
						members: {
							pipelineName: {},
							maxResults: {
								type: "integer"
							},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							pipelineExecutionSummaries: {
								type: "list",
								member: {
									type: "structure",
									members: {
										pipelineExecutionId: {},
										status: {},
										startTime: {
											type: "timestamp"
										},
										lastUpdateTime: {
											type: "timestamp"
										},
										sourceRevisions: {
											type: "list",
											member: {
												type: "structure",
												required: ["actionName"],
												members: {
													actionName: {},
													revisionId: {},
													revisionSummary: {},
													revisionUrl: {}
												}
											}
										}
									}
								}
							},
							nextToken: {}
						}
					}
				},
				ListPipelines: {
					input: {
						type: "structure",
						members: {
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							pipelines: {
								type: "list",
								member: {
									type: "structure",
									members: {
										name: {},
										version: {
											type: "integer"
										},
										created: {
											type: "timestamp"
										},
										updated: {
											type: "timestamp"
										}
									}
								}
							},
							nextToken: {}
						}
					}
				},
				ListWebhooks: {
					input: {
						type: "structure",
						members: {
							NextToken: {},
							MaxResults: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							webhooks: {
								type: "list",
								member: {
									shape: "S48"
								}
							},
							NextToken: {}
						}
					}
				},
				PollForJobs: {
					input: {
						type: "structure",
						required: ["actionTypeId"],
						members: {
							actionTypeId: {
								shape: "Ss"
							},
							maxBatchSize: {
								type: "integer"
							},
							queryParam: {
								type: "map",
								key: {},
								value: {}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							jobs: {
								type: "list",
								member: {
									type: "structure",
									members: {
										id: {},
										data: {
											shape: "S22"
										},
										nonce: {},
										accountId: {}
									}
								}
							}
						}
					}
				},
				PollForThirdPartyJobs: {
					input: {
						type: "structure",
						required: ["actionTypeId"],
						members: {
							actionTypeId: {
								shape: "Ss"
							},
							maxBatchSize: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							jobs: {
								type: "list",
								member: {
									type: "structure",
									members: {
										clientId: {},
										jobId: {}
									}
								}
							}
						}
					}
				},
				PutActionRevision: {
					input: {
						type: "structure",
						required: ["pipelineName", "stageName", "actionName", "actionRevision"],
						members: {
							pipelineName: {},
							stageName: {},
							actionName: {},
							actionRevision: {
								shape: "S39"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							newRevision: {
								type: "boolean"
							},
							pipelineExecutionId: {}
						}
					}
				},
				PutApprovalResult: {
					input: {
						type: "structure",
						required: ["pipelineName", "stageName", "actionName", "result", "token"],
						members: {
							pipelineName: {},
							stageName: {},
							actionName: {},
							result: {
								type: "structure",
								required: ["summary", "status"],
								members: {
									summary: {},
									status: {}
								}
							},
							token: {}
						}
					},
					output: {
						type: "structure",
						members: {
							approvedAt: {
								type: "timestamp"
							}
						}
					}
				},
				PutJobFailureResult: {
					input: {
						type: "structure",
						required: ["jobId", "failureDetails"],
						members: {
							jobId: {},
							failureDetails: {
								shape: "S58"
							}
						}
					}
				},
				PutJobSuccessResult: {
					input: {
						type: "structure",
						required: ["jobId"],
						members: {
							jobId: {},
							currentRevision: {
								shape: "S5b"
							},
							continuationToken: {},
							executionDetails: {
								shape: "S5d"
							}
						}
					}
				},
				PutThirdPartyJobFailureResult: {
					input: {
						type: "structure",
						required: ["jobId", "clientToken", "failureDetails"],
						members: {
							jobId: {},
							clientToken: {},
							failureDetails: {
								shape: "S58"
							}
						}
					}
				},
				PutThirdPartyJobSuccessResult: {
					input: {
						type: "structure",
						required: ["jobId", "clientToken"],
						members: {
							jobId: {},
							clientToken: {},
							currentRevision: {
								shape: "S5b"
							},
							continuationToken: {},
							executionDetails: {
								shape: "S5d"
							}
						}
					}
				},
				PutWebhook: {
					input: {
						type: "structure",
						required: ["webhook"],
						members: {
							webhook: {
								shape: "S49"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							webhook: {
								shape: "S48"
							}
						}
					}
				},
				RegisterWebhookWithThirdParty: {
					input: {
						type: "structure",
						members: {
							webhookName: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				RetryStageExecution: {
					input: {
						type: "structure",
						required: ["pipelineName", "stageName", "pipelineExecutionId", "retryMode"],
						members: {
							pipelineName: {},
							stageName: {},
							pipelineExecutionId: {},
							retryMode: {}
						}
					},
					output: {
						type: "structure",
						members: {
							pipelineExecutionId: {}
						}
					}
				},
				StartPipelineExecution: {
					input: {
						type: "structure",
						required: ["name"],
						members: {
							name: {}
						}
					},
					output: {
						type: "structure",
						members: {
							pipelineExecutionId: {}
						}
					}
				},
				UpdatePipeline: {
					input: {
						type: "structure",
						required: ["pipeline"],
						members: {
							pipeline: {
								shape: "Sv"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							pipeline: {
								shape: "Sv"
							}
						}
					}
				}
			},
			shapes: {
				Se: {
					type: "structure",
					members: {
						thirdPartyConfigurationUrl: {},
						entityUrlTemplate: {},
						executionUrlTemplate: {},
						revisionUrlTemplate: {}
					}
				},
				Sh: {
					type: "list",
					member: {
						type: "structure",
						required: ["name", "required", "key", "secret"],
						members: {
							name: {},
							required: {
								type: "boolean"
							},
							key: {
								type: "boolean"
							},
							secret: {
								type: "boolean"
							},
							queryable: {
								type: "boolean"
							},
							description: {},
							type: {}
						}
					}
				},
				Sn: {
					type: "structure",
					required: ["minimumCount", "maximumCount"],
					members: {
						minimumCount: {
							type: "integer"
						},
						maximumCount: {
							type: "integer"
						}
					}
				},
				Sr: {
					type: "structure",
					required: ["id", "inputArtifactDetails", "outputArtifactDetails"],
					members: {
						id: {
							shape: "Ss"
						},
						settings: {
							shape: "Se"
						},
						actionConfigurationProperties: {
							shape: "Sh"
						},
						inputArtifactDetails: {
							shape: "Sn"
						},
						outputArtifactDetails: {
							shape: "Sn"
						}
					}
				},
				Ss: {
					type: "structure",
					required: ["category", "owner", "provider", "version"],
					members: {
						category: {},
						owner: {},
						provider: {},
						version: {}
					}
				},
				Sv: {
					type: "structure",
					required: ["name", "roleArn", "artifactStore", "stages"],
					members: {
						name: {},
						roleArn: {},
						artifactStore: {
							type: "structure",
							required: ["type", "location"],
							members: {
								type: {},
								location: {},
								encryptionKey: {
									shape: "S11"
								}
							}
						},
						stages: {
							type: "list",
							member: {
								type: "structure",
								required: ["name", "actions"],
								members: {
									name: {},
									blockers: {
										type: "list",
										member: {
											type: "structure",
											required: ["name", "type"],
											members: {
												name: {},
												type: {}
											}
										}
									},
									actions: {
										type: "list",
										member: {
											type: "structure",
											required: ["name", "actionTypeId"],
											members: {
												name: {},
												actionTypeId: {
													shape: "Ss"
												},
												runOrder: {
													type: "integer"
												},
												configuration: {
													shape: "S1f"
												},
												outputArtifacts: {
													type: "list",
													member: {
														type: "structure",
														required: ["name"],
														members: {
															name: {}
														}
													}
												},
												inputArtifacts: {
													type: "list",
													member: {
														type: "structure",
														required: ["name"],
														members: {
															name: {}
														}
													}
												},
												roleArn: {}
											}
										}
									}
								}
							}
						},
						version: {
							type: "integer"
						}
					}
				},
				S11: {
					type: "structure",
					required: ["id", "type"],
					members: {
						id: {},
						type: {}
					}
				},
				S1f: {
					type: "map",
					key: {},
					value: {}
				},
				S22: {
					type: "structure",
					members: {
						actionTypeId: {
							shape: "Ss"
						},
						actionConfiguration: {
							shape: "S23"
						},
						pipelineContext: {
							shape: "S24"
						},
						inputArtifacts: {
							shape: "S27"
						},
						outputArtifacts: {
							shape: "S27"
						},
						artifactCredentials: {
							shape: "S2f"
						},
						continuationToken: {},
						encryptionKey: {
							shape: "S11"
						}
					}
				},
				S23: {
					type: "structure",
					members: {
						configuration: {
							shape: "S1f"
						}
					}
				},
				S24: {
					type: "structure",
					members: {
						pipelineName: {},
						stage: {
							type: "structure",
							members: {
								name: {}
							}
						},
						action: {
							type: "structure",
							members: {
								name: {}
							}
						}
					}
				},
				S27: {
					type: "list",
					member: {
						type: "structure",
						members: {
							name: {},
							revision: {},
							location: {
								type: "structure",
								members: {
									type: {},
									s3Location: {
										type: "structure",
										required: ["bucketName", "objectKey"],
										members: {
											bucketName: {},
											objectKey: {}
										}
									}
								}
							}
						}
					}
				},
				S2f: {
					type: "structure",
					required: ["accessKeyId", "secretAccessKey", "sessionToken"],
					members: {
						accessKeyId: {},
						secretAccessKey: {},
						sessionToken: {}
					},
					sensitive: !0
				},
				S39: {
					type: "structure",
					required: ["revisionId", "revisionChangeId", "created"],
					members: {
						revisionId: {},
						revisionChangeId: {},
						created: {
							type: "timestamp"
						}
					}
				},
				S48: {
					type: "structure",
					required: ["definition", "url"],
					members: {
						definition: {
							shape: "S49"
						},
						url: {},
						errorMessage: {},
						errorCode: {},
						lastTriggered: {
							type: "timestamp"
						},
						arn: {}
					}
				},
				S49: {
					type: "structure",
					required: ["name", "targetPipeline", "targetAction", "filters", "authentication", "authenticationConfiguration"],
					members: {
						name: {},
						targetPipeline: {},
						targetAction: {},
						filters: {
							type: "list",
							member: {
								type: "structure",
								required: ["jsonPath"],
								members: {
									jsonPath: {},
									matchEquals: {}
								}
							}
						},
						authentication: {},
						authenticationConfiguration: {
							type: "structure",
							members: {
								AllowedIPRange: {},
								SecretToken: {}
							}
						}
					}
				},
				S58: {
					type: "structure",
					required: ["type", "message"],
					members: {
						type: {},
						message: {},
						externalExecutionId: {}
					}
				},
				S5b: {
					type: "structure",
					required: ["revision", "changeIdentifier"],
					members: {
						revision: {},
						changeIdentifier: {},
						created: {
							type: "timestamp"
						},
						revisionSummary: {}
					}
				},
				S5d: {
					type: "structure",
					members: {
						summary: {},
						externalExecutionId: {},
						percentComplete: {
							type: "integer"
						}
					}
				}
			}
		}
	}, {}],
	33: [function(e, t, r) {
		arguments[4][22][0].apply(r, arguments)
	}, {
		dup: 22
	}],
	34: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2014-06-30",
				endpointPrefix: "cognito-identity",
				jsonVersion: "1.1",
				protocol: "json",
				serviceFullName: "Amazon Cognito Identity",
				signatureVersion: "v4",
				targetPrefix: "AWSCognitoIdentityService",
				uid: "cognito-identity-2014-06-30"
			},
			operations: {
				CreateIdentityPool: {
					input: {
						type: "structure",
						required: ["IdentityPoolName", "AllowUnauthenticatedIdentities"],
						members: {
							IdentityPoolName: {},
							AllowUnauthenticatedIdentities: {
								type: "boolean"
							},
							SupportedLoginProviders: {
								shape: "S4"
							},
							DeveloperProviderName: {},
							OpenIdConnectProviderARNs: {
								shape: "S8"
							},
							CognitoIdentityProviders: {
								shape: "Sa"
							},
							SamlProviderARNs: {
								shape: "Sf"
							}
						}
					},
					output: {
						shape: "Sg"
					}
				},
				DeleteIdentities: {
					input: {
						type: "structure",
						required: ["IdentityIdsToDelete"],
						members: {
							IdentityIdsToDelete: {
								type: "list",
								member: {}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							UnprocessedIdentityIds: {
								type: "list",
								member: {
									type: "structure",
									members: {
										IdentityId: {},
										ErrorCode: {}
									}
								}
							}
						}
					}
				},
				DeleteIdentityPool: {
					input: {
						type: "structure",
						required: ["IdentityPoolId"],
						members: {
							IdentityPoolId: {}
						}
					}
				},
				DescribeIdentity: {
					input: {
						type: "structure",
						required: ["IdentityId"],
						members: {
							IdentityId: {}
						}
					},
					output: {
						shape: "Sr"
					}
				},
				DescribeIdentityPool: {
					input: {
						type: "structure",
						required: ["IdentityPoolId"],
						members: {
							IdentityPoolId: {}
						}
					},
					output: {
						shape: "Sg"
					}
				},
				GetCredentialsForIdentity: {
					input: {
						type: "structure",
						required: ["IdentityId"],
						members: {
							IdentityId: {},
							Logins: {
								shape: "Sw"
							},
							CustomRoleArn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							IdentityId: {},
							Credentials: {
								type: "structure",
								members: {
									AccessKeyId: {},
									SecretKey: {},
									SessionToken: {},
									Expiration: {
										type: "timestamp"
									}
								}
							}
						}
					}
				},
				GetId: {
					input: {
						type: "structure",
						required: ["IdentityPoolId"],
						members: {
							AccountId: {},
							IdentityPoolId: {},
							Logins: {
								shape: "Sw"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							IdentityId: {}
						}
					}
				},
				GetIdentityPoolRoles: {
					input: {
						type: "structure",
						required: ["IdentityPoolId"],
						members: {
							IdentityPoolId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							IdentityPoolId: {},
							Roles: {
								shape: "S18"
							},
							RoleMappings: {
								shape: "S1a"
							}
						}
					}
				},
				GetOpenIdToken: {
					input: {
						type: "structure",
						required: ["IdentityId"],
						members: {
							IdentityId: {},
							Logins: {
								shape: "Sw"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							IdentityId: {},
							Token: {}
						}
					}
				},
				GetOpenIdTokenForDeveloperIdentity: {
					input: {
						type: "structure",
						required: ["IdentityPoolId", "Logins"],
						members: {
							IdentityPoolId: {},
							IdentityId: {},
							Logins: {
								shape: "Sw"
							},
							TokenDuration: {
								type: "long"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							IdentityId: {},
							Token: {}
						}
					}
				},
				ListIdentities: {
					input: {
						type: "structure",
						required: ["IdentityPoolId", "MaxResults"],
						members: {
							IdentityPoolId: {},
							MaxResults: {
								type: "integer"
							},
							NextToken: {},
							HideDisabled: {
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							IdentityPoolId: {},
							Identities: {
								type: "list",
								member: {
									shape: "Sr"
								}
							},
							NextToken: {}
						}
					}
				},
				ListIdentityPools: {
					input: {
						type: "structure",
						required: ["MaxResults"],
						members: {
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							IdentityPools: {
								type: "list",
								member: {
									type: "structure",
									members: {
										IdentityPoolId: {},
										IdentityPoolName: {}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				LookupDeveloperIdentity: {
					input: {
						type: "structure",
						required: ["IdentityPoolId"],
						members: {
							IdentityPoolId: {},
							IdentityId: {},
							DeveloperUserIdentifier: {},
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							IdentityId: {},
							DeveloperUserIdentifierList: {
								type: "list",
								member: {}
							},
							NextToken: {}
						}
					}
				},
				MergeDeveloperIdentities: {
					input: {
						type: "structure",
						required: ["SourceUserIdentifier", "DestinationUserIdentifier", "DeveloperProviderName", "IdentityPoolId"],
						members: {
							SourceUserIdentifier: {},
							DestinationUserIdentifier: {},
							DeveloperProviderName: {},
							IdentityPoolId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							IdentityId: {}
						}
					}
				},
				SetIdentityPoolRoles: {
					input: {
						type: "structure",
						required: ["IdentityPoolId", "Roles"],
						members: {
							IdentityPoolId: {},
							Roles: {
								shape: "S18"
							},
							RoleMappings: {
								shape: "S1a"
							}
						}
					}
				},
				UnlinkDeveloperIdentity: {
					input: {
						type: "structure",
						required: ["IdentityId", "IdentityPoolId", "DeveloperProviderName", "DeveloperUserIdentifier"],
						members: {
							IdentityId: {},
							IdentityPoolId: {},
							DeveloperProviderName: {},
							DeveloperUserIdentifier: {}
						}
					}
				},
				UnlinkIdentity: {
					input: {
						type: "structure",
						required: ["IdentityId", "Logins", "LoginsToRemove"],
						members: {
							IdentityId: {},
							Logins: {
								shape: "Sw"
							},
							LoginsToRemove: {
								shape: "Ss"
							}
						}
					}
				},
				UpdateIdentityPool: {
					input: {
						shape: "Sg"
					},
					output: {
						shape: "Sg"
					}
				}
			},
			shapes: {
				S4: {
					type: "map",
					key: {},
					value: {}
				},
				S8: {
					type: "list",
					member: {}
				},
				Sa: {
					type: "list",
					member: {
						type: "structure",
						members: {
							ProviderName: {},
							ClientId: {},
							ServerSideTokenCheck: {
								type: "boolean"
							}
						}
					}
				},
				Sf: {
					type: "list",
					member: {}
				},
				Sg: {
					type: "structure",
					required: ["IdentityPoolId", "IdentityPoolName", "AllowUnauthenticatedIdentities"],
					members: {
						IdentityPoolId: {},
						IdentityPoolName: {},
						AllowUnauthenticatedIdentities: {
							type: "boolean"
						},
						SupportedLoginProviders: {
							shape: "S4"
						},
						DeveloperProviderName: {},
						OpenIdConnectProviderARNs: {
							shape: "S8"
						},
						CognitoIdentityProviders: {
							shape: "Sa"
						},
						SamlProviderARNs: {
							shape: "Sf"
						}
					}
				},
				Sr: {
					type: "structure",
					members: {
						IdentityId: {},
						Logins: {
							shape: "Ss"
						},
						CreationDate: {
							type: "timestamp"
						},
						LastModifiedDate: {
							type: "timestamp"
						}
					}
				},
				Ss: {
					type: "list",
					member: {}
				},
				Sw: {
					type: "map",
					key: {},
					value: {}
				},
				S18: {
					type: "map",
					key: {},
					value: {}
				},
				S1a: {
					type: "map",
					key: {},
					value: {
						type: "structure",
						required: ["Type"],
						members: {
							Type: {},
							AmbiguousRoleResolution: {},
							RulesConfiguration: {
								type: "structure",
								required: ["Rules"],
								members: {
									Rules: {
										type: "list",
										member: {
											type: "structure",
											required: ["Claim", "MatchType", "Value", "RoleARN"],
											members: {
												Claim: {},
												MatchType: {},
												Value: {},
												RoleARN: {}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}, {}],
	35: [function(e, t, r) {
		arguments[4][22][0].apply(r, arguments)
	}, {
		dup: 22
	}],
	36: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2016-04-18",
				endpointPrefix: "cognito-idp",
				jsonVersion: "1.1",
				protocol: "json",
				serviceFullName: "Amazon Cognito Identity Provider",
				signatureVersion: "v4",
				targetPrefix: "AWSCognitoIdentityProviderService",
				uid: "cognito-idp-2016-04-18"
			},
			operations: {
				AddCustomAttributes: {
					input: {
						type: "structure",
						required: ["UserPoolId", "CustomAttributes"],
						members: {
							UserPoolId: {},
							CustomAttributes: {
								type: "list",
								member: {
									shape: "S4"
								}
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				AdminAddUserToGroup: {
					input: {
						type: "structure",
						required: ["UserPoolId", "Username", "GroupName"],
						members: {
							UserPoolId: {},
							Username: {
								shape: "Sd"
							},
							GroupName: {}
						}
					}
				},
				AdminConfirmSignUp: {
					input: {
						type: "structure",
						required: ["UserPoolId", "Username"],
						members: {
							UserPoolId: {},
							Username: {
								shape: "Sd"
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				AdminCreateUser: {
					input: {
						type: "structure",
						required: ["UserPoolId", "Username"],
						members: {
							UserPoolId: {},
							Username: {
								shape: "Sd"
							},
							UserAttributes: {
								shape: "Si"
							},
							ValidationData: {
								shape: "Si"
							},
							TemporaryPassword: {
								shape: "Sm"
							},
							ForceAliasCreation: {
								type: "boolean"
							},
							MessageAction: {},
							DesiredDeliveryMediums: {
								type: "list",
								member: {}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							User: {
								shape: "Ss"
							}
						}
					}
				},
				AdminDeleteUser: {
					input: {
						type: "structure",
						required: ["UserPoolId", "Username"],
						members: {
							UserPoolId: {},
							Username: {
								shape: "Sd"
							}
						}
					}
				},
				AdminDeleteUserAttributes: {
					input: {
						type: "structure",
						required: ["UserPoolId", "Username", "UserAttributeNames"],
						members: {
							UserPoolId: {},
							Username: {
								shape: "Sd"
							},
							UserAttributeNames: {
								shape: "Sz"
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				AdminDisableProviderForUser: {
					input: {
						type: "structure",
						required: ["UserPoolId", "User"],
						members: {
							UserPoolId: {},
							User: {
								shape: "S12"
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				AdminDisableUser: {
					input: {
						type: "structure",
						required: ["UserPoolId", "Username"],
						members: {
							UserPoolId: {},
							Username: {
								shape: "Sd"
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				AdminEnableUser: {
					input: {
						type: "structure",
						required: ["UserPoolId", "Username"],
						members: {
							UserPoolId: {},
							Username: {
								shape: "Sd"
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				AdminForgetDevice: {
					input: {
						type: "structure",
						required: ["UserPoolId", "Username", "DeviceKey"],
						members: {
							UserPoolId: {},
							Username: {
								shape: "Sd"
							},
							DeviceKey: {}
						}
					}
				},
				AdminGetDevice: {
					input: {
						type: "structure",
						required: ["DeviceKey", "UserPoolId", "Username"],
						members: {
							DeviceKey: {},
							UserPoolId: {},
							Username: {
								shape: "Sd"
							}
						}
					},
					output: {
						type: "structure",
						required: ["Device"],
						members: {
							Device: {
								shape: "S1d"
							}
						}
					}
				},
				AdminGetUser: {
					input: {
						type: "structure",
						required: ["UserPoolId", "Username"],
						members: {
							UserPoolId: {},
							Username: {
								shape: "Sd"
							}
						}
					},
					output: {
						type: "structure",
						required: ["Username"],
						members: {
							Username: {
								shape: "Sd"
							},
							UserAttributes: {
								shape: "Si"
							},
							UserCreateDate: {
								type: "timestamp"
							},
							UserLastModifiedDate: {
								type: "timestamp"
							},
							Enabled: {
								type: "boolean"
							},
							UserStatus: {},
							MFAOptions: {
								shape: "Sv"
							},
							PreferredMfaSetting: {},
							UserMFASettingList: {
								shape: "S1g"
							}
						}
					}
				},
				AdminInitiateAuth: {
					input: {
						type: "structure",
						required: ["UserPoolId", "ClientId", "AuthFlow"],
						members: {
							UserPoolId: {},
							ClientId: {
								shape: "S1i"
							},
							AuthFlow: {},
							AuthParameters: {
								shape: "S1k"
							},
							ClientMetadata: {
								shape: "S1l"
							},
							AnalyticsMetadata: {
								shape: "S1m"
							},
							ContextData: {
								shape: "S1n"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ChallengeName: {},
							Session: {},
							ChallengeParameters: {
								shape: "S1t"
							},
							AuthenticationResult: {
								shape: "S1u"
							}
						}
					}
				},
				AdminLinkProviderForUser: {
					input: {
						type: "structure",
						required: ["UserPoolId", "DestinationUser", "SourceUser"],
						members: {
							UserPoolId: {},
							DestinationUser: {
								shape: "S12"
							},
							SourceUser: {
								shape: "S12"
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				AdminListDevices: {
					input: {
						type: "structure",
						required: ["UserPoolId", "Username"],
						members: {
							UserPoolId: {},
							Username: {
								shape: "Sd"
							},
							Limit: {
								type: "integer"
							},
							PaginationToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Devices: {
								shape: "S24"
							},
							PaginationToken: {}
						}
					}
				},
				AdminListGroupsForUser: {
					input: {
						type: "structure",
						required: ["Username", "UserPoolId"],
						members: {
							Username: {
								shape: "Sd"
							},
							UserPoolId: {},
							Limit: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Groups: {
								shape: "S28"
							},
							NextToken: {}
						}
					}
				},
				AdminListUserAuthEvents: {
					input: {
						type: "structure",
						required: ["UserPoolId", "Username"],
						members: {
							UserPoolId: {},
							Username: {
								shape: "Sd"
							},
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							AuthEvents: {
								type: "list",
								member: {
									type: "structure",
									members: {
										EventId: {},
										EventType: {},
										CreationDate: {
											type: "timestamp"
										},
										EventResponse: {},
										EventRisk: {
											type: "structure",
											members: {
												RiskDecision: {},
												RiskLevel: {}
											}
										},
										ChallengeResponses: {
											type: "list",
											member: {
												type: "structure",
												members: {
													ChallengeName: {},
													ChallengeResponse: {}
												}
											}
										},
										EventContextData: {
											type: "structure",
											members: {
												IpAddress: {},
												DeviceName: {},
												Timezone: {},
												City: {},
												Country: {}
											}
										},
										EventFeedback: {
											type: "structure",
											required: ["FeedbackValue", "Provider"],
											members: {
												FeedbackValue: {},
												Provider: {},
												FeedbackDate: {
													type: "timestamp"
												}
											}
										}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				AdminRemoveUserFromGroup: {
					input: {
						type: "structure",
						required: ["UserPoolId", "Username", "GroupName"],
						members: {
							UserPoolId: {},
							Username: {
								shape: "Sd"
							},
							GroupName: {}
						}
					}
				},
				AdminResetUserPassword: {
					input: {
						type: "structure",
						required: ["UserPoolId", "Username"],
						members: {
							UserPoolId: {},
							Username: {
								shape: "Sd"
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				AdminRespondToAuthChallenge: {
					input: {
						type: "structure",
						required: ["UserPoolId", "ClientId", "ChallengeName"],
						members: {
							UserPoolId: {},
							ClientId: {
								shape: "S1i"
							},
							ChallengeName: {},
							ChallengeResponses: {
								shape: "S2x"
							},
							Session: {},
							AnalyticsMetadata: {
								shape: "S1m"
							},
							ContextData: {
								shape: "S1n"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ChallengeName: {},
							Session: {},
							ChallengeParameters: {
								shape: "S1t"
							},
							AuthenticationResult: {
								shape: "S1u"
							}
						}
					}
				},
				AdminSetUserMFAPreference: {
					input: {
						type: "structure",
						required: ["Username", "UserPoolId"],
						members: {
							SMSMfaSettings: {
								shape: "S30"
							},
							SoftwareTokenMfaSettings: {
								shape: "S31"
							},
							Username: {
								shape: "Sd"
							},
							UserPoolId: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				AdminSetUserSettings: {
					input: {
						type: "structure",
						required: ["UserPoolId", "Username", "MFAOptions"],
						members: {
							UserPoolId: {},
							Username: {
								shape: "Sd"
							},
							MFAOptions: {
								shape: "Sv"
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				AdminUpdateAuthEventFeedback: {
					input: {
						type: "structure",
						required: ["UserPoolId", "Username", "EventId", "FeedbackValue"],
						members: {
							UserPoolId: {},
							Username: {
								shape: "Sd"
							},
							EventId: {},
							FeedbackValue: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				AdminUpdateDeviceStatus: {
					input: {
						type: "structure",
						required: ["UserPoolId", "Username", "DeviceKey"],
						members: {
							UserPoolId: {},
							Username: {
								shape: "Sd"
							},
							DeviceKey: {},
							DeviceRememberedStatus: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				AdminUpdateUserAttributes: {
					input: {
						type: "structure",
						required: ["UserPoolId", "Username", "UserAttributes"],
						members: {
							UserPoolId: {},
							Username: {
								shape: "Sd"
							},
							UserAttributes: {
								shape: "Si"
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				AdminUserGlobalSignOut: {
					input: {
						type: "structure",
						required: ["UserPoolId", "Username"],
						members: {
							UserPoolId: {},
							Username: {
								shape: "Sd"
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				AssociateSoftwareToken: {
					input: {
						type: "structure",
						members: {
							AccessToken: {
								shape: "S1v"
							},
							Session: {}
						}
					},
					output: {
						type: "structure",
						members: {
							SecretCode: {
								type: "string",
								sensitive: !0
							},
							Session: {}
						}
					}
				},
				ChangePassword: {
					input: {
						type: "structure",
						required: ["PreviousPassword", "ProposedPassword", "AccessToken"],
						members: {
							PreviousPassword: {
								shape: "Sm"
							},
							ProposedPassword: {
								shape: "Sm"
							},
							AccessToken: {
								shape: "S1v"
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					},
					authtype: "none"
				},
				ConfirmDevice: {
					input: {
						type: "structure",
						required: ["AccessToken", "DeviceKey"],
						members: {
							AccessToken: {
								shape: "S1v"
							},
							DeviceKey: {},
							DeviceSecretVerifierConfig: {
								type: "structure",
								members: {
									PasswordVerifier: {},
									Salt: {}
								}
							},
							DeviceName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							UserConfirmationNecessary: {
								type: "boolean"
							}
						}
					}
				},
				ConfirmForgotPassword: {
					input: {
						type: "structure",
						required: ["ClientId", "Username", "ConfirmationCode", "Password"],
						members: {
							ClientId: {
								shape: "S1i"
							},
							SecretHash: {
								shape: "S3p"
							},
							Username: {
								shape: "Sd"
							},
							ConfirmationCode: {},
							Password: {
								shape: "Sm"
							},
							AnalyticsMetadata: {
								shape: "S1m"
							},
							UserContextData: {
								shape: "S3r"
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					},
					authtype: "none"
				},
				ConfirmSignUp: {
					input: {
						type: "structure",
						required: ["ClientId", "Username", "ConfirmationCode"],
						members: {
							ClientId: {
								shape: "S1i"
							},
							SecretHash: {
								shape: "S3p"
							},
							Username: {
								shape: "Sd"
							},
							ConfirmationCode: {},
							ForceAliasCreation: {
								type: "boolean"
							},
							AnalyticsMetadata: {
								shape: "S1m"
							},
							UserContextData: {
								shape: "S3r"
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					},
					authtype: "none"
				},
				CreateGroup: {
					input: {
						type: "structure",
						required: ["GroupName", "UserPoolId"],
						members: {
							GroupName: {},
							UserPoolId: {},
							Description: {},
							RoleArn: {},
							Precedence: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Group: {
								shape: "S29"
							}
						}
					}
				},
				CreateIdentityProvider: {
					input: {
						type: "structure",
						required: ["UserPoolId", "ProviderName", "ProviderType", "ProviderDetails"],
						members: {
							UserPoolId: {},
							ProviderName: {},
							ProviderType: {},
							ProviderDetails: {
								shape: "S40"
							},
							AttributeMapping: {
								shape: "S41"
							},
							IdpIdentifiers: {
								shape: "S43"
							}
						}
					},
					output: {
						type: "structure",
						required: ["IdentityProvider"],
						members: {
							IdentityProvider: {
								shape: "S46"
							}
						}
					}
				},
				CreateResourceServer: {
					input: {
						type: "structure",
						required: ["UserPoolId", "Identifier", "Name"],
						members: {
							UserPoolId: {},
							Identifier: {},
							Name: {},
							Scopes: {
								shape: "S4a"
							}
						}
					},
					output: {
						type: "structure",
						required: ["ResourceServer"],
						members: {
							ResourceServer: {
								shape: "S4f"
							}
						}
					}
				},
				CreateUserImportJob: {
					input: {
						type: "structure",
						required: ["JobName", "UserPoolId", "CloudWatchLogsRoleArn"],
						members: {
							JobName: {},
							UserPoolId: {},
							CloudWatchLogsRoleArn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							UserImportJob: {
								shape: "S4j"
							}
						}
					}
				},
				CreateUserPool: {
					input: {
						type: "structure",
						required: ["PoolName"],
						members: {
							PoolName: {},
							Policies: {
								shape: "S4r"
							},
							LambdaConfig: {
								shape: "S4u"
							},
							AutoVerifiedAttributes: {
								shape: "S4v"
							},
							AliasAttributes: {
								shape: "S4x"
							},
							UsernameAttributes: {
								shape: "S4z"
							},
							SmsVerificationMessage: {},
							EmailVerificationMessage: {},
							EmailVerificationSubject: {},
							VerificationMessageTemplate: {
								shape: "S54"
							},
							SmsAuthenticationMessage: {},
							MfaConfiguration: {},
							DeviceConfiguration: {
								shape: "S59"
							},
							EmailConfiguration: {
								shape: "S5a"
							},
							SmsConfiguration: {
								shape: "S5c"
							},
							UserPoolTags: {
								shape: "S5d"
							},
							AdminCreateUserConfig: {
								shape: "S5e"
							},
							Schema: {
								shape: "S5h"
							},
							UserPoolAddOns: {
								shape: "S5i"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							UserPool: {
								shape: "S5l"
							}
						}
					}
				},
				CreateUserPoolClient: {
					input: {
						type: "structure",
						required: ["UserPoolId", "ClientName"],
						members: {
							UserPoolId: {},
							ClientName: {},
							GenerateSecret: {
								type: "boolean"
							},
							RefreshTokenValidity: {
								type: "integer"
							},
							ReadAttributes: {
								shape: "S5s"
							},
							WriteAttributes: {
								shape: "S5s"
							},
							ExplicitAuthFlows: {
								shape: "S5u"
							},
							SupportedIdentityProviders: {
								shape: "S5w"
							},
							CallbackURLs: {
								shape: "S5x"
							},
							LogoutURLs: {
								shape: "S5z"
							},
							DefaultRedirectURI: {},
							AllowedOAuthFlows: {
								shape: "S60"
							},
							AllowedOAuthScopes: {
								shape: "S62"
							},
							AllowedOAuthFlowsUserPoolClient: {
								type: "boolean"
							},
							AnalyticsConfiguration: {
								shape: "S64"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							UserPoolClient: {
								shape: "S67"
							}
						}
					}
				},
				CreateUserPoolDomain: {
					input: {
						type: "structure",
						required: ["Domain", "UserPoolId"],
						members: {
							Domain: {},
							UserPoolId: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				DeleteGroup: {
					input: {
						type: "structure",
						required: ["GroupName", "UserPoolId"],
						members: {
							GroupName: {},
							UserPoolId: {}
						}
					}
				},
				DeleteIdentityProvider: {
					input: {
						type: "structure",
						required: ["UserPoolId", "ProviderName"],
						members: {
							UserPoolId: {},
							ProviderName: {}
						}
					}
				},
				DeleteResourceServer: {
					input: {
						type: "structure",
						required: ["UserPoolId", "Identifier"],
						members: {
							UserPoolId: {},
							Identifier: {}
						}
					}
				},
				DeleteUser: {
					input: {
						type: "structure",
						required: ["AccessToken"],
						members: {
							AccessToken: {
								shape: "S1v"
							}
						}
					},
					authtype: "none"
				},
				DeleteUserAttributes: {
					input: {
						type: "structure",
						required: ["UserAttributeNames", "AccessToken"],
						members: {
							UserAttributeNames: {
								shape: "Sz"
							},
							AccessToken: {
								shape: "S1v"
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					},
					authtype: "none"
				},
				DeleteUserPool: {
					input: {
						type: "structure",
						required: ["UserPoolId"],
						members: {
							UserPoolId: {}
						}
					}
				},
				DeleteUserPoolClient: {
					input: {
						type: "structure",
						required: ["UserPoolId", "ClientId"],
						members: {
							UserPoolId: {},
							ClientId: {
								shape: "S1i"
							}
						}
					}
				},
				DeleteUserPoolDomain: {
					input: {
						type: "structure",
						required: ["Domain", "UserPoolId"],
						members: {
							Domain: {},
							UserPoolId: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				DescribeIdentityProvider: {
					input: {
						type: "structure",
						required: ["UserPoolId", "ProviderName"],
						members: {
							UserPoolId: {},
							ProviderName: {}
						}
					},
					output: {
						type: "structure",
						required: ["IdentityProvider"],
						members: {
							IdentityProvider: {
								shape: "S46"
							}
						}
					}
				},
				DescribeResourceServer: {
					input: {
						type: "structure",
						required: ["UserPoolId", "Identifier"],
						members: {
							UserPoolId: {},
							Identifier: {}
						}
					},
					output: {
						type: "structure",
						required: ["ResourceServer"],
						members: {
							ResourceServer: {
								shape: "S4f"
							}
						}
					}
				},
				DescribeRiskConfiguration: {
					input: {
						type: "structure",
						required: ["UserPoolId"],
						members: {
							UserPoolId: {},
							ClientId: {
								shape: "S1i"
							}
						}
					},
					output: {
						type: "structure",
						required: ["RiskConfiguration"],
						members: {
							RiskConfiguration: {
								shape: "S6r"
							}
						}
					}
				},
				DescribeUserImportJob: {
					input: {
						type: "structure",
						required: ["UserPoolId", "JobId"],
						members: {
							UserPoolId: {},
							JobId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							UserImportJob: {
								shape: "S4j"
							}
						}
					}
				},
				DescribeUserPool: {
					input: {
						type: "structure",
						required: ["UserPoolId"],
						members: {
							UserPoolId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							UserPool: {
								shape: "S5l"
							}
						}
					}
				},
				DescribeUserPoolClient: {
					input: {
						type: "structure",
						required: ["UserPoolId", "ClientId"],
						members: {
							UserPoolId: {},
							ClientId: {
								shape: "S1i"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							UserPoolClient: {
								shape: "S67"
							}
						}
					}
				},
				DescribeUserPoolDomain: {
					input: {
						type: "structure",
						required: ["Domain"],
						members: {
							Domain: {}
						}
					},
					output: {
						type: "structure",
						members: {
							DomainDescription: {
								type: "structure",
								members: {
									UserPoolId: {},
									AWSAccountId: {},
									Domain: {},
									S3Bucket: {},
									CloudFrontDistribution: {},
									Version: {},
									Status: {}
								}
							}
						}
					}
				},
				ForgetDevice: {
					input: {
						type: "structure",
						required: ["DeviceKey"],
						members: {
							AccessToken: {
								shape: "S1v"
							},
							DeviceKey: {}
						}
					}
				},
				ForgotPassword: {
					input: {
						type: "structure",
						required: ["ClientId", "Username"],
						members: {
							ClientId: {
								shape: "S1i"
							},
							SecretHash: {
								shape: "S3p"
							},
							UserContextData: {
								shape: "S3r"
							},
							Username: {
								shape: "Sd"
							},
							AnalyticsMetadata: {
								shape: "S1m"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							CodeDeliveryDetails: {
								shape: "S7p"
							}
						}
					},
					authtype: "none"
				},
				GetCSVHeader: {
					input: {
						type: "structure",
						required: ["UserPoolId"],
						members: {
							UserPoolId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							UserPoolId: {},
							CSVHeader: {
								type: "list",
								member: {}
							}
						}
					}
				},
				GetDevice: {
					input: {
						type: "structure",
						required: ["DeviceKey"],
						members: {
							DeviceKey: {},
							AccessToken: {
								shape: "S1v"
							}
						}
					},
					output: {
						type: "structure",
						required: ["Device"],
						members: {
							Device: {
								shape: "S1d"
							}
						}
					}
				},
				GetGroup: {
					input: {
						type: "structure",
						required: ["GroupName", "UserPoolId"],
						members: {
							GroupName: {},
							UserPoolId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Group: {
								shape: "S29"
							}
						}
					}
				},
				GetIdentityProviderByIdentifier: {
					input: {
						type: "structure",
						required: ["UserPoolId", "IdpIdentifier"],
						members: {
							UserPoolId: {},
							IdpIdentifier: {}
						}
					},
					output: {
						type: "structure",
						required: ["IdentityProvider"],
						members: {
							IdentityProvider: {
								shape: "S46"
							}
						}
					}
				},
				GetSigningCertificate: {
					input: {
						type: "structure",
						required: ["UserPoolId"],
						members: {
							UserPoolId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Certificate: {}
						}
					}
				},
				GetUICustomization: {
					input: {
						type: "structure",
						required: ["UserPoolId"],
						members: {
							UserPoolId: {},
							ClientId: {
								shape: "S1i"
							}
						}
					},
					output: {
						type: "structure",
						required: ["UICustomization"],
						members: {
							UICustomization: {
								shape: "S83"
							}
						}
					}
				},
				GetUser: {
					input: {
						type: "structure",
						required: ["AccessToken"],
						members: {
							AccessToken: {
								shape: "S1v"
							}
						}
					},
					output: {
						type: "structure",
						required: ["Username", "UserAttributes"],
						members: {
							Username: {
								shape: "Sd"
							},
							UserAttributes: {
								shape: "Si"
							},
							MFAOptions: {
								shape: "Sv"
							},
							PreferredMfaSetting: {},
							UserMFASettingList: {
								shape: "S1g"
							}
						}
					},
					authtype: "none"
				},
				GetUserAttributeVerificationCode: {
					input: {
						type: "structure",
						required: ["AccessToken", "AttributeName"],
						members: {
							AccessToken: {
								shape: "S1v"
							},
							AttributeName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							CodeDeliveryDetails: {
								shape: "S7p"
							}
						}
					},
					authtype: "none"
				},
				GetUserPoolMfaConfig: {
					input: {
						type: "structure",
						required: ["UserPoolId"],
						members: {
							UserPoolId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							SmsMfaConfiguration: {
								shape: "S8d"
							},
							SoftwareTokenMfaConfiguration: {
								shape: "S8e"
							},
							MfaConfiguration: {}
						}
					}
				},
				GlobalSignOut: {
					input: {
						type: "structure",
						required: ["AccessToken"],
						members: {
							AccessToken: {
								shape: "S1v"
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				InitiateAuth: {
					input: {
						type: "structure",
						required: ["AuthFlow", "ClientId"],
						members: {
							AuthFlow: {},
							AuthParameters: {
								shape: "S1k"
							},
							ClientMetadata: {
								shape: "S1l"
							},
							ClientId: {
								shape: "S1i"
							},
							AnalyticsMetadata: {
								shape: "S1m"
							},
							UserContextData: {
								shape: "S3r"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ChallengeName: {},
							Session: {},
							ChallengeParameters: {
								shape: "S1t"
							},
							AuthenticationResult: {
								shape: "S1u"
							}
						}
					}
				},
				ListDevices: {
					input: {
						type: "structure",
						required: ["AccessToken"],
						members: {
							AccessToken: {
								shape: "S1v"
							},
							Limit: {
								type: "integer"
							},
							PaginationToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Devices: {
								shape: "S24"
							},
							PaginationToken: {}
						}
					}
				},
				ListGroups: {
					input: {
						type: "structure",
						required: ["UserPoolId"],
						members: {
							UserPoolId: {},
							Limit: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Groups: {
								shape: "S28"
							},
							NextToken: {}
						}
					}
				},
				ListIdentityProviders: {
					input: {
						type: "structure",
						required: ["UserPoolId"],
						members: {
							UserPoolId: {},
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						required: ["Providers"],
						members: {
							Providers: {
								type: "list",
								member: {
									type: "structure",
									members: {
										ProviderName: {},
										ProviderType: {},
										LastModifiedDate: {
											type: "timestamp"
										},
										CreationDate: {
											type: "timestamp"
										}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				ListResourceServers: {
					input: {
						type: "structure",
						required: ["UserPoolId"],
						members: {
							UserPoolId: {},
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						required: ["ResourceServers"],
						members: {
							ResourceServers: {
								type: "list",
								member: {
									shape: "S4f"
								}
							},
							NextToken: {}
						}
					}
				},
				ListUserImportJobs: {
					input: {
						type: "structure",
						required: ["UserPoolId", "MaxResults"],
						members: {
							UserPoolId: {},
							MaxResults: {
								type: "integer"
							},
							PaginationToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							UserImportJobs: {
								type: "list",
								member: {
									shape: "S4j"
								}
							},
							PaginationToken: {}
						}
					}
				},
				ListUserPoolClients: {
					input: {
						type: "structure",
						required: ["UserPoolId"],
						members: {
							UserPoolId: {},
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							UserPoolClients: {
								type: "list",
								member: {
									type: "structure",
									members: {
										ClientId: {
											shape: "S1i"
										},
										UserPoolId: {},
										ClientName: {}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				ListUserPools: {
					input: {
						type: "structure",
						required: ["MaxResults"],
						members: {
							NextToken: {},
							MaxResults: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							UserPools: {
								type: "list",
								member: {
									type: "structure",
									members: {
										Id: {},
										Name: {},
										LambdaConfig: {
											shape: "S4u"
										},
										Status: {},
										LastModifiedDate: {
											type: "timestamp"
										},
										CreationDate: {
											type: "timestamp"
										}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				ListUsers: {
					input: {
						type: "structure",
						required: ["UserPoolId"],
						members: {
							UserPoolId: {},
							AttributesToGet: {
								type: "list",
								member: {}
							},
							Limit: {
								type: "integer"
							},
							PaginationToken: {},
							Filter: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Users: {
								shape: "S9e"
							},
							PaginationToken: {}
						}
					}
				},
				ListUsersInGroup: {
					input: {
						type: "structure",
						required: ["UserPoolId", "GroupName"],
						members: {
							UserPoolId: {},
							GroupName: {},
							Limit: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Users: {
								shape: "S9e"
							},
							NextToken: {}
						}
					}
				},
				ResendConfirmationCode: {
					input: {
						type: "structure",
						required: ["ClientId", "Username"],
						members: {
							ClientId: {
								shape: "S1i"
							},
							SecretHash: {
								shape: "S3p"
							},
							UserContextData: {
								shape: "S3r"
							},
							Username: {
								shape: "Sd"
							},
							AnalyticsMetadata: {
								shape: "S1m"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							CodeDeliveryDetails: {
								shape: "S7p"
							}
						}
					},
					authtype: "none"
				},
				RespondToAuthChallenge: {
					input: {
						type: "structure",
						required: ["ClientId", "ChallengeName"],
						members: {
							ClientId: {
								shape: "S1i"
							},
							ChallengeName: {},
							Session: {},
							ChallengeResponses: {
								shape: "S2x"
							},
							AnalyticsMetadata: {
								shape: "S1m"
							},
							UserContextData: {
								shape: "S3r"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ChallengeName: {},
							Session: {},
							ChallengeParameters: {
								shape: "S1t"
							},
							AuthenticationResult: {
								shape: "S1u"
							}
						}
					}
				},
				SetRiskConfiguration: {
					input: {
						type: "structure",
						required: ["UserPoolId"],
						members: {
							UserPoolId: {},
							ClientId: {
								shape: "S1i"
							},
							CompromisedCredentialsRiskConfiguration: {
								shape: "S6s"
							},
							AccountTakeoverRiskConfiguration: {
								shape: "S6x"
							},
							RiskExceptionConfiguration: {
								shape: "S76"
							}
						}
					},
					output: {
						type: "structure",
						required: ["RiskConfiguration"],
						members: {
							RiskConfiguration: {
								shape: "S6r"
							}
						}
					}
				},
				SetUICustomization: {
					input: {
						type: "structure",
						required: ["UserPoolId"],
						members: {
							UserPoolId: {},
							ClientId: {
								shape: "S1i"
							},
							CSS: {},
							ImageFile: {
								type: "blob"
							}
						}
					},
					output: {
						type: "structure",
						required: ["UICustomization"],
						members: {
							UICustomization: {
								shape: "S83"
							}
						}
					}
				},
				SetUserMFAPreference: {
					input: {
						type: "structure",
						required: ["AccessToken"],
						members: {
							SMSMfaSettings: {
								shape: "S30"
							},
							SoftwareTokenMfaSettings: {
								shape: "S31"
							},
							AccessToken: {
								shape: "S1v"
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				SetUserPoolMfaConfig: {
					input: {
						type: "structure",
						required: ["UserPoolId"],
						members: {
							UserPoolId: {},
							SmsMfaConfiguration: {
								shape: "S8d"
							},
							SoftwareTokenMfaConfiguration: {
								shape: "S8e"
							},
							MfaConfiguration: {}
						}
					},
					output: {
						type: "structure",
						members: {
							SmsMfaConfiguration: {
								shape: "S8d"
							},
							SoftwareTokenMfaConfiguration: {
								shape: "S8e"
							},
							MfaConfiguration: {}
						}
					}
				},
				SetUserSettings: {
					input: {
						type: "structure",
						required: ["AccessToken", "MFAOptions"],
						members: {
							AccessToken: {
								shape: "S1v"
							},
							MFAOptions: {
								shape: "Sv"
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					},
					authtype: "none"
				},
				SignUp: {
					input: {
						type: "structure",
						required: ["ClientId", "Username", "Password"],
						members: {
							ClientId: {
								shape: "S1i"
							},
							SecretHash: {
								shape: "S3p"
							},
							Username: {
								shape: "Sd"
							},
							Password: {
								shape: "Sm"
							},
							UserAttributes: {
								shape: "Si"
							},
							ValidationData: {
								shape: "Si"
							},
							AnalyticsMetadata: {
								shape: "S1m"
							},
							UserContextData: {
								shape: "S3r"
							}
						}
					},
					output: {
						type: "structure",
						required: ["UserConfirmed", "UserSub"],
						members: {
							UserConfirmed: {
								type: "boolean"
							},
							CodeDeliveryDetails: {
								shape: "S7p"
							},
							UserSub: {}
						}
					},
					authtype: "none"
				},
				StartUserImportJob: {
					input: {
						type: "structure",
						required: ["UserPoolId", "JobId"],
						members: {
							UserPoolId: {},
							JobId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							UserImportJob: {
								shape: "S4j"
							}
						}
					}
				},
				StopUserImportJob: {
					input: {
						type: "structure",
						required: ["UserPoolId", "JobId"],
						members: {
							UserPoolId: {},
							JobId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							UserImportJob: {
								shape: "S4j"
							}
						}
					}
				},
				UpdateAuthEventFeedback: {
					input: {
						type: "structure",
						required: ["UserPoolId", "Username", "EventId", "FeedbackToken", "FeedbackValue"],
						members: {
							UserPoolId: {},
							Username: {
								shape: "Sd"
							},
							EventId: {},
							FeedbackToken: {
								shape: "S1v"
							},
							FeedbackValue: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				UpdateDeviceStatus: {
					input: {
						type: "structure",
						required: ["AccessToken", "DeviceKey"],
						members: {
							AccessToken: {
								shape: "S1v"
							},
							DeviceKey: {},
							DeviceRememberedStatus: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				UpdateGroup: {
					input: {
						type: "structure",
						required: ["GroupName", "UserPoolId"],
						members: {
							GroupName: {},
							UserPoolId: {},
							Description: {},
							RoleArn: {},
							Precedence: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Group: {
								shape: "S29"
							}
						}
					}
				},
				UpdateIdentityProvider: {
					input: {
						type: "structure",
						required: ["UserPoolId", "ProviderName"],
						members: {
							UserPoolId: {},
							ProviderName: {},
							ProviderDetails: {
								shape: "S40"
							},
							AttributeMapping: {
								shape: "S41"
							},
							IdpIdentifiers: {
								shape: "S43"
							}
						}
					},
					output: {
						type: "structure",
						required: ["IdentityProvider"],
						members: {
							IdentityProvider: {
								shape: "S46"
							}
						}
					}
				},
				UpdateResourceServer: {
					input: {
						type: "structure",
						required: ["UserPoolId", "Identifier", "Name"],
						members: {
							UserPoolId: {},
							Identifier: {},
							Name: {},
							Scopes: {
								shape: "S4a"
							}
						}
					},
					output: {
						type: "structure",
						required: ["ResourceServer"],
						members: {
							ResourceServer: {
								shape: "S4f"
							}
						}
					}
				},
				UpdateUserAttributes: {
					input: {
						type: "structure",
						required: ["UserAttributes", "AccessToken"],
						members: {
							UserAttributes: {
								shape: "Si"
							},
							AccessToken: {
								shape: "S1v"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							CodeDeliveryDetailsList: {
								type: "list",
								member: {
									shape: "S7p"
								}
							}
						}
					},
					authtype: "none"
				},
				UpdateUserPool: {
					input: {
						type: "structure",
						required: ["UserPoolId"],
						members: {
							UserPoolId: {},
							Policies: {
								shape: "S4r"
							},
							LambdaConfig: {
								shape: "S4u"
							},
							AutoVerifiedAttributes: {
								shape: "S4v"
							},
							SmsVerificationMessage: {},
							EmailVerificationMessage: {},
							EmailVerificationSubject: {},
							VerificationMessageTemplate: {
								shape: "S54"
							},
							SmsAuthenticationMessage: {},
							MfaConfiguration: {},
							DeviceConfiguration: {
								shape: "S59"
							},
							EmailConfiguration: {
								shape: "S5a"
							},
							SmsConfiguration: {
								shape: "S5c"
							},
							UserPoolTags: {
								shape: "S5d"
							},
							AdminCreateUserConfig: {
								shape: "S5e"
							},
							UserPoolAddOns: {
								shape: "S5i"
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				UpdateUserPoolClient: {
					input: {
						type: "structure",
						required: ["UserPoolId", "ClientId"],
						members: {
							UserPoolId: {},
							ClientId: {
								shape: "S1i"
							},
							ClientName: {},
							RefreshTokenValidity: {
								type: "integer"
							},
							ReadAttributes: {
								shape: "S5s"
							},
							WriteAttributes: {
								shape: "S5s"
							},
							ExplicitAuthFlows: {
								shape: "S5u"
							},
							SupportedIdentityProviders: {
								shape: "S5w"
							},
							CallbackURLs: {
								shape: "S5x"
							},
							LogoutURLs: {
								shape: "S5z"
							},
							DefaultRedirectURI: {},
							AllowedOAuthFlows: {
								shape: "S60"
							},
							AllowedOAuthScopes: {
								shape: "S62"
							},
							AllowedOAuthFlowsUserPoolClient: {
								type: "boolean"
							},
							AnalyticsConfiguration: {
								shape: "S64"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							UserPoolClient: {
								shape: "S67"
							}
						}
					}
				},
				VerifySoftwareToken: {
					input: {
						type: "structure",
						required: ["UserCode"],
						members: {
							AccessToken: {
								shape: "S1v"
							},
							Session: {},
							UserCode: {},
							FriendlyDeviceName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Status: {},
							Session: {}
						}
					}
				},
				VerifyUserAttribute: {
					input: {
						type: "structure",
						required: ["AccessToken", "AttributeName", "Code"],
						members: {
							AccessToken: {
								shape: "S1v"
							},
							AttributeName: {},
							Code: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					},
					authtype: "none"
				}
			},
			shapes: {
				S4: {
					type: "structure",
					members: {
						Name: {},
						AttributeDataType: {},
						DeveloperOnlyAttribute: {
							type: "boolean"
						},
						Mutable: {
							type: "boolean"
						},
						Required: {
							type: "boolean"
						},
						NumberAttributeConstraints: {
							type: "structure",
							members: {
								MinValue: {},
								MaxValue: {}
							}
						},
						StringAttributeConstraints: {
							type: "structure",
							members: {
								MinLength: {},
								MaxLength: {}
							}
						}
					}
				},
				Sd: {
					type: "string",
					sensitive: !0
				},
				Si: {
					type: "list",
					member: {
						type: "structure",
						required: ["Name"],
						members: {
							Name: {},
							Value: {
								type: "string",
								sensitive: !0
							}
						}
					}
				},
				Sm: {
					type: "string",
					sensitive: !0
				},
				Ss: {
					type: "structure",
					members: {
						Username: {
							shape: "Sd"
						},
						Attributes: {
							shape: "Si"
						},
						UserCreateDate: {
							type: "timestamp"
						},
						UserLastModifiedDate: {
							type: "timestamp"
						},
						Enabled: {
							type: "boolean"
						},
						UserStatus: {},
						MFAOptions: {
							shape: "Sv"
						}
					}
				},
				Sv: {
					type: "list",
					member: {
						type: "structure",
						members: {
							DeliveryMedium: {},
							AttributeName: {}
						}
					}
				},
				Sz: {
					type: "list",
					member: {}
				},
				S12: {
					type: "structure",
					members: {
						ProviderName: {},
						ProviderAttributeName: {},
						ProviderAttributeValue: {}
					}
				},
				S1d: {
					type: "structure",
					members: {
						DeviceKey: {},
						DeviceAttributes: {
							shape: "Si"
						},
						DeviceCreateDate: {
							type: "timestamp"
						},
						DeviceLastModifiedDate: {
							type: "timestamp"
						},
						DeviceLastAuthenticatedDate: {
							type: "timestamp"
						}
					}
				},
				S1g: {
					type: "list",
					member: {}
				},
				S1i: {
					type: "string",
					sensitive: !0
				},
				S1k: {
					type: "map",
					key: {},
					value: {}
				},
				S1l: {
					type: "map",
					key: {},
					value: {}
				},
				S1m: {
					type: "structure",
					members: {
						AnalyticsEndpointId: {}
					}
				},
				S1n: {
					type: "structure",
					required: ["IpAddress", "ServerName", "ServerPath", "HttpHeaders"],
					members: {
						IpAddress: {},
						ServerName: {},
						ServerPath: {},
						HttpHeaders: {
							type: "list",
							member: {
								type: "structure",
								members: {
									headerName: {},
									headerValue: {}
								}
							}
						},
						EncodedData: {}
					}
				},
				S1t: {
					type: "map",
					key: {},
					value: {}
				},
				S1u: {
					type: "structure",
					members: {
						AccessToken: {
							shape: "S1v"
						},
						ExpiresIn: {
							type: "integer"
						},
						TokenType: {},
						RefreshToken: {
							shape: "S1v"
						},
						IdToken: {
							shape: "S1v"
						},
						NewDeviceMetadata: {
							type: "structure",
							members: {
								DeviceKey: {},
								DeviceGroupKey: {}
							}
						}
					}
				},
				S1v: {
					type: "string",
					sensitive: !0
				},
				S24: {
					type: "list",
					member: {
						shape: "S1d"
					}
				},
				S28: {
					type: "list",
					member: {
						shape: "S29"
					}
				},
				S29: {
					type: "structure",
					members: {
						GroupName: {},
						UserPoolId: {},
						Description: {},
						RoleArn: {},
						Precedence: {
							type: "integer"
						},
						LastModifiedDate: {
							type: "timestamp"
						},
						CreationDate: {
							type: "timestamp"
						}
					}
				},
				S2x: {
					type: "map",
					key: {},
					value: {}
				},
				S30: {
					type: "structure",
					members: {
						Enabled: {
							type: "boolean"
						},
						PreferredMfa: {
							type: "boolean"
						}
					}
				},
				S31: {
					type: "structure",
					members: {
						Enabled: {
							type: "boolean"
						},
						PreferredMfa: {
							type: "boolean"
						}
					}
				},
				S3p: {
					type: "string",
					sensitive: !0
				},
				S3r: {
					type: "structure",
					members: {
						EncodedData: {}
					}
				},
				S40: {
					type: "map",
					key: {},
					value: {}
				},
				S41: {
					type: "map",
					key: {},
					value: {}
				},
				S43: {
					type: "list",
					member: {}
				},
				S46: {
					type: "structure",
					members: {
						UserPoolId: {},
						ProviderName: {},
						ProviderType: {},
						ProviderDetails: {
							shape: "S40"
						},
						AttributeMapping: {
							shape: "S41"
						},
						IdpIdentifiers: {
							shape: "S43"
						},
						LastModifiedDate: {
							type: "timestamp"
						},
						CreationDate: {
							type: "timestamp"
						}
					}
				},
				S4a: {
					type: "list",
					member: {
						type: "structure",
						required: ["ScopeName", "ScopeDescription"],
						members: {
							ScopeName: {},
							ScopeDescription: {}
						}
					}
				},
				S4f: {
					type: "structure",
					members: {
						UserPoolId: {},
						Identifier: {},
						Name: {},
						Scopes: {
							shape: "S4a"
						}
					}
				},
				S4j: {
					type: "structure",
					members: {
						JobName: {},
						JobId: {},
						UserPoolId: {},
						PreSignedUrl: {},
						CreationDate: {
							type: "timestamp"
						},
						StartDate: {
							type: "timestamp"
						},
						CompletionDate: {
							type: "timestamp"
						},
						Status: {},
						CloudWatchLogsRoleArn: {},
						ImportedUsers: {
							type: "long"
						},
						SkippedUsers: {
							type: "long"
						},
						FailedUsers: {
							type: "long"
						},
						CompletionMessage: {}
					}
				},
				S4r: {
					type: "structure",
					members: {
						PasswordPolicy: {
							type: "structure",
							members: {
								MinimumLength: {
									type: "integer"
								},
								RequireUppercase: {
									type: "boolean"
								},
								RequireLowercase: {
									type: "boolean"
								},
								RequireNumbers: {
									type: "boolean"
								},
								RequireSymbols: {
									type: "boolean"
								}
							}
						}
					}
				},
				S4u: {
					type: "structure",
					members: {
						PreSignUp: {},
						CustomMessage: {},
						PostConfirmation: {},
						PreAuthentication: {},
						PostAuthentication: {},
						DefineAuthChallenge: {},
						CreateAuthChallenge: {},
						VerifyAuthChallengeResponse: {},
						PreTokenGeneration: {},
						UserMigration: {}
					}
				},
				S4v: {
					type: "list",
					member: {}
				},
				S4x: {
					type: "list",
					member: {}
				},
				S4z: {
					type: "list",
					member: {}
				},
				S54: {
					type: "structure",
					members: {
						SmsMessage: {},
						EmailMessage: {},
						EmailSubject: {},
						EmailMessageByLink: {},
						EmailSubjectByLink: {},
						DefaultEmailOption: {}
					}
				},
				S59: {
					type: "structure",
					members: {
						ChallengeRequiredOnNewDevice: {
							type: "boolean"
						},
						DeviceOnlyRememberedOnUserPrompt: {
							type: "boolean"
						}
					}
				},
				S5a: {
					type: "structure",
					members: {
						SourceArn: {},
						ReplyToEmailAddress: {}
					}
				},
				S5c: {
					type: "structure",
					required: ["SnsCallerArn"],
					members: {
						SnsCallerArn: {},
						ExternalId: {}
					}
				},
				S5d: {
					type: "map",
					key: {},
					value: {}
				},
				S5e: {
					type: "structure",
					members: {
						AllowAdminCreateUserOnly: {
							type: "boolean"
						},
						UnusedAccountValidityDays: {
							type: "integer"
						},
						InviteMessageTemplate: {
							type: "structure",
							members: {
								SMSMessage: {},
								EmailMessage: {},
								EmailSubject: {}
							}
						}
					}
				},
				S5h: {
					type: "list",
					member: {
						shape: "S4"
					}
				},
				S5i: {
					type: "structure",
					required: ["AdvancedSecurityMode"],
					members: {
						AdvancedSecurityMode: {}
					}
				},
				S5l: {
					type: "structure",
					members: {
						Id: {},
						Name: {},
						Policies: {
							shape: "S4r"
						},
						LambdaConfig: {
							shape: "S4u"
						},
						Status: {},
						LastModifiedDate: {
							type: "timestamp"
						},
						CreationDate: {
							type: "timestamp"
						},
						SchemaAttributes: {
							shape: "S5h"
						},
						AutoVerifiedAttributes: {
							shape: "S4v"
						},
						AliasAttributes: {
							shape: "S4x"
						},
						UsernameAttributes: {
							shape: "S4z"
						},
						SmsVerificationMessage: {},
						EmailVerificationMessage: {},
						EmailVerificationSubject: {},
						VerificationMessageTemplate: {
							shape: "S54"
						},
						SmsAuthenticationMessage: {},
						MfaConfiguration: {},
						DeviceConfiguration: {
							shape: "S59"
						},
						EstimatedNumberOfUsers: {
							type: "integer"
						},
						EmailConfiguration: {
							shape: "S5a"
						},
						SmsConfiguration: {
							shape: "S5c"
						},
						UserPoolTags: {
							shape: "S5d"
						},
						SmsConfigurationFailure: {},
						EmailConfigurationFailure: {},
						Domain: {},
						AdminCreateUserConfig: {
							shape: "S5e"
						},
						UserPoolAddOns: {
							shape: "S5i"
						}
					}
				},
				S5s: {
					type: "list",
					member: {}
				},
				S5u: {
					type: "list",
					member: {}
				},
				S5w: {
					type: "list",
					member: {}
				},
				S5x: {
					type: "list",
					member: {}
				},
				S5z: {
					type: "list",
					member: {}
				},
				S60: {
					type: "list",
					member: {}
				},
				S62: {
					type: "list",
					member: {}
				},
				S64: {
					type: "structure",
					required: ["ApplicationId", "RoleArn", "ExternalId"],
					members: {
						ApplicationId: {},
						RoleArn: {},
						ExternalId: {},
						UserDataShared: {
							type: "boolean"
						}
					}
				},
				S67: {
					type: "structure",
					members: {
						UserPoolId: {},
						ClientName: {},
						ClientId: {
							shape: "S1i"
						},
						ClientSecret: {
							type: "string",
							sensitive: !0
						},
						LastModifiedDate: {
							type: "timestamp"
						},
						CreationDate: {
							type: "timestamp"
						},
						RefreshTokenValidity: {
							type: "integer"
						},
						ReadAttributes: {
							shape: "S5s"
						},
						WriteAttributes: {
							shape: "S5s"
						},
						ExplicitAuthFlows: {
							shape: "S5u"
						},
						SupportedIdentityProviders: {
							shape: "S5w"
						},
						CallbackURLs: {
							shape: "S5x"
						},
						LogoutURLs: {
							shape: "S5z"
						},
						DefaultRedirectURI: {},
						AllowedOAuthFlows: {
							shape: "S60"
						},
						AllowedOAuthScopes: {
							shape: "S62"
						},
						AllowedOAuthFlowsUserPoolClient: {
							type: "boolean"
						},
						AnalyticsConfiguration: {
							shape: "S64"
						}
					}
				},
				S6r: {
					type: "structure",
					members: {
						UserPoolId: {},
						ClientId: {
							shape: "S1i"
						},
						CompromisedCredentialsRiskConfiguration: {
							shape: "S6s"
						},
						AccountTakeoverRiskConfiguration: {
							shape: "S6x"
						},
						RiskExceptionConfiguration: {
							shape: "S76"
						},
						LastModifiedDate: {
							type: "timestamp"
						}
					}
				},
				S6s: {
					type: "structure",
					required: ["Actions"],
					members: {
						EventFilter: {
							type: "list",
							member: {}
						},
						Actions: {
							type: "structure",
							required: ["EventAction"],
							members: {
								EventAction: {}
							}
						}
					}
				},
				S6x: {
					type: "structure",
					required: ["Actions"],
					members: {
						NotifyConfiguration: {
							type: "structure",
							required: ["SourceArn"],
							members: {
								From: {},
								ReplyTo: {},
								SourceArn: {},
								BlockEmail: {
									shape: "S6z"
								},
								NoActionEmail: {
									shape: "S6z"
								},
								MfaEmail: {
									shape: "S6z"
								}
							}
						},
						Actions: {
							type: "structure",
							members: {
								LowAction: {
									shape: "S73"
								},
								MediumAction: {
									shape: "S73"
								},
								HighAction: {
									shape: "S73"
								}
							}
						}
					}
				},
				S6z: {
					type: "structure",
					required: ["Subject"],
					members: {
						Subject: {},
						HtmlBody: {},
						TextBody: {}
					}
				},
				S73: {
					type: "structure",
					required: ["Notify", "EventAction"],
					members: {
						Notify: {
							type: "boolean"
						},
						EventAction: {}
					}
				},
				S76: {
					type: "structure",
					members: {
						BlockedIPRangeList: {
							type: "list",
							member: {}
						},
						SkippedIPRangeList: {
							type: "list",
							member: {}
						}
					}
				},
				S7p: {
					type: "structure",
					members: {
						Destination: {},
						DeliveryMedium: {},
						AttributeName: {}
					}
				},
				S83: {
					type: "structure",
					members: {
						UserPoolId: {},
						ClientId: {
							shape: "S1i"
						},
						ImageUrl: {},
						CSS: {},
						CSSVersion: {},
						LastModifiedDate: {
							type: "timestamp"
						},
						CreationDate: {
							type: "timestamp"
						}
					}
				},
				S8d: {
					type: "structure",
					members: {
						SmsAuthenticationMessage: {},
						SmsConfiguration: {
							shape: "S5c"
						}
					}
				},
				S8e: {
					type: "structure",
					members: {
						Enabled: {
							type: "boolean"
						}
					}
				},
				S9e: {
					type: "list",
					member: {
						shape: "Ss"
					}
				}
			}
		}
	}, {}],
	37: [function(e, t, r) {
		arguments[4][22][0].apply(r, arguments)
	}, {
		dup: 22
	}],
	38: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2014-06-30",
				endpointPrefix: "cognito-sync",
				jsonVersion: "1.1",
				serviceFullName: "Amazon Cognito Sync",
				signatureVersion: "v4",
				protocol: "rest-json",
				uid: "cognito-sync-2014-06-30"
			},
			operations: {
				BulkPublish: {
					http: {
						requestUri: "/identitypools/{IdentityPoolId}/bulkpublish",
						responseCode: 200
					},
					input: {
						type: "structure",
						required: ["IdentityPoolId"],
						members: {
							IdentityPoolId: {
								location: "uri",
								locationName: "IdentityPoolId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							IdentityPoolId: {}
						}
					}
				},
				DeleteDataset: {
					http: {
						method: "DELETE",
						requestUri: "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}",
						responseCode: 200
					},
					input: {
						type: "structure",
						required: ["IdentityPoolId", "IdentityId", "DatasetName"],
						members: {
							IdentityPoolId: {
								location: "uri",
								locationName: "IdentityPoolId"
							},
							IdentityId: {
								location: "uri",
								locationName: "IdentityId"
							},
							DatasetName: {
								location: "uri",
								locationName: "DatasetName"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Dataset: {
								shape: "S8"
							}
						}
					}
				},
				DescribeDataset: {
					http: {
						method: "GET",
						requestUri: "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}",
						responseCode: 200
					},
					input: {
						type: "structure",
						required: ["IdentityPoolId", "IdentityId", "DatasetName"],
						members: {
							IdentityPoolId: {
								location: "uri",
								locationName: "IdentityPoolId"
							},
							IdentityId: {
								location: "uri",
								locationName: "IdentityId"
							},
							DatasetName: {
								location: "uri",
								locationName: "DatasetName"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Dataset: {
								shape: "S8"
							}
						}
					}
				},
				DescribeIdentityPoolUsage: {
					http: {
						method: "GET",
						requestUri: "/identitypools/{IdentityPoolId}",
						responseCode: 200
					},
					input: {
						type: "structure",
						required: ["IdentityPoolId"],
						members: {
							IdentityPoolId: {
								location: "uri",
								locationName: "IdentityPoolId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							IdentityPoolUsage: {
								shape: "Sg"
							}
						}
					}
				},
				DescribeIdentityUsage: {
					http: {
						method: "GET",
						requestUri: "/identitypools/{IdentityPoolId}/identities/{IdentityId}",
						responseCode: 200
					},
					input: {
						type: "structure",
						required: ["IdentityPoolId", "IdentityId"],
						members: {
							IdentityPoolId: {
								location: "uri",
								locationName: "IdentityPoolId"
							},
							IdentityId: {
								location: "uri",
								locationName: "IdentityId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							IdentityUsage: {
								type: "structure",
								members: {
									IdentityId: {},
									IdentityPoolId: {},
									LastModifiedDate: {
										type: "timestamp"
									},
									DatasetCount: {
										type: "integer"
									},
									DataStorage: {
										type: "long"
									}
								}
							}
						}
					}
				},
				GetBulkPublishDetails: {
					http: {
						requestUri: "/identitypools/{IdentityPoolId}/getBulkPublishDetails",
						responseCode: 200
					},
					input: {
						type: "structure",
						required: ["IdentityPoolId"],
						members: {
							IdentityPoolId: {
								location: "uri",
								locationName: "IdentityPoolId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							IdentityPoolId: {},
							BulkPublishStartTime: {
								type: "timestamp"
							},
							BulkPublishCompleteTime: {
								type: "timestamp"
							},
							BulkPublishStatus: {},
							FailureMessage: {}
						}
					}
				},
				GetCognitoEvents: {
					http: {
						method: "GET",
						requestUri: "/identitypools/{IdentityPoolId}/events",
						responseCode: 200
					},
					input: {
						type: "structure",
						required: ["IdentityPoolId"],
						members: {
							IdentityPoolId: {
								location: "uri",
								locationName: "IdentityPoolId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Events: {
								shape: "Sq"
							}
						}
					}
				},
				GetIdentityPoolConfiguration: {
					http: {
						method: "GET",
						requestUri: "/identitypools/{IdentityPoolId}/configuration",
						responseCode: 200
					},
					input: {
						type: "structure",
						required: ["IdentityPoolId"],
						members: {
							IdentityPoolId: {
								location: "uri",
								locationName: "IdentityPoolId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							IdentityPoolId: {},
							PushSync: {
								shape: "Sv"
							},
							CognitoStreams: {
								shape: "Sz"
							}
						}
					}
				},
				ListDatasets: {
					http: {
						method: "GET",
						requestUri: "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets",
						responseCode: 200
					},
					input: {
						type: "structure",
						required: ["IdentityId", "IdentityPoolId"],
						members: {
							IdentityPoolId: {
								location: "uri",
								locationName: "IdentityPoolId"
							},
							IdentityId: {
								location: "uri",
								locationName: "IdentityId"
							},
							NextToken: {
								location: "querystring",
								locationName: "nextToken"
							},
							MaxResults: {
								location: "querystring",
								locationName: "maxResults",
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Datasets: {
								type: "list",
								member: {
									shape: "S8"
								}
							},
							Count: {
								type: "integer"
							},
							NextToken: {}
						}
					}
				},
				ListIdentityPoolUsage: {
					http: {
						method: "GET",
						requestUri: "/identitypools",
						responseCode: 200
					},
					input: {
						type: "structure",
						members: {
							NextToken: {
								location: "querystring",
								locationName: "nextToken"
							},
							MaxResults: {
								location: "querystring",
								locationName: "maxResults",
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							IdentityPoolUsages: {
								type: "list",
								member: {
									shape: "Sg"
								}
							},
							MaxResults: {
								type: "integer"
							},
							Count: {
								type: "integer"
							},
							NextToken: {}
						}
					}
				},
				ListRecords: {
					http: {
						method: "GET",
						requestUri: "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/records",
						responseCode: 200
					},
					input: {
						type: "structure",
						required: ["IdentityPoolId", "IdentityId", "DatasetName"],
						members: {
							IdentityPoolId: {
								location: "uri",
								locationName: "IdentityPoolId"
							},
							IdentityId: {
								location: "uri",
								locationName: "IdentityId"
							},
							DatasetName: {
								location: "uri",
								locationName: "DatasetName"
							},
							LastSyncCount: {
								location: "querystring",
								locationName: "lastSyncCount",
								type: "long"
							},
							NextToken: {
								location: "querystring",
								locationName: "nextToken"
							},
							MaxResults: {
								location: "querystring",
								locationName: "maxResults",
								type: "integer"
							},
							SyncSessionToken: {
								location: "querystring",
								locationName: "syncSessionToken"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Records: {
								shape: "S1c"
							},
							NextToken: {},
							Count: {
								type: "integer"
							},
							DatasetSyncCount: {
								type: "long"
							},
							LastModifiedBy: {},
							MergedDatasetNames: {
								type: "list",
								member: {}
							},
							DatasetExists: {
								type: "boolean"
							},
							DatasetDeletedAfterRequestedSyncCount: {
								type: "boolean"
							},
							SyncSessionToken: {}
						}
					}
				},
				RegisterDevice: {
					http: {
						requestUri: "/identitypools/{IdentityPoolId}/identity/{IdentityId}/device",
						responseCode: 200
					},
					input: {
						type: "structure",
						required: ["IdentityPoolId", "IdentityId", "Platform", "Token"],
						members: {
							IdentityPoolId: {
								location: "uri",
								locationName: "IdentityPoolId"
							},
							IdentityId: {
								location: "uri",
								locationName: "IdentityId"
							},
							Platform: {},
							Token: {}
						}
					},
					output: {
						type: "structure",
						members: {
							DeviceId: {}
						}
					}
				},
				SetCognitoEvents: {
					http: {
						requestUri: "/identitypools/{IdentityPoolId}/events",
						responseCode: 200
					},
					input: {
						type: "structure",
						required: ["IdentityPoolId", "Events"],
						members: {
							IdentityPoolId: {
								location: "uri",
								locationName: "IdentityPoolId"
							},
							Events: {
								shape: "Sq"
							}
						}
					}
				},
				SetIdentityPoolConfiguration: {
					http: {
						requestUri: "/identitypools/{IdentityPoolId}/configuration",
						responseCode: 200
					},
					input: {
						type: "structure",
						required: ["IdentityPoolId"],
						members: {
							IdentityPoolId: {
								location: "uri",
								locationName: "IdentityPoolId"
							},
							PushSync: {
								shape: "Sv"
							},
							CognitoStreams: {
								shape: "Sz"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							IdentityPoolId: {},
							PushSync: {
								shape: "Sv"
							},
							CognitoStreams: {
								shape: "Sz"
							}
						}
					}
				},
				SubscribeToDataset: {
					http: {
						requestUri: "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}",
						responseCode: 200
					},
					input: {
						type: "structure",
						required: ["IdentityPoolId", "IdentityId", "DatasetName", "DeviceId"],
						members: {
							IdentityPoolId: {
								location: "uri",
								locationName: "IdentityPoolId"
							},
							IdentityId: {
								location: "uri",
								locationName: "IdentityId"
							},
							DatasetName: {
								location: "uri",
								locationName: "DatasetName"
							},
							DeviceId: {
								location: "uri",
								locationName: "DeviceId"
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				UnsubscribeFromDataset: {
					http: {
						method: "DELETE",
						requestUri: "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}",
						responseCode: 200
					},
					input: {
						type: "structure",
						required: ["IdentityPoolId", "IdentityId", "DatasetName", "DeviceId"],
						members: {
							IdentityPoolId: {
								location: "uri",
								locationName: "IdentityPoolId"
							},
							IdentityId: {
								location: "uri",
								locationName: "IdentityId"
							},
							DatasetName: {
								location: "uri",
								locationName: "DatasetName"
							},
							DeviceId: {
								location: "uri",
								locationName: "DeviceId"
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				UpdateRecords: {
					http: {
						requestUri: "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}",
						responseCode: 200
					},
					input: {
						type: "structure",
						required: ["IdentityPoolId", "IdentityId", "DatasetName", "SyncSessionToken"],
						members: {
							IdentityPoolId: {
								location: "uri",
								locationName: "IdentityPoolId"
							},
							IdentityId: {
								location: "uri",
								locationName: "IdentityId"
							},
							DatasetName: {
								location: "uri",
								locationName: "DatasetName"
							},
							DeviceId: {},
							RecordPatches: {
								type: "list",
								member: {
									type: "structure",
									required: ["Op", "Key", "SyncCount"],
									members: {
										Op: {},
										Key: {},
										Value: {},
										SyncCount: {
											type: "long"
										},
										DeviceLastModifiedDate: {
											type: "timestamp"
										}
									}
								}
							},
							SyncSessionToken: {},
							ClientContext: {
								location: "header",
								locationName: "x-amz-Client-Context"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Records: {
								shape: "S1c"
							}
						}
					}
				}
			},
			shapes: {
				S8: {
					type: "structure",
					members: {
						IdentityId: {},
						DatasetName: {},
						CreationDate: {
							type: "timestamp"
						},
						LastModifiedDate: {
							type: "timestamp"
						},
						LastModifiedBy: {},
						DataStorage: {
							type: "long"
						},
						NumRecords: {
							type: "long"
						}
					}
				},
				Sg: {
					type: "structure",
					members: {
						IdentityPoolId: {},
						SyncSessionsCount: {
							type: "long"
						},
						DataStorage: {
							type: "long"
						},
						LastModifiedDate: {
							type: "timestamp"
						}
					}
				},
				Sq: {
					type: "map",
					key: {},
					value: {}
				},
				Sv: {
					type: "structure",
					members: {
						ApplicationArns: {
							type: "list",
							member: {}
						},
						RoleArn: {}
					}
				},
				Sz: {
					type: "structure",
					members: {
						StreamName: {},
						RoleArn: {},
						StreamingStatus: {}
					}
				},
				S1c: {
					type: "list",
					member: {
						type: "structure",
						members: {
							Key: {},
							Value: {},
							SyncCount: {
								type: "long"
							},
							LastModifiedDate: {
								type: "timestamp"
							},
							LastModifiedBy: {},
							DeviceLastModifiedDate: {
								type: "timestamp"
							}
						}
					}
				}
			},
			examples: {}
		}
	}, {}],
	39: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2014-11-12",
				endpointPrefix: "config",
				jsonVersion: "1.1",
				protocol: "json",
				serviceAbbreviation: "Config Service",
				serviceFullName: "AWS Config",
				serviceId: "Config Service",
				signatureVersion: "v4",
				targetPrefix: "StarlingDoveService",
				uid: "config-2014-11-12"
			},
			operations: {
				BatchGetResourceConfig: {
					input: {
						type: "structure",
						required: ["resourceKeys"],
						members: {
							resourceKeys: {
								shape: "S2"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							baseConfigurationItems: {
								type: "list",
								member: {
									type: "structure",
									members: {
										version: {},
										accountId: {},
										configurationItemCaptureTime: {
											type: "timestamp"
										},
										configurationItemStatus: {},
										configurationStateId: {},
										arn: {},
										resourceType: {},
										resourceId: {},
										resourceName: {},
										awsRegion: {},
										availabilityZone: {},
										resourceCreationTime: {
											type: "timestamp"
										},
										configuration: {},
										supplementaryConfiguration: {
											shape: "Sk"
										}
									}
								}
							},
							unprocessedResourceKeys: {
								shape: "S2"
							}
						}
					}
				},
				DeleteAggregationAuthorization: {
					input: {
						type: "structure",
						required: ["AuthorizedAccountId", "AuthorizedAwsRegion"],
						members: {
							AuthorizedAccountId: {},
							AuthorizedAwsRegion: {}
						}
					}
				},
				DeleteConfigRule: {
					input: {
						type: "structure",
						required: ["ConfigRuleName"],
						members: {
							ConfigRuleName: {}
						}
					}
				},
				DeleteConfigurationAggregator: {
					input: {
						type: "structure",
						required: ["ConfigurationAggregatorName"],
						members: {
							ConfigurationAggregatorName: {}
						}
					}
				},
				DeleteConfigurationRecorder: {
					input: {
						type: "structure",
						required: ["ConfigurationRecorderName"],
						members: {
							ConfigurationRecorderName: {}
						}
					}
				},
				DeleteDeliveryChannel: {
					input: {
						type: "structure",
						required: ["DeliveryChannelName"],
						members: {
							DeliveryChannelName: {}
						}
					}
				},
				DeleteEvaluationResults: {
					input: {
						type: "structure",
						required: ["ConfigRuleName"],
						members: {
							ConfigRuleName: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				DeletePendingAggregationRequest: {
					input: {
						type: "structure",
						required: ["RequesterAccountId", "RequesterAwsRegion"],
						members: {
							RequesterAccountId: {},
							RequesterAwsRegion: {}
						}
					}
				},
				DeliverConfigSnapshot: {
					input: {
						type: "structure",
						required: ["deliveryChannelName"],
						members: {
							deliveryChannelName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							configSnapshotId: {}
						}
					}
				},
				DescribeAggregateComplianceByConfigRules: {
					input: {
						type: "structure",
						required: ["ConfigurationAggregatorName"],
						members: {
							ConfigurationAggregatorName: {},
							Filters: {
								type: "structure",
								members: {
									ConfigRuleName: {},
									ComplianceType: {},
									AccountId: {},
									AwsRegion: {}
								}
							},
							Limit: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							AggregateComplianceByConfigRules: {
								type: "list",
								member: {
									type: "structure",
									members: {
										ConfigRuleName: {},
										Compliance: {
											shape: "S1b"
										},
										AccountId: {},
										AwsRegion: {}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				DescribeAggregationAuthorizations: {
					input: {
						type: "structure",
						members: {
							Limit: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							AggregationAuthorizations: {
								type: "list",
								member: {
									shape: "S1j"
								}
							},
							NextToken: {}
						}
					}
				},
				DescribeComplianceByConfigRule: {
					input: {
						type: "structure",
						members: {
							ConfigRuleNames: {
								shape: "S1m"
							},
							ComplianceTypes: {
								shape: "S1n"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ComplianceByConfigRules: {
								type: "list",
								member: {
									type: "structure",
									members: {
										ConfigRuleName: {},
										Compliance: {
											shape: "S1b"
										}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				DescribeComplianceByResource: {
					input: {
						type: "structure",
						members: {
							ResourceType: {},
							ResourceId: {},
							ComplianceTypes: {
								shape: "S1n"
							},
							Limit: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ComplianceByResources: {
								type: "list",
								member: {
									type: "structure",
									members: {
										ResourceType: {},
										ResourceId: {},
										Compliance: {
											shape: "S1b"
										}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				DescribeConfigRuleEvaluationStatus: {
					input: {
						type: "structure",
						members: {
							ConfigRuleNames: {
								shape: "S1m"
							},
							NextToken: {},
							Limit: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ConfigRulesEvaluationStatus: {
								type: "list",
								member: {
									type: "structure",
									members: {
										ConfigRuleName: {},
										ConfigRuleArn: {},
										ConfigRuleId: {},
										LastSuccessfulInvocationTime: {
											type: "timestamp"
										},
										LastFailedInvocationTime: {
											type: "timestamp"
										},
										LastSuccessfulEvaluationTime: {
											type: "timestamp"
										},
										LastFailedEvaluationTime: {
											type: "timestamp"
										},
										FirstActivatedTime: {
											type: "timestamp"
										},
										LastErrorCode: {},
										LastErrorMessage: {},
										FirstEvaluationStarted: {
											type: "boolean"
										}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				DescribeConfigRules: {
					input: {
						type: "structure",
						members: {
							ConfigRuleNames: {
								shape: "S1m"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ConfigRules: {
								type: "list",
								member: {
									shape: "S25"
								}
							},
							NextToken: {}
						}
					}
				},
				DescribeConfigurationAggregatorSourcesStatus: {
					input: {
						type: "structure",
						required: ["ConfigurationAggregatorName"],
						members: {
							ConfigurationAggregatorName: {},
							UpdateStatus: {
								type: "list",
								member: {}
							},
							NextToken: {},
							Limit: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							AggregatedSourceStatusList: {
								type: "list",
								member: {
									type: "structure",
									members: {
										SourceId: {},
										SourceType: {},
										AwsRegion: {},
										LastUpdateStatus: {},
										LastUpdateTime: {
											type: "timestamp"
										},
										LastErrorCode: {},
										LastErrorMessage: {}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				DescribeConfigurationAggregators: {
					input: {
						type: "structure",
						members: {
							ConfigurationAggregatorNames: {
								type: "list",
								member: {}
							},
							NextToken: {},
							Limit: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ConfigurationAggregators: {
								type: "list",
								member: {
									shape: "S2u"
								}
							},
							NextToken: {}
						}
					}
				},
				DescribeConfigurationRecorderStatus: {
					input: {
						type: "structure",
						members: {
							ConfigurationRecorderNames: {
								shape: "S32"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ConfigurationRecordersStatus: {
								type: "list",
								member: {
									type: "structure",
									members: {
										name: {},
										lastStartTime: {
											type: "timestamp"
										},
										lastStopTime: {
											type: "timestamp"
										},
										recording: {
											type: "boolean"
										},
										lastStatus: {},
										lastErrorCode: {},
										lastErrorMessage: {},
										lastStatusChangeTime: {
											type: "timestamp"
										}
									}
								}
							}
						}
					}
				},
				DescribeConfigurationRecorders: {
					input: {
						type: "structure",
						members: {
							ConfigurationRecorderNames: {
								shape: "S32"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ConfigurationRecorders: {
								type: "list",
								member: {
									shape: "S3a"
								}
							}
						}
					}
				},
				DescribeDeliveryChannelStatus: {
					input: {
						type: "structure",
						members: {
							DeliveryChannelNames: {
								shape: "S3g"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							DeliveryChannelsStatus: {
								type: "list",
								member: {
									type: "structure",
									members: {
										name: {},
										configSnapshotDeliveryInfo: {
											shape: "S3k"
										},
										configHistoryDeliveryInfo: {
											shape: "S3k"
										},
										configStreamDeliveryInfo: {
											type: "structure",
											members: {
												lastStatus: {},
												lastErrorCode: {},
												lastErrorMessage: {},
												lastStatusChangeTime: {
													type: "timestamp"
												}
											}
										}
									}
								}
							}
						}
					}
				},
				DescribeDeliveryChannels: {
					input: {
						type: "structure",
						members: {
							DeliveryChannelNames: {
								shape: "S3g"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							DeliveryChannels: {
								type: "list",
								member: {
									shape: "S3q"
								}
							}
						}
					}
				},
				DescribePendingAggregationRequests: {
					input: {
						type: "structure",
						members: {
							Limit: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							PendingAggregationRequests: {
								type: "list",
								member: {
									type: "structure",
									members: {
										RequesterAccountId: {},
										RequesterAwsRegion: {}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				GetAggregateComplianceDetailsByConfigRule: {
					input: {
						type: "structure",
						required: ["ConfigurationAggregatorName", "ConfigRuleName", "AccountId", "AwsRegion"],
						members: {
							ConfigurationAggregatorName: {},
							ConfigRuleName: {},
							AccountId: {},
							AwsRegion: {},
							ComplianceType: {},
							Limit: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							AggregateEvaluationResults: {
								type: "list",
								member: {
									type: "structure",
									members: {
										EvaluationResultIdentifier: {
											shape: "S41"
										},
										ComplianceType: {},
										ResultRecordedTime: {
											type: "timestamp"
										},
										ConfigRuleInvokedTime: {
											type: "timestamp"
										},
										Annotation: {},
										AccountId: {},
										AwsRegion: {}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				GetAggregateConfigRuleComplianceSummary: {
					input: {
						type: "structure",
						required: ["ConfigurationAggregatorName"],
						members: {
							ConfigurationAggregatorName: {},
							Filters: {
								type: "structure",
								members: {
									AccountId: {},
									AwsRegion: {}
								}
							},
							GroupByKey: {},
							Limit: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							GroupByKey: {},
							AggregateComplianceCounts: {
								type: "list",
								member: {
									type: "structure",
									members: {
										GroupName: {},
										ComplianceSummary: {
											shape: "S49"
										}
									}
								}
							},
							NextToken: {}
						}
					}
				},
				GetComplianceDetailsByConfigRule: {
					input: {
						type: "structure",
						required: ["ConfigRuleName"],
						members: {
							ConfigRuleName: {},
							ComplianceTypes: {
								shape: "S1n"
							},
							Limit: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							EvaluationResults: {
								shape: "S4c"
							},
							NextToken: {}
						}
					}
				},
				GetComplianceDetailsByResource: {
					input: {
						type: "structure",
						required: ["ResourceType", "ResourceId"],
						members: {
							ResourceType: {},
							ResourceId: {},
							ComplianceTypes: {
								shape: "S1n"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							EvaluationResults: {
								shape: "S4c"
							},
							NextToken: {}
						}
					}
				},
				GetComplianceSummaryByConfigRule: {
					output: {
						type: "structure",
						members: {
							ComplianceSummary: {
								shape: "S49"
							}
						}
					}
				},
				GetComplianceSummaryByResourceType: {
					input: {
						type: "structure",
						members: {
							ResourceTypes: {
								shape: "S4i"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ComplianceSummariesByResourceType: {
								type: "list",
								member: {
									type: "structure",
									members: {
										ResourceType: {},
										ComplianceSummary: {
											shape: "S49"
										}
									}
								}
							}
						}
					}
				},
				GetDiscoveredResourceCounts: {
					input: {
						type: "structure",
						members: {
							resourceTypes: {
								shape: "S4i"
							},
							limit: {
								type: "integer"
							},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							totalDiscoveredResources: {
								type: "long"
							},
							resourceCounts: {
								type: "list",
								member: {
									type: "structure",
									members: {
										resourceType: {},
										count: {
											type: "long"
										}
									}
								}
							},
							nextToken: {}
						}
					}
				},
				GetResourceConfigHistory: {
					input: {
						type: "structure",
						required: ["resourceType", "resourceId"],
						members: {
							resourceType: {},
							resourceId: {},
							laterTime: {
								type: "timestamp"
							},
							earlierTime: {
								type: "timestamp"
							},
							chronologicalOrder: {},
							limit: {
								type: "integer"
							},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							configurationItems: {
								type: "list",
								member: {
									type: "structure",
									members: {
										version: {},
										accountId: {},
										configurationItemCaptureTime: {
											type: "timestamp"
										},
										configurationItemStatus: {},
										configurationStateId: {},
										configurationItemMD5Hash: {},
										arn: {},
										resourceType: {},
										resourceId: {},
										resourceName: {},
										awsRegion: {},
										availabilityZone: {},
										resourceCreationTime: {
											type: "timestamp"
										},
										tags: {
											type: "map",
											key: {},
											value: {}
										},
										relatedEvents: {
											type: "list",
											member: {}
										},
										relationships: {
											type: "list",
											member: {
												type: "structure",
												members: {
													resourceType: {},
													resourceId: {},
													resourceName: {},
													relationshipName: {}
												}
											}
										},
										configuration: {},
										supplementaryConfiguration: {
											shape: "Sk"
										}
									}
								}
							},
							nextToken: {}
						}
					}
				},
				ListDiscoveredResources: {
					input: {
						type: "structure",
						required: ["resourceType"],
						members: {
							resourceType: {},
							resourceIds: {
								type: "list",
								member: {}
							},
							resourceName: {},
							limit: {
								type: "integer"
							},
							includeDeletedResources: {
								type: "boolean"
							},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							resourceIdentifiers: {
								type: "list",
								member: {
									type: "structure",
									members: {
										resourceType: {},
										resourceId: {},
										resourceName: {},
										resourceDeletionTime: {
											type: "timestamp"
										}
									}
								}
							},
							nextToken: {}
						}
					}
				},
				PutAggregationAuthorization: {
					input: {
						type: "structure",
						required: ["AuthorizedAccountId", "AuthorizedAwsRegion"],
						members: {
							AuthorizedAccountId: {},
							AuthorizedAwsRegion: {}
						}
					},
					output: {
						type: "structure",
						members: {
							AggregationAuthorization: {
								shape: "S1j"
							}
						}
					}
				},
				PutConfigRule: {
					input: {
						type: "structure",
						required: ["ConfigRule"],
						members: {
							ConfigRule: {
								shape: "S25"
							}
						}
					}
				},
				PutConfigurationAggregator: {
					input: {
						type: "structure",
						required: ["ConfigurationAggregatorName"],
						members: {
							ConfigurationAggregatorName: {},
							AccountAggregationSources: {
								shape: "S2w"
							},
							OrganizationAggregationSource: {
								shape: "S30"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ConfigurationAggregator: {
								shape: "S2u"
							}
						}
					}
				},
				PutConfigurationRecorder: {
					input: {
						type: "structure",
						required: ["ConfigurationRecorder"],
						members: {
							ConfigurationRecorder: {
								shape: "S3a"
							}
						}
					}
				},
				PutDeliveryChannel: {
					input: {
						type: "structure",
						required: ["DeliveryChannel"],
						members: {
							DeliveryChannel: {
								shape: "S3q"
							}
						}
					}
				},
				PutEvaluations: {
					input: {
						type: "structure",
						required: ["ResultToken"],
						members: {
							Evaluations: {
								shape: "S5l"
							},
							ResultToken: {},
							TestMode: {
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							FailedEvaluations: {
								shape: "S5l"
							}
						}
					}
				},
				StartConfigRulesEvaluation: {
					input: {
						type: "structure",
						members: {
							ConfigRuleNames: {
								type: "list",
								member: {}
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				StartConfigurationRecorder: {
					input: {
						type: "structure",
						required: ["ConfigurationRecorderName"],
						members: {
							ConfigurationRecorderName: {}
						}
					}
				},
				StopConfigurationRecorder: {
					input: {
						type: "structure",
						required: ["ConfigurationRecorderName"],
						members: {
							ConfigurationRecorderName: {}
						}
					}
				}
			},
			shapes: {
				S2: {
					type: "list",
					member: {
						type: "structure",
						required: ["resourceType", "resourceId"],
						members: {
							resourceType: {},
							resourceId: {}
						}
					}
				},
				Sk: {
					type: "map",
					key: {},
					value: {}
				},
				S1b: {
					type: "structure",
					members: {
						ComplianceType: {},
						ComplianceContributorCount: {
							shape: "S1c"
						}
					}
				},
				S1c: {
					type: "structure",
					members: {
						CappedCount: {
							type: "integer"
						},
						CapExceeded: {
							type: "boolean"
						}
					}
				},
				S1j: {
					type: "structure",
					members: {
						AggregationAuthorizationArn: {},
						AuthorizedAccountId: {},
						AuthorizedAwsRegion: {},
						CreationTime: {
							type: "timestamp"
						}
					}
				},
				S1m: {
					type: "list",
					member: {}
				},
				S1n: {
					type: "list",
					member: {}
				},
				S25: {
					type: "structure",
					required: ["Source"],
					members: {
						ConfigRuleName: {},
						ConfigRuleArn: {},
						ConfigRuleId: {},
						Description: {},
						Scope: {
							type: "structure",
							members: {
								ComplianceResourceTypes: {
									type: "list",
									member: {}
								},
								TagKey: {},
								TagValue: {},
								ComplianceResourceId: {}
							}
						},
						Source: {
							type: "structure",
							required: ["Owner", "SourceIdentifier"],
							members: {
								Owner: {},
								SourceIdentifier: {},
								SourceDetails: {
									type: "list",
									member: {
										type: "structure",
										members: {
											EventSource: {},
											MessageType: {},
											MaximumExecutionFrequency: {}
										}
									}
								}
							}
						},
						InputParameters: {},
						MaximumExecutionFrequency: {},
						ConfigRuleState: {}
					}
				},
				S2u: {
					type: "structure",
					members: {
						ConfigurationAggregatorName: {},
						ConfigurationAggregatorArn: {},
						AccountAggregationSources: {
							shape: "S2w"
						},
						OrganizationAggregationSource: {
							shape: "S30"
						},
						CreationTime: {
							type: "timestamp"
						},
						LastUpdatedTime: {
							type: "timestamp"
						}
					}
				},
				S2w: {
					type: "list",
					member: {
						type: "structure",
						required: ["AccountIds"],
						members: {
							AccountIds: {
								type: "list",
								member: {}
							},
							AllAwsRegions: {
								type: "boolean"
							},
							AwsRegions: {
								shape: "S2z"
							}
						}
					}
				},
				S2z: {
					type: "list",
					member: {}
				},
				S30: {
					type: "structure",
					required: ["RoleArn"],
					members: {
						RoleArn: {},
						AwsRegions: {
							shape: "S2z"
						},
						AllAwsRegions: {
							type: "boolean"
						}
					}
				},
				S32: {
					type: "list",
					member: {}
				},
				S3a: {
					type: "structure",
					members: {
						name: {},
						roleARN: {},
						recordingGroup: {
							type: "structure",
							members: {
								allSupported: {
									type: "boolean"
								},
								includeGlobalResourceTypes: {
									type: "boolean"
								},
								resourceTypes: {
									type: "list",
									member: {}
								}
							}
						}
					}
				},
				S3g: {
					type: "list",
					member: {}
				},
				S3k: {
					type: "structure",
					members: {
						lastStatus: {},
						lastErrorCode: {},
						lastErrorMessage: {},
						lastAttemptTime: {
							type: "timestamp"
						},
						lastSuccessfulTime: {
							type: "timestamp"
						},
						nextDeliveryTime: {
							type: "timestamp"
						}
					}
				},
				S3q: {
					type: "structure",
					members: {
						name: {},
						s3BucketName: {},
						s3KeyPrefix: {},
						snsTopicARN: {},
						configSnapshotDeliveryProperties: {
							type: "structure",
							members: {
								deliveryFrequency: {}
							}
						}
					}
				},
				S41: {
					type: "structure",
					members: {
						EvaluationResultQualifier: {
							type: "structure",
							members: {
								ConfigRuleName: {},
								ResourceType: {},
								ResourceId: {}
							}
						},
						OrderingTimestamp: {
							type: "timestamp"
						}
					}
				},
				S49: {
					type: "structure",
					members: {
						CompliantResourceCount: {
							shape: "S1c"
						},
						NonCompliantResourceCount: {
							shape: "S1c"
						},
						ComplianceSummaryTimestamp: {
							type: "timestamp"
						}
					}
				},
				S4c: {
					type: "list",
					member: {
						type: "structure",
						members: {
							EvaluationResultIdentifier: {
								shape: "S41"
							},
							ComplianceType: {},
							ResultRecordedTime: {
								type: "timestamp"
							},
							ConfigRuleInvokedTime: {
								type: "timestamp"
							},
							Annotation: {},
							ResultToken: {}
						}
					}
				},
				S4i: {
					type: "list",
					member: {}
				},
				S5l: {
					type: "list",
					member: {
						type: "structure",
						required: ["ComplianceResourceType", "ComplianceResourceId", "ComplianceType", "OrderingTimestamp"],
						members: {
							ComplianceResourceType: {},
							ComplianceResourceId: {},
							ComplianceType: {},
							Annotation: {},
							OrderingTimestamp: {
								type: "timestamp"
							}
						}
					}
				}
			}
		}
	}, {}],
	40: [function(e, t, r) {
		t.exports = {
			pagination: {
				GetResourceConfigHistory: {
					input_token: "nextToken",
					limit_key: "limit",
					output_token: "nextToken",
					result_key: "configurationItems"
				}
			}
		}
	}, {}],
	41: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2017-01-06",
				endpointPrefix: "cur",
				jsonVersion: "1.1",
				protocol: "json",
				serviceFullName: "AWS Cost and Usage Report Service",
				signatureVersion: "v4",
				signingName: "cur",
				targetPrefix: "AWSOrigamiServiceGatewayService",
				uid: "cur-2017-01-06"
			},
			operations: {
				DeleteReportDefinition: {
					input: {
						type: "structure",
						members: {
							ReportName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ResponseMessage: {}
						}
					}
				},
				DescribeReportDefinitions: {
					input: {
						type: "structure",
						members: {
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ReportDefinitions: {
								type: "list",
								member: {
									shape: "Sa"
								}
							},
							NextToken: {}
						}
					}
				},
				PutReportDefinition: {
					input: {
						type: "structure",
						required: ["ReportDefinition"],
						members: {
							ReportDefinition: {
								shape: "Sa"
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				}
			},
			shapes: {
				Sa: {
					type: "structure",
					required: ["ReportName", "TimeUnit", "Format", "Compression", "AdditionalSchemaElements", "S3Bucket", "S3Prefix", "S3Region"],
					members: {
						ReportName: {},
						TimeUnit: {},
						Format: {},
						Compression: {},
						AdditionalSchemaElements: {
							type: "list",
							member: {}
						},
						S3Bucket: {},
						S3Prefix: {},
						S3Region: {},
						AdditionalArtifacts: {
							type: "list",
							member: {}
						}
					}
				}
			}
		}
	}, {}],
	42: [function(e, t, r) {
		t.exports = {
			pagination: {
				DescribeReportDefinitions: {
					input_token: "NextToken",
					output_token: "NextToken",
					limit_key: "MaxResults"
				}
			}
		}
	}, {}],
	43: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2015-06-23",
				endpointPrefix: "devicefarm",
				jsonVersion: "1.1",
				protocol: "json",
				serviceFullName: "AWS Device Farm",
				serviceId: "Device Farm",
				signatureVersion: "v4",
				targetPrefix: "DeviceFarm_20150623",
				uid: "devicefarm-2015-06-23"
			},
			operations: {
				CreateDevicePool: {
					input: {
						type: "structure",
						required: ["projectArn", "name", "rules"],
						members: {
							projectArn: {},
							name: {},
							description: {},
							rules: {
								shape: "S5"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							devicePool: {
								shape: "Sb"
							}
						}
					}
				},
				CreateInstanceProfile: {
					input: {
						type: "structure",
						required: ["name"],
						members: {
							name: {},
							description: {},
							packageCleanup: {
								type: "boolean"
							},
							excludeAppPackagesFromCleanup: {
								shape: "Sf"
							},
							rebootAfterUse: {
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							instanceProfile: {
								shape: "Sh"
							}
						}
					}
				},
				CreateNetworkProfile: {
					input: {
						type: "structure",
						required: ["projectArn", "name"],
						members: {
							projectArn: {},
							name: {},
							description: {},
							type: {},
							uplinkBandwidthBits: {
								type: "long"
							},
							downlinkBandwidthBits: {
								type: "long"
							},
							uplinkDelayMs: {
								type: "long"
							},
							downlinkDelayMs: {
								type: "long"
							},
							uplinkJitterMs: {
								type: "long"
							},
							downlinkJitterMs: {
								type: "long"
							},
							uplinkLossPercent: {
								type: "integer"
							},
							downlinkLossPercent: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							networkProfile: {
								shape: "Sn"
							}
						}
					}
				},
				CreateProject: {
					input: {
						type: "structure",
						required: ["name"],
						members: {
							name: {},
							defaultJobTimeoutMinutes: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							project: {
								shape: "Sr"
							}
						}
					}
				},
				CreateRemoteAccessSession: {
					input: {
						type: "structure",
						required: ["projectArn", "deviceArn"],
						members: {
							projectArn: {},
							deviceArn: {},
							instanceArn: {},
							sshPublicKey: {},
							remoteDebugEnabled: {
								type: "boolean"
							},
							remoteRecordEnabled: {
								type: "boolean"
							},
							remoteRecordAppArn: {},
							name: {},
							clientId: {},
							configuration: {
								type: "structure",
								members: {
									billingMethod: {}
								}
							},
							interactionMode: {},
							skipAppResign: {
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							remoteAccessSession: {
								shape: "S10"
							}
						}
					}
				},
				CreateUpload: {
					input: {
						type: "structure",
						required: ["projectArn", "name", "type"],
						members: {
							projectArn: {},
							name: {},
							type: {},
							contentType: {}
						}
					},
					output: {
						type: "structure",
						members: {
							upload: {
								shape: "S1l"
							}
						}
					}
				},
				CreateVPCEConfiguration: {
					input: {
						type: "structure",
						required: ["vpceConfigurationName", "vpceServiceName", "serviceDnsName"],
						members: {
							vpceConfigurationName: {},
							vpceServiceName: {},
							serviceDnsName: {},
							vpceConfigurationDescription: {}
						}
					},
					output: {
						type: "structure",
						members: {
							vpceConfiguration: {
								shape: "S1v"
							}
						}
					}
				},
				DeleteDevicePool: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				DeleteInstanceProfile: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				DeleteNetworkProfile: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				DeleteProject: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				DeleteRemoteAccessSession: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				DeleteRun: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				DeleteUpload: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				DeleteVPCEConfiguration: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				GetAccountSettings: {
					input: {
						type: "structure",
						members: {}
					},
					output: {
						type: "structure",
						members: {
							accountSettings: {
								type: "structure",
								members: {
									awsAccountNumber: {},
									unmeteredDevices: {
										shape: "S2g"
									},
									unmeteredRemoteAccessDevices: {
										shape: "S2g"
									},
									maxJobTimeoutMinutes: {
										type: "integer"
									},
									trialMinutes: {
										type: "structure",
										members: {
											total: {
												type: "double"
											},
											remaining: {
												type: "double"
											}
										}
									},
									maxSlots: {
										type: "map",
										key: {},
										value: {
											type: "integer"
										}
									},
									defaultJobTimeoutMinutes: {
										type: "integer"
									},
									skipAppResign: {
										type: "boolean"
									}
								}
							}
						}
					}
				},
				GetDevice: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							device: {
								shape: "S13"
							}
						}
					}
				},
				GetDeviceInstance: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							deviceInstance: {
								shape: "S1b"
							}
						}
					}
				},
				GetDevicePool: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							devicePool: {
								shape: "Sb"
							}
						}
					}
				},
				GetDevicePoolCompatibility: {
					input: {
						type: "structure",
						required: ["devicePoolArn"],
						members: {
							devicePoolArn: {},
							appArn: {},
							testType: {},
							test: {
								shape: "S2r"
							},
							configuration: {
								shape: "S2u"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							compatibleDevices: {
								shape: "S33"
							},
							incompatibleDevices: {
								shape: "S33"
							}
						}
					}
				},
				GetInstanceProfile: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							instanceProfile: {
								shape: "Sh"
							}
						}
					}
				},
				GetJob: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							job: {
								shape: "S3b"
							}
						}
					}
				},
				GetNetworkProfile: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							networkProfile: {
								shape: "Sn"
							}
						}
					}
				},
				GetOfferingStatus: {
					input: {
						type: "structure",
						members: {
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							current: {
								shape: "S3i"
							},
							nextPeriod: {
								shape: "S3i"
							},
							nextToken: {}
						}
					}
				},
				GetProject: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							project: {
								shape: "Sr"
							}
						}
					}
				},
				GetRemoteAccessSession: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							remoteAccessSession: {
								shape: "S10"
							}
						}
					}
				},
				GetRun: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							run: {
								shape: "S3z"
							}
						}
					}
				},
				GetSuite: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							suite: {
								shape: "S43"
							}
						}
					}
				},
				GetTest: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							test: {
								shape: "S46"
							}
						}
					}
				},
				GetUpload: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							upload: {
								shape: "S1l"
							}
						}
					}
				},
				GetVPCEConfiguration: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							vpceConfiguration: {
								shape: "S1v"
							}
						}
					}
				},
				InstallToRemoteAccessSession: {
					input: {
						type: "structure",
						required: ["remoteAccessSessionArn", "appArn"],
						members: {
							remoteAccessSessionArn: {},
							appArn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							appUpload: {
								shape: "S1l"
							}
						}
					}
				},
				ListArtifacts: {
					input: {
						type: "structure",
						required: ["arn", "type"],
						members: {
							arn: {},
							type: {},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							artifacts: {
								type: "list",
								member: {
									type: "structure",
									members: {
										arn: {},
										name: {},
										type: {},
										extension: {},
										url: {}
									}
								}
							},
							nextToken: {}
						}
					}
				},
				ListDeviceInstances: {
					input: {
						type: "structure",
						members: {
							maxResults: {
								type: "integer"
							},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							deviceInstances: {
								shape: "S1a"
							},
							nextToken: {}
						}
					}
				},
				ListDevicePools: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {},
							type: {},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							devicePools: {
								type: "list",
								member: {
									shape: "Sb"
								}
							},
							nextToken: {}
						}
					}
				},
				ListDevices: {
					input: {
						type: "structure",
						members: {
							arn: {},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							devices: {
								type: "list",
								member: {
									shape: "S13"
								}
							},
							nextToken: {}
						}
					}
				},
				ListInstanceProfiles: {
					input: {
						type: "structure",
						members: {
							maxResults: {
								type: "integer"
							},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							instanceProfiles: {
								type: "list",
								member: {
									shape: "Sh"
								}
							},
							nextToken: {}
						}
					}
				},
				ListJobs: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							jobs: {
								type: "list",
								member: {
									shape: "S3b"
								}
							},
							nextToken: {}
						}
					}
				},
				ListNetworkProfiles: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {},
							type: {},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							networkProfiles: {
								type: "list",
								member: {
									shape: "Sn"
								}
							},
							nextToken: {}
						}
					}
				},
				ListOfferingPromotions: {
					input: {
						type: "structure",
						members: {
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							offeringPromotions: {
								type: "list",
								member: {
									type: "structure",
									members: {
										id: {},
										description: {}
									}
								}
							},
							nextToken: {}
						}
					}
				},
				ListOfferingTransactions: {
					input: {
						type: "structure",
						members: {
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							offeringTransactions: {
								type: "list",
								member: {
									shape: "S58"
								}
							},
							nextToken: {}
						}
					}
				},
				ListOfferings: {
					input: {
						type: "structure",
						members: {
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							offerings: {
								type: "list",
								member: {
									shape: "S3m"
								}
							},
							nextToken: {}
						}
					}
				},
				ListProjects: {
					input: {
						type: "structure",
						members: {
							arn: {},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							projects: {
								type: "list",
								member: {
									shape: "Sr"
								}
							},
							nextToken: {}
						}
					}
				},
				ListRemoteAccessSessions: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							remoteAccessSessions: {
								type: "list",
								member: {
									shape: "S10"
								}
							},
							nextToken: {}
						}
					}
				},
				ListRuns: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							runs: {
								type: "list",
								member: {
									shape: "S3z"
								}
							},
							nextToken: {}
						}
					}
				},
				ListSamples: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							samples: {
								type: "list",
								member: {
									type: "structure",
									members: {
										arn: {},
										type: {},
										url: {}
									}
								}
							},
							nextToken: {}
						}
					}
				},
				ListSuites: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							suites: {
								type: "list",
								member: {
									shape: "S43"
								}
							},
							nextToken: {}
						}
					}
				},
				ListTests: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							tests: {
								type: "list",
								member: {
									shape: "S46"
								}
							},
							nextToken: {}
						}
					}
				},
				ListUniqueProblems: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							uniqueProblems: {
								type: "map",
								key: {},
								value: {
									type: "list",
									member: {
										type: "structure",
										members: {
											message: {},
											problems: {
												type: "list",
												member: {
													type: "structure",
													members: {
														run: {
															shape: "S64"
														},
														job: {
															shape: "S64"
														},
														suite: {
															shape: "S64"
														},
														test: {
															shape: "S64"
														},
														device: {
															shape: "S13"
														},
														result: {},
														message: {}
													}
												}
											}
										}
									}
								}
							},
							nextToken: {}
						}
					}
				},
				ListUploads: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							uploads: {
								type: "list",
								member: {
									shape: "S1l"
								}
							},
							nextToken: {}
						}
					}
				},
				ListVPCEConfigurations: {
					input: {
						type: "structure",
						members: {
							maxResults: {
								type: "integer"
							},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							vpceConfigurations: {
								type: "list",
								member: {
									shape: "S1v"
								}
							},
							nextToken: {}
						}
					}
				},
				PurchaseOffering: {
					input: {
						type: "structure",
						members: {
							offeringId: {},
							quantity: {
								type: "integer"
							},
							offeringPromotionId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							offeringTransaction: {
								shape: "S58"
							}
						}
					}
				},
				RenewOffering: {
					input: {
						type: "structure",
						members: {
							offeringId: {},
							quantity: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							offeringTransaction: {
								shape: "S58"
							}
						}
					}
				},
				ScheduleRun: {
					input: {
						type: "structure",
						required: ["projectArn", "devicePoolArn", "test"],
						members: {
							projectArn: {},
							appArn: {},
							devicePoolArn: {},
							name: {},
							test: {
								shape: "S2r"
							},
							configuration: {
								shape: "S2u"
							},
							executionConfiguration: {
								type: "structure",
								members: {
									jobTimeoutMinutes: {
										type: "integer"
									},
									accountsCleanup: {
										type: "boolean"
									},
									appPackagesCleanup: {
										type: "boolean"
									},
									skipAppResign: {
										type: "boolean"
									}
								}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							run: {
								shape: "S3z"
							}
						}
					}
				},
				StopRemoteAccessSession: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							remoteAccessSession: {
								shape: "S10"
							}
						}
					}
				},
				StopRun: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							run: {
								shape: "S3z"
							}
						}
					}
				},
				UpdateDeviceInstance: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {},
							profileArn: {},
							labels: {
								shape: "S1c"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							deviceInstance: {
								shape: "S1b"
							}
						}
					}
				},
				UpdateDevicePool: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {},
							name: {},
							description: {},
							rules: {
								shape: "S5"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							devicePool: {
								shape: "Sb"
							}
						}
					}
				},
				UpdateInstanceProfile: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {},
							name: {},
							description: {},
							packageCleanup: {
								type: "boolean"
							},
							excludeAppPackagesFromCleanup: {
								shape: "Sf"
							},
							rebootAfterUse: {
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							instanceProfile: {
								shape: "Sh"
							}
						}
					}
				},
				UpdateNetworkProfile: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {},
							name: {},
							description: {},
							type: {},
							uplinkBandwidthBits: {
								type: "long"
							},
							downlinkBandwidthBits: {
								type: "long"
							},
							uplinkDelayMs: {
								type: "long"
							},
							downlinkDelayMs: {
								type: "long"
							},
							uplinkJitterMs: {
								type: "long"
							},
							downlinkJitterMs: {
								type: "long"
							},
							uplinkLossPercent: {
								type: "integer"
							},
							downlinkLossPercent: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							networkProfile: {
								shape: "Sn"
							}
						}
					}
				},
				UpdateProject: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {},
							name: {},
							defaultJobTimeoutMinutes: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							project: {
								shape: "Sr"
							}
						}
					}
				},
				UpdateVPCEConfiguration: {
					input: {
						type: "structure",
						required: ["arn"],
						members: {
							arn: {},
							vpceConfigurationName: {},
							vpceServiceName: {},
							serviceDnsName: {},
							vpceConfigurationDescription: {}
						}
					},
					output: {
						type: "structure",
						members: {
							vpceConfiguration: {
								shape: "S1v"
							}
						}
					}
				}
			},
			shapes: {
				S5: {
					type: "list",
					member: {
						type: "structure",
						members: {
							attribute: {},
							operator: {},
							value: {}
						}
					}
				},
				Sb: {
					type: "structure",
					members: {
						arn: {},
						name: {},
						description: {},
						type: {},
						rules: {
							shape: "S5"
						}
					}
				},
				Sf: {
					type: "list",
					member: {}
				},
				Sh: {
					type: "structure",
					members: {
						arn: {},
						packageCleanup: {
							type: "boolean"
						},
						excludeAppPackagesFromCleanup: {
							shape: "Sf"
						},
						rebootAfterUse: {
							type: "boolean"
						},
						name: {},
						description: {}
					}
				},
				Sn: {
					type: "structure",
					members: {
						arn: {},
						name: {},
						description: {},
						type: {},
						uplinkBandwidthBits: {
							type: "long"
						},
						downlinkBandwidthBits: {
							type: "long"
						},
						uplinkDelayMs: {
							type: "long"
						},
						downlinkDelayMs: {
							type: "long"
						},
						uplinkJitterMs: {
							type: "long"
						},
						downlinkJitterMs: {
							type: "long"
						},
						uplinkLossPercent: {
							type: "integer"
						},
						downlinkLossPercent: {
							type: "integer"
						}
					}
				},
				Sr: {
					type: "structure",
					members: {
						arn: {},
						name: {},
						defaultJobTimeoutMinutes: {
							type: "integer"
						},
						created: {
							type: "timestamp"
						}
					}
				},
				S10: {
					type: "structure",
					members: {
						arn: {},
						name: {},
						created: {
							type: "timestamp"
						},
						status: {},
						result: {},
						message: {},
						started: {
							type: "timestamp"
						},
						stopped: {
							type: "timestamp"
						},
						device: {
							shape: "S13"
						},
						instanceArn: {},
						remoteDebugEnabled: {
							type: "boolean"
						},
						remoteRecordEnabled: {
							type: "boolean"
						},
						remoteRecordAppArn: {},
						hostAddress: {},
						clientId: {},
						billingMethod: {},
						deviceMinutes: {
							shape: "S1f"
						},
						endpoint: {},
						deviceUdid: {},
						interactionMode: {},
						skipAppResign: {
							type: "boolean"
						}
					}
				},
				S13: {
					type: "structure",
					members: {
						arn: {},
						name: {},
						manufacturer: {},
						model: {},
						modelId: {},
						formFactor: {},
						platform: {},
						os: {},
						cpu: {
							type: "structure",
							members: {
								frequency: {},
								architecture: {},
								clock: {
									type: "double"
								}
							}
						},
						resolution: {
							type: "structure",
							members: {
								width: {
									type: "integer"
								},
								height: {
									type: "integer"
								}
							}
						},
						heapSize: {
							type: "long"
						},
						memory: {
							type: "long"
						},
						image: {},
						carrier: {},
						radio: {},
						remoteAccessEnabled: {
							type: "boolean"
						},
						remoteDebugEnabled: {
							type: "boolean"
						},
						fleetType: {},
						fleetName: {},
						instances: {
							shape: "S1a"
						}
					}
				},
				S1a: {
					type: "list",
					member: {
						shape: "S1b"
					}
				},
				S1b: {
					type: "structure",
					members: {
						arn: {},
						deviceArn: {},
						labels: {
							shape: "S1c"
						},
						status: {},
						udid: {},
						instanceProfile: {
							shape: "Sh"
						}
					}
				},
				S1c: {
					type: "list",
					member: {}
				},
				S1f: {
					type: "structure",
					members: {
						total: {
							type: "double"
						},
						metered: {
							type: "double"
						},
						unmetered: {
							type: "double"
						}
					}
				},
				S1l: {
					type: "structure",
					members: {
						arn: {},
						name: {},
						created: {
							type: "timestamp"
						},
						type: {},
						status: {},
						url: {},
						metadata: {},
						contentType: {},
						message: {}
					}
				},
				S1v: {
					type: "structure",
					members: {
						arn: {},
						vpceConfigurationName: {},
						vpceServiceName: {},
						serviceDnsName: {},
						vpceConfigurationDescription: {}
					}
				},
				S2g: {
					type: "map",
					key: {},
					value: {
						type: "integer"
					}
				},
				S2r: {
					type: "structure",
					required: ["type"],
					members: {
						type: {},
						testPackageArn: {},
						filter: {},
						parameters: {
							type: "map",
							key: {},
							value: {}
						}
					}
				},
				S2u: {
					type: "structure",
					members: {
						extraDataPackageArn: {},
						networkProfileArn: {},
						locale: {},
						location: {
							shape: "S2v"
						},
						vpceConfigurationArns: {
							shape: "S2w"
						},
						customerArtifactPaths: {
							shape: "S2x"
						},
						radios: {
							shape: "S31"
						},
						auxiliaryApps: {
							shape: "S2w"
						},
						billingMethod: {}
					}
				},
				S2v: {
					type: "structure",
					required: ["latitude", "longitude"],
					members: {
						latitude: {
							type: "double"
						},
						longitude: {
							type: "double"
						}
					}
				},
				S2w: {
					type: "list",
					member: {}
				},
				S2x: {
					type: "structure",
					members: {
						iosPaths: {
							type: "list",
							member: {}
						},
						androidPaths: {
							type: "list",
							member: {}
						},
						deviceHostPaths: {
							type: "list",
							member: {}
						}
					}
				},
				S31: {
					type: "structure",
					members: {
						wifi: {
							type: "boolean"
						},
						bluetooth: {
							type: "boolean"
						},
						nfc: {
							type: "boolean"
						},
						gps: {
							type: "boolean"
						}
					}
				},
				S33: {
					type: "list",
					member: {
						type: "structure",
						members: {
							device: {
								shape: "S13"
							},
							compatible: {
								type: "boolean"
							},
							incompatibilityMessages: {
								type: "list",
								member: {
									type: "structure",
									members: {
										message: {},
										type: {}
									}
								}
							}
						}
					}
				},
				S3b: {
					type: "structure",
					members: {
						arn: {},
						name: {},
						type: {},
						created: {
							type: "timestamp"
						},
						status: {},
						result: {},
						started: {
							type: "timestamp"
						},
						stopped: {
							type: "timestamp"
						},
						counters: {
							shape: "S3c"
						},
						message: {},
						device: {
							shape: "S13"
						},
						instanceArn: {},
						deviceMinutes: {
							shape: "S1f"
						}
					}
				},
				S3c: {
					type: "structure",
					members: {
						total: {
							type: "integer"
						},
						passed: {
							type: "integer"
						},
						failed: {
							type: "integer"
						},
						warned: {
							type: "integer"
						},
						errored: {
							type: "integer"
						},
						stopped: {
							type: "integer"
						},
						skipped: {
							type: "integer"
						}
					}
				},
				S3i: {
					type: "map",
					key: {},
					value: {
						shape: "S3k"
					}
				},
				S3k: {
					type: "structure",
					members: {
						type: {},
						offering: {
							shape: "S3m"
						},
						quantity: {
							type: "integer"
						},
						effectiveOn: {
							type: "timestamp"
						}
					}
				},
				S3m: {
					type: "structure",
					members: {
						id: {},
						description: {},
						type: {},
						platform: {},
						recurringCharges: {
							type: "list",
							member: {
								type: "structure",
								members: {
									cost: {
										shape: "S3q"
									},
									frequency: {}
								}
							}
						}
					}
				},
				S3q: {
					type: "structure",
					members: {
						amount: {
							type: "double"
						},
						currencyCode: {}
					}
				},
				S3z: {
					type: "structure",
					members: {
						arn: {},
						name: {},
						type: {},
						platform: {},
						created: {
							type: "timestamp"
						},
						status: {},
						result: {},
						started: {
							type: "timestamp"
						},
						stopped: {
							type: "timestamp"
						},
						counters: {
							shape: "S3c"
						},
						message: {},
						totalJobs: {
							type: "integer"
						},
						completedJobs: {
							type: "integer"
						},
						billingMethod: {},
						deviceMinutes: {
							shape: "S1f"
						},
						networkProfile: {
							shape: "Sn"
						},
						parsingResultUrl: {},
						resultCode: {},
						seed: {
							type: "integer"
						},
						appUpload: {},
						eventCount: {
							type: "integer"
						},
						jobTimeoutMinutes: {
							type: "integer"
						},
						devicePoolArn: {},
						locale: {},
						radios: {
							shape: "S31"
						},
						location: {
							shape: "S2v"
						},
						customerArtifactPaths: {
							shape: "S2x"
						},
						webUrl: {},
						skipAppResign: {
							type: "boolean"
						}
					}
				},
				S43: {
					type: "structure",
					members: {
						arn: {},
						name: {},
						type: {},
						created: {
							type: "timestamp"
						},
						status: {},
						result: {},
						started: {
							type: "timestamp"
						},
						stopped: {
							type: "timestamp"
						},
						counters: {
							shape: "S3c"
						},
						message: {},
						deviceMinutes: {
							shape: "S1f"
						}
					}
				},
				S46: {
					type: "structure",
					members: {
						arn: {},
						name: {},
						type: {},
						created: {
							type: "timestamp"
						},
						status: {},
						result: {},
						started: {
							type: "timestamp"
						},
						stopped: {
							type: "timestamp"
						},
						counters: {
							shape: "S3c"
						},
						message: {},
						deviceMinutes: {
							shape: "S1f"
						}
					}
				},
				S58: {
					type: "structure",
					members: {
						offeringStatus: {
							shape: "S3k"
						},
						transactionId: {},
						offeringPromotionId: {},
						createdOn: {
							type: "timestamp"
						},
						cost: {
							shape: "S3q"
						}
					}
				},
				S64: {
					type: "structure",
					members: {
						arn: {},
						name: {}
					}
				}
			}
		}
	}, {}],
	44: [function(e, t, r) {
		t.exports = {
			pagination: {
				GetOfferingStatus: {
					input_token: "nextToken",
					output_token: "nextToken",
					result_key: ["current", "nextPeriod"]
				},
				ListArtifacts: {
					input_token: "nextToken",
					output_token: "nextToken",
					result_key: "artifacts"
				},
				ListDevicePools: {
					input_token: "nextToken",
					output_token: "nextToken",
					result_key: "devicePools"
				},
				ListDevices: {
					input_token: "nextToken",
					output_token: "nextToken",
					result_key: "devices"
				},
				ListJobs: {
					input_token: "nextToken",
					output_token: "nextToken",
					result_key: "jobs"
				},
				ListOfferingTransactions: {
					input_token: "nextToken",
					output_token: "nextToken",
					result_key: "offeringTransactions"
				},
				ListOfferings: {
					input_token: "nextToken",
					output_token: "nextToken",
					result_key: "offerings"
				},
				ListProjects: {
					input_token: "nextToken",
					output_token: "nextToken",
					result_key: "projects"
				},
				ListRuns: {
					input_token: "nextToken",
					output_token: "nextToken",
					result_key: "runs"
				},
				ListSamples: {
					input_token: "nextToken",
					output_token: "nextToken",
					result_key: "samples"
				},
				ListSuites: {
					input_token: "nextToken",
					output_token: "nextToken",
					result_key: "suites"
				},
				ListTests: {
					input_token: "nextToken",
					output_token: "nextToken",
					result_key: "tests"
				},
				ListUniqueProblems: {
					input_token: "nextToken",
					output_token: "nextToken",
					result_key: "uniqueProblems"
				},
				ListUploads: {
					input_token: "nextToken",
					output_token: "nextToken",
					result_key: "uploads"
				}
			}
		}
	}, {}],
	45: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2012-10-25",
				endpointPrefix: "directconnect",
				jsonVersion: "1.1",
				protocol: "json",
				serviceFullName: "AWS Direct Connect",
				signatureVersion: "v4",
				targetPrefix: "OvertureService",
				uid: "directconnect-2012-10-25"
			},
			operations: {
				AllocateConnectionOnInterconnect: {
					input: {
						type: "structure",
						required: ["bandwidth", "connectionName", "ownerAccount", "interconnectId", "vlan"],
						members: {
							bandwidth: {},
							connectionName: {},
							ownerAccount: {},
							interconnectId: {},
							vlan: {
								type: "integer"
							}
						}
					},
					output: {
						shape: "S7"
					},
					deprecated: !0
				},
				AllocateHostedConnection: {
					input: {
						type: "structure",
						required: ["connectionId", "ownerAccount", "bandwidth", "connectionName", "vlan"],
						members: {
							connectionId: {},
							ownerAccount: {},
							bandwidth: {},
							connectionName: {},
							vlan: {
								type: "integer"
							}
						}
					},
					output: {
						shape: "S7"
					}
				},
				AllocatePrivateVirtualInterface: {
					input: {
						type: "structure",
						required: ["connectionId", "ownerAccount", "newPrivateVirtualInterfaceAllocation"],
						members: {
							connectionId: {},
							ownerAccount: {},
							newPrivateVirtualInterfaceAllocation: {
								type: "structure",
								required: ["virtualInterfaceName", "vlan", "asn"],
								members: {
									virtualInterfaceName: {},
									vlan: {
										type: "integer"
									},
									asn: {
										type: "integer"
									},
									authKey: {},
									amazonAddress: {},
									addressFamily: {},
									customerAddress: {}
								}
							}
						}
					},
					output: {
						shape: "Sp"
					}
				},
				AllocatePublicVirtualInterface: {
					input: {
						type: "structure",
						required: ["connectionId", "ownerAccount", "newPublicVirtualInterfaceAllocation"],
						members: {
							connectionId: {},
							ownerAccount: {},
							newPublicVirtualInterfaceAllocation: {
								type: "structure",
								required: ["virtualInterfaceName", "vlan", "asn"],
								members: {
									virtualInterfaceName: {},
									vlan: {
										type: "integer"
									},
									asn: {
										type: "integer"
									},
									authKey: {},
									amazonAddress: {},
									customerAddress: {},
									addressFamily: {},
									routeFilterPrefixes: {
										shape: "Sx"
									}
								}
							}
						}
					},
					output: {
						shape: "Sp"
					}
				},
				AssociateConnectionWithLag: {
					input: {
						type: "structure",
						required: ["connectionId", "lagId"],
						members: {
							connectionId: {},
							lagId: {}
						}
					},
					output: {
						shape: "S7"
					}
				},
				AssociateHostedConnection: {
					input: {
						type: "structure",
						required: ["connectionId", "parentConnectionId"],
						members: {
							connectionId: {},
							parentConnectionId: {}
						}
					},
					output: {
						shape: "S7"
					}
				},
				AssociateVirtualInterface: {
					input: {
						type: "structure",
						required: ["virtualInterfaceId", "connectionId"],
						members: {
							virtualInterfaceId: {},
							connectionId: {}
						}
					},
					output: {
						shape: "Sp"
					}
				},
				ConfirmConnection: {
					input: {
						type: "structure",
						required: ["connectionId"],
						members: {
							connectionId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							connectionState: {}
						}
					}
				},
				ConfirmPrivateVirtualInterface: {
					input: {
						type: "structure",
						required: ["virtualInterfaceId"],
						members: {
							virtualInterfaceId: {},
							virtualGatewayId: {},
							directConnectGatewayId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							virtualInterfaceState: {}
						}
					}
				},
				ConfirmPublicVirtualInterface: {
					input: {
						type: "structure",
						required: ["virtualInterfaceId"],
						members: {
							virtualInterfaceId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							virtualInterfaceState: {}
						}
					}
				},
				CreateBGPPeer: {
					input: {
						type: "structure",
						members: {
							virtualInterfaceId: {},
							newBGPPeer: {
								type: "structure",
								members: {
									asn: {
										type: "integer"
									},
									authKey: {},
									addressFamily: {},
									amazonAddress: {},
									customerAddress: {}
								}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							virtualInterface: {
								shape: "Sp"
							}
						}
					}
				},
				CreateConnection: {
					input: {
						type: "structure",
						required: ["location", "bandwidth", "connectionName"],
						members: {
							location: {},
							bandwidth: {},
							connectionName: {},
							lagId: {}
						}
					},
					output: {
						shape: "S7"
					}
				},
				CreateDirectConnectGateway: {
					input: {
						type: "structure",
						required: ["directConnectGatewayName"],
						members: {
							directConnectGatewayName: {},
							amazonSideAsn: {
								type: "long"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							directConnectGateway: {
								shape: "S1m"
							}
						}
					}
				},
				CreateDirectConnectGatewayAssociation: {
					input: {
						type: "structure",
						required: ["directConnectGatewayId", "virtualGatewayId"],
						members: {
							directConnectGatewayId: {},
							virtualGatewayId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							directConnectGatewayAssociation: {
								shape: "S1r"
							}
						}
					}
				},
				CreateInterconnect: {
					input: {
						type: "structure",
						required: ["interconnectName", "bandwidth", "location"],
						members: {
							interconnectName: {},
							bandwidth: {},
							location: {},
							lagId: {}
						}
					},
					output: {
						shape: "S1w"
					}
				},
				CreateLag: {
					input: {
						type: "structure",
						required: ["numberOfConnections", "location", "connectionsBandwidth", "lagName"],
						members: {
							numberOfConnections: {
								type: "integer"
							},
							location: {},
							connectionsBandwidth: {},
							lagName: {},
							connectionId: {}
						}
					},
					output: {
						shape: "S21"
					}
				},
				CreatePrivateVirtualInterface: {
					input: {
						type: "structure",
						required: ["connectionId", "newPrivateVirtualInterface"],
						members: {
							connectionId: {},
							newPrivateVirtualInterface: {
								type: "structure",
								required: ["virtualInterfaceName", "vlan", "asn"],
								members: {
									virtualInterfaceName: {},
									vlan: {
										type: "integer"
									},
									asn: {
										type: "integer"
									},
									authKey: {},
									amazonAddress: {},
									customerAddress: {},
									addressFamily: {},
									virtualGatewayId: {},
									directConnectGatewayId: {}
								}
							}
						}
					},
					output: {
						shape: "Sp"
					}
				},
				CreatePublicVirtualInterface: {
					input: {
						type: "structure",
						required: ["connectionId", "newPublicVirtualInterface"],
						members: {
							connectionId: {},
							newPublicVirtualInterface: {
								type: "structure",
								required: ["virtualInterfaceName", "vlan", "asn"],
								members: {
									virtualInterfaceName: {},
									vlan: {
										type: "integer"
									},
									asn: {
										type: "integer"
									},
									authKey: {},
									amazonAddress: {},
									customerAddress: {},
									addressFamily: {},
									routeFilterPrefixes: {
										shape: "Sx"
									}
								}
							}
						}
					},
					output: {
						shape: "Sp"
					}
				},
				DeleteBGPPeer: {
					input: {
						type: "structure",
						members: {
							virtualInterfaceId: {},
							asn: {
								type: "integer"
							},
							customerAddress: {}
						}
					},
					output: {
						type: "structure",
						members: {
							virtualInterface: {
								shape: "Sp"
							}
						}
					}
				},
				DeleteConnection: {
					input: {
						type: "structure",
						required: ["connectionId"],
						members: {
							connectionId: {}
						}
					},
					output: {
						shape: "S7"
					}
				},
				DeleteDirectConnectGateway: {
					input: {
						type: "structure",
						required: ["directConnectGatewayId"],
						members: {
							directConnectGatewayId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							directConnectGateway: {
								shape: "S1m"
							}
						}
					}
				},
				DeleteDirectConnectGatewayAssociation: {
					input: {
						type: "structure",
						required: ["directConnectGatewayId", "virtualGatewayId"],
						members: {
							directConnectGatewayId: {},
							virtualGatewayId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							directConnectGatewayAssociation: {
								shape: "S1r"
							}
						}
					}
				},
				DeleteInterconnect: {
					input: {
						type: "structure",
						required: ["interconnectId"],
						members: {
							interconnectId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							interconnectState: {}
						}
					}
				},
				DeleteLag: {
					input: {
						type: "structure",
						required: ["lagId"],
						members: {
							lagId: {}
						}
					},
					output: {
						shape: "S21"
					}
				},
				DeleteVirtualInterface: {
					input: {
						type: "structure",
						required: ["virtualInterfaceId"],
						members: {
							virtualInterfaceId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							virtualInterfaceState: {}
						}
					}
				},
				DescribeConnectionLoa: {
					input: {
						type: "structure",
						required: ["connectionId"],
						members: {
							connectionId: {},
							providerName: {},
							loaContentType: {}
						}
					},
					output: {
						type: "structure",
						members: {
							loa: {
								shape: "S2p"
							}
						}
					},
					deprecated: !0
				},
				DescribeConnections: {
					input: {
						type: "structure",
						members: {
							connectionId: {}
						}
					},
					output: {
						shape: "S2s"
					}
				},
				DescribeConnectionsOnInterconnect: {
					input: {
						type: "structure",
						required: ["interconnectId"],
						members: {
							interconnectId: {}
						}
					},
					output: {
						shape: "S2s"
					},
					deprecated: !0
				},
				DescribeDirectConnectGatewayAssociations: {
					input: {
						type: "structure",
						members: {
							directConnectGatewayId: {},
							virtualGatewayId: {},
							maxResults: {
								type: "integer"
							},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							directConnectGatewayAssociations: {
								type: "list",
								member: {
									shape: "S1r"
								}
							},
							nextToken: {}
						}
					}
				},
				DescribeDirectConnectGatewayAttachments: {
					input: {
						type: "structure",
						members: {
							directConnectGatewayId: {},
							virtualInterfaceId: {},
							maxResults: {
								type: "integer"
							},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							directConnectGatewayAttachments: {
								type: "list",
								member: {
									type: "structure",
									members: {
										directConnectGatewayId: {},
										virtualInterfaceId: {},
										virtualInterfaceRegion: {},
										virtualInterfaceOwnerAccount: {},
										attachmentState: {},
										stateChangeError: {}
									}
								}
							},
							nextToken: {}
						}
					}
				},
				DescribeDirectConnectGateways: {
					input: {
						type: "structure",
						members: {
							directConnectGatewayId: {},
							maxResults: {
								type: "integer"
							},
							nextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							directConnectGateways: {
								type: "list",
								member: {
									shape: "S1m"
								}
							},
							nextToken: {}
						}
					}
				},
				DescribeHostedConnections: {
					input: {
						type: "structure",
						required: ["connectionId"],
						members: {
							connectionId: {}
						}
					},
					output: {
						shape: "S2s"
					}
				},
				DescribeInterconnectLoa: {
					input: {
						type: "structure",
						required: ["interconnectId"],
						members: {
							interconnectId: {},
							providerName: {},
							loaContentType: {}
						}
					},
					output: {
						type: "structure",
						members: {
							loa: {
								shape: "S2p"
							}
						}
					},
					deprecated: !0
				},
				DescribeInterconnects: {
					input: {
						type: "structure",
						members: {
							interconnectId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							interconnects: {
								type: "list",
								member: {
									shape: "S1w"
								}
							}
						}
					}
				},
				DescribeLags: {
					input: {
						type: "structure",
						members: {
							lagId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							lags: {
								type: "list",
								member: {
									shape: "S21"
								}
							}
						}
					}
				},
				DescribeLoa: {
					input: {
						type: "structure",
						required: ["connectionId"],
						members: {
							connectionId: {},
							providerName: {},
							loaContentType: {}
						}
					},
					output: {
						shape: "S2p"
					}
				},
				DescribeLocations: {
					output: {
						type: "structure",
						members: {
							locations: {
								type: "list",
								member: {
									type: "structure",
									members: {
										locationCode: {},
										locationName: {}
									}
								}
							}
						}
					}
				},
				DescribeTags: {
					input: {
						type: "structure",
						required: ["resourceArns"],
						members: {
							resourceArns: {
								type: "list",
								member: {}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							resourceTags: {
								type: "list",
								member: {
									type: "structure",
									members: {
										resourceArn: {},
										tags: {
											shape: "S3s"
										}
									}
								}
							}
						}
					}
				},
				DescribeVirtualGateways: {
					output: {
						type: "structure",
						members: {
							virtualGateways: {
								type: "list",
								member: {
									type: "structure",
									members: {
										virtualGatewayId: {},
										virtualGatewayState: {}
									}
								}
							}
						}
					}
				},
				DescribeVirtualInterfaces: {
					input: {
						type: "structure",
						members: {
							connectionId: {},
							virtualInterfaceId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							virtualInterfaces: {
								type: "list",
								member: {
									shape: "Sp"
								}
							}
						}
					}
				},
				DisassociateConnectionFromLag: {
					input: {
						type: "structure",
						required: ["connectionId", "lagId"],
						members: {
							connectionId: {},
							lagId: {}
						}
					},
					output: {
						shape: "S7"
					}
				},
				TagResource: {
					input: {
						type: "structure",
						required: ["resourceArn", "tags"],
						members: {
							resourceArn: {},
							tags: {
								shape: "S3s"
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				UntagResource: {
					input: {
						type: "structure",
						required: ["resourceArn", "tagKeys"],
						members: {
							resourceArn: {},
							tagKeys: {
								type: "list",
								member: {}
							}
						}
					},
					output: {
						type: "structure",
						members: {}
					}
				},
				UpdateLag: {
					input: {
						type: "structure",
						required: ["lagId"],
						members: {
							lagId: {},
							lagName: {},
							minimumLinks: {
								type: "integer"
							}
						}
					},
					output: {
						shape: "S21"
					}
				}
			},
			shapes: {
				S7: {
					type: "structure",
					members: {
						ownerAccount: {},
						connectionId: {},
						connectionName: {},
						connectionState: {},
						region: {},
						location: {},
						bandwidth: {},
						vlan: {
							type: "integer"
						},
						partnerName: {},
						loaIssueTime: {
							type: "timestamp"
						},
						lagId: {},
						awsDevice: {}
					}
				},
				Sp: {
					type: "structure",
					members: {
						ownerAccount: {},
						virtualInterfaceId: {},
						location: {},
						connectionId: {},
						virtualInterfaceType: {},
						virtualInterfaceName: {},
						vlan: {
							type: "integer"
						},
						asn: {
							type: "integer"
						},
						amazonSideAsn: {
							type: "long"
						},
						authKey: {},
						amazonAddress: {},
						customerAddress: {},
						addressFamily: {},
						virtualInterfaceState: {},
						customerRouterConfig: {},
						virtualGatewayId: {},
						directConnectGatewayId: {},
						routeFilterPrefixes: {
							shape: "Sx"
						},
						bgpPeers: {
							type: "list",
							member: {
								type: "structure",
								members: {
									asn: {
										type: "integer"
									},
									authKey: {},
									addressFamily: {},
									amazonAddress: {},
									customerAddress: {},
									bgpPeerState: {},
									bgpStatus: {}
								}
							}
						}
					}
				},
				Sx: {
					type: "list",
					member: {
						type: "structure",
						members: {
							cidr: {}
						}
					}
				},
				S1m: {
					type: "structure",
					members: {
						directConnectGatewayId: {},
						directConnectGatewayName: {},
						amazonSideAsn: {
							type: "long"
						},
						ownerAccount: {},
						directConnectGatewayState: {},
						stateChangeError: {}
					}
				},
				S1r: {
					type: "structure",
					members: {
						directConnectGatewayId: {},
						virtualGatewayId: {},
						virtualGatewayRegion: {},
						virtualGatewayOwnerAccount: {},
						associationState: {},
						stateChangeError: {}
					}
				},
				S1w: {
					type: "structure",
					members: {
						interconnectId: {},
						interconnectName: {},
						interconnectState: {},
						region: {},
						location: {},
						bandwidth: {},
						loaIssueTime: {
							type: "timestamp"
						},
						lagId: {},
						awsDevice: {}
					}
				},
				S21: {
					type: "structure",
					members: {
						connectionsBandwidth: {},
						numberOfConnections: {
							type: "integer"
						},
						lagId: {},
						ownerAccount: {},
						lagName: {},
						lagState: {},
						location: {},
						region: {},
						minimumLinks: {
							type: "integer"
						},
						awsDevice: {},
						connections: {
							shape: "S23"
						},
						allowsHostedConnections: {
							type: "boolean"
						}
					}
				},
				S23: {
					type: "list",
					member: {
						shape: "S7"
					}
				},
				S2p: {
					type: "structure",
					members: {
						loaContent: {
							type: "blob"
						},
						loaContentType: {}
					}
				},
				S2s: {
					type: "structure",
					members: {
						connections: {
							shape: "S23"
						}
					}
				},
				S3s: {
					type: "list",
					member: {
						type: "structure",
						required: ["key"],
						members: {
							key: {},
							value: {}
						}
					}
				}
			}
		}
	}, {}],
	46: [function(e, t, r) {
		t.exports = {
			pagination: {
				DescribeConnections: {
					result_key: "connections"
				},
				DescribeConnectionsOnInterconnect: {
					result_key: "connections"
				},
				DescribeInterconnects: {
					result_key: "interconnects"
				},
				DescribeLocations: {
					result_key: "locations"
				},
				DescribeVirtualGateways: {
					result_key: "virtualGateways"
				},
				DescribeVirtualInterfaces: {
					result_key: "virtualInterfaces"
				}
			}
		}
	}, {}],
	47: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2011-12-05",
				endpointPrefix: "dynamodb",
				jsonVersion: "1.0",
				protocol: "json",
				serviceAbbreviation: "DynamoDB",
				serviceFullName: "Amazon DynamoDB",
				serviceId: "DynamoDB",
				signatureVersion: "v4",
				targetPrefix: "DynamoDB_20111205",
				uid: "dynamodb-2011-12-05"
			},
			operations: {
				BatchGetItem: {
					input: {
						type: "structure",
						required: ["RequestItems"],
						members: {
							RequestItems: {
								shape: "S2"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Responses: {
								type: "map",
								key: {},
								value: {
									type: "structure",
									members: {
										Items: {
											shape: "Sk"
										},
										ConsumedCapacityUnits: {
											type: "double"
										}
									}
								}
							},
							UnprocessedKeys: {
								shape: "S2"
							}
						}
					}
				},
				BatchWriteItem: {
					input: {
						type: "structure",
						required: ["RequestItems"],
						members: {
							RequestItems: {
								shape: "So"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Responses: {
								type: "map",
								key: {},
								value: {
									type: "structure",
									members: {
										ConsumedCapacityUnits: {
											type: "double"
										}
									}
								}
							},
							UnprocessedItems: {
								shape: "So"
							}
						}
					}
				},
				CreateTable: {
					input: {
						type: "structure",
						required: ["TableName", "KeySchema", "ProvisionedThroughput"],
						members: {
							TableName: {},
							KeySchema: {
								shape: "Sy"
							},
							ProvisionedThroughput: {
								shape: "S12"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							TableDescription: {
								shape: "S15"
							}
						}
					}
				},
				DeleteItem: {
					input: {
						type: "structure",
						required: ["TableName", "Key"],
						members: {
							TableName: {},
							Key: {
								shape: "S6"
							},
							Expected: {
								shape: "S1b"
							},
							ReturnValues: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Attributes: {
								shape: "Sl"
							},
							ConsumedCapacityUnits: {
								type: "double"
							}
						}
					}
				},
				DeleteTable: {
					input: {
						type: "structure",
						required: ["TableName"],
						members: {
							TableName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							TableDescription: {
								shape: "S15"
							}
						}
					}
				},
				DescribeTable: {
					input: {
						type: "structure",
						required: ["TableName"],
						members: {
							TableName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Table: {
								shape: "S15"
							}
						}
					}
				},
				GetItem: {
					input: {
						type: "structure",
						required: ["TableName", "Key"],
						members: {
							TableName: {},
							Key: {
								shape: "S6"
							},
							AttributesToGet: {
								shape: "Se"
							},
							ConsistentRead: {
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Item: {
								shape: "Sl"
							},
							ConsumedCapacityUnits: {
								type: "double"
							}
						}
					}
				},
				ListTables: {
					input: {
						type: "structure",
						members: {
							ExclusiveStartTableName: {},
							Limit: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							TableNames: {
								type: "list",
								member: {}
							},
							LastEvaluatedTableName: {}
						}
					}
				},
				PutItem: {
					input: {
						type: "structure",
						required: ["TableName", "Item"],
						members: {
							TableName: {},
							Item: {
								shape: "Ss"
							},
							Expected: {
								shape: "S1b"
							},
							ReturnValues: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Attributes: {
								shape: "Sl"
							},
							ConsumedCapacityUnits: {
								type: "double"
							}
						}
					}
				},
				Query: {
					input: {
						type: "structure",
						required: ["TableName", "HashKeyValue"],
						members: {
							TableName: {},
							AttributesToGet: {
								shape: "Se"
							},
							Limit: {
								type: "integer"
							},
							ConsistentRead: {
								type: "boolean"
							},
							Count: {
								type: "boolean"
							},
							HashKeyValue: {
								shape: "S7"
							},
							RangeKeyCondition: {
								shape: "S1u"
							},
							ScanIndexForward: {
								type: "boolean"
							},
							ExclusiveStartKey: {
								shape: "S6"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Items: {
								shape: "Sk"
							},
							Count: {
								type: "integer"
							},
							LastEvaluatedKey: {
								shape: "S6"
							},
							ConsumedCapacityUnits: {
								type: "double"
							}
						}
					}
				},
				Scan: {
					input: {
						type: "structure",
						required: ["TableName"],
						members: {
							TableName: {},
							AttributesToGet: {
								shape: "Se"
							},
							Limit: {
								type: "integer"
							},
							Count: {
								type: "boolean"
							},
							ScanFilter: {
								type: "map",
								key: {},
								value: {
									shape: "S1u"
								}
							},
							ExclusiveStartKey: {
								shape: "S6"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Items: {
								shape: "Sk"
							},
							Count: {
								type: "integer"
							},
							ScannedCount: {
								type: "integer"
							},
							LastEvaluatedKey: {
								shape: "S6"
							},
							ConsumedCapacityUnits: {
								type: "double"
							}
						}
					}
				},
				UpdateItem: {
					input: {
						type: "structure",
						required: ["TableName", "Key", "AttributeUpdates"],
						members: {
							TableName: {},
							Key: {
								shape: "S6"
							},
							AttributeUpdates: {
								type: "map",
								key: {},
								value: {
									type: "structure",
									members: {
										Value: {
											shape: "S7"
										},
										Action: {}
									}
								}
							},
							Expected: {
								shape: "S1b"
							},
							ReturnValues: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Attributes: {
								shape: "Sl"
							},
							ConsumedCapacityUnits: {
								type: "double"
							}
						}
					}
				},
				UpdateTable: {
					input: {
						type: "structure",
						required: ["TableName", "ProvisionedThroughput"],
						members: {
							TableName: {},
							ProvisionedThroughput: {
								shape: "S12"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							TableDescription: {
								shape: "S15"
							}
						}
					}
				}
			},
			shapes: {
				S2: {
					type: "map",
					key: {},
					value: {
						type: "structure",
						required: ["Keys"],
						members: {
							Keys: {
								type: "list",
								member: {
									shape: "S6"
								}
							},
							AttributesToGet: {
								shape: "Se"
							},
							ConsistentRead: {
								type: "boolean"
							}
						}
					}
				},
				S6: {
					type: "structure",
					required: ["HashKeyElement"],
					members: {
						HashKeyElement: {
							shape: "S7"
						},
						RangeKeyElement: {
							shape: "S7"
						}
					}
				},
				S7: {
					type: "structure",
					members: {
						S: {},
						N: {},
						B: {
							type: "blob"
						},
						SS: {
							type: "list",
							member: {}
						},
						NS: {
							type: "list",
							member: {}
						},
						BS: {
							type: "list",
							member: {
								type: "blob"
							}
						}
					}
				},
				Se: {
					type: "list",
					member: {}
				},
				Sk: {
					type: "list",
					member: {
						shape: "Sl"
					}
				},
				Sl: {
					type: "map",
					key: {},
					value: {
						shape: "S7"
					}
				},
				So: {
					type: "map",
					key: {},
					value: {
						type: "list",
						member: {
							type: "structure",
							members: {
								PutRequest: {
									type: "structure",
									required: ["Item"],
									members: {
										Item: {
											shape: "Ss"
										}
									}
								},
								DeleteRequest: {
									type: "structure",
									required: ["Key"],
									members: {
										Key: {
											shape: "S6"
										}
									}
								}
							}
						}
					}
				},
				Ss: {
					type: "map",
					key: {},
					value: {
						shape: "S7"
					}
				},
				Sy: {
					type: "structure",
					required: ["HashKeyElement"],
					members: {
						HashKeyElement: {
							shape: "Sz"
						},
						RangeKeyElement: {
							shape: "Sz"
						}
					}
				},
				Sz: {
					type: "structure",
					required: ["AttributeName", "AttributeType"],
					members: {
						AttributeName: {},
						AttributeType: {}
					}
				},
				S12: {
					type: "structure",
					required: ["ReadCapacityUnits", "WriteCapacityUnits"],
					members: {
						ReadCapacityUnits: {
							type: "long"
						},
						WriteCapacityUnits: {
							type: "long"
						}
					}
				},
				S15: {
					type: "structure",
					members: {
						TableName: {},
						KeySchema: {
							shape: "Sy"
						},
						TableStatus: {},
						CreationDateTime: {
							type: "timestamp"
						},
						ProvisionedThroughput: {
							type: "structure",
							members: {
								LastIncreaseDateTime: {
									type: "timestamp"
								},
								LastDecreaseDateTime: {
									type: "timestamp"
								},
								NumberOfDecreasesToday: {
									type: "long"
								},
								ReadCapacityUnits: {
									type: "long"
								},
								WriteCapacityUnits: {
									type: "long"
								}
							}
						},
						TableSizeBytes: {
							type: "long"
						},
						ItemCount: {
							type: "long"
						}
					}
				},
				S1b: {
					type: "map",
					key: {},
					value: {
						type: "structure",
						members: {
							Value: {
								shape: "S7"
							},
							Exists: {
								type: "boolean"
							}
						}
					}
				},
				S1u: {
					type: "structure",
					required: ["ComparisonOperator"],
					members: {
						AttributeValueList: {
							type: "list",
							member: {
								shape: "S7"
							}
						},
						ComparisonOperator: {}
					}
				}
			}
		}
	}, {}],
	48: [function(e, t, r) {
		t.exports = {
			pagination: {
				BatchGetItem: {
					input_token: "RequestItems",
					output_token: "UnprocessedKeys"
				},
				ListTables: {
					input_token: "ExclusiveStartTableName",
					limit_key: "Limit",
					output_token: "LastEvaluatedTableName",
					result_key: "TableNames"
				},
				Query: {
					input_token: "ExclusiveStartKey",
					limit_key: "Limit",
					output_token: "LastEvaluatedKey",
					result_key: "Items"
				},
				Scan: {
					input_token: "ExclusiveStartKey",
					limit_key: "Limit",
					output_token: "LastEvaluatedKey",
					result_key: "Items"
				}
			}
		}
	}, {}],
	49: [function(e, t, r) {
		t.exports = {
			version: 2,
			waiters: {
				TableExists: {
					delay: 20,
					operation: "DescribeTable",
					maxAttempts: 25,
					acceptors: [{
						expected: "ACTIVE",
						matcher: "path",
						state: "success",
						argument: "Table.TableStatus"
					}, {
						expected: "ResourceNotFoundException",
						matcher: "error",
						state: "retry"
					}]
				},
				TableNotExists: {
					delay: 20,
					operation: "DescribeTable",
					maxAttempts: 25,
					acceptors: [{
						expected: "ResourceNotFoundException",
						matcher: "error",
						state: "success"
					}]
				}
			}
		}
	}, {}],
	50: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2012-08-10",
				endpointPrefix: "dynamodb",
				jsonVersion: "1.0",
				protocol: "json",
				serviceAbbreviation: "DynamoDB",
				serviceFullName: "Amazon DynamoDB",
				serviceId: "DynamoDB",
				signatureVersion: "v4",
				targetPrefix: "DynamoDB_20120810",
				uid: "dynamodb-2012-08-10"
			},
			operations: {
				BatchGetItem: {
					input: {
						type: "structure",
						required: ["RequestItems"],
						members: {
							RequestItems: {
								shape: "S2"
							},
							ReturnConsumedCapacity: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Responses: {
								type: "map",
								key: {},
								value: {
									shape: "Sr"
								}
							},
							UnprocessedKeys: {
								shape: "S2"
							},
							ConsumedCapacity: {
								shape: "St"
							}
						}
					}
				},
				BatchWriteItem: {
					input: {
						type: "structure",
						required: ["RequestItems"],
						members: {
							RequestItems: {
								shape: "S10"
							},
							ReturnConsumedCapacity: {},
							ReturnItemCollectionMetrics: {}
						}
					},
					output: {
						type: "structure",
						members: {
							UnprocessedItems: {
								shape: "S10"
							},
							ItemCollectionMetrics: {
								type: "map",
								key: {},
								value: {
									type: "list",
									member: {
										shape: "S1a"
									}
								}
							},
							ConsumedCapacity: {
								shape: "St"
							}
						}
					}
				},
				CreateBackup: {
					input: {
						type: "structure",
						required: ["TableName", "BackupName"],
						members: {
							TableName: {},
							BackupName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							BackupDetails: {
								shape: "S1h"
							}
						}
					}
				},
				CreateGlobalTable: {
					input: {
						type: "structure",
						required: ["GlobalTableName", "ReplicationGroup"],
						members: {
							GlobalTableName: {},
							ReplicationGroup: {
								shape: "S1n"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							GlobalTableDescription: {
								shape: "S1r"
							}
						}
					}
				},
				CreateTable: {
					input: {
						type: "structure",
						required: ["AttributeDefinitions", "TableName", "KeySchema", "ProvisionedThroughput"],
						members: {
							AttributeDefinitions: {
								shape: "S1y"
							},
							TableName: {},
							KeySchema: {
								shape: "S22"
							},
							LocalSecondaryIndexes: {
								type: "list",
								member: {
									type: "structure",
									required: ["IndexName", "KeySchema", "Projection"],
									members: {
										IndexName: {},
										KeySchema: {
											shape: "S22"
										},
										Projection: {
											shape: "S27"
										}
									}
								}
							},
							GlobalSecondaryIndexes: {
								type: "list",
								member: {
									type: "structure",
									required: ["IndexName", "KeySchema", "Projection", "ProvisionedThroughput"],
									members: {
										IndexName: {},
										KeySchema: {
											shape: "S22"
										},
										Projection: {
											shape: "S27"
										},
										ProvisionedThroughput: {
											shape: "S2d"
										}
									}
								}
							},
							ProvisionedThroughput: {
								shape: "S2d"
							},
							StreamSpecification: {
								shape: "S2f"
							},
							SSESpecification: {
								type: "structure",
								required: ["Enabled"],
								members: {
									Enabled: {
										type: "boolean"
									}
								}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							TableDescription: {
								shape: "S2l"
							}
						}
					}
				},
				DeleteBackup: {
					input: {
						type: "structure",
						required: ["BackupArn"],
						members: {
							BackupArn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							BackupDescription: {
								shape: "S35"
							}
						}
					}
				},
				DeleteItem: {
					input: {
						type: "structure",
						required: ["TableName", "Key"],
						members: {
							TableName: {},
							Key: {
								shape: "S6"
							},
							Expected: {
								shape: "S3i"
							},
							ConditionalOperator: {},
							ReturnValues: {},
							ReturnConsumedCapacity: {},
							ReturnItemCollectionMetrics: {},
							ConditionExpression: {},
							ExpressionAttributeNames: {
								shape: "Sm"
							},
							ExpressionAttributeValues: {
								shape: "S3q"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Attributes: {
								shape: "Ss"
							},
							ConsumedCapacity: {
								shape: "Su"
							},
							ItemCollectionMetrics: {
								shape: "S1a"
							}
						}
					}
				},
				DeleteTable: {
					input: {
						type: "structure",
						required: ["TableName"],
						members: {
							TableName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							TableDescription: {
								shape: "S2l"
							}
						}
					}
				},
				DescribeBackup: {
					input: {
						type: "structure",
						required: ["BackupArn"],
						members: {
							BackupArn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							BackupDescription: {
								shape: "S35"
							}
						}
					}
				},
				DescribeContinuousBackups: {
					input: {
						type: "structure",
						required: ["TableName"],
						members: {
							TableName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ContinuousBackupsDescription: {
								shape: "S3z"
							}
						}
					}
				},
				DescribeGlobalTable: {
					input: {
						type: "structure",
						required: ["GlobalTableName"],
						members: {
							GlobalTableName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							GlobalTableDescription: {
								shape: "S1r"
							}
						}
					}
				},
				DescribeGlobalTableSettings: {
					input: {
						type: "structure",
						required: ["GlobalTableName"],
						members: {
							GlobalTableName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							GlobalTableName: {},
							ReplicaSettings: {
								shape: "S47"
							}
						}
					}
				},
				DescribeLimits: {
					input: {
						type: "structure",
						members: {}
					},
					output: {
						type: "structure",
						members: {
							AccountMaxReadCapacityUnits: {
								type: "long"
							},
							AccountMaxWriteCapacityUnits: {
								type: "long"
							},
							TableMaxReadCapacityUnits: {
								type: "long"
							},
							TableMaxWriteCapacityUnits: {
								type: "long"
							}
						}
					}
				},
				DescribeTable: {
					input: {
						type: "structure",
						required: ["TableName"],
						members: {
							TableName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Table: {
								shape: "S2l"
							}
						}
					}
				},
				DescribeTimeToLive: {
					input: {
						type: "structure",
						required: ["TableName"],
						members: {
							TableName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							TimeToLiveDescription: {
								shape: "S3e"
							}
						}
					}
				},
				GetItem: {
					input: {
						type: "structure",
						required: ["TableName", "Key"],
						members: {
							TableName: {},
							Key: {
								shape: "S6"
							},
							AttributesToGet: {
								shape: "Sj"
							},
							ConsistentRead: {
								type: "boolean"
							},
							ReturnConsumedCapacity: {},
							ProjectionExpression: {},
							ExpressionAttributeNames: {
								shape: "Sm"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Item: {
								shape: "Ss"
							},
							ConsumedCapacity: {
								shape: "Su"
							}
						}
					}
				},
				ListBackups: {
					input: {
						type: "structure",
						members: {
							TableName: {},
							Limit: {
								type: "integer"
							},
							TimeRangeLowerBound: {
								type: "timestamp"
							},
							TimeRangeUpperBound: {
								type: "timestamp"
							},
							ExclusiveStartBackupArn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							BackupSummaries: {
								type: "list",
								member: {
									type: "structure",
									members: {
										TableName: {},
										TableId: {},
										TableArn: {},
										BackupArn: {},
										BackupName: {},
										BackupCreationDateTime: {
											type: "timestamp"
										},
										BackupStatus: {},
										BackupSizeBytes: {
											type: "long"
										}
									}
								}
							},
							LastEvaluatedBackupArn: {}
						}
					}
				},
				ListGlobalTables: {
					input: {
						type: "structure",
						members: {
							ExclusiveStartGlobalTableName: {},
							Limit: {
								type: "integer"
							},
							RegionName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							GlobalTables: {
								type: "list",
								member: {
									type: "structure",
									members: {
										GlobalTableName: {},
										ReplicationGroup: {
											shape: "S1n"
										}
									}
								}
							},
							LastEvaluatedGlobalTableName: {}
						}
					}
				},
				ListTables: {
					input: {
						type: "structure",
						members: {
							ExclusiveStartTableName: {},
							Limit: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							TableNames: {
								type: "list",
								member: {}
							},
							LastEvaluatedTableName: {}
						}
					}
				},
				ListTagsOfResource: {
					input: {
						type: "structure",
						required: ["ResourceArn"],
						members: {
							ResourceArn: {},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Tags: {
								shape: "S54"
							},
							NextToken: {}
						}
					}
				},
				PutItem: {
					input: {
						type: "structure",
						required: ["TableName", "Item"],
						members: {
							TableName: {},
							Item: {
								shape: "S14"
							},
							Expected: {
								shape: "S3i"
							},
							ReturnValues: {},
							ReturnConsumedCapacity: {},
							ReturnItemCollectionMetrics: {},
							ConditionalOperator: {},
							ConditionExpression: {},
							ExpressionAttributeNames: {
								shape: "Sm"
							},
							ExpressionAttributeValues: {
								shape: "S3q"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Attributes: {
								shape: "Ss"
							},
							ConsumedCapacity: {
								shape: "Su"
							},
							ItemCollectionMetrics: {
								shape: "S1a"
							}
						}
					}
				},
				Query: {
					input: {
						type: "structure",
						required: ["TableName"],
						members: {
							TableName: {},
							IndexName: {},
							Select: {},
							AttributesToGet: {
								shape: "Sj"
							},
							Limit: {
								type: "integer"
							},
							ConsistentRead: {
								type: "boolean"
							},
							KeyConditions: {
								type: "map",
								key: {},
								value: {
									shape: "S5d"
								}
							},
							QueryFilter: {
								shape: "S5e"
							},
							ConditionalOperator: {},
							ScanIndexForward: {
								type: "boolean"
							},
							ExclusiveStartKey: {
								shape: "S6"
							},
							ReturnConsumedCapacity: {},
							ProjectionExpression: {},
							FilterExpression: {},
							KeyConditionExpression: {},
							ExpressionAttributeNames: {
								shape: "Sm"
							},
							ExpressionAttributeValues: {
								shape: "S3q"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Items: {
								shape: "Sr"
							},
							Count: {
								type: "integer"
							},
							ScannedCount: {
								type: "integer"
							},
							LastEvaluatedKey: {
								shape: "S6"
							},
							ConsumedCapacity: {
								shape: "Su"
							}
						}
					}
				},
				RestoreTableFromBackup: {
					input: {
						type: "structure",
						required: ["TargetTableName", "BackupArn"],
						members: {
							TargetTableName: {},
							BackupArn: {}
						}
					},
					output: {
						type: "structure",
						members: {
							TableDescription: {
								shape: "S2l"
							}
						}
					}
				},
				RestoreTableToPointInTime: {
					input: {
						type: "structure",
						required: ["SourceTableName", "TargetTableName"],
						members: {
							SourceTableName: {},
							TargetTableName: {},
							UseLatestRestorableTime: {
								type: "boolean"
							},
							RestoreDateTime: {
								type: "timestamp"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							TableDescription: {
								shape: "S2l"
							}
						}
					}
				},
				Scan: {
					input: {
						type: "structure",
						required: ["TableName"],
						members: {
							TableName: {},
							IndexName: {},
							AttributesToGet: {
								shape: "Sj"
							},
							Limit: {
								type: "integer"
							},
							Select: {},
							ScanFilter: {
								shape: "S5e"
							},
							ConditionalOperator: {},
							ExclusiveStartKey: {
								shape: "S6"
							},
							ReturnConsumedCapacity: {},
							TotalSegments: {
								type: "integer"
							},
							Segment: {
								type: "integer"
							},
							ProjectionExpression: {},
							FilterExpression: {},
							ExpressionAttributeNames: {
								shape: "Sm"
							},
							ExpressionAttributeValues: {
								shape: "S3q"
							},
							ConsistentRead: {
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Items: {
								shape: "Sr"
							},
							Count: {
								type: "integer"
							},
							ScannedCount: {
								type: "integer"
							},
							LastEvaluatedKey: {
								shape: "S6"
							},
							ConsumedCapacity: {
								shape: "Su"
							}
						}
					}
				},
				TagResource: {
					input: {
						type: "structure",
						required: ["ResourceArn", "Tags"],
						members: {
							ResourceArn: {},
							Tags: {
								shape: "S54"
							}
						}
					}
				},
				UntagResource: {
					input: {
						type: "structure",
						required: ["ResourceArn", "TagKeys"],
						members: {
							ResourceArn: {},
							TagKeys: {
								type: "list",
								member: {}
							}
						}
					}
				},
				UpdateContinuousBackups: {
					input: {
						type: "structure",
						required: ["TableName", "PointInTimeRecoverySpecification"],
						members: {
							TableName: {},
							PointInTimeRecoverySpecification: {
								type: "structure",
								required: ["PointInTimeRecoveryEnabled"],
								members: {
									PointInTimeRecoveryEnabled: {
										type: "boolean"
									}
								}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ContinuousBackupsDescription: {
								shape: "S3z"
							}
						}
					}
				},
				UpdateGlobalTable: {
					input: {
						type: "structure",
						required: ["GlobalTableName", "ReplicaUpdates"],
						members: {
							GlobalTableName: {},
							ReplicaUpdates: {
								type: "list",
								member: {
									type: "structure",
									members: {
										Create: {
											type: "structure",
											required: ["RegionName"],
											members: {
												RegionName: {}
											}
										},
										Delete: {
											type: "structure",
											required: ["RegionName"],
											members: {
												RegionName: {}
											}
										}
									}
								}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							GlobalTableDescription: {
								shape: "S1r"
							}
						}
					}
				},
				UpdateGlobalTableSettings: {
					input: {
						type: "structure",
						required: ["GlobalTableName"],
						members: {
							GlobalTableName: {},
							GlobalTableProvisionedWriteCapacityUnits: {
								type: "long"
							},
							GlobalTableGlobalSecondaryIndexSettingsUpdate: {
								type: "list",
								member: {
									type: "structure",
									required: ["IndexName"],
									members: {
										IndexName: {},
										ProvisionedWriteCapacityUnits: {
											type: "long"
										}
									}
								}
							},
							ReplicaSettingsUpdate: {
								type: "list",
								member: {
									type: "structure",
									required: ["RegionName"],
									members: {
										RegionName: {},
										ReplicaProvisionedReadCapacityUnits: {
											type: "long"
										},
										ReplicaGlobalSecondaryIndexSettingsUpdate: {
											type: "list",
											member: {
												type: "structure",
												required: ["IndexName"],
												members: {
													IndexName: {},
													ProvisionedReadCapacityUnits: {
														type: "long"
													}
												}
											}
										}
									}
								}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							GlobalTableName: {},
							ReplicaSettings: {
								shape: "S47"
							}
						}
					}
				},
				UpdateItem: {
					input: {
						type: "structure",
						required: ["TableName", "Key"],
						members: {
							TableName: {},
							Key: {
								shape: "S6"
							},
							AttributeUpdates: {
								type: "map",
								key: {},
								value: {
									type: "structure",
									members: {
										Value: {
											shape: "S8"
										},
										Action: {}
									}
								}
							},
							Expected: {
								shape: "S3i"
							},
							ConditionalOperator: {},
							ReturnValues: {},
							ReturnConsumedCapacity: {},
							ReturnItemCollectionMetrics: {},
							UpdateExpression: {},
							ConditionExpression: {},
							ExpressionAttributeNames: {
								shape: "Sm"
							},
							ExpressionAttributeValues: {
								shape: "S3q"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Attributes: {
								shape: "Ss"
							},
							ConsumedCapacity: {
								shape: "Su"
							},
							ItemCollectionMetrics: {
								shape: "S1a"
							}
						}
					}
				},
				UpdateTable: {
					input: {
						type: "structure",
						required: ["TableName"],
						members: {
							AttributeDefinitions: {
								shape: "S1y"
							},
							TableName: {},
							ProvisionedThroughput: {
								shape: "S2d"
							},
							GlobalSecondaryIndexUpdates: {
								type: "list",
								member: {
									type: "structure",
									members: {
										Update: {
											type: "structure",
											required: ["IndexName", "ProvisionedThroughput"],
											members: {
												IndexName: {},
												ProvisionedThroughput: {
													shape: "S2d"
												}
											}
										},
										Create: {
											type: "structure",
											required: ["IndexName", "KeySchema", "Projection", "ProvisionedThroughput"],
											members: {
												IndexName: {},
												KeySchema: {
													shape: "S22"
												},
												Projection: {
													shape: "S27"
												},
												ProvisionedThroughput: {
													shape: "S2d"
												}
											}
										},
										Delete: {
											type: "structure",
											required: ["IndexName"],
											members: {
												IndexName: {}
											}
										}
									}
								}
							},
							StreamSpecification: {
								shape: "S2f"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							TableDescription: {
								shape: "S2l"
							}
						}
					}
				},
				UpdateTimeToLive: {
					input: {
						type: "structure",
						required: ["TableName", "TimeToLiveSpecification"],
						members: {
							TableName: {},
							TimeToLiveSpecification: {
								shape: "S6o"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							TimeToLiveSpecification: {
								shape: "S6o"
							}
						}
					}
				}
			},
			shapes: {
				S2: {
					type: "map",
					key: {},
					value: {
						type: "structure",
						required: ["Keys"],
						members: {
							Keys: {
								type: "list",
								member: {
									shape: "S6"
								}
							},
							AttributesToGet: {
								shape: "Sj"
							},
							ConsistentRead: {
								type: "boolean"
							},
							ProjectionExpression: {},
							ExpressionAttributeNames: {
								shape: "Sm"
							}
						}
					}
				},
				S6: {
					type: "map",
					key: {},
					value: {
						shape: "S8"
					}
				},
				S8: {
					type: "structure",
					members: {
						S: {},
						N: {},
						B: {
							type: "blob"
						},
						SS: {
							type: "list",
							member: {}
						},
						NS: {
							type: "list",
							member: {}
						},
						BS: {
							type: "list",
							member: {
								type: "blob"
							}
						},
						M: {
							type: "map",
							key: {},
							value: {
								shape: "S8"
							}
						},
						L: {
							type: "list",
							member: {
								shape: "S8"
							}
						},
						NULL: {
							type: "boolean"
						},
						BOOL: {
							type: "boolean"
						}
					}
				},
				Sj: {
					type: "list",
					member: {}
				},
				Sm: {
					type: "map",
					key: {},
					value: {}
				},
				Sr: {
					type: "list",
					member: {
						shape: "Ss"
					}
				},
				Ss: {
					type: "map",
					key: {},
					value: {
						shape: "S8"
					}
				},
				St: {
					type: "list",
					member: {
						shape: "Su"
					}
				},
				Su: {
					type: "structure",
					members: {
						TableName: {},
						CapacityUnits: {
							type: "double"
						},
						Table: {
							shape: "Sw"
						},
						LocalSecondaryIndexes: {
							shape: "Sx"
						},
						GlobalSecondaryIndexes: {
							shape: "Sx"
						}
					}
				},
				Sw: {
					type: "structure",
					members: {
						CapacityUnits: {
							type: "double"
						}
					}
				},
				Sx: {
					type: "map",
					key: {},
					value: {
						shape: "Sw"
					}
				},
				S10: {
					type: "map",
					key: {},
					value: {
						type: "list",
						member: {
							type: "structure",
							members: {
								PutRequest: {
									type: "structure",
									required: ["Item"],
									members: {
										Item: {
											shape: "S14"
										}
									}
								},
								DeleteRequest: {
									type: "structure",
									required: ["Key"],
									members: {
										Key: {
											shape: "S6"
										}
									}
								}
							}
						}
					}
				},
				S14: {
					type: "map",
					key: {},
					value: {
						shape: "S8"
					}
				},
				S1a: {
					type: "structure",
					members: {
						ItemCollectionKey: {
							type: "map",
							key: {},
							value: {
								shape: "S8"
							}
						},
						SizeEstimateRangeGB: {
							type: "list",
							member: {
								type: "double"
							}
						}
					}
				},
				S1h: {
					type: "structure",
					required: ["BackupArn", "BackupName", "BackupStatus", "BackupCreationDateTime"],
					members: {
						BackupArn: {},
						BackupName: {},
						BackupSizeBytes: {
							type: "long"
						},
						BackupStatus: {},
						BackupCreationDateTime: {
							type: "timestamp"
						}
					}
				},
				S1n: {
					type: "list",
					member: {
						type: "structure",
						members: {
							RegionName: {}
						}
					}
				},
				S1r: {
					type: "structure",
					members: {
						ReplicationGroup: {
							type: "list",
							member: {
								type: "structure",
								members: {
									RegionName: {}
								}
							}
						},
						GlobalTableArn: {},
						CreationDateTime: {
							type: "timestamp"
						},
						GlobalTableStatus: {},
						GlobalTableName: {}
					}
				},
				S1y: {
					type: "list",
					member: {
						type: "structure",
						required: ["AttributeName", "AttributeType"],
						members: {
							AttributeName: {},
							AttributeType: {}
						}
					}
				},
				S22: {
					type: "list",
					member: {
						type: "structure",
						required: ["AttributeName", "KeyType"],
						members: {
							AttributeName: {},
							KeyType: {}
						}
					}
				},
				S27: {
					type: "structure",
					members: {
						ProjectionType: {},
						NonKeyAttributes: {
							type: "list",
							member: {}
						}
					}
				},
				S2d: {
					type: "structure",
					required: ["ReadCapacityUnits", "WriteCapacityUnits"],
					members: {
						ReadCapacityUnits: {
							type: "long"
						},
						WriteCapacityUnits: {
							type: "long"
						}
					}
				},
				S2f: {
					type: "structure",
					members: {
						StreamEnabled: {
							type: "boolean"
						},
						StreamViewType: {}
					}
				},
				S2l: {
					type: "structure",
					members: {
						AttributeDefinitions: {
							shape: "S1y"
						},
						TableName: {},
						KeySchema: {
							shape: "S22"
						},
						TableStatus: {},
						CreationDateTime: {
							type: "timestamp"
						},
						ProvisionedThroughput: {
							shape: "S2n"
						},
						TableSizeBytes: {
							type: "long"
						},
						ItemCount: {
							type: "long"
						},
						TableArn: {},
						TableId: {},
						LocalSecondaryIndexes: {
							type: "list",
							member: {
								type: "structure",
								members: {
									IndexName: {},
									KeySchema: {
										shape: "S22"
									},
									Projection: {
										shape: "S27"
									},
									IndexSizeBytes: {
										type: "long"
									},
									ItemCount: {
										type: "long"
									},
									IndexArn: {}
								}
							}
						},
						GlobalSecondaryIndexes: {
							type: "list",
							member: {
								type: "structure",
								members: {
									IndexName: {},
									KeySchema: {
										shape: "S22"
									},
									Projection: {
										shape: "S27"
									},
									IndexStatus: {},
									Backfilling: {
										type: "boolean"
									},
									ProvisionedThroughput: {
										shape: "S2n"
									},
									IndexSizeBytes: {
										type: "long"
									},
									ItemCount: {
										type: "long"
									},
									IndexArn: {}
								}
							}
						},
						StreamSpecification: {
							shape: "S2f"
						},
						LatestStreamLabel: {},
						LatestStreamArn: {},
						RestoreSummary: {
							type: "structure",
							required: ["RestoreDateTime", "RestoreInProgress"],
							members: {
								SourceBackupArn: {},
								SourceTableArn: {},
								RestoreDateTime: {
									type: "timestamp"
								},
								RestoreInProgress: {
									type: "boolean"
								}
							}
						},
						SSEDescription: {
							shape: "S31"
						}
					}
				},
				S2n: {
					type: "structure",
					members: {
						LastIncreaseDateTime: {
							type: "timestamp"
						},
						LastDecreaseDateTime: {
							type: "timestamp"
						},
						NumberOfDecreasesToday: {
							type: "long"
						},
						ReadCapacityUnits: {
							type: "long"
						},
						WriteCapacityUnits: {
							type: "long"
						}
					}
				},
				S31: {
					type: "structure",
					members: {
						Status: {}
					}
				},
				S35: {
					type: "structure",
					members: {
						BackupDetails: {
							shape: "S1h"
						},
						SourceTableDetails: {
							type: "structure",
							required: ["TableName", "TableId", "KeySchema", "TableCreationDateTime", "ProvisionedThroughput"],
							members: {
								TableName: {},
								TableId: {},
								TableArn: {},
								TableSizeBytes: {
									type: "long"
								},
								KeySchema: {
									shape: "S22"
								},
								TableCreationDateTime: {
									type: "timestamp"
								},
								ProvisionedThroughput: {
									shape: "S2d"
								},
								ItemCount: {
									type: "long"
								}
							}
						},
						SourceTableFeatureDetails: {
							type: "structure",
							members: {
								LocalSecondaryIndexes: {
									type: "list",
									member: {
										type: "structure",
										members: {
											IndexName: {},
											KeySchema: {
												shape: "S22"
											},
											Projection: {
												shape: "S27"
											}
										}
									}
								},
								GlobalSecondaryIndexes: {
									type: "list",
									member: {
										type: "structure",
										members: {
											IndexName: {},
											KeySchema: {
												shape: "S22"
											},
											Projection: {
												shape: "S27"
											},
											ProvisionedThroughput: {
												shape: "S2d"
											}
										}
									}
								},
								StreamDescription: {
									shape: "S2f"
								},
								TimeToLiveDescription: {
									shape: "S3e"
								},
								SSEDescription: {
									shape: "S31"
								}
							}
						}
					}
				},
				S3e: {
					type: "structure",
					members: {
						TimeToLiveStatus: {},
						AttributeName: {}
					}
				},
				S3i: {
					type: "map",
					key: {},
					value: {
						type: "structure",
						members: {
							Value: {
								shape: "S8"
							},
							Exists: {
								type: "boolean"
							},
							ComparisonOperator: {},
							AttributeValueList: {
								shape: "S3m"
							}
						}
					}
				},
				S3m: {
					type: "list",
					member: {
						shape: "S8"
					}
				},
				S3q: {
					type: "map",
					key: {},
					value: {
						shape: "S8"
					}
				},
				S3z: {
					type: "structure",
					required: ["ContinuousBackupsStatus"],
					members: {
						ContinuousBackupsStatus: {},
						PointInTimeRecoveryDescription: {
							type: "structure",
							members: {
								PointInTimeRecoveryStatus: {},
								EarliestRestorableDateTime: {
									type: "timestamp"
								},
								LatestRestorableDateTime: {
									type: "timestamp"
								}
							}
						}
					}
				},
				S47: {
					type: "list",
					member: {
						type: "structure",
						required: ["RegionName"],
						members: {
							RegionName: {},
							ReplicaStatus: {},
							ReplicaProvisionedReadCapacityUnits: {
								type: "long"
							},
							ReplicaProvisionedWriteCapacityUnits: {
								type: "long"
							},
							ReplicaGlobalSecondaryIndexSettings: {
								type: "list",
								member: {
									type: "structure",
									required: ["IndexName"],
									members: {
										IndexName: {},
										IndexStatus: {},
										ProvisionedReadCapacityUnits: {
											type: "long"
										},
										ProvisionedWriteCapacityUnits: {
											type: "long"
										}
									}
								}
							}
						}
					}
				},
				S54: {
					type: "list",
					member: {
						type: "structure",
						required: ["Key", "Value"],
						members: {
							Key: {},
							Value: {}
						}
					}
				},
				S5d: {
					type: "structure",
					required: ["ComparisonOperator"],
					members: {
						AttributeValueList: {
							shape: "S3m"
						},
						ComparisonOperator: {}
					}
				},
				S5e: {
					type: "map",
					key: {},
					value: {
						shape: "S5d"
					}
				},
				S6o: {
					type: "structure",
					required: ["Enabled", "AttributeName"],
					members: {
						Enabled: {
							type: "boolean"
						},
						AttributeName: {}
					}
				}
			}
		}
	}, {}],
	51: [function(e, t, r) {
		arguments[4][48][0].apply(r, arguments)
	}, {
		dup: 48
	}],
	52: [function(e, t, r) {
		arguments[4][49][0].apply(r, arguments)
	}, {
		dup: 49
	}],
	53: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2016-11-15",
				endpointPrefix: "ec2",
				protocol: "ec2",
				serviceAbbreviation: "Amazon EC2",
				serviceFullName: "Amazon Elastic Compute Cloud",
				serviceId: "EC2",
				signatureVersion: "v4",
				uid: "ec2-2016-11-15",
				xmlNamespace: "http://ec2.amazonaws.com/doc/2016-11-15"
			},
			operations: {
				AcceptReservedInstancesExchangeQuote: {
					input: {
						type: "structure",
						required: ["ReservedInstanceIds"],
						members: {
							DryRun: {
								type: "boolean"
							},
							ReservedInstanceIds: {
								shape: "S3",
								locationName: "ReservedInstanceId"
							},
							TargetConfigurations: {
								shape: "S5",
								locationName: "TargetConfiguration"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ExchangeId: {
								locationName: "exchangeId"
							}
						}
					}
				},
				AcceptVpcEndpointConnections: {
					input: {
						type: "structure",
						required: ["ServiceId", "VpcEndpointIds"],
						members: {
							DryRun: {
								type: "boolean"
							},
							ServiceId: {},
							VpcEndpointIds: {
								shape: "Sa",
								locationName: "VpcEndpointId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Unsuccessful: {
								shape: "Sc",
								locationName: "unsuccessful"
							}
						}
					}
				},
				AcceptVpcPeeringConnection: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							VpcPeeringConnectionId: {
								locationName: "vpcPeeringConnectionId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							VpcPeeringConnection: {
								shape: "Sh",
								locationName: "vpcPeeringConnection"
							}
						}
					}
				},
				AllocateAddress: {
					input: {
						type: "structure",
						members: {
							Domain: {},
							Address: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							PublicIp: {
								locationName: "publicIp"
							},
							AllocationId: {
								locationName: "allocationId"
							},
							Domain: {
								locationName: "domain"
							}
						}
					}
				},
				AllocateHosts: {
					input: {
						type: "structure",
						required: ["AvailabilityZone", "InstanceType", "Quantity"],
						members: {
							AutoPlacement: {
								locationName: "autoPlacement"
							},
							AvailabilityZone: {
								locationName: "availabilityZone"
							},
							ClientToken: {
								locationName: "clientToken"
							},
							InstanceType: {
								locationName: "instanceType"
							},
							Quantity: {
								locationName: "quantity",
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							HostIds: {
								shape: "Sz",
								locationName: "hostIdSet"
							}
						}
					}
				},
				AssignIpv6Addresses: {
					input: {
						type: "structure",
						required: ["NetworkInterfaceId"],
						members: {
							Ipv6AddressCount: {
								locationName: "ipv6AddressCount",
								type: "integer"
							},
							Ipv6Addresses: {
								shape: "S11",
								locationName: "ipv6Addresses"
							},
							NetworkInterfaceId: {
								locationName: "networkInterfaceId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							AssignedIpv6Addresses: {
								shape: "S11",
								locationName: "assignedIpv6Addresses"
							},
							NetworkInterfaceId: {
								locationName: "networkInterfaceId"
							}
						}
					}
				},
				AssignPrivateIpAddresses: {
					input: {
						type: "structure",
						required: ["NetworkInterfaceId"],
						members: {
							AllowReassignment: {
								locationName: "allowReassignment",
								type: "boolean"
							},
							NetworkInterfaceId: {
								locationName: "networkInterfaceId"
							},
							PrivateIpAddresses: {
								shape: "S14",
								locationName: "privateIpAddress"
							},
							SecondaryPrivateIpAddressCount: {
								locationName: "secondaryPrivateIpAddressCount",
								type: "integer"
							}
						}
					}
				},
				AssociateAddress: {
					input: {
						type: "structure",
						members: {
							AllocationId: {},
							InstanceId: {},
							PublicIp: {},
							AllowReassociation: {
								locationName: "allowReassociation",
								type: "boolean"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							NetworkInterfaceId: {
								locationName: "networkInterfaceId"
							},
							PrivateIpAddress: {
								locationName: "privateIpAddress"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							AssociationId: {
								locationName: "associationId"
							}
						}
					}
				},
				AssociateDhcpOptions: {
					input: {
						type: "structure",
						required: ["DhcpOptionsId", "VpcId"],
						members: {
							DhcpOptionsId: {},
							VpcId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					}
				},
				AssociateIamInstanceProfile: {
					input: {
						type: "structure",
						required: ["IamInstanceProfile", "InstanceId"],
						members: {
							IamInstanceProfile: {
								shape: "S19"
							},
							InstanceId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							IamInstanceProfileAssociation: {
								shape: "S1b",
								locationName: "iamInstanceProfileAssociation"
							}
						}
					}
				},
				AssociateRouteTable: {
					input: {
						type: "structure",
						required: ["RouteTableId", "SubnetId"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							RouteTableId: {
								locationName: "routeTableId"
							},
							SubnetId: {
								locationName: "subnetId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							AssociationId: {
								locationName: "associationId"
							}
						}
					}
				},
				AssociateSubnetCidrBlock: {
					input: {
						type: "structure",
						required: ["Ipv6CidrBlock", "SubnetId"],
						members: {
							Ipv6CidrBlock: {
								locationName: "ipv6CidrBlock"
							},
							SubnetId: {
								locationName: "subnetId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Ipv6CidrBlockAssociation: {
								shape: "S1i",
								locationName: "ipv6CidrBlockAssociation"
							},
							SubnetId: {
								locationName: "subnetId"
							}
						}
					}
				},
				AssociateVpcCidrBlock: {
					input: {
						type: "structure",
						required: ["VpcId"],
						members: {
							AmazonProvidedIpv6CidrBlock: {
								locationName: "amazonProvidedIpv6CidrBlock",
								type: "boolean"
							},
							CidrBlock: {},
							VpcId: {
								locationName: "vpcId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Ipv6CidrBlockAssociation: {
								shape: "S1n",
								locationName: "ipv6CidrBlockAssociation"
							},
							CidrBlockAssociation: {
								shape: "S1q",
								locationName: "cidrBlockAssociation"
							},
							VpcId: {
								locationName: "vpcId"
							}
						}
					}
				},
				AttachClassicLinkVpc: {
					input: {
						type: "structure",
						required: ["Groups", "InstanceId", "VpcId"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							Groups: {
								shape: "S1s",
								locationName: "SecurityGroupId"
							},
							InstanceId: {
								locationName: "instanceId"
							},
							VpcId: {
								locationName: "vpcId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Return: {
								locationName: "return",
								type: "boolean"
							}
						}
					}
				},
				AttachInternetGateway: {
					input: {
						type: "structure",
						required: ["InternetGatewayId", "VpcId"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							InternetGatewayId: {
								locationName: "internetGatewayId"
							},
							VpcId: {
								locationName: "vpcId"
							}
						}
					}
				},
				AttachNetworkInterface: {
					input: {
						type: "structure",
						required: ["DeviceIndex", "InstanceId", "NetworkInterfaceId"],
						members: {
							DeviceIndex: {
								locationName: "deviceIndex",
								type: "integer"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							InstanceId: {
								locationName: "instanceId"
							},
							NetworkInterfaceId: {
								locationName: "networkInterfaceId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							AttachmentId: {
								locationName: "attachmentId"
							}
						}
					}
				},
				AttachVolume: {
					input: {
						type: "structure",
						required: ["Device", "InstanceId", "VolumeId"],
						members: {
							Device: {},
							InstanceId: {},
							VolumeId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						shape: "S1y"
					}
				},
				AttachVpnGateway: {
					input: {
						type: "structure",
						required: ["VpcId", "VpnGatewayId"],
						members: {
							VpcId: {},
							VpnGatewayId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							VpcAttachment: {
								shape: "S22",
								locationName: "attachment"
							}
						}
					}
				},
				AuthorizeSecurityGroupEgress: {
					input: {
						type: "structure",
						required: ["GroupId"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							GroupId: {
								locationName: "groupId"
							},
							IpPermissions: {
								shape: "S25",
								locationName: "ipPermissions"
							},
							CidrIp: {
								locationName: "cidrIp"
							},
							FromPort: {
								locationName: "fromPort",
								type: "integer"
							},
							IpProtocol: {
								locationName: "ipProtocol"
							},
							ToPort: {
								locationName: "toPort",
								type: "integer"
							},
							SourceSecurityGroupName: {
								locationName: "sourceSecurityGroupName"
							},
							SourceSecurityGroupOwnerId: {
								locationName: "sourceSecurityGroupOwnerId"
							}
						}
					}
				},
				AuthorizeSecurityGroupIngress: {
					input: {
						type: "structure",
						members: {
							CidrIp: {},
							FromPort: {
								type: "integer"
							},
							GroupId: {},
							GroupName: {},
							IpPermissions: {
								shape: "S25"
							},
							IpProtocol: {},
							SourceSecurityGroupName: {},
							SourceSecurityGroupOwnerId: {},
							ToPort: {
								type: "integer"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					}
				},
				BundleInstance: {
					input: {
						type: "structure",
						required: ["InstanceId", "Storage"],
						members: {
							InstanceId: {},
							Storage: {
								shape: "S2h"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							BundleTask: {
								shape: "S2l",
								locationName: "bundleInstanceTask"
							}
						}
					}
				},
				CancelBundleTask: {
					input: {
						type: "structure",
						required: ["BundleId"],
						members: {
							BundleId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							BundleTask: {
								shape: "S2l",
								locationName: "bundleInstanceTask"
							}
						}
					}
				},
				CancelConversionTask: {
					input: {
						type: "structure",
						required: ["ConversionTaskId"],
						members: {
							ConversionTaskId: {
								locationName: "conversionTaskId"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							ReasonMessage: {
								locationName: "reasonMessage"
							}
						}
					}
				},
				CancelExportTask: {
					input: {
						type: "structure",
						required: ["ExportTaskId"],
						members: {
							ExportTaskId: {
								locationName: "exportTaskId"
							}
						}
					}
				},
				CancelImportTask: {
					input: {
						type: "structure",
						members: {
							CancelReason: {},
							DryRun: {
								type: "boolean"
							},
							ImportTaskId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ImportTaskId: {
								locationName: "importTaskId"
							},
							PreviousState: {
								locationName: "previousState"
							},
							State: {
								locationName: "state"
							}
						}
					}
				},
				CancelReservedInstancesListing: {
					input: {
						type: "structure",
						required: ["ReservedInstancesListingId"],
						members: {
							ReservedInstancesListingId: {
								locationName: "reservedInstancesListingId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ReservedInstancesListings: {
								shape: "S2w",
								locationName: "reservedInstancesListingsSet"
							}
						}
					}
				},
				CancelSpotFleetRequests: {
					input: {
						type: "structure",
						required: ["SpotFleetRequestIds", "TerminateInstances"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							SpotFleetRequestIds: {
								shape: "Sa",
								locationName: "spotFleetRequestId"
							},
							TerminateInstances: {
								locationName: "terminateInstances",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							SuccessfulFleetRequests: {
								locationName: "successfulFleetRequestSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									required: ["CurrentSpotFleetRequestState", "PreviousSpotFleetRequestState", "SpotFleetRequestId"],
									members: {
										CurrentSpotFleetRequestState: {
											locationName: "currentSpotFleetRequestState"
										},
										PreviousSpotFleetRequestState: {
											locationName: "previousSpotFleetRequestState"
										},
										SpotFleetRequestId: {
											locationName: "spotFleetRequestId"
										}
									}
								}
							},
							UnsuccessfulFleetRequests: {
								locationName: "unsuccessfulFleetRequestSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									required: ["Error", "SpotFleetRequestId"],
									members: {
										Error: {
											locationName: "error",
											type: "structure",
											required: ["Code", "Message"],
											members: {
												Code: {
													locationName: "code"
												},
												Message: {
													locationName: "message"
												}
											}
										},
										SpotFleetRequestId: {
											locationName: "spotFleetRequestId"
										}
									}
								}
							}
						}
					}
				},
				CancelSpotInstanceRequests: {
					input: {
						type: "structure",
						required: ["SpotInstanceRequestIds"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							SpotInstanceRequestIds: {
								shape: "S3h",
								locationName: "SpotInstanceRequestId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							CancelledSpotInstanceRequests: {
								locationName: "spotInstanceRequestSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										SpotInstanceRequestId: {
											locationName: "spotInstanceRequestId"
										},
										State: {
											locationName: "state"
										}
									}
								}
							}
						}
					}
				},
				ConfirmProductInstance: {
					input: {
						type: "structure",
						required: ["InstanceId", "ProductCode"],
						members: {
							InstanceId: {},
							ProductCode: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							OwnerId: {
								locationName: "ownerId"
							},
							Return: {
								locationName: "return",
								type: "boolean"
							}
						}
					}
				},
				CopyFpgaImage: {
					input: {
						type: "structure",
						required: ["SourceFpgaImageId", "SourceRegion"],
						members: {
							DryRun: {
								type: "boolean"
							},
							SourceFpgaImageId: {},
							Description: {},
							Name: {},
							SourceRegion: {},
							ClientToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							FpgaImageId: {
								locationName: "fpgaImageId"
							}
						}
					}
				},
				CopyImage: {
					input: {
						type: "structure",
						required: ["Name", "SourceImageId", "SourceRegion"],
						members: {
							ClientToken: {},
							Description: {},
							Encrypted: {
								locationName: "encrypted",
								type: "boolean"
							},
							KmsKeyId: {
								locationName: "kmsKeyId"
							},
							Name: {},
							SourceImageId: {},
							SourceRegion: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ImageId: {
								locationName: "imageId"
							}
						}
					}
				},
				CopySnapshot: {
					input: {
						type: "structure",
						required: ["SourceRegion", "SourceSnapshotId"],
						members: {
							Description: {},
							DestinationRegion: {
								locationName: "destinationRegion"
							},
							Encrypted: {
								locationName: "encrypted",
								type: "boolean"
							},
							KmsKeyId: {
								locationName: "kmsKeyId"
							},
							PresignedUrl: {
								locationName: "presignedUrl"
							},
							SourceRegion: {},
							SourceSnapshotId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							SnapshotId: {
								locationName: "snapshotId"
							}
						}
					}
				},
				CreateCustomerGateway: {
					input: {
						type: "structure",
						required: ["BgpAsn", "PublicIp", "Type"],
						members: {
							BgpAsn: {
								type: "integer"
							},
							PublicIp: {
								locationName: "IpAddress"
							},
							Type: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							CustomerGateway: {
								shape: "S3x",
								locationName: "customerGateway"
							}
						}
					}
				},
				CreateDefaultSubnet: {
					input: {
						type: "structure",
						required: ["AvailabilityZone"],
						members: {
							AvailabilityZone: {},
							DryRun: {
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Subnet: {
								shape: "S40",
								locationName: "subnet"
							}
						}
					}
				},
				CreateDefaultVpc: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Vpc: {
								shape: "S45",
								locationName: "vpc"
							}
						}
					}
				},
				CreateDhcpOptions: {
					input: {
						type: "structure",
						required: ["DhcpConfigurations"],
						members: {
							DhcpConfigurations: {
								locationName: "dhcpConfiguration",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										Key: {
											locationName: "key"
										},
										Values: {
											shape: "Sa",
											locationName: "Value"
										}
									}
								}
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							DhcpOptions: {
								shape: "S4e",
								locationName: "dhcpOptions"
							}
						}
					}
				},
				CreateEgressOnlyInternetGateway: {
					input: {
						type: "structure",
						required: ["VpcId"],
						members: {
							ClientToken: {},
							DryRun: {
								type: "boolean"
							},
							VpcId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ClientToken: {
								locationName: "clientToken"
							},
							EgressOnlyInternetGateway: {
								shape: "S4l",
								locationName: "egressOnlyInternetGateway"
							}
						}
					}
				},
				CreateFleet: {
					input: {
						type: "structure",
						required: ["LaunchTemplateConfigs", "TargetCapacitySpecification"],
						members: {
							DryRun: {
								type: "boolean"
							},
							ClientToken: {},
							SpotOptions: {
								type: "structure",
								members: {
									AllocationStrategy: {},
									InstanceInterruptionBehavior: {}
								}
							},
							ExcessCapacityTerminationPolicy: {},
							LaunchTemplateConfigs: {
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										LaunchTemplateSpecification: {
											type: "structure",
											members: {
												LaunchTemplateId: {},
												LaunchTemplateName: {},
												Version: {}
											}
										},
										Overrides: {
											type: "list",
											member: {
												locationName: "item",
												type: "structure",
												members: {
													InstanceType: {},
													MaxPrice: {},
													SubnetId: {},
													AvailabilityZone: {},
													WeightedCapacity: {
														type: "double"
													}
												}
											}
										}
									}
								}
							},
							TargetCapacitySpecification: {
								shape: "S51"
							},
							TerminateInstancesWithExpiration: {
								type: "boolean"
							},
							Type: {},
							ValidFrom: {
								type: "timestamp"
							},
							ValidUntil: {
								type: "timestamp"
							},
							ReplaceUnhealthyInstances: {
								type: "boolean"
							},
							TagSpecifications: {
								shape: "S54",
								locationName: "TagSpecification"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							FleetId: {
								locationName: "fleetId"
							}
						}
					}
				},
				CreateFlowLogs: {
					input: {
						type: "structure",
						required: ["DeliverLogsPermissionArn", "LogGroupName", "ResourceIds", "ResourceType", "TrafficType"],
						members: {
							ClientToken: {},
							DeliverLogsPermissionArn: {},
							LogGroupName: {},
							ResourceIds: {
								shape: "Sa",
								locationName: "ResourceId"
							},
							ResourceType: {},
							TrafficType: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ClientToken: {
								locationName: "clientToken"
							},
							FlowLogIds: {
								shape: "Sa",
								locationName: "flowLogIdSet"
							},
							Unsuccessful: {
								shape: "Sc",
								locationName: "unsuccessful"
							}
						}
					}
				},
				CreateFpgaImage: {
					input: {
						type: "structure",
						required: ["InputStorageLocation"],
						members: {
							DryRun: {
								type: "boolean"
							},
							InputStorageLocation: {
								shape: "S5e"
							},
							LogsStorageLocation: {
								shape: "S5e"
							},
							Description: {},
							Name: {},
							ClientToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							FpgaImageId: {
								locationName: "fpgaImageId"
							},
							FpgaImageGlobalId: {
								locationName: "fpgaImageGlobalId"
							}
						}
					}
				},
				CreateImage: {
					input: {
						type: "structure",
						required: ["InstanceId", "Name"],
						members: {
							BlockDeviceMappings: {
								shape: "S5h",
								locationName: "blockDeviceMapping"
							},
							Description: {
								locationName: "description"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							InstanceId: {
								locationName: "instanceId"
							},
							Name: {
								locationName: "name"
							},
							NoReboot: {
								locationName: "noReboot",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ImageId: {
								locationName: "imageId"
							}
						}
					}
				},
				CreateInstanceExportTask: {
					input: {
						type: "structure",
						required: ["InstanceId"],
						members: {
							Description: {
								locationName: "description"
							},
							ExportToS3Task: {
								locationName: "exportToS3",
								type: "structure",
								members: {
									ContainerFormat: {
										locationName: "containerFormat"
									},
									DiskImageFormat: {
										locationName: "diskImageFormat"
									},
									S3Bucket: {
										locationName: "s3Bucket"
									},
									S3Prefix: {
										locationName: "s3Prefix"
									}
								}
							},
							InstanceId: {
								locationName: "instanceId"
							},
							TargetEnvironment: {
								locationName: "targetEnvironment"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ExportTask: {
								shape: "S5s",
								locationName: "exportTask"
							}
						}
					}
				},
				CreateInternetGateway: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							InternetGateway: {
								shape: "S5y",
								locationName: "internetGateway"
							}
						}
					}
				},
				CreateKeyPair: {
					input: {
						type: "structure",
						required: ["KeyName"],
						members: {
							KeyName: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							KeyFingerprint: {
								locationName: "keyFingerprint"
							},
							KeyMaterial: {
								locationName: "keyMaterial"
							},
							KeyName: {
								locationName: "keyName"
							}
						}
					}
				},
				CreateLaunchTemplate: {
					input: {
						type: "structure",
						required: ["LaunchTemplateName", "LaunchTemplateData"],
						members: {
							DryRun: {
								type: "boolean"
							},
							ClientToken: {},
							LaunchTemplateName: {},
							VersionDescription: {},
							LaunchTemplateData: {
								shape: "S63"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							LaunchTemplate: {
								shape: "S6u",
								locationName: "launchTemplate"
							}
						}
					}
				},
				CreateLaunchTemplateVersion: {
					input: {
						type: "structure",
						required: ["LaunchTemplateData"],
						members: {
							DryRun: {
								type: "boolean"
							},
							ClientToken: {},
							LaunchTemplateId: {},
							LaunchTemplateName: {},
							SourceVersion: {},
							VersionDescription: {},
							LaunchTemplateData: {
								shape: "S63"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							LaunchTemplateVersion: {
								shape: "S6x",
								locationName: "launchTemplateVersion"
							}
						}
					}
				},
				CreateNatGateway: {
					input: {
						type: "structure",
						required: ["AllocationId", "SubnetId"],
						members: {
							AllocationId: {},
							ClientToken: {},
							SubnetId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ClientToken: {
								locationName: "clientToken"
							},
							NatGateway: {
								shape: "S7i",
								locationName: "natGateway"
							}
						}
					}
				},
				CreateNetworkAcl: {
					input: {
						type: "structure",
						required: ["VpcId"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							VpcId: {
								locationName: "vpcId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							NetworkAcl: {
								shape: "S7p",
								locationName: "networkAcl"
							}
						}
					}
				},
				CreateNetworkAclEntry: {
					input: {
						type: "structure",
						required: ["Egress", "NetworkAclId", "Protocol", "RuleAction", "RuleNumber"],
						members: {
							CidrBlock: {
								locationName: "cidrBlock"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							Egress: {
								locationName: "egress",
								type: "boolean"
							},
							IcmpTypeCode: {
								shape: "S7u",
								locationName: "Icmp"
							},
							Ipv6CidrBlock: {
								locationName: "ipv6CidrBlock"
							},
							NetworkAclId: {
								locationName: "networkAclId"
							},
							PortRange: {
								shape: "S7v",
								locationName: "portRange"
							},
							Protocol: {
								locationName: "protocol"
							},
							RuleAction: {
								locationName: "ruleAction"
							},
							RuleNumber: {
								locationName: "ruleNumber",
								type: "integer"
							}
						}
					}
				},
				CreateNetworkInterface: {
					input: {
						type: "structure",
						required: ["SubnetId"],
						members: {
							Description: {
								locationName: "description"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							Groups: {
								shape: "S6a",
								locationName: "SecurityGroupId"
							},
							Ipv6AddressCount: {
								locationName: "ipv6AddressCount",
								type: "integer"
							},
							Ipv6Addresses: {
								shape: "S75",
								locationName: "ipv6Addresses"
							},
							PrivateIpAddress: {
								locationName: "privateIpAddress"
							},
							PrivateIpAddresses: {
								shape: "S6d",
								locationName: "privateIpAddresses"
							},
							SecondaryPrivateIpAddressCount: {
								locationName: "secondaryPrivateIpAddressCount",
								type: "integer"
							},
							SubnetId: {
								locationName: "subnetId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							NetworkInterface: {
								shape: "S80",
								locationName: "networkInterface"
							}
						}
					}
				},
				CreateNetworkInterfacePermission: {
					input: {
						type: "structure",
						required: ["NetworkInterfaceId", "Permission"],
						members: {
							NetworkInterfaceId: {},
							AwsAccountId: {},
							AwsService: {},
							Permission: {},
							DryRun: {
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							InterfacePermission: {
								shape: "S8e",
								locationName: "interfacePermission"
							}
						}
					}
				},
				CreatePlacementGroup: {
					input: {
						type: "structure",
						required: ["GroupName", "Strategy"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							GroupName: {
								locationName: "groupName"
							},
							Strategy: {
								locationName: "strategy"
							}
						}
					}
				},
				CreateReservedInstancesListing: {
					input: {
						type: "structure",
						required: ["ClientToken", "InstanceCount", "PriceSchedules", "ReservedInstancesId"],
						members: {
							ClientToken: {
								locationName: "clientToken"
							},
							InstanceCount: {
								locationName: "instanceCount",
								type: "integer"
							},
							PriceSchedules: {
								locationName: "priceSchedules",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										CurrencyCode: {
											locationName: "currencyCode"
										},
										Price: {
											locationName: "price",
											type: "double"
										},
										Term: {
											locationName: "term",
											type: "long"
										}
									}
								}
							},
							ReservedInstancesId: {
								locationName: "reservedInstancesId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ReservedInstancesListings: {
								shape: "S2w",
								locationName: "reservedInstancesListingsSet"
							}
						}
					}
				},
				CreateRoute: {
					input: {
						type: "structure",
						required: ["RouteTableId"],
						members: {
							DestinationCidrBlock: {
								locationName: "destinationCidrBlock"
							},
							DestinationIpv6CidrBlock: {
								locationName: "destinationIpv6CidrBlock"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							EgressOnlyInternetGatewayId: {
								locationName: "egressOnlyInternetGatewayId"
							},
							GatewayId: {
								locationName: "gatewayId"
							},
							InstanceId: {
								locationName: "instanceId"
							},
							NatGatewayId: {
								locationName: "natGatewayId"
							},
							NetworkInterfaceId: {
								locationName: "networkInterfaceId"
							},
							RouteTableId: {
								locationName: "routeTableId"
							},
							VpcPeeringConnectionId: {
								locationName: "vpcPeeringConnectionId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Return: {
								locationName: "return",
								type: "boolean"
							}
						}
					}
				},
				CreateRouteTable: {
					input: {
						type: "structure",
						required: ["VpcId"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							VpcId: {
								locationName: "vpcId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							RouteTable: {
								shape: "S8r",
								locationName: "routeTable"
							}
						}
					}
				},
				CreateSecurityGroup: {
					input: {
						type: "structure",
						required: ["Description", "GroupName"],
						members: {
							Description: {
								locationName: "GroupDescription"
							},
							GroupName: {},
							VpcId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							GroupId: {
								locationName: "groupId"
							}
						}
					}
				},
				CreateSnapshot: {
					input: {
						type: "structure",
						required: ["VolumeId"],
						members: {
							Description: {},
							VolumeId: {},
							TagSpecifications: {
								shape: "S54",
								locationName: "TagSpecification"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						shape: "S93"
					}
				},
				CreateSpotDatafeedSubscription: {
					input: {
						type: "structure",
						required: ["Bucket"],
						members: {
							Bucket: {
								locationName: "bucket"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							Prefix: {
								locationName: "prefix"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							SpotDatafeedSubscription: {
								shape: "S97",
								locationName: "spotDatafeedSubscription"
							}
						}
					}
				},
				CreateSubnet: {
					input: {
						type: "structure",
						required: ["CidrBlock", "VpcId"],
						members: {
							AvailabilityZone: {},
							CidrBlock: {},
							Ipv6CidrBlock: {},
							VpcId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Subnet: {
								shape: "S40",
								locationName: "subnet"
							}
						}
					}
				},
				CreateTags: {
					input: {
						type: "structure",
						required: ["Resources", "Tags"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							Resources: {
								shape: "S9d",
								locationName: "ResourceId"
							},
							Tags: {
								shape: "Sr",
								locationName: "Tag"
							}
						}
					}
				},
				CreateVolume: {
					input: {
						type: "structure",
						required: ["AvailabilityZone"],
						members: {
							AvailabilityZone: {},
							Encrypted: {
								locationName: "encrypted",
								type: "boolean"
							},
							Iops: {
								type: "integer"
							},
							KmsKeyId: {},
							Size: {
								type: "integer"
							},
							SnapshotId: {},
							VolumeType: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							TagSpecifications: {
								shape: "S54",
								locationName: "TagSpecification"
							}
						}
					},
					output: {
						shape: "S9f"
					}
				},
				CreateVpc: {
					input: {
						type: "structure",
						required: ["CidrBlock"],
						members: {
							CidrBlock: {},
							AmazonProvidedIpv6CidrBlock: {
								locationName: "amazonProvidedIpv6CidrBlock",
								type: "boolean"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							InstanceTenancy: {
								locationName: "instanceTenancy"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Vpc: {
								shape: "S45",
								locationName: "vpc"
							}
						}
					}
				},
				CreateVpcEndpoint: {
					input: {
						type: "structure",
						required: ["VpcId", "ServiceName"],
						members: {
							DryRun: {
								type: "boolean"
							},
							VpcEndpointType: {},
							VpcId: {},
							ServiceName: {},
							PolicyDocument: {},
							RouteTableIds: {
								shape: "Sa",
								locationName: "RouteTableId"
							},
							SubnetIds: {
								shape: "Sa",
								locationName: "SubnetId"
							},
							SecurityGroupIds: {
								shape: "Sa",
								locationName: "SecurityGroupId"
							},
							ClientToken: {},
							PrivateDnsEnabled: {
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							VpcEndpoint: {
								shape: "S9n",
								locationName: "vpcEndpoint"
							},
							ClientToken: {
								locationName: "clientToken"
							}
						}
					}
				},
				CreateVpcEndpointConnectionNotification: {
					input: {
						type: "structure",
						required: ["ConnectionNotificationArn", "ConnectionEvents"],
						members: {
							DryRun: {
								type: "boolean"
							},
							ServiceId: {},
							VpcEndpointId: {},
							ConnectionNotificationArn: {},
							ConnectionEvents: {
								shape: "Sa"
							},
							ClientToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ConnectionNotification: {
								shape: "S9v",
								locationName: "connectionNotification"
							},
							ClientToken: {
								locationName: "clientToken"
							}
						}
					}
				},
				CreateVpcEndpointServiceConfiguration: {
					input: {
						type: "structure",
						required: ["NetworkLoadBalancerArns"],
						members: {
							DryRun: {
								type: "boolean"
							},
							AcceptanceRequired: {
								type: "boolean"
							},
							NetworkLoadBalancerArns: {
								shape: "Sa",
								locationName: "NetworkLoadBalancerArn"
							},
							ClientToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ServiceConfiguration: {
								shape: "Sa0",
								locationName: "serviceConfiguration"
							},
							ClientToken: {
								locationName: "clientToken"
							}
						}
					}
				},
				CreateVpcPeeringConnection: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							PeerOwnerId: {
								locationName: "peerOwnerId"
							},
							PeerVpcId: {
								locationName: "peerVpcId"
							},
							VpcId: {
								locationName: "vpcId"
							},
							PeerRegion: {}
						}
					},
					output: {
						type: "structure",
						members: {
							VpcPeeringConnection: {
								shape: "Sh",
								locationName: "vpcPeeringConnection"
							}
						}
					}
				},
				CreateVpnConnection: {
					input: {
						type: "structure",
						required: ["CustomerGatewayId", "Type", "VpnGatewayId"],
						members: {
							CustomerGatewayId: {},
							Type: {},
							VpnGatewayId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							Options: {
								locationName: "options",
								type: "structure",
								members: {
									StaticRoutesOnly: {
										locationName: "staticRoutesOnly",
										type: "boolean"
									},
									TunnelOptions: {
										type: "list",
										member: {
											locationName: "item",
											type: "structure",
											members: {
												TunnelInsideCidr: {},
												PreSharedKey: {}
											}
										}
									}
								}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							VpnConnection: {
								shape: "Sac",
								locationName: "vpnConnection"
							}
						}
					}
				},
				CreateVpnConnectionRoute: {
					input: {
						type: "structure",
						required: ["DestinationCidrBlock", "VpnConnectionId"],
						members: {
							DestinationCidrBlock: {},
							VpnConnectionId: {}
						}
					}
				},
				CreateVpnGateway: {
					input: {
						type: "structure",
						required: ["Type"],
						members: {
							AvailabilityZone: {},
							Type: {},
							AmazonSideAsn: {
								type: "long"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							VpnGateway: {
								shape: "Sao",
								locationName: "vpnGateway"
							}
						}
					}
				},
				DeleteCustomerGateway: {
					input: {
						type: "structure",
						required: ["CustomerGatewayId"],
						members: {
							CustomerGatewayId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					}
				},
				DeleteDhcpOptions: {
					input: {
						type: "structure",
						required: ["DhcpOptionsId"],
						members: {
							DhcpOptionsId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					}
				},
				DeleteEgressOnlyInternetGateway: {
					input: {
						type: "structure",
						required: ["EgressOnlyInternetGatewayId"],
						members: {
							DryRun: {
								type: "boolean"
							},
							EgressOnlyInternetGatewayId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ReturnCode: {
								locationName: "returnCode",
								type: "boolean"
							}
						}
					}
				},
				DeleteFleets: {
					input: {
						type: "structure",
						required: ["FleetIds", "TerminateInstances"],
						members: {
							DryRun: {
								type: "boolean"
							},
							FleetIds: {
								shape: "Sav",
								locationName: "FleetId"
							},
							TerminateInstances: {
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							SuccessfulFleetDeletions: {
								locationName: "successfulFleetDeletionSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										CurrentFleetState: {
											locationName: "currentFleetState"
										},
										PreviousFleetState: {
											locationName: "previousFleetState"
										},
										FleetId: {
											locationName: "fleetId"
										}
									}
								}
							},
							UnsuccessfulFleetDeletions: {
								locationName: "unsuccessfulFleetDeletionSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										Error: {
											locationName: "error",
											type: "structure",
											members: {
												Code: {
													locationName: "code"
												},
												Message: {
													locationName: "message"
												}
											}
										},
										FleetId: {
											locationName: "fleetId"
										}
									}
								}
							}
						}
					}
				},
				DeleteFlowLogs: {
					input: {
						type: "structure",
						required: ["FlowLogIds"],
						members: {
							FlowLogIds: {
								shape: "Sa",
								locationName: "FlowLogId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Unsuccessful: {
								shape: "Sc",
								locationName: "unsuccessful"
							}
						}
					}
				},
				DeleteFpgaImage: {
					input: {
						type: "structure",
						required: ["FpgaImageId"],
						members: {
							DryRun: {
								type: "boolean"
							},
							FpgaImageId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Return: {
								locationName: "return",
								type: "boolean"
							}
						}
					}
				},
				DeleteInternetGateway: {
					input: {
						type: "structure",
						required: ["InternetGatewayId"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							InternetGatewayId: {
								locationName: "internetGatewayId"
							}
						}
					}
				},
				DeleteKeyPair: {
					input: {
						type: "structure",
						required: ["KeyName"],
						members: {
							KeyName: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					}
				},
				DeleteLaunchTemplate: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								type: "boolean"
							},
							LaunchTemplateId: {},
							LaunchTemplateName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							LaunchTemplate: {
								shape: "S6u",
								locationName: "launchTemplate"
							}
						}
					}
				},
				DeleteLaunchTemplateVersions: {
					input: {
						type: "structure",
						required: ["Versions"],
						members: {
							DryRun: {
								type: "boolean"
							},
							LaunchTemplateId: {},
							LaunchTemplateName: {},
							Versions: {
								shape: "Sbd",
								locationName: "LaunchTemplateVersion"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							SuccessfullyDeletedLaunchTemplateVersions: {
								locationName: "successfullyDeletedLaunchTemplateVersionSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										LaunchTemplateId: {
											locationName: "launchTemplateId"
										},
										LaunchTemplateName: {
											locationName: "launchTemplateName"
										},
										VersionNumber: {
											locationName: "versionNumber",
											type: "long"
										}
									}
								}
							},
							UnsuccessfullyDeletedLaunchTemplateVersions: {
								locationName: "unsuccessfullyDeletedLaunchTemplateVersionSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										LaunchTemplateId: {
											locationName: "launchTemplateId"
										},
										LaunchTemplateName: {
											locationName: "launchTemplateName"
										},
										VersionNumber: {
											locationName: "versionNumber",
											type: "long"
										},
										ResponseError: {
											locationName: "responseError",
											type: "structure",
											members: {
												Code: {
													locationName: "code"
												},
												Message: {
													locationName: "message"
												}
											}
										}
									}
								}
							}
						}
					}
				},
				DeleteNatGateway: {
					input: {
						type: "structure",
						required: ["NatGatewayId"],
						members: {
							NatGatewayId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							NatGatewayId: {
								locationName: "natGatewayId"
							}
						}
					}
				},
				DeleteNetworkAcl: {
					input: {
						type: "structure",
						required: ["NetworkAclId"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							NetworkAclId: {
								locationName: "networkAclId"
							}
						}
					}
				},
				DeleteNetworkAclEntry: {
					input: {
						type: "structure",
						required: ["Egress", "NetworkAclId", "RuleNumber"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							Egress: {
								locationName: "egress",
								type: "boolean"
							},
							NetworkAclId: {
								locationName: "networkAclId"
							},
							RuleNumber: {
								locationName: "ruleNumber",
								type: "integer"
							}
						}
					}
				},
				DeleteNetworkInterface: {
					input: {
						type: "structure",
						required: ["NetworkInterfaceId"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							NetworkInterfaceId: {
								locationName: "networkInterfaceId"
							}
						}
					}
				},
				DeleteNetworkInterfacePermission: {
					input: {
						type: "structure",
						required: ["NetworkInterfacePermissionId"],
						members: {
							NetworkInterfacePermissionId: {},
							Force: {
								type: "boolean"
							},
							DryRun: {
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Return: {
								locationName: "return",
								type: "boolean"
							}
						}
					}
				},
				DeletePlacementGroup: {
					input: {
						type: "structure",
						required: ["GroupName"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							GroupName: {
								locationName: "groupName"
							}
						}
					}
				},
				DeleteRoute: {
					input: {
						type: "structure",
						required: ["RouteTableId"],
						members: {
							DestinationCidrBlock: {
								locationName: "destinationCidrBlock"
							},
							DestinationIpv6CidrBlock: {
								locationName: "destinationIpv6CidrBlock"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							RouteTableId: {
								locationName: "routeTableId"
							}
						}
					}
				},
				DeleteRouteTable: {
					input: {
						type: "structure",
						required: ["RouteTableId"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							RouteTableId: {
								locationName: "routeTableId"
							}
						}
					}
				},
				DeleteSecurityGroup: {
					input: {
						type: "structure",
						members: {
							GroupId: {},
							GroupName: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					}
				},
				DeleteSnapshot: {
					input: {
						type: "structure",
						required: ["SnapshotId"],
						members: {
							SnapshotId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					}
				},
				DeleteSpotDatafeedSubscription: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					}
				},
				DeleteSubnet: {
					input: {
						type: "structure",
						required: ["SubnetId"],
						members: {
							SubnetId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					}
				},
				DeleteTags: {
					input: {
						type: "structure",
						required: ["Resources"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							Resources: {
								shape: "S9d",
								locationName: "resourceId"
							},
							Tags: {
								shape: "Sr",
								locationName: "tag"
							}
						}
					}
				},
				DeleteVolume: {
					input: {
						type: "structure",
						required: ["VolumeId"],
						members: {
							VolumeId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					}
				},
				DeleteVpc: {
					input: {
						type: "structure",
						required: ["VpcId"],
						members: {
							VpcId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					}
				},
				DeleteVpcEndpointConnectionNotifications: {
					input: {
						type: "structure",
						required: ["ConnectionNotificationIds"],
						members: {
							DryRun: {
								type: "boolean"
							},
							ConnectionNotificationIds: {
								shape: "Sa",
								locationName: "ConnectionNotificationId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Unsuccessful: {
								shape: "Sc",
								locationName: "unsuccessful"
							}
						}
					}
				},
				DeleteVpcEndpointServiceConfigurations: {
					input: {
						type: "structure",
						required: ["ServiceIds"],
						members: {
							DryRun: {
								type: "boolean"
							},
							ServiceIds: {
								shape: "Sa",
								locationName: "ServiceId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Unsuccessful: {
								shape: "Sc",
								locationName: "unsuccessful"
							}
						}
					}
				},
				DeleteVpcEndpoints: {
					input: {
						type: "structure",
						required: ["VpcEndpointIds"],
						members: {
							DryRun: {
								type: "boolean"
							},
							VpcEndpointIds: {
								shape: "Sa",
								locationName: "VpcEndpointId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Unsuccessful: {
								shape: "Sc",
								locationName: "unsuccessful"
							}
						}
					}
				},
				DeleteVpcPeeringConnection: {
					input: {
						type: "structure",
						required: ["VpcPeeringConnectionId"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							VpcPeeringConnectionId: {
								locationName: "vpcPeeringConnectionId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Return: {
								locationName: "return",
								type: "boolean"
							}
						}
					}
				},
				DeleteVpnConnection: {
					input: {
						type: "structure",
						required: ["VpnConnectionId"],
						members: {
							VpnConnectionId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					}
				},
				DeleteVpnConnectionRoute: {
					input: {
						type: "structure",
						required: ["DestinationCidrBlock", "VpnConnectionId"],
						members: {
							DestinationCidrBlock: {},
							VpnConnectionId: {}
						}
					}
				},
				DeleteVpnGateway: {
					input: {
						type: "structure",
						required: ["VpnGatewayId"],
						members: {
							VpnGatewayId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					}
				},
				DeregisterImage: {
					input: {
						type: "structure",
						required: ["ImageId"],
						members: {
							ImageId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					}
				},
				DescribeAccountAttributes: {
					input: {
						type: "structure",
						members: {
							AttributeNames: {
								locationName: "attributeName",
								type: "list",
								member: {
									locationName: "attributeName"
								}
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							AccountAttributes: {
								locationName: "accountAttributeSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										AttributeName: {
											locationName: "attributeName"
										},
										AttributeValues: {
											locationName: "attributeValueSet",
											type: "list",
											member: {
												locationName: "item",
												type: "structure",
												members: {
													AttributeValue: {
														locationName: "attributeValue"
													}
												}
											}
										}
									}
								}
							}
						}
					}
				},
				DescribeAddresses: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							PublicIps: {
								locationName: "PublicIp",
								type: "list",
								member: {
									locationName: "PublicIp"
								}
							},
							AllocationIds: {
								locationName: "AllocationId",
								type: "list",
								member: {
									locationName: "AllocationId"
								}
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Addresses: {
								locationName: "addressesSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										InstanceId: {
											locationName: "instanceId"
										},
										PublicIp: {
											locationName: "publicIp"
										},
										AllocationId: {
											locationName: "allocationId"
										},
										AssociationId: {
											locationName: "associationId"
										},
										Domain: {
											locationName: "domain"
										},
										NetworkInterfaceId: {
											locationName: "networkInterfaceId"
										},
										NetworkInterfaceOwnerId: {
											locationName: "networkInterfaceOwnerId"
										},
										PrivateIpAddress: {
											locationName: "privateIpAddress"
										},
										Tags: {
											shape: "Sr",
											locationName: "tagSet"
										}
									}
								}
							}
						}
					}
				},
				DescribeAggregateIdFormat: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							UseLongIdsAggregated: {
								locationName: "useLongIdsAggregated",
								type: "boolean"
							},
							Statuses: {
								shape: "Scw",
								locationName: "statusSet"
							}
						}
					}
				},
				DescribeAvailabilityZones: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							ZoneNames: {
								locationName: "ZoneName",
								type: "list",
								member: {
									locationName: "ZoneName"
								}
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							AvailabilityZones: {
								locationName: "availabilityZoneInfo",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										State: {
											locationName: "zoneState"
										},
										Messages: {
											locationName: "messageSet",
											type: "list",
											member: {
												locationName: "item",
												type: "structure",
												members: {
													Message: {
														locationName: "message"
													}
												}
											}
										},
										RegionName: {
											locationName: "regionName"
										},
										ZoneName: {
											locationName: "zoneName"
										}
									}
								}
							}
						}
					}
				},
				DescribeBundleTasks: {
					input: {
						type: "structure",
						members: {
							BundleIds: {
								locationName: "BundleId",
								type: "list",
								member: {
									locationName: "BundleId"
								}
							},
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							BundleTasks: {
								locationName: "bundleInstanceTasksSet",
								type: "list",
								member: {
									shape: "S2l",
									locationName: "item"
								}
							}
						}
					}
				},
				DescribeClassicLinkInstances: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							InstanceIds: {
								shape: "Sdb",
								locationName: "InstanceId"
							},
							MaxResults: {
								locationName: "maxResults",
								type: "integer"
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Instances: {
								locationName: "instancesSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										Groups: {
											shape: "S83",
											locationName: "groupSet"
										},
										InstanceId: {
											locationName: "instanceId"
										},
										Tags: {
											shape: "Sr",
											locationName: "tagSet"
										},
										VpcId: {
											locationName: "vpcId"
										}
									}
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeConversionTasks: {
					input: {
						type: "structure",
						members: {
							ConversionTaskIds: {
								locationName: "conversionTaskId",
								type: "list",
								member: {
									locationName: "item"
								}
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ConversionTasks: {
								locationName: "conversionTasks",
								type: "list",
								member: {
									shape: "Sdj",
									locationName: "item"
								}
							}
						}
					}
				},
				DescribeCustomerGateways: {
					input: {
						type: "structure",
						members: {
							CustomerGatewayIds: {
								locationName: "CustomerGatewayId",
								type: "list",
								member: {
									locationName: "CustomerGatewayId"
								}
							},
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							CustomerGateways: {
								locationName: "customerGatewaySet",
								type: "list",
								member: {
									shape: "S3x",
									locationName: "item"
								}
							}
						}
					}
				},
				DescribeDhcpOptions: {
					input: {
						type: "structure",
						members: {
							DhcpOptionsIds: {
								locationName: "DhcpOptionsId",
								type: "list",
								member: {
									locationName: "DhcpOptionsId"
								}
							},
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							DhcpOptions: {
								locationName: "dhcpOptionsSet",
								type: "list",
								member: {
									shape: "S4e",
									locationName: "item"
								}
							}
						}
					}
				},
				DescribeEgressOnlyInternetGateways: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								type: "boolean"
							},
							EgressOnlyInternetGatewayIds: {
								locationName: "EgressOnlyInternetGatewayId",
								type: "list",
								member: {
									locationName: "item"
								}
							},
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							EgressOnlyInternetGateways: {
								locationName: "egressOnlyInternetGatewaySet",
								type: "list",
								member: {
									shape: "S4l",
									locationName: "item"
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeElasticGpus: {
					input: {
						type: "structure",
						members: {
							ElasticGpuIds: {
								locationName: "ElasticGpuId",
								type: "list",
								member: {
									locationName: "item"
								}
							},
							DryRun: {
								type: "boolean"
							},
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ElasticGpuSet: {
								locationName: "elasticGpuSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										ElasticGpuId: {
											locationName: "elasticGpuId"
										},
										AvailabilityZone: {
											locationName: "availabilityZone"
										},
										ElasticGpuType: {
											locationName: "elasticGpuType"
										},
										ElasticGpuHealth: {
											locationName: "elasticGpuHealth",
											type: "structure",
											members: {
												Status: {
													locationName: "status"
												}
											}
										},
										ElasticGpuState: {
											locationName: "elasticGpuState"
										},
										InstanceId: {
											locationName: "instanceId"
										}
									}
								}
							},
							MaxResults: {
								locationName: "maxResults",
								type: "integer"
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeExportTasks: {
					input: {
						type: "structure",
						members: {
							ExportTaskIds: {
								locationName: "exportTaskId",
								type: "list",
								member: {
									locationName: "ExportTaskId"
								}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ExportTasks: {
								locationName: "exportTaskSet",
								type: "list",
								member: {
									shape: "S5s",
									locationName: "item"
								}
							}
						}
					}
				},
				DescribeFleetHistory: {
					input: {
						type: "structure",
						required: ["FleetId", "StartTime"],
						members: {
							DryRun: {
								type: "boolean"
							},
							EventType: {},
							MaxResults: {
								type: "integer"
							},
							NextToken: {},
							FleetId: {},
							StartTime: {
								type: "timestamp"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							HistoryRecords: {
								locationName: "historyRecordSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										EventInformation: {
											shape: "Sel",
											locationName: "eventInformation"
										},
										EventType: {
											locationName: "eventType"
										},
										Timestamp: {
											locationName: "timestamp",
											type: "timestamp"
										}
									}
								}
							},
							LastEvaluatedTime: {
								locationName: "lastEvaluatedTime",
								type: "timestamp"
							},
							NextToken: {
								locationName: "nextToken"
							},
							FleetId: {
								locationName: "fleetId"
							},
							StartTime: {
								locationName: "startTime",
								type: "timestamp"
							}
						}
					}
				},
				DescribeFleetInstances: {
					input: {
						type: "structure",
						required: ["FleetId"],
						members: {
							DryRun: {
								type: "boolean"
							},
							MaxResults: {
								type: "integer"
							},
							NextToken: {},
							FleetId: {},
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ActiveInstances: {
								shape: "Seo",
								locationName: "activeInstanceSet"
							},
							NextToken: {
								locationName: "nextToken"
							},
							FleetId: {
								locationName: "fleetId"
							}
						}
					}
				},
				DescribeFleets: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								type: "boolean"
							},
							MaxResults: {
								type: "integer"
							},
							NextToken: {},
							FleetIds: {
								shape: "Sav",
								locationName: "FleetId"
							},
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							NextToken: {
								locationName: "nextToken"
							},
							Fleets: {
								locationName: "fleetSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										ActivityStatus: {
											locationName: "activityStatus"
										},
										CreateTime: {
											locationName: "createTime",
											type: "timestamp"
										},
										FleetId: {
											locationName: "fleetId"
										},
										FleetState: {
											locationName: "fleetState"
										},
										ClientToken: {
											locationName: "clientToken"
										},
										ExcessCapacityTerminationPolicy: {
											locationName: "excessCapacityTerminationPolicy"
										},
										FulfilledCapacity: {
											locationName: "fulfilledCapacity",
											type: "double"
										},
										FulfilledOnDemandCapacity: {
											locationName: "fulfilledOnDemandCapacity",
											type: "double"
										},
										LaunchTemplateConfigs: {
											locationName: "launchTemplateConfigs",
											type: "list",
											member: {
												locationName: "item",
												type: "structure",
												members: {
													LaunchTemplateSpecification: {
														shape: "Sey",
														locationName: "launchTemplateSpecification"
													},
													Overrides: {
														locationName: "overrides",
														type: "list",
														member: {
															locationName: "item",
															type: "structure",
															members: {
																InstanceType: {
																	locationName: "instanceType"
																},
																MaxPrice: {
																	locationName: "maxPrice"
																},
																SubnetId: {
																	locationName: "subnetId"
																},
																AvailabilityZone: {
																	locationName: "availabilityZone"
																},
																WeightedCapacity: {
																	locationName: "weightedCapacity",
																	type: "double"
																}
															}
														}
													}
												}
											}
										},
										TargetCapacitySpecification: {
											locationName: "targetCapacitySpecification",
											type: "structure",
											members: {
												TotalTargetCapacity: {
													locationName: "totalTargetCapacity",
													type: "integer"
												},
												OnDemandTargetCapacity: {
													locationName: "onDemandTargetCapacity",
													type: "integer"
												},
												SpotTargetCapacity: {
													locationName: "spotTargetCapacity",
													type: "integer"
												},
												DefaultTargetCapacityType: {
													locationName: "defaultTargetCapacityType"
												}
											}
										},
										TerminateInstancesWithExpiration: {
											locationName: "terminateInstancesWithExpiration",
											type: "boolean"
										},
										Type: {
											locationName: "type"
										},
										ValidFrom: {
											locationName: "validFrom",
											type: "timestamp"
										},
										ValidUntil: {
											locationName: "validUntil",
											type: "timestamp"
										},
										ReplaceUnhealthyInstances: {
											locationName: "replaceUnhealthyInstances",
											type: "boolean"
										},
										SpotOptions: {
											locationName: "spotOptions",
											type: "structure",
											members: {
												AllocationStrategy: {
													locationName: "allocationStrategy"
												},
												InstanceInterruptionBehavior: {
													locationName: "instanceInterruptionBehavior"
												}
											}
										},
										Tags: {
											shape: "Sr",
											locationName: "tagSet"
										}
									}
								}
							}
						}
					}
				},
				DescribeFlowLogs: {
					input: {
						type: "structure",
						members: {
							Filter: {
								shape: "Scn"
							},
							FlowLogIds: {
								shape: "Sa",
								locationName: "FlowLogId"
							},
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							FlowLogs: {
								locationName: "flowLogSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										CreationTime: {
											locationName: "creationTime",
											type: "timestamp"
										},
										DeliverLogsErrorMessage: {
											locationName: "deliverLogsErrorMessage"
										},
										DeliverLogsPermissionArn: {
											locationName: "deliverLogsPermissionArn"
										},
										DeliverLogsStatus: {
											locationName: "deliverLogsStatus"
										},
										FlowLogId: {
											locationName: "flowLogId"
										},
										FlowLogStatus: {
											locationName: "flowLogStatus"
										},
										LogGroupName: {
											locationName: "logGroupName"
										},
										ResourceId: {
											locationName: "resourceId"
										},
										TrafficType: {
											locationName: "trafficType"
										}
									}
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeFpgaImageAttribute: {
					input: {
						type: "structure",
						required: ["FpgaImageId", "Attribute"],
						members: {
							DryRun: {
								type: "boolean"
							},
							FpgaImageId: {},
							Attribute: {}
						}
					},
					output: {
						type: "structure",
						members: {
							FpgaImageAttribute: {
								shape: "Sfa",
								locationName: "fpgaImageAttribute"
							}
						}
					}
				},
				DescribeFpgaImages: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								type: "boolean"
							},
							FpgaImageIds: {
								locationName: "FpgaImageId",
								type: "list",
								member: {
									locationName: "item"
								}
							},
							Owners: {
								shape: "Sfj",
								locationName: "Owner"
							},
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							NextToken: {},
							MaxResults: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							FpgaImages: {
								locationName: "fpgaImageSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										FpgaImageId: {
											locationName: "fpgaImageId"
										},
										FpgaImageGlobalId: {
											locationName: "fpgaImageGlobalId"
										},
										Name: {
											locationName: "name"
										},
										Description: {
											locationName: "description"
										},
										ShellVersion: {
											locationName: "shellVersion"
										},
										PciId: {
											locationName: "pciId",
											type: "structure",
											members: {
												DeviceId: {},
												VendorId: {},
												SubsystemId: {},
												SubsystemVendorId: {}
											}
										},
										State: {
											locationName: "state",
											type: "structure",
											members: {
												Code: {
													locationName: "code"
												},
												Message: {
													locationName: "message"
												}
											}
										},
										CreateTime: {
											locationName: "createTime",
											type: "timestamp"
										},
										UpdateTime: {
											locationName: "updateTime",
											type: "timestamp"
										},
										OwnerId: {
											locationName: "ownerId"
										},
										OwnerAlias: {
											locationName: "ownerAlias"
										},
										ProductCodes: {
											shape: "Sfe",
											locationName: "productCodes"
										},
										Tags: {
											shape: "Sr",
											locationName: "tags"
										},
										Public: {
											locationName: "public",
											type: "boolean"
										}
									}
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeHostReservationOfferings: {
					input: {
						type: "structure",
						members: {
							Filter: {
								shape: "Scn"
							},
							MaxDuration: {
								type: "integer"
							},
							MaxResults: {
								type: "integer"
							},
							MinDuration: {
								type: "integer"
							},
							NextToken: {},
							OfferingId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							NextToken: {
								locationName: "nextToken"
							},
							OfferingSet: {
								locationName: "offeringSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										CurrencyCode: {
											locationName: "currencyCode"
										},
										Duration: {
											locationName: "duration",
											type: "integer"
										},
										HourlyPrice: {
											locationName: "hourlyPrice"
										},
										InstanceFamily: {
											locationName: "instanceFamily"
										},
										OfferingId: {
											locationName: "offeringId"
										},
										PaymentOption: {
											locationName: "paymentOption"
										},
										UpfrontPrice: {
											locationName: "upfrontPrice"
										}
									}
								}
							}
						}
					}
				},
				DescribeHostReservations: {
					input: {
						type: "structure",
						members: {
							Filter: {
								shape: "Scn"
							},
							HostReservationIdSet: {
								type: "list",
								member: {
									locationName: "item"
								}
							},
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							HostReservationSet: {
								locationName: "hostReservationSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										Count: {
											locationName: "count",
											type: "integer"
										},
										CurrencyCode: {
											locationName: "currencyCode"
										},
										Duration: {
											locationName: "duration",
											type: "integer"
										},
										End: {
											locationName: "end",
											type: "timestamp"
										},
										HostIdSet: {
											shape: "Sg2",
											locationName: "hostIdSet"
										},
										HostReservationId: {
											locationName: "hostReservationId"
										},
										HourlyPrice: {
											locationName: "hourlyPrice"
										},
										InstanceFamily: {
											locationName: "instanceFamily"
										},
										OfferingId: {
											locationName: "offeringId"
										},
										PaymentOption: {
											locationName: "paymentOption"
										},
										Start: {
											locationName: "start",
											type: "timestamp"
										},
										State: {
											locationName: "state"
										},
										UpfrontPrice: {
											locationName: "upfrontPrice"
										}
									}
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeHosts: {
					input: {
						type: "structure",
						members: {
							Filter: {
								shape: "Scn",
								locationName: "filter"
							},
							HostIds: {
								shape: "Sg5",
								locationName: "hostId"
							},
							MaxResults: {
								locationName: "maxResults",
								type: "integer"
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Hosts: {
								locationName: "hostSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										AutoPlacement: {
											locationName: "autoPlacement"
										},
										AvailabilityZone: {
											locationName: "availabilityZone"
										},
										AvailableCapacity: {
											locationName: "availableCapacity",
											type: "structure",
											members: {
												AvailableInstanceCapacity: {
													locationName: "availableInstanceCapacity",
													type: "list",
													member: {
														locationName: "item",
														type: "structure",
														members: {
															AvailableCapacity: {
																locationName: "availableCapacity",
																type: "integer"
															},
															InstanceType: {
																locationName: "instanceType"
															},
															TotalCapacity: {
																locationName: "totalCapacity",
																type: "integer"
															}
														}
													}
												},
												AvailableVCpus: {
													locationName: "availableVCpus",
													type: "integer"
												}
											}
										},
										ClientToken: {
											locationName: "clientToken"
										},
										HostId: {
											locationName: "hostId"
										},
										HostProperties: {
											locationName: "hostProperties",
											type: "structure",
											members: {
												Cores: {
													locationName: "cores",
													type: "integer"
												},
												InstanceType: {
													locationName: "instanceType"
												},
												Sockets: {
													locationName: "sockets",
													type: "integer"
												},
												TotalVCpus: {
													locationName: "totalVCpus",
													type: "integer"
												}
											}
										},
										HostReservationId: {
											locationName: "hostReservationId"
										},
										Instances: {
											locationName: "instances",
											type: "list",
											member: {
												locationName: "item",
												type: "structure",
												members: {
													InstanceId: {
														locationName: "instanceId"
													},
													InstanceType: {
														locationName: "instanceType"
													}
												}
											}
										},
										State: {
											locationName: "state"
										},
										AllocationTime: {
											locationName: "allocationTime",
											type: "timestamp"
										},
										ReleaseTime: {
											locationName: "releaseTime",
											type: "timestamp"
										}
									}
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeIamInstanceProfileAssociations: {
					input: {
						type: "structure",
						members: {
							AssociationIds: {
								locationName: "AssociationId",
								type: "list",
								member: {
									locationName: "AssociationId"
								}
							},
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							IamInstanceProfileAssociations: {
								locationName: "iamInstanceProfileAssociationSet",
								type: "list",
								member: {
									shape: "S1b",
									locationName: "item"
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeIdFormat: {
					input: {
						type: "structure",
						members: {
							Resource: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Statuses: {
								shape: "Scw",
								locationName: "statusSet"
							}
						}
					}
				},
				DescribeIdentityIdFormat: {
					input: {
						type: "structure",
						required: ["PrincipalArn"],
						members: {
							PrincipalArn: {
								locationName: "principalArn"
							},
							Resource: {
								locationName: "resource"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Statuses: {
								shape: "Scw",
								locationName: "statusSet"
							}
						}
					}
				},
				DescribeImageAttribute: {
					input: {
						type: "structure",
						required: ["Attribute", "ImageId"],
						members: {
							Attribute: {},
							ImageId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							BlockDeviceMappings: {
								shape: "Sgr",
								locationName: "blockDeviceMapping"
							},
							ImageId: {
								locationName: "imageId"
							},
							LaunchPermissions: {
								shape: "Sgs",
								locationName: "launchPermission"
							},
							ProductCodes: {
								shape: "Sfe",
								locationName: "productCodes"
							},
							Description: {
								shape: "S4i",
								locationName: "description"
							},
							KernelId: {
								shape: "S4i",
								locationName: "kernel"
							},
							RamdiskId: {
								shape: "S4i",
								locationName: "ramdisk"
							},
							SriovNetSupport: {
								shape: "S4i",
								locationName: "sriovNetSupport"
							}
						}
					}
				},
				DescribeImages: {
					input: {
						type: "structure",
						members: {
							ExecutableUsers: {
								locationName: "ExecutableBy",
								type: "list",
								member: {
									locationName: "ExecutableBy"
								}
							},
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							ImageIds: {
								locationName: "ImageId",
								type: "list",
								member: {
									locationName: "ImageId"
								}
							},
							Owners: {
								shape: "Sfj",
								locationName: "Owner"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Images: {
								locationName: "imagesSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										Architecture: {
											locationName: "architecture"
										},
										CreationDate: {
											locationName: "creationDate"
										},
										ImageId: {
											locationName: "imageId"
										},
										ImageLocation: {
											locationName: "imageLocation"
										},
										ImageType: {
											locationName: "imageType"
										},
										Public: {
											locationName: "isPublic",
											type: "boolean"
										},
										KernelId: {
											locationName: "kernelId"
										},
										OwnerId: {
											locationName: "imageOwnerId"
										},
										Platform: {
											locationName: "platform"
										},
										ProductCodes: {
											shape: "Sfe",
											locationName: "productCodes"
										},
										RamdiskId: {
											locationName: "ramdiskId"
										},
										State: {
											locationName: "imageState"
										},
										BlockDeviceMappings: {
											shape: "Sgr",
											locationName: "blockDeviceMapping"
										},
										Description: {
											locationName: "description"
										},
										EnaSupport: {
											locationName: "enaSupport",
											type: "boolean"
										},
										Hypervisor: {
											locationName: "hypervisor"
										},
										ImageOwnerAlias: {
											locationName: "imageOwnerAlias"
										},
										Name: {
											locationName: "name"
										},
										RootDeviceName: {
											locationName: "rootDeviceName"
										},
										RootDeviceType: {
											locationName: "rootDeviceType"
										},
										SriovNetSupport: {
											locationName: "sriovNetSupport"
										},
										StateReason: {
											shape: "Sh5",
											locationName: "stateReason"
										},
										Tags: {
											shape: "Sr",
											locationName: "tagSet"
										},
										VirtualizationType: {
											locationName: "virtualizationType"
										}
									}
								}
							}
						}
					}
				},
				DescribeImportImageTasks: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								type: "boolean"
							},
							Filters: {
								shape: "Scn"
							},
							ImportTaskIds: {
								shape: "Sh8",
								locationName: "ImportTaskId"
							},
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ImportImageTasks: {
								locationName: "importImageTaskSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										Architecture: {
											locationName: "architecture"
										},
										Description: {
											locationName: "description"
										},
										Hypervisor: {
											locationName: "hypervisor"
										},
										ImageId: {
											locationName: "imageId"
										},
										ImportTaskId: {
											locationName: "importTaskId"
										},
										LicenseType: {
											locationName: "licenseType"
										},
										Platform: {
											locationName: "platform"
										},
										Progress: {
											locationName: "progress"
										},
										SnapshotDetails: {
											shape: "Shc",
											locationName: "snapshotDetailSet"
										},
										Status: {
											locationName: "status"
										},
										StatusMessage: {
											locationName: "statusMessage"
										}
									}
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeImportSnapshotTasks: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								type: "boolean"
							},
							Filters: {
								shape: "Scn"
							},
							ImportTaskIds: {
								shape: "Sh8",
								locationName: "ImportTaskId"
							},
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ImportSnapshotTasks: {
								locationName: "importSnapshotTaskSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										Description: {
											locationName: "description"
										},
										ImportTaskId: {
											locationName: "importTaskId"
										},
										SnapshotTaskDetail: {
											shape: "Shj",
											locationName: "snapshotTaskDetail"
										}
									}
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeInstanceAttribute: {
					input: {
						type: "structure",
						required: ["Attribute", "InstanceId"],
						members: {
							Attribute: {
								locationName: "attribute"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							InstanceId: {
								locationName: "instanceId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Groups: {
								shape: "S83",
								locationName: "groupSet"
							},
							BlockDeviceMappings: {
								shape: "Shn",
								locationName: "blockDeviceMapping"
							},
							DisableApiTermination: {
								shape: "Shq",
								locationName: "disableApiTermination"
							},
							EnaSupport: {
								shape: "Shq",
								locationName: "enaSupport"
							},
							EbsOptimized: {
								shape: "Shq",
								locationName: "ebsOptimized"
							},
							InstanceId: {
								locationName: "instanceId"
							},
							InstanceInitiatedShutdownBehavior: {
								shape: "S4i",
								locationName: "instanceInitiatedShutdownBehavior"
							},
							InstanceType: {
								shape: "S4i",
								locationName: "instanceType"
							},
							KernelId: {
								shape: "S4i",
								locationName: "kernel"
							},
							ProductCodes: {
								shape: "Sfe",
								locationName: "productCodes"
							},
							RamdiskId: {
								shape: "S4i",
								locationName: "ramdisk"
							},
							RootDeviceName: {
								shape: "S4i",
								locationName: "rootDeviceName"
							},
							SourceDestCheck: {
								shape: "Shq",
								locationName: "sourceDestCheck"
							},
							SriovNetSupport: {
								shape: "S4i",
								locationName: "sriovNetSupport"
							},
							UserData: {
								shape: "S4i",
								locationName: "userData"
							}
						}
					}
				},
				DescribeInstanceCreditSpecifications: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								type: "boolean"
							},
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							InstanceIds: {
								shape: "Sdb",
								locationName: "InstanceId"
							},
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							InstanceCreditSpecifications: {
								locationName: "instanceCreditSpecificationSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										InstanceId: {
											locationName: "instanceId"
										},
										CpuCredits: {
											locationName: "cpuCredits"
										}
									}
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeInstanceStatus: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							InstanceIds: {
								shape: "Sdb",
								locationName: "InstanceId"
							},
							MaxResults: {
								type: "integer"
							},
							NextToken: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							IncludeAllInstances: {
								locationName: "includeAllInstances",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							InstanceStatuses: {
								locationName: "instanceStatusSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										AvailabilityZone: {
											locationName: "availabilityZone"
										},
										Events: {
											locationName: "eventsSet",
											type: "list",
											member: {
												locationName: "item",
												type: "structure",
												members: {
													Code: {
														locationName: "code"
													},
													Description: {
														locationName: "description"
													},
													NotAfter: {
														locationName: "notAfter",
														type: "timestamp"
													},
													NotBefore: {
														locationName: "notBefore",
														type: "timestamp"
													}
												}
											}
										},
										InstanceId: {
											locationName: "instanceId"
										},
										InstanceState: {
											shape: "Si2",
											locationName: "instanceState"
										},
										InstanceStatus: {
											shape: "Si4",
											locationName: "instanceStatus"
										},
										SystemStatus: {
											shape: "Si4",
											locationName: "systemStatus"
										}
									}
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeInstances: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							InstanceIds: {
								shape: "Sdb",
								locationName: "InstanceId"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							MaxResults: {
								locationName: "maxResults",
								type: "integer"
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Reservations: {
								locationName: "reservationSet",
								type: "list",
								member: {
									shape: "Sid",
									locationName: "item"
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeInternetGateways: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							InternetGatewayIds: {
								shape: "Sa",
								locationName: "internetGatewayId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							InternetGateways: {
								locationName: "internetGatewaySet",
								type: "list",
								member: {
									shape: "S5y",
									locationName: "item"
								}
							}
						}
					}
				},
				DescribeKeyPairs: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							KeyNames: {
								locationName: "KeyName",
								type: "list",
								member: {
									locationName: "KeyName"
								}
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							KeyPairs: {
								locationName: "keySet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										KeyFingerprint: {
											locationName: "keyFingerprint"
										},
										KeyName: {
											locationName: "keyName"
										}
									}
								}
							}
						}
					}
				},
				DescribeLaunchTemplateVersions: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								type: "boolean"
							},
							LaunchTemplateId: {},
							LaunchTemplateName: {},
							Versions: {
								shape: "Sbd",
								locationName: "LaunchTemplateVersion"
							},
							MinVersion: {},
							MaxVersion: {},
							NextToken: {},
							MaxResults: {
								type: "integer"
							},
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							LaunchTemplateVersions: {
								locationName: "launchTemplateVersionSet",
								type: "list",
								member: {
									shape: "S6x",
									locationName: "item"
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeLaunchTemplates: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								type: "boolean"
							},
							LaunchTemplateIds: {
								shape: "Sa",
								locationName: "LaunchTemplateId"
							},
							LaunchTemplateNames: {
								locationName: "LaunchTemplateName",
								type: "list",
								member: {
									locationName: "item"
								}
							},
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							NextToken: {},
							MaxResults: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							LaunchTemplates: {
								locationName: "launchTemplates",
								type: "list",
								member: {
									shape: "S6u",
									locationName: "item"
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeMovingAddresses: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "filter"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							MaxResults: {
								locationName: "maxResults",
								type: "integer"
							},
							NextToken: {
								locationName: "nextToken"
							},
							PublicIps: {
								shape: "Sa",
								locationName: "publicIp"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							MovingAddressStatuses: {
								locationName: "movingAddressStatusSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										MoveStatus: {
											locationName: "moveStatus"
										},
										PublicIp: {
											locationName: "publicIp"
										}
									}
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeNatGateways: {
					input: {
						type: "structure",
						members: {
							Filter: {
								shape: "Scn"
							},
							MaxResults: {
								type: "integer"
							},
							NatGatewayIds: {
								shape: "Sa",
								locationName: "NatGatewayId"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							NatGateways: {
								locationName: "natGatewaySet",
								type: "list",
								member: {
									shape: "S7i",
									locationName: "item"
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeNetworkAcls: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							NetworkAclIds: {
								shape: "Sa",
								locationName: "NetworkAclId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							NetworkAcls: {
								locationName: "networkAclSet",
								type: "list",
								member: {
									shape: "S7p",
									locationName: "item"
								}
							}
						}
					}
				},
				DescribeNetworkInterfaceAttribute: {
					input: {
						type: "structure",
						required: ["NetworkInterfaceId"],
						members: {
							Attribute: {
								locationName: "attribute"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							NetworkInterfaceId: {
								locationName: "networkInterfaceId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Attachment: {
								shape: "S82",
								locationName: "attachment"
							},
							Description: {
								shape: "S4i",
								locationName: "description"
							},
							Groups: {
								shape: "S83",
								locationName: "groupSet"
							},
							NetworkInterfaceId: {
								locationName: "networkInterfaceId"
							},
							SourceDestCheck: {
								shape: "Shq",
								locationName: "sourceDestCheck"
							}
						}
					}
				},
				DescribeNetworkInterfacePermissions: {
					input: {
						type: "structure",
						members: {
							NetworkInterfacePermissionIds: {
								locationName: "NetworkInterfacePermissionId",
								type: "list",
								member: {}
							},
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							NextToken: {},
							MaxResults: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							NetworkInterfacePermissions: {
								locationName: "networkInterfacePermissions",
								type: "list",
								member: {
									shape: "S8e",
									locationName: "item"
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeNetworkInterfaces: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "filter"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							NetworkInterfaceIds: {
								locationName: "NetworkInterfaceId",
								type: "list",
								member: {
									locationName: "item"
								}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							NetworkInterfaces: {
								locationName: "networkInterfaceSet",
								type: "list",
								member: {
									shape: "S80",
									locationName: "item"
								}
							}
						}
					}
				},
				DescribePlacementGroups: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							GroupNames: {
								locationName: "groupName",
								type: "list",
								member: {}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							PlacementGroups: {
								locationName: "placementGroupSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										GroupName: {
											locationName: "groupName"
										},
										State: {
											locationName: "state"
										},
										Strategy: {
											locationName: "strategy"
										}
									}
								}
							}
						}
					}
				},
				DescribePrefixLists: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								type: "boolean"
							},
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							MaxResults: {
								type: "integer"
							},
							NextToken: {},
							PrefixListIds: {
								shape: "Sa",
								locationName: "PrefixListId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							NextToken: {
								locationName: "nextToken"
							},
							PrefixLists: {
								locationName: "prefixListSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										Cidrs: {
											shape: "Sa",
											locationName: "cidrSet"
										},
										PrefixListId: {
											locationName: "prefixListId"
										},
										PrefixListName: {
											locationName: "prefixListName"
										}
									}
								}
							}
						}
					}
				},
				DescribePrincipalIdFormat: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								type: "boolean"
							},
							Resources: {
								locationName: "Resource",
								type: "list",
								member: {
									locationName: "item"
								}
							},
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Principals: {
								locationName: "principalSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										Arn: {
											locationName: "arn"
										},
										Statuses: {
											shape: "Scw",
											locationName: "statusSet"
										}
									}
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeRegions: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							RegionNames: {
								locationName: "RegionName",
								type: "list",
								member: {
									locationName: "RegionName"
								}
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Regions: {
								locationName: "regionInfo",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										Endpoint: {
											locationName: "regionEndpoint"
										},
										RegionName: {
											locationName: "regionName"
										}
									}
								}
							}
						}
					}
				},
				DescribeReservedInstances: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							OfferingClass: {},
							ReservedInstancesIds: {
								shape: "Skg",
								locationName: "ReservedInstancesId"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							OfferingType: {
								locationName: "offeringType"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ReservedInstances: {
								locationName: "reservedInstancesSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										AvailabilityZone: {
											locationName: "availabilityZone"
										},
										Duration: {
											locationName: "duration",
											type: "long"
										},
										End: {
											locationName: "end",
											type: "timestamp"
										},
										FixedPrice: {
											locationName: "fixedPrice",
											type: "float"
										},
										InstanceCount: {
											locationName: "instanceCount",
											type: "integer"
										},
										InstanceType: {
											locationName: "instanceType"
										},
										ProductDescription: {
											locationName: "productDescription"
										},
										ReservedInstancesId: {
											locationName: "reservedInstancesId"
										},
										Start: {
											locationName: "start",
											type: "timestamp"
										},
										State: {
											locationName: "state"
										},
										UsagePrice: {
											locationName: "usagePrice",
											type: "float"
										},
										CurrencyCode: {
											locationName: "currencyCode"
										},
										InstanceTenancy: {
											locationName: "instanceTenancy"
										},
										OfferingClass: {
											locationName: "offeringClass"
										},
										OfferingType: {
											locationName: "offeringType"
										},
										RecurringCharges: {
											shape: "Sko",
											locationName: "recurringCharges"
										},
										Scope: {
											locationName: "scope"
										},
										Tags: {
											shape: "Sr",
											locationName: "tagSet"
										}
									}
								}
							}
						}
					}
				},
				DescribeReservedInstancesListings: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							ReservedInstancesId: {
								locationName: "reservedInstancesId"
							},
							ReservedInstancesListingId: {
								locationName: "reservedInstancesListingId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ReservedInstancesListings: {
								shape: "S2w",
								locationName: "reservedInstancesListingsSet"
							}
						}
					}
				},
				DescribeReservedInstancesModifications: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							ReservedInstancesModificationIds: {
								locationName: "ReservedInstancesModificationId",
								type: "list",
								member: {
									locationName: "ReservedInstancesModificationId"
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							NextToken: {
								locationName: "nextToken"
							},
							ReservedInstancesModifications: {
								locationName: "reservedInstancesModificationsSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										ClientToken: {
											locationName: "clientToken"
										},
										CreateDate: {
											locationName: "createDate",
											type: "timestamp"
										},
										EffectiveDate: {
											locationName: "effectiveDate",
											type: "timestamp"
										},
										ModificationResults: {
											locationName: "modificationResultSet",
											type: "list",
											member: {
												locationName: "item",
												type: "structure",
												members: {
													ReservedInstancesId: {
														locationName: "reservedInstancesId"
													},
													TargetConfiguration: {
														shape: "Sl1",
														locationName: "targetConfiguration"
													}
												}
											}
										},
										ReservedInstancesIds: {
											locationName: "reservedInstancesSet",
											type: "list",
											member: {
												locationName: "item",
												type: "structure",
												members: {
													ReservedInstancesId: {
														locationName: "reservedInstancesId"
													}
												}
											}
										},
										ReservedInstancesModificationId: {
											locationName: "reservedInstancesModificationId"
										},
										Status: {
											locationName: "status"
										},
										StatusMessage: {
											locationName: "statusMessage"
										},
										UpdateDate: {
											locationName: "updateDate",
											type: "timestamp"
										}
									}
								}
							}
						}
					}
				},
				DescribeReservedInstancesOfferings: {
					input: {
						type: "structure",
						members: {
							AvailabilityZone: {},
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							IncludeMarketplace: {
								type: "boolean"
							},
							InstanceType: {},
							MaxDuration: {
								type: "long"
							},
							MaxInstanceCount: {
								type: "integer"
							},
							MinDuration: {
								type: "long"
							},
							OfferingClass: {},
							ProductDescription: {},
							ReservedInstancesOfferingIds: {
								locationName: "ReservedInstancesOfferingId",
								type: "list",
								member: {}
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							InstanceTenancy: {
								locationName: "instanceTenancy"
							},
							MaxResults: {
								locationName: "maxResults",
								type: "integer"
							},
							NextToken: {
								locationName: "nextToken"
							},
							OfferingType: {
								locationName: "offeringType"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ReservedInstancesOfferings: {
								locationName: "reservedInstancesOfferingsSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										AvailabilityZone: {
											locationName: "availabilityZone"
										},
										Duration: {
											locationName: "duration",
											type: "long"
										},
										FixedPrice: {
											locationName: "fixedPrice",
											type: "float"
										},
										InstanceType: {
											locationName: "instanceType"
										},
										ProductDescription: {
											locationName: "productDescription"
										},
										ReservedInstancesOfferingId: {
											locationName: "reservedInstancesOfferingId"
										},
										UsagePrice: {
											locationName: "usagePrice",
											type: "float"
										},
										CurrencyCode: {
											locationName: "currencyCode"
										},
										InstanceTenancy: {
											locationName: "instanceTenancy"
										},
										Marketplace: {
											locationName: "marketplace",
											type: "boolean"
										},
										OfferingClass: {
											locationName: "offeringClass"
										},
										OfferingType: {
											locationName: "offeringType"
										},
										PricingDetails: {
											locationName: "pricingDetailsSet",
											type: "list",
											member: {
												locationName: "item",
												type: "structure",
												members: {
													Count: {
														locationName: "count",
														type: "integer"
													},
													Price: {
														locationName: "price",
														type: "double"
													}
												}
											}
										},
										RecurringCharges: {
											shape: "Sko",
											locationName: "recurringCharges"
										},
										Scope: {
											locationName: "scope"
										}
									}
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeRouteTables: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							RouteTableIds: {
								shape: "Sa",
								locationName: "RouteTableId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							RouteTables: {
								locationName: "routeTableSet",
								type: "list",
								member: {
									shape: "S8r",
									locationName: "item"
								}
							}
						}
					}
				},
				DescribeScheduledInstanceAvailability: {
					input: {
						type: "structure",
						required: ["FirstSlotStartTimeRange", "Recurrence"],
						members: {
							DryRun: {
								type: "boolean"
							},
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							FirstSlotStartTimeRange: {
								type: "structure",
								required: ["EarliestTime", "LatestTime"],
								members: {
									EarliestTime: {
										type: "timestamp"
									},
									LatestTime: {
										type: "timestamp"
									}
								}
							},
							MaxResults: {
								type: "integer"
							},
							MaxSlotDurationInHours: {
								type: "integer"
							},
							MinSlotDurationInHours: {
								type: "integer"
							},
							NextToken: {},
							Recurrence: {
								type: "structure",
								members: {
									Frequency: {},
									Interval: {
										type: "integer"
									},
									OccurrenceDays: {
										locationName: "OccurrenceDay",
										type: "list",
										member: {
											locationName: "OccurenceDay",
											type: "integer"
										}
									},
									OccurrenceRelativeToEnd: {
										type: "boolean"
									},
									OccurrenceUnit: {}
								}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							NextToken: {
								locationName: "nextToken"
							},
							ScheduledInstanceAvailabilitySet: {
								locationName: "scheduledInstanceAvailabilitySet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										AvailabilityZone: {
											locationName: "availabilityZone"
										},
										AvailableInstanceCount: {
											locationName: "availableInstanceCount",
											type: "integer"
										},
										FirstSlotStartTime: {
											locationName: "firstSlotStartTime",
											type: "timestamp"
										},
										HourlyPrice: {
											locationName: "hourlyPrice"
										},
										InstanceType: {
											locationName: "instanceType"
										},
										MaxTermDurationInDays: {
											locationName: "maxTermDurationInDays",
											type: "integer"
										},
										MinTermDurationInDays: {
											locationName: "minTermDurationInDays",
											type: "integer"
										},
										NetworkPlatform: {
											locationName: "networkPlatform"
										},
										Platform: {
											locationName: "platform"
										},
										PurchaseToken: {
											locationName: "purchaseToken"
										},
										Recurrence: {
											shape: "Sll",
											locationName: "recurrence"
										},
										SlotDurationInHours: {
											locationName: "slotDurationInHours",
											type: "integer"
										},
										TotalScheduledInstanceHours: {
											locationName: "totalScheduledInstanceHours",
											type: "integer"
										}
									}
								}
							}
						}
					}
				},
				DescribeScheduledInstances: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								type: "boolean"
							},
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							MaxResults: {
								type: "integer"
							},
							NextToken: {},
							ScheduledInstanceIds: {
								locationName: "ScheduledInstanceId",
								type: "list",
								member: {
									locationName: "ScheduledInstanceId"
								}
							},
							SlotStartTimeRange: {
								type: "structure",
								members: {
									EarliestTime: {
										type: "timestamp"
									},
									LatestTime: {
										type: "timestamp"
									}
								}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							NextToken: {
								locationName: "nextToken"
							},
							ScheduledInstanceSet: {
								locationName: "scheduledInstanceSet",
								type: "list",
								member: {
									shape: "Sls",
									locationName: "item"
								}
							}
						}
					}
				},
				DescribeSecurityGroupReferences: {
					input: {
						type: "structure",
						required: ["GroupId"],
						members: {
							DryRun: {
								type: "boolean"
							},
							GroupId: {
								type: "list",
								member: {
									locationName: "item"
								}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							SecurityGroupReferenceSet: {
								locationName: "securityGroupReferenceSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									required: ["GroupId", "ReferencingVpcId"],
									members: {
										GroupId: {
											locationName: "groupId"
										},
										ReferencingVpcId: {
											locationName: "referencingVpcId"
										},
										VpcPeeringConnectionId: {
											locationName: "vpcPeeringConnectionId"
										}
									}
								}
							}
						}
					}
				},
				DescribeSecurityGroups: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							GroupIds: {
								shape: "S1s",
								locationName: "GroupId"
							},
							GroupNames: {
								shape: "Slz",
								locationName: "GroupName"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							NextToken: {},
							MaxResults: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							SecurityGroups: {
								locationName: "securityGroupInfo",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										Description: {
											locationName: "groupDescription"
										},
										GroupName: {
											locationName: "groupName"
										},
										IpPermissions: {
											shape: "S25",
											locationName: "ipPermissions"
										},
										OwnerId: {
											locationName: "ownerId"
										},
										GroupId: {
											locationName: "groupId"
										},
										IpPermissionsEgress: {
											shape: "S25",
											locationName: "ipPermissionsEgress"
										},
										Tags: {
											shape: "Sr",
											locationName: "tagSet"
										},
										VpcId: {
											locationName: "vpcId"
										}
									}
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeSnapshotAttribute: {
					input: {
						type: "structure",
						required: ["Attribute", "SnapshotId"],
						members: {
							Attribute: {},
							SnapshotId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							CreateVolumePermissions: {
								shape: "Sm6",
								locationName: "createVolumePermission"
							},
							ProductCodes: {
								shape: "Sfe",
								locationName: "productCodes"
							},
							SnapshotId: {
								locationName: "snapshotId"
							}
						}
					}
				},
				DescribeSnapshots: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							MaxResults: {
								type: "integer"
							},
							NextToken: {},
							OwnerIds: {
								shape: "Sfj",
								locationName: "Owner"
							},
							RestorableByUserIds: {
								locationName: "RestorableBy",
								type: "list",
								member: {}
							},
							SnapshotIds: {
								locationName: "SnapshotId",
								type: "list",
								member: {
									locationName: "SnapshotId"
								}
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Snapshots: {
								locationName: "snapshotSet",
								type: "list",
								member: {
									shape: "S93",
									locationName: "item"
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeSpotDatafeedSubscription: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							SpotDatafeedSubscription: {
								shape: "S97",
								locationName: "spotDatafeedSubscription"
							}
						}
					}
				},
				DescribeSpotFleetInstances: {
					input: {
						type: "structure",
						required: ["SpotFleetRequestId"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							MaxResults: {
								locationName: "maxResults",
								type: "integer"
							},
							NextToken: {
								locationName: "nextToken"
							},
							SpotFleetRequestId: {
								locationName: "spotFleetRequestId"
							}
						}
					},
					output: {
						type: "structure",
						required: ["ActiveInstances", "SpotFleetRequestId"],
						members: {
							ActiveInstances: {
								shape: "Seo",
								locationName: "activeInstanceSet"
							},
							NextToken: {
								locationName: "nextToken"
							},
							SpotFleetRequestId: {
								locationName: "spotFleetRequestId"
							}
						}
					}
				},
				DescribeSpotFleetRequestHistory: {
					input: {
						type: "structure",
						required: ["SpotFleetRequestId", "StartTime"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							EventType: {
								locationName: "eventType"
							},
							MaxResults: {
								locationName: "maxResults",
								type: "integer"
							},
							NextToken: {
								locationName: "nextToken"
							},
							SpotFleetRequestId: {
								locationName: "spotFleetRequestId"
							},
							StartTime: {
								locationName: "startTime",
								type: "timestamp"
							}
						}
					},
					output: {
						type: "structure",
						required: ["HistoryRecords", "LastEvaluatedTime", "SpotFleetRequestId", "StartTime"],
						members: {
							HistoryRecords: {
								locationName: "historyRecordSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									required: ["EventInformation", "EventType", "Timestamp"],
									members: {
										EventInformation: {
											shape: "Sel",
											locationName: "eventInformation"
										},
										EventType: {
											locationName: "eventType"
										},
										Timestamp: {
											locationName: "timestamp",
											type: "timestamp"
										}
									}
								}
							},
							LastEvaluatedTime: {
								locationName: "lastEvaluatedTime",
								type: "timestamp"
							},
							NextToken: {
								locationName: "nextToken"
							},
							SpotFleetRequestId: {
								locationName: "spotFleetRequestId"
							},
							StartTime: {
								locationName: "startTime",
								type: "timestamp"
							}
						}
					}
				},
				DescribeSpotFleetRequests: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							MaxResults: {
								locationName: "maxResults",
								type: "integer"
							},
							NextToken: {
								locationName: "nextToken"
							},
							SpotFleetRequestIds: {
								shape: "Sa",
								locationName: "spotFleetRequestId"
							}
						}
					},
					output: {
						type: "structure",
						required: ["SpotFleetRequestConfigs"],
						members: {
							NextToken: {
								locationName: "nextToken"
							},
							SpotFleetRequestConfigs: {
								locationName: "spotFleetRequestConfigSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									required: ["CreateTime", "SpotFleetRequestConfig", "SpotFleetRequestId", "SpotFleetRequestState"],
									members: {
										ActivityStatus: {
											locationName: "activityStatus"
										},
										CreateTime: {
											locationName: "createTime",
											type: "timestamp"
										},
										SpotFleetRequestConfig: {
											shape: "Smr",
											locationName: "spotFleetRequestConfig"
										},
										SpotFleetRequestId: {
											locationName: "spotFleetRequestId"
										},
										SpotFleetRequestState: {
											locationName: "spotFleetRequestState"
										}
									}
								}
							}
						}
					}
				},
				DescribeSpotInstanceRequests: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							SpotInstanceRequestIds: {
								shape: "S3h",
								locationName: "SpotInstanceRequestId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							SpotInstanceRequests: {
								shape: "Snf",
								locationName: "spotInstanceRequestSet"
							}
						}
					}
				},
				DescribeSpotPriceHistory: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							AvailabilityZone: {
								locationName: "availabilityZone"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							EndTime: {
								locationName: "endTime",
								type: "timestamp"
							},
							InstanceTypes: {
								locationName: "InstanceType",
								type: "list",
								member: {}
							},
							MaxResults: {
								locationName: "maxResults",
								type: "integer"
							},
							NextToken: {
								locationName: "nextToken"
							},
							ProductDescriptions: {
								locationName: "ProductDescription",
								type: "list",
								member: {}
							},
							StartTime: {
								locationName: "startTime",
								type: "timestamp"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							NextToken: {
								locationName: "nextToken"
							},
							SpotPriceHistory: {
								locationName: "spotPriceHistorySet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										AvailabilityZone: {
											locationName: "availabilityZone"
										},
										InstanceType: {
											locationName: "instanceType"
										},
										ProductDescription: {
											locationName: "productDescription"
										},
										SpotPrice: {
											locationName: "spotPrice"
										},
										Timestamp: {
											locationName: "timestamp",
											type: "timestamp"
										}
									}
								}
							}
						}
					}
				},
				DescribeStaleSecurityGroups: {
					input: {
						type: "structure",
						required: ["VpcId"],
						members: {
							DryRun: {
								type: "boolean"
							},
							MaxResults: {
								type: "integer"
							},
							NextToken: {},
							VpcId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							NextToken: {
								locationName: "nextToken"
							},
							StaleSecurityGroupSet: {
								locationName: "staleSecurityGroupSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									required: ["GroupId"],
									members: {
										Description: {
											locationName: "description"
										},
										GroupId: {
											locationName: "groupId"
										},
										GroupName: {
											locationName: "groupName"
										},
										StaleIpPermissions: {
											shape: "Snv",
											locationName: "staleIpPermissions"
										},
										StaleIpPermissionsEgress: {
											shape: "Snv",
											locationName: "staleIpPermissionsEgress"
										},
										VpcId: {
											locationName: "vpcId"
										}
									}
								}
							}
						}
					}
				},
				DescribeSubnets: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							SubnetIds: {
								locationName: "SubnetId",
								type: "list",
								member: {
									locationName: "SubnetId"
								}
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Subnets: {
								locationName: "subnetSet",
								type: "list",
								member: {
									shape: "S40",
									locationName: "item"
								}
							}
						}
					}
				},
				DescribeTags: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							MaxResults: {
								locationName: "maxResults",
								type: "integer"
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							NextToken: {
								locationName: "nextToken"
							},
							Tags: {
								locationName: "tagSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										Key: {
											locationName: "key"
										},
										ResourceId: {
											locationName: "resourceId"
										},
										ResourceType: {
											locationName: "resourceType"
										},
										Value: {
											locationName: "value"
										}
									}
								}
							}
						}
					}
				},
				DescribeVolumeAttribute: {
					input: {
						type: "structure",
						required: ["VolumeId"],
						members: {
							Attribute: {},
							VolumeId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							AutoEnableIO: {
								shape: "Shq",
								locationName: "autoEnableIO"
							},
							ProductCodes: {
								shape: "Sfe",
								locationName: "productCodes"
							},
							VolumeId: {
								locationName: "volumeId"
							}
						}
					}
				},
				DescribeVolumeStatus: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							MaxResults: {
								type: "integer"
							},
							NextToken: {},
							VolumeIds: {
								shape: "Soc",
								locationName: "VolumeId"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							NextToken: {
								locationName: "nextToken"
							},
							VolumeStatuses: {
								locationName: "volumeStatusSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										Actions: {
											locationName: "actionsSet",
											type: "list",
											member: {
												locationName: "item",
												type: "structure",
												members: {
													Code: {
														locationName: "code"
													},
													Description: {
														locationName: "description"
													},
													EventId: {
														locationName: "eventId"
													},
													EventType: {
														locationName: "eventType"
													}
												}
											}
										},
										AvailabilityZone: {
											locationName: "availabilityZone"
										},
										Events: {
											locationName: "eventsSet",
											type: "list",
											member: {
												locationName: "item",
												type: "structure",
												members: {
													Description: {
														locationName: "description"
													},
													EventId: {
														locationName: "eventId"
													},
													EventType: {
														locationName: "eventType"
													},
													NotAfter: {
														locationName: "notAfter",
														type: "timestamp"
													},
													NotBefore: {
														locationName: "notBefore",
														type: "timestamp"
													}
												}
											}
										},
										VolumeId: {
											locationName: "volumeId"
										},
										VolumeStatus: {
											locationName: "volumeStatus",
											type: "structure",
											members: {
												Details: {
													locationName: "details",
													type: "list",
													member: {
														locationName: "item",
														type: "structure",
														members: {
															Name: {
																locationName: "name"
															},
															Status: {
																locationName: "status"
															}
														}
													}
												},
												Status: {
													locationName: "status"
												}
											}
										}
									}
								}
							}
						}
					}
				},
				DescribeVolumes: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							VolumeIds: {
								shape: "Soc",
								locationName: "VolumeId"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							MaxResults: {
								locationName: "maxResults",
								type: "integer"
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Volumes: {
								locationName: "volumeSet",
								type: "list",
								member: {
									shape: "S9f",
									locationName: "item"
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeVolumesModifications: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								type: "boolean"
							},
							VolumeIds: {
								shape: "Soc",
								locationName: "VolumeId"
							},
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							NextToken: {},
							MaxResults: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							VolumesModifications: {
								locationName: "volumeModificationSet",
								type: "list",
								member: {
									shape: "Sov",
									locationName: "item"
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeVpcAttribute: {
					input: {
						type: "structure",
						required: ["Attribute", "VpcId"],
						members: {
							Attribute: {},
							VpcId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							VpcId: {
								locationName: "vpcId"
							},
							EnableDnsHostnames: {
								shape: "Shq",
								locationName: "enableDnsHostnames"
							},
							EnableDnsSupport: {
								shape: "Shq",
								locationName: "enableDnsSupport"
							}
						}
					}
				},
				DescribeVpcClassicLink: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							VpcIds: {
								shape: "Sp1",
								locationName: "VpcId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Vpcs: {
								locationName: "vpcSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										ClassicLinkEnabled: {
											locationName: "classicLinkEnabled",
											type: "boolean"
										},
										Tags: {
											shape: "Sr",
											locationName: "tagSet"
										},
										VpcId: {
											locationName: "vpcId"
										}
									}
								}
							}
						}
					}
				},
				DescribeVpcClassicLinkDnsSupport: {
					input: {
						type: "structure",
						members: {
							MaxResults: {
								locationName: "maxResults",
								type: "integer"
							},
							NextToken: {
								locationName: "nextToken"
							},
							VpcIds: {
								shape: "Sp1"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							NextToken: {
								locationName: "nextToken"
							},
							Vpcs: {
								locationName: "vpcs",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										ClassicLinkDnsSupported: {
											locationName: "classicLinkDnsSupported",
											type: "boolean"
										},
										VpcId: {
											locationName: "vpcId"
										}
									}
								}
							}
						}
					}
				},
				DescribeVpcEndpointConnectionNotifications: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								type: "boolean"
							},
							ConnectionNotificationId: {},
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ConnectionNotificationSet: {
								locationName: "connectionNotificationSet",
								type: "list",
								member: {
									shape: "S9v",
									locationName: "item"
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeVpcEndpointConnections: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								type: "boolean"
							},
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							VpcEndpointConnections: {
								locationName: "vpcEndpointConnectionSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										ServiceId: {
											locationName: "serviceId"
										},
										VpcEndpointId: {
											locationName: "vpcEndpointId"
										},
										VpcEndpointOwner: {
											locationName: "vpcEndpointOwner"
										},
										VpcEndpointState: {
											locationName: "vpcEndpointState"
										},
										CreationTimestamp: {
											locationName: "creationTimestamp",
											type: "timestamp"
										}
									}
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeVpcEndpointServiceConfigurations: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								type: "boolean"
							},
							ServiceIds: {
								shape: "Sa",
								locationName: "ServiceId"
							},
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ServiceConfigurations: {
								locationName: "serviceConfigurationSet",
								type: "list",
								member: {
									shape: "Sa0",
									locationName: "item"
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeVpcEndpointServicePermissions: {
					input: {
						type: "structure",
						required: ["ServiceId"],
						members: {
							DryRun: {
								type: "boolean"
							},
							ServiceId: {},
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							AllowedPrincipals: {
								locationName: "allowedPrincipals",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										PrincipalType: {
											locationName: "principalType"
										},
										Principal: {
											locationName: "principal"
										}
									}
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeVpcEndpointServices: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								type: "boolean"
							},
							ServiceNames: {
								shape: "Sa",
								locationName: "ServiceName"
							},
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ServiceNames: {
								shape: "Sa",
								locationName: "serviceNameSet"
							},
							ServiceDetails: {
								locationName: "serviceDetailSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										ServiceName: {
											locationName: "serviceName"
										},
										ServiceType: {
											shape: "Sa1",
											locationName: "serviceType"
										},
										AvailabilityZones: {
											shape: "Sa",
											locationName: "availabilityZoneSet"
										},
										Owner: {
											locationName: "owner"
										},
										BaseEndpointDnsNames: {
											shape: "Sa",
											locationName: "baseEndpointDnsNameSet"
										},
										PrivateDnsName: {
											locationName: "privateDnsName"
										},
										VpcEndpointPolicySupported: {
											locationName: "vpcEndpointPolicySupported",
											type: "boolean"
										},
										AcceptanceRequired: {
											locationName: "acceptanceRequired",
											type: "boolean"
										}
									}
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeVpcEndpoints: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								type: "boolean"
							},
							VpcEndpointIds: {
								shape: "Sa",
								locationName: "VpcEndpointId"
							},
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							MaxResults: {
								type: "integer"
							},
							NextToken: {}
						}
					},
					output: {
						type: "structure",
						members: {
							VpcEndpoints: {
								locationName: "vpcEndpointSet",
								type: "list",
								member: {
									shape: "S9n",
									locationName: "item"
								}
							},
							NextToken: {
								locationName: "nextToken"
							}
						}
					}
				},
				DescribeVpcPeeringConnections: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							VpcPeeringConnectionIds: {
								shape: "Sa",
								locationName: "VpcPeeringConnectionId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							VpcPeeringConnections: {
								locationName: "vpcPeeringConnectionSet",
								type: "list",
								member: {
									shape: "Sh",
									locationName: "item"
								}
							}
						}
					}
				},
				DescribeVpcs: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							VpcIds: {
								locationName: "VpcId",
								type: "list",
								member: {
									locationName: "VpcId"
								}
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Vpcs: {
								locationName: "vpcSet",
								type: "list",
								member: {
									shape: "S45",
									locationName: "item"
								}
							}
						}
					}
				},
				DescribeVpnConnections: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							VpnConnectionIds: {
								locationName: "VpnConnectionId",
								type: "list",
								member: {
									locationName: "VpnConnectionId"
								}
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							VpnConnections: {
								locationName: "vpnConnectionSet",
								type: "list",
								member: {
									shape: "Sac",
									locationName: "item"
								}
							}
						}
					}
				},
				DescribeVpnGateways: {
					input: {
						type: "structure",
						members: {
							Filters: {
								shape: "Scn",
								locationName: "Filter"
							},
							VpnGatewayIds: {
								locationName: "VpnGatewayId",
								type: "list",
								member: {
									locationName: "VpnGatewayId"
								}
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							VpnGateways: {
								locationName: "vpnGatewaySet",
								type: "list",
								member: {
									shape: "Sao",
									locationName: "item"
								}
							}
						}
					}
				},
				DetachClassicLinkVpc: {
					input: {
						type: "structure",
						required: ["InstanceId", "VpcId"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							InstanceId: {
								locationName: "instanceId"
							},
							VpcId: {
								locationName: "vpcId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Return: {
								locationName: "return",
								type: "boolean"
							}
						}
					}
				},
				DetachInternetGateway: {
					input: {
						type: "structure",
						required: ["InternetGatewayId", "VpcId"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							InternetGatewayId: {
								locationName: "internetGatewayId"
							},
							VpcId: {
								locationName: "vpcId"
							}
						}
					}
				},
				DetachNetworkInterface: {
					input: {
						type: "structure",
						required: ["AttachmentId"],
						members: {
							AttachmentId: {
								locationName: "attachmentId"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							Force: {
								locationName: "force",
								type: "boolean"
							}
						}
					}
				},
				DetachVolume: {
					input: {
						type: "structure",
						required: ["VolumeId"],
						members: {
							Device: {},
							Force: {
								type: "boolean"
							},
							InstanceId: {},
							VolumeId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						shape: "S1y"
					}
				},
				DetachVpnGateway: {
					input: {
						type: "structure",
						required: ["VpcId", "VpnGatewayId"],
						members: {
							VpcId: {},
							VpnGatewayId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					}
				},
				DisableVgwRoutePropagation: {
					input: {
						type: "structure",
						required: ["GatewayId", "RouteTableId"],
						members: {
							GatewayId: {},
							RouteTableId: {}
						}
					}
				},
				DisableVpcClassicLink: {
					input: {
						type: "structure",
						required: ["VpcId"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							VpcId: {
								locationName: "vpcId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Return: {
								locationName: "return",
								type: "boolean"
							}
						}
					}
				},
				DisableVpcClassicLinkDnsSupport: {
					input: {
						type: "structure",
						members: {
							VpcId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Return: {
								locationName: "return",
								type: "boolean"
							}
						}
					}
				},
				DisassociateAddress: {
					input: {
						type: "structure",
						members: {
							AssociationId: {},
							PublicIp: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					}
				},
				DisassociateIamInstanceProfile: {
					input: {
						type: "structure",
						required: ["AssociationId"],
						members: {
							AssociationId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							IamInstanceProfileAssociation: {
								shape: "S1b",
								locationName: "iamInstanceProfileAssociation"
							}
						}
					}
				},
				DisassociateRouteTable: {
					input: {
						type: "structure",
						required: ["AssociationId"],
						members: {
							AssociationId: {
								locationName: "associationId"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					}
				},
				DisassociateSubnetCidrBlock: {
					input: {
						type: "structure",
						required: ["AssociationId"],
						members: {
							AssociationId: {
								locationName: "associationId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Ipv6CidrBlockAssociation: {
								shape: "S1i",
								locationName: "ipv6CidrBlockAssociation"
							},
							SubnetId: {
								locationName: "subnetId"
							}
						}
					}
				},
				DisassociateVpcCidrBlock: {
					input: {
						type: "structure",
						required: ["AssociationId"],
						members: {
							AssociationId: {
								locationName: "associationId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Ipv6CidrBlockAssociation: {
								shape: "S1n",
								locationName: "ipv6CidrBlockAssociation"
							},
							CidrBlockAssociation: {
								shape: "S1q",
								locationName: "cidrBlockAssociation"
							},
							VpcId: {
								locationName: "vpcId"
							}
						}
					}
				},
				EnableVgwRoutePropagation: {
					input: {
						type: "structure",
						required: ["GatewayId", "RouteTableId"],
						members: {
							GatewayId: {},
							RouteTableId: {}
						}
					}
				},
				EnableVolumeIO: {
					input: {
						type: "structure",
						required: ["VolumeId"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							VolumeId: {
								locationName: "volumeId"
							}
						}
					}
				},
				EnableVpcClassicLink: {
					input: {
						type: "structure",
						required: ["VpcId"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							VpcId: {
								locationName: "vpcId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Return: {
								locationName: "return",
								type: "boolean"
							}
						}
					}
				},
				EnableVpcClassicLinkDnsSupport: {
					input: {
						type: "structure",
						members: {
							VpcId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Return: {
								locationName: "return",
								type: "boolean"
							}
						}
					}
				},
				GetConsoleOutput: {
					input: {
						type: "structure",
						required: ["InstanceId"],
						members: {
							InstanceId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							InstanceId: {
								locationName: "instanceId"
							},
							Output: {
								locationName: "output"
							},
							Timestamp: {
								locationName: "timestamp",
								type: "timestamp"
							}
						}
					}
				},
				GetConsoleScreenshot: {
					input: {
						type: "structure",
						required: ["InstanceId"],
						members: {
							DryRun: {
								type: "boolean"
							},
							InstanceId: {},
							WakeUp: {
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ImageData: {
								locationName: "imageData"
							},
							InstanceId: {
								locationName: "instanceId"
							}
						}
					}
				},
				GetHostReservationPurchasePreview: {
					input: {
						type: "structure",
						required: ["HostIdSet", "OfferingId"],
						members: {
							HostIdSet: {
								shape: "Sr4"
							},
							OfferingId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							CurrencyCode: {
								locationName: "currencyCode"
							},
							Purchase: {
								shape: "Sr6",
								locationName: "purchase"
							},
							TotalHourlyPrice: {
								locationName: "totalHourlyPrice"
							},
							TotalUpfrontPrice: {
								locationName: "totalUpfrontPrice"
							}
						}
					}
				},
				GetLaunchTemplateData: {
					input: {
						type: "structure",
						required: ["InstanceId"],
						members: {
							DryRun: {
								type: "boolean"
							},
							InstanceId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							LaunchTemplateData: {
								shape: "S6y",
								locationName: "launchTemplateData"
							}
						}
					}
				},
				GetPasswordData: {
					input: {
						type: "structure",
						required: ["InstanceId"],
						members: {
							InstanceId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							InstanceId: {
								locationName: "instanceId"
							},
							PasswordData: {
								locationName: "passwordData"
							},
							Timestamp: {
								locationName: "timestamp",
								type: "timestamp"
							}
						}
					}
				},
				GetReservedInstancesExchangeQuote: {
					input: {
						type: "structure",
						required: ["ReservedInstanceIds"],
						members: {
							DryRun: {
								type: "boolean"
							},
							ReservedInstanceIds: {
								shape: "S3",
								locationName: "ReservedInstanceId"
							},
							TargetConfigurations: {
								shape: "S5",
								locationName: "TargetConfiguration"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							CurrencyCode: {
								locationName: "currencyCode"
							},
							IsValidExchange: {
								locationName: "isValidExchange",
								type: "boolean"
							},
							OutputReservedInstancesWillExpireAt: {
								locationName: "outputReservedInstancesWillExpireAt",
								type: "timestamp"
							},
							PaymentDue: {
								locationName: "paymentDue"
							},
							ReservedInstanceValueRollup: {
								shape: "Sre",
								locationName: "reservedInstanceValueRollup"
							},
							ReservedInstanceValueSet: {
								locationName: "reservedInstanceValueSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										ReservationValue: {
											shape: "Sre",
											locationName: "reservationValue"
										},
										ReservedInstanceId: {
											locationName: "reservedInstanceId"
										}
									}
								}
							},
							TargetConfigurationValueRollup: {
								shape: "Sre",
								locationName: "targetConfigurationValueRollup"
							},
							TargetConfigurationValueSet: {
								locationName: "targetConfigurationValueSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										ReservationValue: {
											shape: "Sre",
											locationName: "reservationValue"
										},
										TargetConfiguration: {
											locationName: "targetConfiguration",
											type: "structure",
											members: {
												InstanceCount: {
													locationName: "instanceCount",
													type: "integer"
												},
												OfferingId: {
													locationName: "offeringId"
												}
											}
										}
									}
								}
							},
							ValidationFailureReason: {
								locationName: "validationFailureReason"
							}
						}
					}
				},
				ImportImage: {
					input: {
						type: "structure",
						members: {
							Architecture: {},
							ClientData: {
								shape: "Srl"
							},
							ClientToken: {},
							Description: {},
							DiskContainers: {
								locationName: "DiskContainer",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										Description: {},
										DeviceName: {},
										Format: {},
										SnapshotId: {},
										Url: {},
										UserBucket: {
											shape: "Sro"
										}
									}
								}
							},
							DryRun: {
								type: "boolean"
							},
							Hypervisor: {},
							LicenseType: {},
							Platform: {},
							RoleName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Architecture: {
								locationName: "architecture"
							},
							Description: {
								locationName: "description"
							},
							Hypervisor: {
								locationName: "hypervisor"
							},
							ImageId: {
								locationName: "imageId"
							},
							ImportTaskId: {
								locationName: "importTaskId"
							},
							LicenseType: {
								locationName: "licenseType"
							},
							Platform: {
								locationName: "platform"
							},
							Progress: {
								locationName: "progress"
							},
							SnapshotDetails: {
								shape: "Shc",
								locationName: "snapshotDetailSet"
							},
							Status: {
								locationName: "status"
							},
							StatusMessage: {
								locationName: "statusMessage"
							}
						}
					}
				},
				ImportInstance: {
					input: {
						type: "structure",
						required: ["Platform"],
						members: {
							Description: {
								locationName: "description"
							},
							DiskImages: {
								locationName: "diskImage",
								type: "list",
								member: {
									type: "structure",
									members: {
										Description: {},
										Image: {
											shape: "Srt"
										},
										Volume: {
											shape: "Sru"
										}
									}
								}
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							LaunchSpecification: {
								locationName: "launchSpecification",
								type: "structure",
								members: {
									AdditionalInfo: {
										locationName: "additionalInfo"
									},
									Architecture: {
										locationName: "architecture"
									},
									GroupIds: {
										shape: "S6a",
										locationName: "GroupId"
									},
									GroupNames: {
										shape: "S6m",
										locationName: "GroupName"
									},
									InstanceInitiatedShutdownBehavior: {
										locationName: "instanceInitiatedShutdownBehavior"
									},
									InstanceType: {
										locationName: "instanceType"
									},
									Monitoring: {
										locationName: "monitoring",
										type: "boolean"
									},
									Placement: {
										shape: "Sii",
										locationName: "placement"
									},
									PrivateIpAddress: {
										locationName: "privateIpAddress"
									},
									SubnetId: {
										locationName: "subnetId"
									},
									UserData: {
										locationName: "userData",
										type: "structure",
										members: {
											Data: {
												locationName: "data"
											}
										}
									}
								}
							},
							Platform: {
								locationName: "platform"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ConversionTask: {
								shape: "Sdj",
								locationName: "conversionTask"
							}
						}
					}
				},
				ImportKeyPair: {
					input: {
						type: "structure",
						required: ["KeyName", "PublicKeyMaterial"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							KeyName: {
								locationName: "keyName"
							},
							PublicKeyMaterial: {
								locationName: "publicKeyMaterial",
								type: "blob"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							KeyFingerprint: {
								locationName: "keyFingerprint"
							},
							KeyName: {
								locationName: "keyName"
							}
						}
					}
				},
				ImportSnapshot: {
					input: {
						type: "structure",
						members: {
							ClientData: {
								shape: "Srl"
							},
							ClientToken: {},
							Description: {},
							DiskContainer: {
								type: "structure",
								members: {
									Description: {},
									Format: {},
									Url: {},
									UserBucket: {
										shape: "Sro"
									}
								}
							},
							DryRun: {
								type: "boolean"
							},
							RoleName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Description: {
								locationName: "description"
							},
							ImportTaskId: {
								locationName: "importTaskId"
							},
							SnapshotTaskDetail: {
								shape: "Shj",
								locationName: "snapshotTaskDetail"
							}
						}
					}
				},
				ImportVolume: {
					input: {
						type: "structure",
						required: ["AvailabilityZone", "Image", "Volume"],
						members: {
							AvailabilityZone: {
								locationName: "availabilityZone"
							},
							Description: {
								locationName: "description"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							Image: {
								shape: "Srt",
								locationName: "image"
							},
							Volume: {
								shape: "Sru",
								locationName: "volume"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ConversionTask: {
								shape: "Sdj",
								locationName: "conversionTask"
							}
						}
					}
				},
				ModifyFleet: {
					input: {
						type: "structure",
						required: ["FleetId", "TargetCapacitySpecification"],
						members: {
							DryRun: {
								type: "boolean"
							},
							ExcessCapacityTerminationPolicy: {},
							FleetId: {},
							TargetCapacitySpecification: {
								shape: "S51"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Return: {
								locationName: "return",
								type: "boolean"
							}
						}
					}
				},
				ModifyFpgaImageAttribute: {
					input: {
						type: "structure",
						required: ["FpgaImageId"],
						members: {
							DryRun: {
								type: "boolean"
							},
							FpgaImageId: {},
							Attribute: {},
							OperationType: {},
							UserIds: {
								shape: "Ss9",
								locationName: "UserId"
							},
							UserGroups: {
								shape: "Ssa",
								locationName: "UserGroup"
							},
							ProductCodes: {
								shape: "Ssb",
								locationName: "ProductCode"
							},
							LoadPermission: {
								type: "structure",
								members: {
									Add: {
										shape: "Ssd"
									},
									Remove: {
										shape: "Ssd"
									}
								}
							},
							Description: {},
							Name: {}
						}
					},
					output: {
						type: "structure",
						members: {
							FpgaImageAttribute: {
								shape: "Sfa",
								locationName: "fpgaImageAttribute"
							}
						}
					}
				},
				ModifyHosts: {
					input: {
						type: "structure",
						required: ["AutoPlacement", "HostIds"],
						members: {
							AutoPlacement: {
								locationName: "autoPlacement"
							},
							HostIds: {
								shape: "Sg5",
								locationName: "hostId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Successful: {
								shape: "Sz",
								locationName: "successful"
							},
							Unsuccessful: {
								shape: "Ssi",
								locationName: "unsuccessful"
							}
						}
					}
				},
				ModifyIdFormat: {
					input: {
						type: "structure",
						required: ["Resource", "UseLongIds"],
						members: {
							Resource: {},
							UseLongIds: {
								type: "boolean"
							}
						}
					}
				},
				ModifyIdentityIdFormat: {
					input: {
						type: "structure",
						required: ["PrincipalArn", "Resource", "UseLongIds"],
						members: {
							PrincipalArn: {
								locationName: "principalArn"
							},
							Resource: {
								locationName: "resource"
							},
							UseLongIds: {
								locationName: "useLongIds",
								type: "boolean"
							}
						}
					}
				},
				ModifyImageAttribute: {
					input: {
						type: "structure",
						required: ["ImageId"],
						members: {
							Attribute: {},
							Description: {
								shape: "S4i"
							},
							ImageId: {},
							LaunchPermission: {
								type: "structure",
								members: {
									Add: {
										shape: "Sgs"
									},
									Remove: {
										shape: "Sgs"
									}
								}
							},
							OperationType: {},
							ProductCodes: {
								shape: "Ssb",
								locationName: "ProductCode"
							},
							UserGroups: {
								shape: "Ssa",
								locationName: "UserGroup"
							},
							UserIds: {
								shape: "Ss9",
								locationName: "UserId"
							},
							Value: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					}
				},
				ModifyInstanceAttribute: {
					input: {
						type: "structure",
						required: ["InstanceId"],
						members: {
							SourceDestCheck: {
								shape: "Shq"
							},
							Attribute: {
								locationName: "attribute"
							},
							BlockDeviceMappings: {
								locationName: "blockDeviceMapping",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										DeviceName: {
											locationName: "deviceName"
										},
										Ebs: {
											locationName: "ebs",
											type: "structure",
											members: {
												DeleteOnTermination: {
													locationName: "deleteOnTermination",
													type: "boolean"
												},
												VolumeId: {
													locationName: "volumeId"
												}
											}
										},
										NoDevice: {
											locationName: "noDevice"
										},
										VirtualName: {
											locationName: "virtualName"
										}
									}
								}
							},
							DisableApiTermination: {
								shape: "Shq",
								locationName: "disableApiTermination"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							EbsOptimized: {
								shape: "Shq",
								locationName: "ebsOptimized"
							},
							EnaSupport: {
								shape: "Shq",
								locationName: "enaSupport"
							},
							Groups: {
								shape: "S1s",
								locationName: "GroupId"
							},
							InstanceId: {
								locationName: "instanceId"
							},
							InstanceInitiatedShutdownBehavior: {
								shape: "S4i",
								locationName: "instanceInitiatedShutdownBehavior"
							},
							InstanceType: {
								shape: "S4i",
								locationName: "instanceType"
							},
							Kernel: {
								shape: "S4i",
								locationName: "kernel"
							},
							Ramdisk: {
								shape: "S4i",
								locationName: "ramdisk"
							},
							SriovNetSupport: {
								shape: "S4i",
								locationName: "sriovNetSupport"
							},
							UserData: {
								locationName: "userData",
								type: "structure",
								members: {
									Value: {
										locationName: "value",
										type: "blob"
									}
								}
							},
							Value: {
								locationName: "value"
							}
						}
					}
				},
				ModifyInstanceCreditSpecification: {
					input: {
						type: "structure",
						required: ["InstanceCreditSpecifications"],
						members: {
							DryRun: {
								type: "boolean"
							},
							ClientToken: {},
							InstanceCreditSpecifications: {
								locationName: "InstanceCreditSpecification",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										InstanceId: {},
										CpuCredits: {}
									}
								}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							SuccessfulInstanceCreditSpecifications: {
								locationName: "successfulInstanceCreditSpecificationSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										InstanceId: {
											locationName: "instanceId"
										}
									}
								}
							},
							UnsuccessfulInstanceCreditSpecifications: {
								locationName: "unsuccessfulInstanceCreditSpecificationSet",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										InstanceId: {
											locationName: "instanceId"
										},
										Error: {
											locationName: "error",
											type: "structure",
											members: {
												Code: {
													locationName: "code"
												},
												Message: {
													locationName: "message"
												}
											}
										}
									}
								}
							}
						}
					}
				},
				ModifyInstancePlacement: {
					input: {
						type: "structure",
						required: ["InstanceId"],
						members: {
							Affinity: {
								locationName: "affinity"
							},
							GroupName: {},
							HostId: {
								locationName: "hostId"
							},
							InstanceId: {
								locationName: "instanceId"
							},
							Tenancy: {
								locationName: "tenancy"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Return: {
								locationName: "return",
								type: "boolean"
							}
						}
					}
				},
				ModifyLaunchTemplate: {
					input: {
						type: "structure",
						members: {
							DryRun: {
								type: "boolean"
							},
							ClientToken: {},
							LaunchTemplateId: {},
							LaunchTemplateName: {},
							DefaultVersion: {
								locationName: "SetDefaultVersion"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							LaunchTemplate: {
								shape: "S6u",
								locationName: "launchTemplate"
							}
						}
					}
				},
				ModifyNetworkInterfaceAttribute: {
					input: {
						type: "structure",
						required: ["NetworkInterfaceId"],
						members: {
							Attachment: {
								locationName: "attachment",
								type: "structure",
								members: {
									AttachmentId: {
										locationName: "attachmentId"
									},
									DeleteOnTermination: {
										locationName: "deleteOnTermination",
										type: "boolean"
									}
								}
							},
							Description: {
								shape: "S4i",
								locationName: "description"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							Groups: {
								shape: "S6a",
								locationName: "SecurityGroupId"
							},
							NetworkInterfaceId: {
								locationName: "networkInterfaceId"
							},
							SourceDestCheck: {
								shape: "Shq",
								locationName: "sourceDestCheck"
							}
						}
					}
				},
				ModifyReservedInstances: {
					input: {
						type: "structure",
						required: ["ReservedInstancesIds", "TargetConfigurations"],
						members: {
							ReservedInstancesIds: {
								shape: "Skg",
								locationName: "ReservedInstancesId"
							},
							ClientToken: {
								locationName: "clientToken"
							},
							TargetConfigurations: {
								locationName: "ReservedInstancesConfigurationSetItemType",
								type: "list",
								member: {
									shape: "Sl1",
									locationName: "item"
								}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ReservedInstancesModificationId: {
								locationName: "reservedInstancesModificationId"
							}
						}
					}
				},
				ModifySnapshotAttribute: {
					input: {
						type: "structure",
						required: ["SnapshotId"],
						members: {
							Attribute: {},
							CreateVolumePermission: {
								type: "structure",
								members: {
									Add: {
										shape: "Sm6"
									},
									Remove: {
										shape: "Sm6"
									}
								}
							},
							GroupNames: {
								shape: "Slz",
								locationName: "UserGroup"
							},
							OperationType: {},
							SnapshotId: {},
							UserIds: {
								shape: "Ss9",
								locationName: "UserId"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					}
				},
				ModifySpotFleetRequest: {
					input: {
						type: "structure",
						required: ["SpotFleetRequestId"],
						members: {
							ExcessCapacityTerminationPolicy: {
								locationName: "excessCapacityTerminationPolicy"
							},
							SpotFleetRequestId: {
								locationName: "spotFleetRequestId"
							},
							TargetCapacity: {
								locationName: "targetCapacity",
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Return: {
								locationName: "return",
								type: "boolean"
							}
						}
					}
				},
				ModifySubnetAttribute: {
					input: {
						type: "structure",
						required: ["SubnetId"],
						members: {
							AssignIpv6AddressOnCreation: {
								shape: "Shq"
							},
							MapPublicIpOnLaunch: {
								shape: "Shq"
							},
							SubnetId: {
								locationName: "subnetId"
							}
						}
					}
				},
				ModifyVolume: {
					input: {
						type: "structure",
						required: ["VolumeId"],
						members: {
							DryRun: {
								type: "boolean"
							},
							VolumeId: {},
							Size: {
								type: "integer"
							},
							VolumeType: {},
							Iops: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							VolumeModification: {
								shape: "Sov",
								locationName: "volumeModification"
							}
						}
					}
				},
				ModifyVolumeAttribute: {
					input: {
						type: "structure",
						required: ["VolumeId"],
						members: {
							AutoEnableIO: {
								shape: "Shq"
							},
							VolumeId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					}
				},
				ModifyVpcAttribute: {
					input: {
						type: "structure",
						required: ["VpcId"],
						members: {
							EnableDnsHostnames: {
								shape: "Shq"
							},
							EnableDnsSupport: {
								shape: "Shq"
							},
							VpcId: {
								locationName: "vpcId"
							}
						}
					}
				},
				ModifyVpcEndpoint: {
					input: {
						type: "structure",
						required: ["VpcEndpointId"],
						members: {
							DryRun: {
								type: "boolean"
							},
							VpcEndpointId: {},
							ResetPolicy: {
								type: "boolean"
							},
							PolicyDocument: {},
							AddRouteTableIds: {
								shape: "Sa",
								locationName: "AddRouteTableId"
							},
							RemoveRouteTableIds: {
								shape: "Sa",
								locationName: "RemoveRouteTableId"
							},
							AddSubnetIds: {
								shape: "Sa",
								locationName: "AddSubnetId"
							},
							RemoveSubnetIds: {
								shape: "Sa",
								locationName: "RemoveSubnetId"
							},
							AddSecurityGroupIds: {
								shape: "Sa",
								locationName: "AddSecurityGroupId"
							},
							RemoveSecurityGroupIds: {
								shape: "Sa",
								locationName: "RemoveSecurityGroupId"
							},
							PrivateDnsEnabled: {
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Return: {
								locationName: "return",
								type: "boolean"
							}
						}
					}
				},
				ModifyVpcEndpointConnectionNotification: {
					input: {
						type: "structure",
						required: ["ConnectionNotificationId"],
						members: {
							DryRun: {
								type: "boolean"
							},
							ConnectionNotificationId: {},
							ConnectionNotificationArn: {},
							ConnectionEvents: {
								shape: "Sa"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ReturnValue: {
								locationName: "return",
								type: "boolean"
							}
						}
					}
				},
				ModifyVpcEndpointServiceConfiguration: {
					input: {
						type: "structure",
						required: ["ServiceId"],
						members: {
							DryRun: {
								type: "boolean"
							},
							ServiceId: {},
							AcceptanceRequired: {
								type: "boolean"
							},
							AddNetworkLoadBalancerArns: {
								shape: "Sa",
								locationName: "AddNetworkLoadBalancerArn"
							},
							RemoveNetworkLoadBalancerArns: {
								shape: "Sa",
								locationName: "RemoveNetworkLoadBalancerArn"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Return: {
								locationName: "return",
								type: "boolean"
							}
						}
					}
				},
				ModifyVpcEndpointServicePermissions: {
					input: {
						type: "structure",
						required: ["ServiceId"],
						members: {
							DryRun: {
								type: "boolean"
							},
							ServiceId: {},
							AddAllowedPrincipals: {
								shape: "Sa"
							},
							RemoveAllowedPrincipals: {
								shape: "Sa"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ReturnValue: {
								locationName: "return",
								type: "boolean"
							}
						}
					}
				},
				ModifyVpcPeeringConnectionOptions: {
					input: {
						type: "structure",
						required: ["VpcPeeringConnectionId"],
						members: {
							AccepterPeeringConnectionOptions: {
								shape: "Stv"
							},
							DryRun: {
								type: "boolean"
							},
							RequesterPeeringConnectionOptions: {
								shape: "Stv"
							},
							VpcPeeringConnectionId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							AccepterPeeringConnectionOptions: {
								shape: "Stx",
								locationName: "accepterPeeringConnectionOptions"
							},
							RequesterPeeringConnectionOptions: {
								shape: "Stx",
								locationName: "requesterPeeringConnectionOptions"
							}
						}
					}
				},
				ModifyVpcTenancy: {
					input: {
						type: "structure",
						required: ["VpcId", "InstanceTenancy"],
						members: {
							VpcId: {},
							InstanceTenancy: {},
							DryRun: {
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ReturnValue: {
								locationName: "return",
								type: "boolean"
							}
						}
					}
				},
				MonitorInstances: {
					input: {
						type: "structure",
						required: ["InstanceIds"],
						members: {
							InstanceIds: {
								shape: "Sdb",
								locationName: "InstanceId"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							InstanceMonitorings: {
								shape: "Su3",
								locationName: "instancesSet"
							}
						}
					}
				},
				MoveAddressToVpc: {
					input: {
						type: "structure",
						required: ["PublicIp"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							PublicIp: {
								locationName: "publicIp"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							AllocationId: {
								locationName: "allocationId"
							},
							Status: {
								locationName: "status"
							}
						}
					}
				},
				PurchaseHostReservation: {
					input: {
						type: "structure",
						required: ["HostIdSet", "OfferingId"],
						members: {
							ClientToken: {},
							CurrencyCode: {},
							HostIdSet: {
								shape: "Sr4"
							},
							LimitPrice: {},
							OfferingId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							ClientToken: {
								locationName: "clientToken"
							},
							CurrencyCode: {
								locationName: "currencyCode"
							},
							Purchase: {
								shape: "Sr6",
								locationName: "purchase"
							},
							TotalHourlyPrice: {
								locationName: "totalHourlyPrice"
							},
							TotalUpfrontPrice: {
								locationName: "totalUpfrontPrice"
							}
						}
					}
				},
				PurchaseReservedInstancesOffering: {
					input: {
						type: "structure",
						required: ["InstanceCount", "ReservedInstancesOfferingId"],
						members: {
							InstanceCount: {
								type: "integer"
							},
							ReservedInstancesOfferingId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							LimitPrice: {
								locationName: "limitPrice",
								type: "structure",
								members: {
									Amount: {
										locationName: "amount",
										type: "double"
									},
									CurrencyCode: {
										locationName: "currencyCode"
									}
								}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ReservedInstancesId: {
								locationName: "reservedInstancesId"
							}
						}
					}
				},
				PurchaseScheduledInstances: {
					input: {
						type: "structure",
						required: ["PurchaseRequests"],
						members: {
							ClientToken: {
								idempotencyToken: !0
							},
							DryRun: {
								type: "boolean"
							},
							PurchaseRequests: {
								locationName: "PurchaseRequest",
								type: "list",
								member: {
									locationName: "PurchaseRequest",
									type: "structure",
									required: ["InstanceCount", "PurchaseToken"],
									members: {
										InstanceCount: {
											type: "integer"
										},
										PurchaseToken: {}
									}
								}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ScheduledInstanceSet: {
								locationName: "scheduledInstanceSet",
								type: "list",
								member: {
									shape: "Sls",
									locationName: "item"
								}
							}
						}
					}
				},
				RebootInstances: {
					input: {
						type: "structure",
						required: ["InstanceIds"],
						members: {
							InstanceIds: {
								shape: "Sdb",
								locationName: "InstanceId"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					}
				},
				RegisterImage: {
					input: {
						type: "structure",
						required: ["Name"],
						members: {
							ImageLocation: {},
							Architecture: {
								locationName: "architecture"
							},
							BlockDeviceMappings: {
								shape: "S5h",
								locationName: "BlockDeviceMapping"
							},
							Description: {
								locationName: "description"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							EnaSupport: {
								locationName: "enaSupport",
								type: "boolean"
							},
							KernelId: {
								locationName: "kernelId"
							},
							Name: {
								locationName: "name"
							},
							BillingProducts: {
								locationName: "BillingProduct",
								type: "list",
								member: {
									locationName: "item"
								}
							},
							RamdiskId: {
								locationName: "ramdiskId"
							},
							RootDeviceName: {
								locationName: "rootDeviceName"
							},
							SriovNetSupport: {
								locationName: "sriovNetSupport"
							},
							VirtualizationType: {
								locationName: "virtualizationType"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							ImageId: {
								locationName: "imageId"
							}
						}
					}
				},
				RejectVpcEndpointConnections: {
					input: {
						type: "structure",
						required: ["ServiceId", "VpcEndpointIds"],
						members: {
							DryRun: {
								type: "boolean"
							},
							ServiceId: {},
							VpcEndpointIds: {
								shape: "Sa",
								locationName: "VpcEndpointId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Unsuccessful: {
								shape: "Sc",
								locationName: "unsuccessful"
							}
						}
					}
				},
				RejectVpcPeeringConnection: {
					input: {
						type: "structure",
						required: ["VpcPeeringConnectionId"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							VpcPeeringConnectionId: {
								locationName: "vpcPeeringConnectionId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Return: {
								locationName: "return",
								type: "boolean"
							}
						}
					}
				},
				ReleaseAddress: {
					input: {
						type: "structure",
						members: {
							AllocationId: {},
							PublicIp: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					}
				},
				ReleaseHosts: {
					input: {
						type: "structure",
						required: ["HostIds"],
						members: {
							HostIds: {
								shape: "Sg5",
								locationName: "hostId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Successful: {
								shape: "Sz",
								locationName: "successful"
							},
							Unsuccessful: {
								shape: "Ssi",
								locationName: "unsuccessful"
							}
						}
					}
				},
				ReplaceIamInstanceProfileAssociation: {
					input: {
						type: "structure",
						required: ["IamInstanceProfile", "AssociationId"],
						members: {
							IamInstanceProfile: {
								shape: "S19"
							},
							AssociationId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							IamInstanceProfileAssociation: {
								shape: "S1b",
								locationName: "iamInstanceProfileAssociation"
							}
						}
					}
				},
				ReplaceNetworkAclAssociation: {
					input: {
						type: "structure",
						required: ["AssociationId", "NetworkAclId"],
						members: {
							AssociationId: {
								locationName: "associationId"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							NetworkAclId: {
								locationName: "networkAclId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							NewAssociationId: {
								locationName: "newAssociationId"
							}
						}
					}
				},
				ReplaceNetworkAclEntry: {
					input: {
						type: "structure",
						required: ["Egress", "NetworkAclId", "Protocol", "RuleAction", "RuleNumber"],
						members: {
							CidrBlock: {
								locationName: "cidrBlock"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							Egress: {
								locationName: "egress",
								type: "boolean"
							},
							IcmpTypeCode: {
								shape: "S7u",
								locationName: "Icmp"
							},
							Ipv6CidrBlock: {
								locationName: "ipv6CidrBlock"
							},
							NetworkAclId: {
								locationName: "networkAclId"
							},
							PortRange: {
								shape: "S7v",
								locationName: "portRange"
							},
							Protocol: {
								locationName: "protocol"
							},
							RuleAction: {
								locationName: "ruleAction"
							},
							RuleNumber: {
								locationName: "ruleNumber",
								type: "integer"
							}
						}
					}
				},
				ReplaceRoute: {
					input: {
						type: "structure",
						required: ["RouteTableId"],
						members: {
							DestinationCidrBlock: {
								locationName: "destinationCidrBlock"
							},
							DestinationIpv6CidrBlock: {
								locationName: "destinationIpv6CidrBlock"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							EgressOnlyInternetGatewayId: {
								locationName: "egressOnlyInternetGatewayId"
							},
							GatewayId: {
								locationName: "gatewayId"
							},
							InstanceId: {
								locationName: "instanceId"
							},
							NatGatewayId: {
								locationName: "natGatewayId"
							},
							NetworkInterfaceId: {
								locationName: "networkInterfaceId"
							},
							RouteTableId: {
								locationName: "routeTableId"
							},
							VpcPeeringConnectionId: {
								locationName: "vpcPeeringConnectionId"
							}
						}
					}
				},
				ReplaceRouteTableAssociation: {
					input: {
						type: "structure",
						required: ["AssociationId", "RouteTableId"],
						members: {
							AssociationId: {
								locationName: "associationId"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							RouteTableId: {
								locationName: "routeTableId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							NewAssociationId: {
								locationName: "newAssociationId"
							}
						}
					}
				},
				ReportInstanceStatus: {
					input: {
						type: "structure",
						required: ["Instances", "ReasonCodes", "Status"],
						members: {
							Description: {
								locationName: "description"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							EndTime: {
								locationName: "endTime",
								type: "timestamp"
							},
							Instances: {
								shape: "Sdb",
								locationName: "instanceId"
							},
							ReasonCodes: {
								locationName: "reasonCode",
								type: "list",
								member: {
									locationName: "item"
								}
							},
							StartTime: {
								locationName: "startTime",
								type: "timestamp"
							},
							Status: {
								locationName: "status"
							}
						}
					}
				},
				RequestSpotFleet: {
					input: {
						type: "structure",
						required: ["SpotFleetRequestConfig"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							SpotFleetRequestConfig: {
								shape: "Smr",
								locationName: "spotFleetRequestConfig"
							}
						}
					},
					output: {
						type: "structure",
						required: ["SpotFleetRequestId"],
						members: {
							SpotFleetRequestId: {
								locationName: "spotFleetRequestId"
							}
						}
					}
				},
				RequestSpotInstances: {
					input: {
						type: "structure",
						members: {
							AvailabilityZoneGroup: {
								locationName: "availabilityZoneGroup"
							},
							BlockDurationMinutes: {
								locationName: "blockDurationMinutes",
								type: "integer"
							},
							ClientToken: {
								locationName: "clientToken"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							InstanceCount: {
								locationName: "instanceCount",
								type: "integer"
							},
							LaunchGroup: {
								locationName: "launchGroup"
							},
							LaunchSpecification: {
								type: "structure",
								members: {
									SecurityGroupIds: {
										shape: "Sa",
										locationName: "SecurityGroupId"
									},
									SecurityGroups: {
										shape: "Sa",
										locationName: "SecurityGroup"
									},
									AddressingType: {
										locationName: "addressingType"
									},
									BlockDeviceMappings: {
										shape: "Sgr",
										locationName: "blockDeviceMapping"
									},
									EbsOptimized: {
										locationName: "ebsOptimized",
										type: "boolean"
									},
									IamInstanceProfile: {
										shape: "S19",
										locationName: "iamInstanceProfile"
									},
									ImageId: {
										locationName: "imageId"
									},
									InstanceType: {
										locationName: "instanceType"
									},
									KernelId: {
										locationName: "kernelId"
									},
									KeyName: {
										locationName: "keyName"
									},
									Monitoring: {
										shape: "Sni",
										locationName: "monitoring"
									},
									NetworkInterfaces: {
										shape: "Smx",
										locationName: "NetworkInterface"
									},
									Placement: {
										shape: "Smz",
										locationName: "placement"
									},
									RamdiskId: {
										locationName: "ramdiskId"
									},
									SubnetId: {
										locationName: "subnetId"
									},
									UserData: {
										locationName: "userData"
									}
								}
							},
							SpotPrice: {
								locationName: "spotPrice"
							},
							Type: {
								locationName: "type"
							},
							ValidFrom: {
								locationName: "validFrom",
								type: "timestamp"
							},
							ValidUntil: {
								locationName: "validUntil",
								type: "timestamp"
							},
							InstanceInterruptionBehavior: {}
						}
					},
					output: {
						type: "structure",
						members: {
							SpotInstanceRequests: {
								shape: "Snf",
								locationName: "spotInstanceRequestSet"
							}
						}
					}
				},
				ResetFpgaImageAttribute: {
					input: {
						type: "structure",
						required: ["FpgaImageId"],
						members: {
							DryRun: {
								type: "boolean"
							},
							FpgaImageId: {},
							Attribute: {}
						}
					},
					output: {
						type: "structure",
						members: {
							Return: {
								locationName: "return",
								type: "boolean"
							}
						}
					}
				},
				ResetImageAttribute: {
					input: {
						type: "structure",
						required: ["Attribute", "ImageId"],
						members: {
							Attribute: {},
							ImageId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					}
				},
				ResetInstanceAttribute: {
					input: {
						type: "structure",
						required: ["Attribute", "InstanceId"],
						members: {
							Attribute: {
								locationName: "attribute"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							InstanceId: {
								locationName: "instanceId"
							}
						}
					}
				},
				ResetNetworkInterfaceAttribute: {
					input: {
						type: "structure",
						required: ["NetworkInterfaceId"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							NetworkInterfaceId: {
								locationName: "networkInterfaceId"
							},
							SourceDestCheck: {
								locationName: "sourceDestCheck"
							}
						}
					}
				},
				ResetSnapshotAttribute: {
					input: {
						type: "structure",
						required: ["Attribute", "SnapshotId"],
						members: {
							Attribute: {},
							SnapshotId: {},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					}
				},
				RestoreAddressToClassic: {
					input: {
						type: "structure",
						required: ["PublicIp"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							PublicIp: {
								locationName: "publicIp"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							PublicIp: {
								locationName: "publicIp"
							},
							Status: {
								locationName: "status"
							}
						}
					}
				},
				RevokeSecurityGroupEgress: {
					input: {
						type: "structure",
						required: ["GroupId"],
						members: {
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							GroupId: {
								locationName: "groupId"
							},
							IpPermissions: {
								shape: "S25",
								locationName: "ipPermissions"
							},
							CidrIp: {
								locationName: "cidrIp"
							},
							FromPort: {
								locationName: "fromPort",
								type: "integer"
							},
							IpProtocol: {
								locationName: "ipProtocol"
							},
							ToPort: {
								locationName: "toPort",
								type: "integer"
							},
							SourceSecurityGroupName: {
								locationName: "sourceSecurityGroupName"
							},
							SourceSecurityGroupOwnerId: {
								locationName: "sourceSecurityGroupOwnerId"
							}
						}
					}
				},
				RevokeSecurityGroupIngress: {
					input: {
						type: "structure",
						members: {
							CidrIp: {},
							FromPort: {
								type: "integer"
							},
							GroupId: {},
							GroupName: {},
							IpPermissions: {
								shape: "S25"
							},
							IpProtocol: {},
							SourceSecurityGroupName: {},
							SourceSecurityGroupOwnerId: {},
							ToPort: {
								type: "integer"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					}
				},
				RunInstances: {
					input: {
						type: "structure",
						required: ["MaxCount", "MinCount"],
						members: {
							BlockDeviceMappings: {
								shape: "S5h",
								locationName: "BlockDeviceMapping"
							},
							ImageId: {},
							InstanceType: {},
							Ipv6AddressCount: {
								type: "integer"
							},
							Ipv6Addresses: {
								shape: "S75",
								locationName: "Ipv6Address"
							},
							KernelId: {},
							KeyName: {},
							MaxCount: {
								type: "integer"
							},
							MinCount: {
								type: "integer"
							},
							Monitoring: {
								shape: "Sni"
							},
							Placement: {
								shape: "Sii"
							},
							RamdiskId: {},
							SecurityGroupIds: {
								shape: "S6a",
								locationName: "SecurityGroupId"
							},
							SecurityGroups: {
								shape: "S6m",
								locationName: "SecurityGroup"
							},
							SubnetId: {},
							UserData: {},
							AdditionalInfo: {
								locationName: "additionalInfo"
							},
							ClientToken: {
								locationName: "clientToken"
							},
							DisableApiTermination: {
								locationName: "disableApiTermination",
								type: "boolean"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							EbsOptimized: {
								locationName: "ebsOptimized",
								type: "boolean"
							},
							IamInstanceProfile: {
								shape: "S19",
								locationName: "iamInstanceProfile"
							},
							InstanceInitiatedShutdownBehavior: {
								locationName: "instanceInitiatedShutdownBehavior"
							},
							NetworkInterfaces: {
								shape: "Smx",
								locationName: "networkInterface"
							},
							PrivateIpAddress: {
								locationName: "privateIpAddress"
							},
							ElasticGpuSpecification: {
								type: "list",
								member: {
									shape: "S6l",
									locationName: "item"
								}
							},
							TagSpecifications: {
								shape: "S54",
								locationName: "TagSpecification"
							},
							LaunchTemplate: {
								type: "structure",
								members: {
									LaunchTemplateId: {},
									LaunchTemplateName: {},
									Version: {}
								}
							},
							InstanceMarketOptions: {
								type: "structure",
								members: {
									MarketType: {},
									SpotOptions: {
										type: "structure",
										members: {
											MaxPrice: {},
											SpotInstanceType: {},
											BlockDurationMinutes: {
												type: "integer"
											},
											ValidUntil: {
												type: "timestamp"
											},
											InstanceInterruptionBehavior: {}
										}
									}
								}
							},
							CreditSpecification: {
								shape: "S6s"
							},
							CpuOptions: {
								type: "structure",
								members: {
									CoreCount: {
										type: "integer"
									},
									ThreadsPerCore: {
										type: "integer"
									}
								}
							}
						}
					},
					output: {
						shape: "Sid"
					}
				},
				RunScheduledInstances: {
					input: {
						type: "structure",
						required: ["LaunchSpecification", "ScheduledInstanceId"],
						members: {
							ClientToken: {
								idempotencyToken: !0
							},
							DryRun: {
								type: "boolean"
							},
							InstanceCount: {
								type: "integer"
							},
							LaunchSpecification: {
								type: "structure",
								required: ["ImageId"],
								members: {
									BlockDeviceMappings: {
										locationName: "BlockDeviceMapping",
										type: "list",
										member: {
											locationName: "BlockDeviceMapping",
											type: "structure",
											members: {
												DeviceName: {},
												Ebs: {
													type: "structure",
													members: {
														DeleteOnTermination: {
															type: "boolean"
														},
														Encrypted: {
															type: "boolean"
														},
														Iops: {
															type: "integer"
														},
														SnapshotId: {},
														VolumeSize: {
															type: "integer"
														},
														VolumeType: {}
													}
												},
												NoDevice: {},
												VirtualName: {}
											}
										}
									},
									EbsOptimized: {
										type: "boolean"
									},
									IamInstanceProfile: {
										type: "structure",
										members: {
											Arn: {},
											Name: {}
										}
									},
									ImageId: {},
									InstanceType: {},
									KernelId: {},
									KeyName: {},
									Monitoring: {
										type: "structure",
										members: {
											Enabled: {
												type: "boolean"
											}
										}
									},
									NetworkInterfaces: {
										locationName: "NetworkInterface",
										type: "list",
										member: {
											locationName: "NetworkInterface",
											type: "structure",
											members: {
												AssociatePublicIpAddress: {
													type: "boolean"
												},
												DeleteOnTermination: {
													type: "boolean"
												},
												Description: {},
												DeviceIndex: {
													type: "integer"
												},
												Groups: {
													shape: "Sw1",
													locationName: "Group"
												},
												Ipv6AddressCount: {
													type: "integer"
												},
												Ipv6Addresses: {
													locationName: "Ipv6Address",
													type: "list",
													member: {
														locationName: "Ipv6Address",
														type: "structure",
														members: {
															Ipv6Address: {}
														}
													}
												},
												NetworkInterfaceId: {},
												PrivateIpAddress: {},
												PrivateIpAddressConfigs: {
													locationName: "PrivateIpAddressConfig",
													type: "list",
													member: {
														locationName: "PrivateIpAddressConfigSet",
														type: "structure",
														members: {
															Primary: {
																type: "boolean"
															},
															PrivateIpAddress: {}
														}
													}
												},
												SecondaryPrivateIpAddressCount: {
													type: "integer"
												},
												SubnetId: {}
											}
										}
									},
									Placement: {
										type: "structure",
										members: {
											AvailabilityZone: {},
											GroupName: {}
										}
									},
									RamdiskId: {},
									SecurityGroupIds: {
										shape: "Sw1",
										locationName: "SecurityGroupId"
									},
									SubnetId: {},
									UserData: {}
								}
							},
							ScheduledInstanceId: {}
						}
					},
					output: {
						type: "structure",
						members: {
							InstanceIdSet: {
								locationName: "instanceIdSet",
								type: "list",
								member: {
									locationName: "item"
								}
							}
						}
					}
				},
				StartInstances: {
					input: {
						type: "structure",
						required: ["InstanceIds"],
						members: {
							InstanceIds: {
								shape: "Sdb",
								locationName: "InstanceId"
							},
							AdditionalInfo: {
								locationName: "additionalInfo"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							StartingInstances: {
								shape: "Swc",
								locationName: "instancesSet"
							}
						}
					}
				},
				StopInstances: {
					input: {
						type: "structure",
						required: ["InstanceIds"],
						members: {
							InstanceIds: {
								shape: "Sdb",
								locationName: "InstanceId"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							},
							Force: {
								locationName: "force",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							StoppingInstances: {
								shape: "Swc",
								locationName: "instancesSet"
							}
						}
					}
				},
				TerminateInstances: {
					input: {
						type: "structure",
						required: ["InstanceIds"],
						members: {
							InstanceIds: {
								shape: "Sdb",
								locationName: "InstanceId"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							TerminatingInstances: {
								shape: "Swc",
								locationName: "instancesSet"
							}
						}
					}
				},
				UnassignIpv6Addresses: {
					input: {
						type: "structure",
						required: ["Ipv6Addresses", "NetworkInterfaceId"],
						members: {
							Ipv6Addresses: {
								shape: "S11",
								locationName: "ipv6Addresses"
							},
							NetworkInterfaceId: {
								locationName: "networkInterfaceId"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							NetworkInterfaceId: {
								locationName: "networkInterfaceId"
							},
							UnassignedIpv6Addresses: {
								shape: "S11",
								locationName: "unassignedIpv6Addresses"
							}
						}
					}
				},
				UnassignPrivateIpAddresses: {
					input: {
						type: "structure",
						required: ["NetworkInterfaceId", "PrivateIpAddresses"],
						members: {
							NetworkInterfaceId: {
								locationName: "networkInterfaceId"
							},
							PrivateIpAddresses: {
								shape: "S14",
								locationName: "privateIpAddress"
							}
						}
					}
				},
				UnmonitorInstances: {
					input: {
						type: "structure",
						required: ["InstanceIds"],
						members: {
							InstanceIds: {
								shape: "Sdb",
								locationName: "InstanceId"
							},
							DryRun: {
								locationName: "dryRun",
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							InstanceMonitorings: {
								shape: "Su3",
								locationName: "instancesSet"
							}
						}
					}
				},
				UpdateSecurityGroupRuleDescriptionsEgress: {
					input: {
						type: "structure",
						required: ["IpPermissions"],
						members: {
							DryRun: {
								type: "boolean"
							},
							GroupId: {},
							GroupName: {},
							IpPermissions: {
								shape: "S25"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Return: {
								locationName: "return",
								type: "boolean"
							}
						}
					}
				},
				UpdateSecurityGroupRuleDescriptionsIngress: {
					input: {
						type: "structure",
						required: ["IpPermissions"],
						members: {
							DryRun: {
								type: "boolean"
							},
							GroupId: {},
							GroupName: {},
							IpPermissions: {
								shape: "S25"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							Return: {
								locationName: "return",
								type: "boolean"
							}
						}
					}
				}
			},
			shapes: {
				S3: {
					type: "list",
					member: {
						locationName: "ReservedInstanceId"
					}
				},
				S5: {
					type: "list",
					member: {
						locationName: "TargetConfigurationRequest",
						type: "structure",
						required: ["OfferingId"],
						members: {
							InstanceCount: {
								type: "integer"
							},
							OfferingId: {}
						}
					}
				},
				Sa: {
					type: "list",
					member: {
						locationName: "item"
					}
				},
				Sc: {
					type: "list",
					member: {
						shape: "Sd",
						locationName: "item"
					}
				},
				Sd: {
					type: "structure",
					required: ["Error"],
					members: {
						Error: {
							locationName: "error",
							type: "structure",
							required: ["Code", "Message"],
							members: {
								Code: {
									locationName: "code"
								},
								Message: {
									locationName: "message"
								}
							}
						},
						ResourceId: {
							locationName: "resourceId"
						}
					}
				},
				Sh: {
					type: "structure",
					members: {
						AccepterVpcInfo: {
							shape: "Si",
							locationName: "accepterVpcInfo"
						},
						ExpirationTime: {
							locationName: "expirationTime",
							type: "timestamp"
						},
						RequesterVpcInfo: {
							shape: "Si",
							locationName: "requesterVpcInfo"
						},
						Status: {
							locationName: "status",
							type: "structure",
							members: {
								Code: {
									locationName: "code"
								},
								Message: {
									locationName: "message"
								}
							}
						},
						Tags: {
							shape: "Sr",
							locationName: "tagSet"
						},
						VpcPeeringConnectionId: {
							locationName: "vpcPeeringConnectionId"
						}
					}
				},
				Si: {
					type: "structure",
					members: {
						CidrBlock: {
							locationName: "cidrBlock"
						},
						Ipv6CidrBlockSet: {
							locationName: "ipv6CidrBlockSet",
							type: "list",
							member: {
								locationName: "item",
								type: "structure",
								members: {
									Ipv6CidrBlock: {
										locationName: "ipv6CidrBlock"
									}
								}
							}
						},
						CidrBlockSet: {
							locationName: "cidrBlockSet",
							type: "list",
							member: {
								locationName: "item",
								type: "structure",
								members: {
									CidrBlock: {
										locationName: "cidrBlock"
									}
								}
							}
						},
						OwnerId: {
							locationName: "ownerId"
						},
						PeeringOptions: {
							locationName: "peeringOptions",
							type: "structure",
							members: {
								AllowDnsResolutionFromRemoteVpc: {
									locationName: "allowDnsResolutionFromRemoteVpc",
									type: "boolean"
								},
								AllowEgressFromLocalClassicLinkToRemoteVpc: {
									locationName: "allowEgressFromLocalClassicLinkToRemoteVpc",
									type: "boolean"
								},
								AllowEgressFromLocalVpcToRemoteClassicLink: {
									locationName: "allowEgressFromLocalVpcToRemoteClassicLink",
									type: "boolean"
								}
							}
						},
						VpcId: {
							locationName: "vpcId"
						},
						Region: {
							locationName: "region"
						}
					}
				},
				Sr: {
					type: "list",
					member: {
						locationName: "item",
						type: "structure",
						members: {
							Key: {
								locationName: "key"
							},
							Value: {
								locationName: "value"
							}
						}
					}
				},
				Sz: {
					type: "list",
					member: {
						locationName: "item"
					}
				},
				S11: {
					type: "list",
					member: {
						locationName: "item"
					}
				},
				S14: {
					type: "list",
					member: {
						locationName: "PrivateIpAddress"
					}
				},
				S19: {
					type: "structure",
					members: {
						Arn: {
							locationName: "arn"
						},
						Name: {
							locationName: "name"
						}
					}
				},
				S1b: {
					type: "structure",
					members: {
						AssociationId: {
							locationName: "associationId"
						},
						InstanceId: {
							locationName: "instanceId"
						},
						IamInstanceProfile: {
							shape: "S1c",
							locationName: "iamInstanceProfile"
						},
						State: {
							locationName: "state"
						},
						Timestamp: {
							locationName: "timestamp",
							type: "timestamp"
						}
					}
				},
				S1c: {
					type: "structure",
					members: {
						Arn: {
							locationName: "arn"
						},
						Id: {
							locationName: "id"
						}
					}
				},
				S1i: {
					type: "structure",
					members: {
						AssociationId: {
							locationName: "associationId"
						},
						Ipv6CidrBlock: {
							locationName: "ipv6CidrBlock"
						},
						Ipv6CidrBlockState: {
							locationName: "ipv6CidrBlockState",
							type: "structure",
							members: {
								State: {
									locationName: "state"
								},
								StatusMessage: {
									locationName: "statusMessage"
								}
							}
						}
					}
				},
				S1n: {
					type: "structure",
					members: {
						AssociationId: {
							locationName: "associationId"
						},
						Ipv6CidrBlock: {
							locationName: "ipv6CidrBlock"
						},
						Ipv6CidrBlockState: {
							shape: "S1o",
							locationName: "ipv6CidrBlockState"
						}
					}
				},
				S1o: {
					type: "structure",
					members: {
						State: {
							locationName: "state"
						},
						StatusMessage: {
							locationName: "statusMessage"
						}
					}
				},
				S1q: {
					type: "structure",
					members: {
						AssociationId: {
							locationName: "associationId"
						},
						CidrBlock: {
							locationName: "cidrBlock"
						},
						CidrBlockState: {
							shape: "S1o",
							locationName: "cidrBlockState"
						}
					}
				},
				S1s: {
					type: "list",
					member: {
						locationName: "groupId"
					}
				},
				S1y: {
					type: "structure",
					members: {
						AttachTime: {
							locationName: "attachTime",
							type: "timestamp"
						},
						Device: {
							locationName: "device"
						},
						InstanceId: {
							locationName: "instanceId"
						},
						State: {
							locationName: "status"
						},
						VolumeId: {
							locationName: "volumeId"
						},
						DeleteOnTermination: {
							locationName: "deleteOnTermination",
							type: "boolean"
						}
					}
				},
				S22: {
					type: "structure",
					members: {
						State: {
							locationName: "state"
						},
						VpcId: {
							locationName: "vpcId"
						}
					}
				},
				S25: {
					type: "list",
					member: {
						locationName: "item",
						type: "structure",
						members: {
							FromPort: {
								locationName: "fromPort",
								type: "integer"
							},
							IpProtocol: {
								locationName: "ipProtocol"
							},
							IpRanges: {
								locationName: "ipRanges",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										CidrIp: {
											locationName: "cidrIp"
										},
										Description: {
											locationName: "description"
										}
									}
								}
							},
							Ipv6Ranges: {
								locationName: "ipv6Ranges",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										CidrIpv6: {
											locationName: "cidrIpv6"
										},
										Description: {
											locationName: "description"
										}
									}
								}
							},
							PrefixListIds: {
								locationName: "prefixListIds",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										Description: {
											locationName: "description"
										},
										PrefixListId: {
											locationName: "prefixListId"
										}
									}
								}
							},
							ToPort: {
								locationName: "toPort",
								type: "integer"
							},
							UserIdGroupPairs: {
								locationName: "groups",
								type: "list",
								member: {
									shape: "S2e",
									locationName: "item"
								}
							}
						}
					}
				},
				S2e: {
					type: "structure",
					members: {
						Description: {
							locationName: "description"
						},
						GroupId: {
							locationName: "groupId"
						},
						GroupName: {
							locationName: "groupName"
						},
						PeeringStatus: {
							locationName: "peeringStatus"
						},
						UserId: {
							locationName: "userId"
						},
						VpcId: {
							locationName: "vpcId"
						},
						VpcPeeringConnectionId: {
							locationName: "vpcPeeringConnectionId"
						}
					}
				},
				S2h: {
					type: "structure",
					members: {
						S3: {
							type: "structure",
							members: {
								AWSAccessKeyId: {},
								Bucket: {
									locationName: "bucket"
								},
								Prefix: {
									locationName: "prefix"
								},
								UploadPolicy: {
									locationName: "uploadPolicy",
									type: "blob"
								},
								UploadPolicySignature: {
									locationName: "uploadPolicySignature"
								}
							}
						}
					}
				},
				S2l: {
					type: "structure",
					members: {
						BundleId: {
							locationName: "bundleId"
						},
						BundleTaskError: {
							locationName: "error",
							type: "structure",
							members: {
								Code: {
									locationName: "code"
								},
								Message: {
									locationName: "message"
								}
							}
						},
						InstanceId: {
							locationName: "instanceId"
						},
						Progress: {
							locationName: "progress"
						},
						StartTime: {
							locationName: "startTime",
							type: "timestamp"
						},
						State: {
							locationName: "state"
						},
						Storage: {
							shape: "S2h",
							locationName: "storage"
						},
						UpdateTime: {
							locationName: "updateTime",
							type: "timestamp"
						}
					}
				},
				S2w: {
					type: "list",
					member: {
						locationName: "item",
						type: "structure",
						members: {
							ClientToken: {
								locationName: "clientToken"
							},
							CreateDate: {
								locationName: "createDate",
								type: "timestamp"
							},
							InstanceCounts: {
								locationName: "instanceCounts",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										InstanceCount: {
											locationName: "instanceCount",
											type: "integer"
										},
										State: {
											locationName: "state"
										}
									}
								}
							},
							PriceSchedules: {
								locationName: "priceSchedules",
								type: "list",
								member: {
									locationName: "item",
									type: "structure",
									members: {
										Active: {
											locationName: "active",
											type: "boolean"
										},
										CurrencyCode: {
											locationName: "currencyCode"
										},
										Price: {
											locationName: "price",
											type: "double"
										},
										Term: {
											locationName: "term",
											type: "long"
										}
									}
								}
							},
							ReservedInstancesId: {
								locationName: "reservedInstancesId"
							},
							ReservedInstancesListingId: {
								locationName: "reservedInstancesListingId"
							},
							Status: {
								locationName: "status"
							},
							StatusMessage: {
								locationName: "statusMessage"
							},
							Tags: {
								shape: "Sr",
								locationName: "tagSet"
							},
							UpdateDate: {
								locationName: "updateDate",
								type: "timestamp"
							}
						}
					}
				},
				S3h: {
					type: "list",
					member: {
						locationName: "SpotInstanceRequestId"
					}
				},
				S3x: {
					type: "structure",
					members: {
						BgpAsn: {
							locationName: "bgpAsn"
						},
						CustomerGatewayId: {
							locationName: "customerGatewayId"
						},
						IpAddress: {
							locationName: "ipAddress"
						},
						State: {
							locationName: "state"
						},
						Type: {
							locationName: "type"
						},
						Tags: {
							shape: "Sr",
							locationName: "tagSet"
						}
					}
				},
				S40: {
					type: "structure",
					members: {
						AvailabilityZone: {
							locationName: "availabilityZone"
						},
						AvailableIpAddressCount: {
							locationName: "availableIpAddressCount",
							type: "integer"
						},
						CidrBlock: {
							locationName: "cidrBlock"
						},
						DefaultForAz: {
							locationName: "defaultForAz",
							type: "boolean"
						},
						MapPublicIpOnLaunch: {
							locationName: "mapPublicIpOnLaunch",
							type: "boolean"
						},
						State: {
							locationName: "state"
						},
						SubnetId: {
							locationName: "subnetId"
						},
						VpcId: {
							locationName: "vpcId"
						},
						AssignIpv6AddressOnCreation: {
							locationName: "assignIpv6AddressOnCreation",
							type: "boolean"
						},
						Ipv6CidrBlockAssociationSet: {
							locationName: "ipv6CidrBlockAssociationSet",
							type: "list",
							member: {
								shape: "S1i",
								locationName: "item"
							}
						},
						Tags: {
							shape: "Sr",
							locationName: "tagSet"
						}
					}
				},
				S45: {
					type: "structure",
					members: {
						CidrBlock: {
							locationName: "cidrBlock"
						},
						DhcpOptionsId: {
							locationName: "dhcpOptionsId"
						},
						State: {
							locationName: "state"
						},
						VpcId: {
							locationName: "vpcId"
						},
						InstanceTenancy: {
							locationName: "instanceTenancy"
						},
						Ipv6CidrBlockAssociationSet: {
							locationName: "ipv6CidrBlockAssociationSet",
							type: "list",
							member: {
								shape: "S1n",
								locationName: "item"
							}
						},
						CidrBlockAssociationSet: {
							locationName: "cidrBlockAssociationSet",
							type: "list",
							member: {
								shape: "S1q",
								locationName: "item"
							}
						},
						IsDefault: {
							locationName: "isDefault",
							type: "boolean"
						},
						Tags: {
							shape: "Sr",
							locationName: "tagSet"
						}
					}
				},
				S4e: {
					type: "structure",
					members: {
						DhcpConfigurations: {
							locationName: "dhcpConfigurationSet",
							type: "list",
							member: {
								locationName: "item",
								type: "structure",
								members: {
									Key: {
										locationName: "key"
									},
									Values: {
										locationName: "valueSet",
										type: "list",
										member: {
											shape: "S4i",
											locationName: "item"
										}
									}
								}
							}
						},
						DhcpOptionsId: {
							locationName: "dhcpOptionsId"
						},
						Tags: {
							shape: "Sr",
							locationName: "tagSet"
						}
					}
				},
				S4i: {
					type: "structure",
					members: {
						Value: {
							locationName: "value"
						}
					}
				},
				S4l: {
					type: "structure",
					members: {
						Attachments: {
							shape: "S4m",
							locationName: "attachmentSet"
						},
						EgressOnlyInternetGatewayId: {
							locationName: "egressOnlyInternetGatewayId"
						}
					}
				},
				S4m: {
					type: "list",
					member: {
						locationName: "item",
						type: "structure",
						members: {
							State: {
								locationName: "state"
							},
							VpcId: {
								locationName: "vpcId"
							}
						}
					}
				},
				S51: {
					type: "structure",
					required: ["TotalTargetCapacity"],
					members: {
						TotalTargetCapacity: {
							type: "integer"
						},
						OnDemandTargetCapacity: {
							type: "integer"
						},
						SpotTargetCapacity: {
							type: "integer"
						},
						DefaultTargetCapacityType: {}
					}
				},
				S54: {
					type: "list",
					member: {
						locationName: "item",
						type: "structure",
						members: {
							ResourceType: {
								locationName: "resourceType"
							},
							Tags: {
								shape: "Sr",
								locationName: "Tag"
							}
						}
					}
				},
				S5e: {
					type: "structure",
					members: {
						Bucket: {},
						Key: {}
					}
				},
				S5h: {
					type: "list",
					member: {
						shape: "S5i",
						locationName: "BlockDeviceMapping"
					}
				},
				S5i: {
					type: "structure",
					members: {
						DeviceName: {
							locationName: "deviceName"
						},
						VirtualName: {
							locationName: "virtualName"
						},
						Ebs: {
							locationName: "ebs",
							type: "structure",
							members: {
								Encrypted: {
									locationName: "encrypted",
									type: "boolean"
								},
								DeleteOnTermination: {
									locationName: "deleteOnTermination",
									type: "boolean"
								},
								Iops: {
									locationName: "iops",
									type: "integer"
								},
								KmsKeyId: {},
								SnapshotId: {
									locationName: "snapshotId"
								},
								VolumeSize: {
									locationName: "volumeSize",
									type: "integer"
								},
								VolumeType: {
									locationName: "volumeType"
								}
							}
						},
						NoDevice: {
							locationName: "noDevice"
						}
					}
				},
				S5s: {
					type: "structure",
					members: {
						Description: {
							locationName: "description"
						},
						ExportTaskId: {
							locationName: "exportTaskId"
						},
						ExportToS3Task: {
							locationName: "exportToS3",
							type: "structure",
							members: {
								ContainerFormat: {
									locationName: "containerFormat"
								},
								DiskImageFormat: {
									locationName: "diskImageFormat"
								},
								S3Bucket: {
									locationName: "s3Bucket"
								},
								S3Key: {
									locationName: "s3Key"
								}
							}
						},
						InstanceExportDetails: {
							locationName: "instanceExport",
							type: "structure",
							members: {
								InstanceId: {
									locationName: "instanceId"
								},
								TargetEnvironment: {
									locationName: "targetEnvironment"
								}
							}
						},
						State: {
							locationName: "state"
						},
						StatusMessage: {
							locationName: "statusMessage"
						}
					}
				},
				S5y: {
					type: "structure",
					members: {
						Attachments: {
							shape: "S4m",
							locationName: "attachmentSet"
						},
						InternetGatewayId: {
							locationName: "internetGatewayId"
						},
						Tags: {
							shape: "Sr",
							locationName: "tagSet"
						}
					}
				},
				S63: {
					type: "structure",
					members: {
						KernelId: {},
						EbsOptimized: {
							type: "boolean"
						},
						IamInstanceProfile: {
							type: "structure",
							members: {
								Arn: {},
								Name: {}
							}
						},
						BlockDeviceMappings: {
							locationName: "BlockDeviceMapping",
							type: "list",
							member: {
								locationName: "BlockDeviceMapping",
								type: "structure",
								members: {
									DeviceName: {},
									VirtualName: {},
									Ebs: {
										type: "structure",
										members: {
											Encrypted: {
												type: "boolean"
											},
											DeleteOnTermination: {
												type: "boolean"
											},
											Iops: {
												type: "integer"
											},
											KmsKeyId: {},
											SnapshotId: {},
											VolumeSize: {
												type: "integer"
											},
											VolumeType: {}
										}
									},
									NoDevice: {}
								}
							}
						},
						NetworkInterfaces: {
							locationName: "NetworkInterface",
							type: "list",
							member: {
								locationName: "InstanceNetworkInterfaceSpecification",
								type: "structure",
								members: {
									AssociatePublicIpAddress: {
										type: "boolean"
									},
									DeleteOnTermination: {
										type: "boolean"
									},
									Description: {},
									DeviceIndex: {
										type: "integer"
									},
									Groups: {
										shape: "S6a",
										locationName: "SecurityGroupId"
									},
									Ipv6AddressCount: {
										type: "integer"
									},
									Ipv6Addresses: {
										type: "list",
										member: {
											locationName: "InstanceIpv6Address",
											type: "structure",
											members: {
												Ipv6Address: {}
											}
										}
									},
									NetworkInterfaceId: {},
									PrivateIpAddress: {},
									PrivateIpAddresses: {
										shape: "S6d"
									},
									SecondaryPrivateIpAddressCount: {
										type: "integer"
									},
									SubnetId: {}
								}
							}
						},
						ImageId: {},
						InstanceType: {},
						KeyName: {},
						Monitoring: {
							type: "structure",
							members: {
								Enabled: {
									type: "boolean"
								}
							}
						},
						Placement: {
							type: "structure",
							members: {
								AvailabilityZone: {},
								Affinity: {},
								GroupName: {},
								HostId: {},
								Tenancy: {},
								SpreadDomain: {}
							}
						},
						RamDiskId: {},
						DisableApiTermination: {
							type: "boolean"
						},
						InstanceInitiatedShutdownBehavior: {},
						UserData: {},
						TagSpecifications: {
							locationName: "TagSpecification",
							type: "list",
							member: {
								locationName: "LaunchTemplateTagSpecificationRequest",
								type: "structure",
								members: {
									ResourceType: {},
									Tags: {
										shape: "Sr",
										locationName: "Tag"
									}
								}
							}
						},
						ElasticGpuSpecifications: {
							locationName: "ElasticGpuSpecification",
							type: "list",
							member: {
								shape: "S6l",
								locationName: "ElasticGpuSpecification"
							}
						},
						SecurityGroupIds: {
							shape: "S6a",
							locationName: "SecurityGroupId"
						},
						SecurityGroups: {
							shape: "S6m",
							locationName: "SecurityGroup"
						},
						InstanceMarketOptions: {
							type: "structure",
							members: {
								MarketType: {},
								SpotOptions: {
									type: "structure",
									members: {
										MaxPrice: {},
										SpotInstanceType: {},
										BlockDurationMinutes: {
											type: "integer"
										},
										ValidUntil: {
											type: "timestamp"
										},
										InstanceInterruptionBehavior: {}
									}
								}
							}
						},
						CreditSpecification: {
							shape: "S6s"
						}
					}
				},
				S6a: {
					type: "list",
					member: {
						locationName: "SecurityGroupId"
					}
				},
				S6d: {
					type: "list",
					member: {
						locationName: "item",
						type: "structure",
						required: ["PrivateIpAddress"],
						members: {
							Primary: {
								locationName: "primary",
								type: "boolean"
							},
							PrivateIpAddress: {
								locationName: "privateIpAddress"
							}
						}
					}
				},
				S6l: {
					type: "structure",
					required: ["Type"],
					members: {
						Type: {}
					}
				},
				S6m: {
					type: "list",
					member: {
						locationName: "SecurityGroup"
					}
				},
				S6s: {
					type: "structure",
					required: ["CpuCredits"],
					members: {
						CpuCredits: {}
					}
				},
				S6u: {
					type: "structure",
					members: {
						LaunchTemplateId: {
							locationName: "launchTemplateId"
						},
						LaunchTemplateName: {
							locationName: "launchTemplateName"
						},
						CreateTime: {
							locationName: "createTime",
							type: "timestamp"
						},
						CreatedBy: {
							locationName: "createdBy"
						},
						DefaultVersionNumber: {
							locationName: "defaultVersionNumber",
							type: "long"
						},
						LatestVersionNumber: {
							locationName: "latestVersionNumber",
							type: "long"
						},
						Tags: {
							shape: "Sr",
							locationName: "tagSet"
						}
					}
				},
				S6x: {
					type: "structure",
					members: {
						LaunchTemplateId: {
							locationName: "launchTemplateId"
						},
						LaunchTemplateName: {
							locationName: "launchTemplateName"
						},
						VersionNumber: {
							locationName: "versionNumber",
							type: "long"
						},
						VersionDescription: {
							locationName: "versionDescription"
						},
						CreateTime: {
							locationName: "createTime",
							type: "timestamp"
						},
						CreatedBy: {
							locationName: "createdBy"
						},
						DefaultVersion: {
							locationName: "defaultVersion",
							type: "boolean"
						},
						LaunchTemplateData: {
							shape: "S6y",
							locationName: "launchTemplateData"
						}
					}
				},
				S6y: {
					type: "structure",
					members: {
						KernelId: {
							locationName: "kernelId"
						},
						EbsOptimized: {
							locationName: "ebsOptimized",
							type: "boolean"
						},
						IamInstanceProfile: {
							locationName: "iamInstanceProfile",
							type: "structure",
							members: {
								Arn: {
									locationName: "arn"
								},
								Name: {
									locationName: "name"
								}
							}
						},
						BlockDeviceMappings: {
							locationName: "blockDeviceMappingSet",
							type: "list",
							member: {
								locationName: "item",
								type: "structure",
								members: {
									DeviceName: {
										locationName: "deviceName"
									},
									VirtualName: {
										locationName: "virtualName"
									},
									Ebs: {
										locationName: "ebs",
										type: "structure",
										members: {
											Encrypted: {
												locationName: "encrypted",
												type: "boolean"
											},
											DeleteOnTermination: {
												locationName: "deleteOnTermination",
												type: "boolean"
											},
											Iops: {
												locationName: "iops",
												type: "integer"
											},
											KmsKeyId: {
												locationName: "kmsKeyId"
											},
											SnapshotId: {
												locationName: "snapshotId"
											},
											VolumeSize: {
												locationName: "volumeSize",
												type: "integer"
											},
											VolumeType: {
												locationName: "volumeType"
											}
										}
									},
									NoDevice: {
										locationName: "noDevice"
									}
								}
							}
						},
						NetworkInterfaces: {
							locationName: "networkInterfaceSet",
							type: "list",
							member: {
								locationName: "item",
								type: "structure",
								members: {
									AssociatePublicIpAddress: {
										locationName: "associatePublicIpAddress",
										type: "boolean"
									},
									DeleteOnTermination: {
										locationName: "deleteOnTermination",
										type: "boolean"
									},
									Description: {
										locationName: "description"
									},
									DeviceIndex: {
										locationName: "deviceIndex",
										type: "integer"
									},
									Groups: {
										shape: "S1s",
										locationName: "groupSet"
									},
									Ipv6AddressCount: {
										locationName: "ipv6AddressCount",
										type: "integer"
									},
									Ipv6Addresses: {
										shape: "S75",
										locationName: "ipv6AddressesSet"
									},
									NetworkInterfaceId: {
										locationName: "networkInterfaceId"
									},
									PrivateIpAddress: {
										locationName: "privateIpAddress"
									},
									PrivateIpAddresses: {
										shape: "S6d",
										locationName: "privateIpAddressesSet"
									},
									SecondaryPrivateIpAddressCount: {
										locationName: "secondaryPrivateIpAddressCount",
										type: "integer"
									},
									SubnetId: {
										locationName: "subnetId"
									}
								}
							}
						},
						ImageId: {
							locationName: "imageId"
						},
						InstanceType: {
							locationName: "instanceType"
						},
						KeyName: {
							locationName: "keyName"
						},
						Monitoring: {
							locationName: "monitoring",
							type: "structure",
							members: {
								Enabled: {
									locationName: "enabled",
									type: "boolean"
								}
							}
						},
						Placement: {
							locationName: "placement",
							type: "structure",
							members: {
								AvailabilityZone: {
									locationName: "availabilityZone"
								},
								Affinity: {
									locationName: "affinity"
								},
								GroupName: {
									locationName: "groupName"
								},
								HostId: {
									locationName: "hostId"
								},
								Tenancy: {
									locationName: "tenancy"
								},
								SpreadDomain: {
									locationName: "spreadDomain"
								}
							}
						},
						RamDiskId: {
							locationName: "ramDiskId"
						},
						DisableApiTermination: {
							locationName: "disableApiTermination",
							type: "boolean"
						},
						InstanceInitiatedShutdownBehavior: {
							locationName: "instanceInitiatedShutdownBehavior"
						},
						UserData: {
							locationName: "userData"
						},
						TagSpecifications: {
							locationName: "tagSpecificationSet",
							type: "list",
							member: {
								locationName: "item",
								type: "structure",
								members: {
									ResourceType: {
										locationName: "resourceType"
									},
									Tags: {
										shape: "Sr",
										locationName: "tagSet"
									}
								}
							}
						},
						ElasticGpuSpecifications: {
							locationName: "elasticGpuSpecificationSet",
							type: "list",
							member: {
								locationName: "item",
								type: "structure",
								members: {
									Type: {
										locationName: "type"
									}
								}
							}
						},
						SecurityGroupIds: {
							shape: "Sa",
							locationName: "securityGroupIdSet"
						},
						SecurityGroups: {
							shape: "Sa",
							locationName: "securityGroupSet"
						},
						InstanceMarketOptions: {
							locationName: "instanceMarketOptions",
							type: "structure",
							members: {
								MarketType: {
									locationName: "marketType"
								},
								SpotOptions: {
									locationName: "spotOptions",
									type: "structure",
									members: {
										MaxPrice: {
											locationName: "maxPrice"
										},
										SpotInstanceType: {
											locationName: "spotInstanceType"
										},
										BlockDurationMinutes: {
											locationName: "blockDurationMinutes",
											type: "integer"
										},
										ValidUntil: {
											locationName: "validUntil",
											type: "timestamp"
										},
										InstanceInterruptionBehavior: {
											locationName: "instanceInterruptionBehavior"
										}
									}
								}
							}
						},
						CreditSpecification: {
							locationName: "creditSpecification",
							type: "structure",
							members: {
								CpuCredits: {
									locationName: "cpuCredits"
								}
							}
						}
					}
				},
				S75: {
					type: "list",
					member: {
						locationName: "item",
						type: "structure",
						members: {
							Ipv6Address: {
								locationName: "ipv6Address"
							}
						}
					}
				},
				S7i: {
					type: "structure",
					members: {
						CreateTime: {
							locationName: "createTime",
							type: "timestamp"
						},
						DeleteTime: {
							locationName: "deleteTime",
							type: "timestamp"
						},
						FailureCode: {
							locationName: "failureCode"
						},
						FailureMessage: {
							locationName: "failureMessage"
						},
						NatGatewayAddresses: {
							locationName: "natGatewayAddressSet",
							type: "list",
							member: {
								locationName: "item",
								type: "structure",
								members: {
									AllocationId: {
										locationName: "allocationId"
									},
									NetworkInterfaceId: {
										locationName: "networkInterfaceId"
									},
									PrivateIp: {
										locationName: "privateIp"
									},
									PublicIp: {
										locationName: "publicIp"
									}
								}
							}
						},
						NatGatewayId: {
							locationName: "natGatewayId"
						},
						ProvisionedBandwidth: {
							locationName: "provisionedBandwidth",
							type: "structure",
							members: {
								ProvisionTime: {
									locationName: "provisionTime",
									type: "timestamp"
								},
								Provisioned: {
									locationName: "provisioned"
								},
								RequestTime: {
									locationName: "requestTime",
									type: "timestamp"
								},
								Requested: {
									locationName: "requested"
								},
								Status: {
									locationName: "status"
								}
							}
						},
						State: {
							locationName: "state"
						},
						SubnetId: {
							locationName: "subnetId"
						},
						VpcId: {
							locationName: "vpcId"
						},
						Tags: {
							shape: "Sr",
							locationName: "tagSet"
						}
					}
				},
				S7p: {
					type: "structure",
					members: {
						Associations: {
							locationName: "associationSet",
							type: "list",
							member: {
								locationName: "item",
								type: "structure",
								members: {
									NetworkAclAssociationId: {
										locationName: "networkAclAssociationId"
									},
									NetworkAclId: {
										locationName: "networkAclId"
									},
									SubnetId: {
										locationName: "subnetId"
									}
								}
							}
						},
						Entries: {
							locationName: "entrySet",
							type: "list",
							member: {
								locationName: "item",
								type: "structure",
								members: {
									CidrBlock: {
										locationName: "cidrBlock"
									},
									Egress: {
										locationName: "egress",
										type: "boolean"
									},
									IcmpTypeCode: {
										shape: "S7u",
										locationName: "icmpTypeCode"
									},
									Ipv6CidrBlock: {
										locationName: "ipv6CidrBlock"
									},
									PortRange: {
										shape: "S7v",
										locationName: "portRange"
									},
									Protocol: {
										locationName: "protocol"
									},
									RuleAction: {
										locationName: "ruleAction"
									},
									RuleNumber: {
										locationName: "ruleNumber",
										type: "integer"
									}
								}
							}
						},
						IsDefault: {
							locationName: "default",
							type: "boolean"
						},
						NetworkAclId: {
							locationName: "networkAclId"
						},
						Tags: {
							shape: "Sr",
							locationName: "tagSet"
						},
						VpcId: {
							locationName: "vpcId"
						}
					}
				},
				S7u: {
					type: "structure",
					members: {
						Code: {
							locationName: "code",
							type: "integer"
						},
						Type: {
							locationName: "type",
							type: "integer"
						}
					}
				},
				S7v: {
					type: "structure",
					members: {
						From: {
							locationName: "from",
							type: "integer"
						},
						To: {
							locationName: "to",
							type: "integer"
						}
					}
				},
				S80: {
					type: "structure",
					members: {
						Association: {
							shape: "S81",
							locationName: "association"
						},
						Attachment: {
							shape: "S82",
							locationName: "attachment"
						},
						AvailabilityZone: {
							locationName: "availabilityZone"
						},
						Description: {
							locationName: "description"
						},
						Groups: {
							shape: "S83",
							locationName: "groupSet"
						},
						InterfaceType: {
							locationName: "interfaceType"
						},
						Ipv6Addresses: {
							locationName: "ipv6AddressesSet",
							type: "list",
							member: {
								locationName: "item",
								type: "structure",
								members: {
									Ipv6Address: {
										locationName: "ipv6Address"
									}
								}
							}
						},
						MacAddress: {
							locationName: "macAddress"
						},
						NetworkInterfaceId: {
							locationName: "networkInterfaceId"
						},
						OwnerId: {
							locationName: "ownerId"
						},
						PrivateDnsName: {
							locationName: "privateDnsName"
						},
						PrivateIpAddress: {
							locationName: "privateIpAddress"
						},
						PrivateIpAddresses: {
							locationName: "privateIpAddressesSet",
							type: "list",
							member: {
								locationName: "item",
								type: "structure",
								members: {
									Association: {
										shape: "S81",
										locationName: "association"
									},
									Primary: {
										locationName: "primary",
										type: "boolean"
									},
									PrivateDnsName: {
										locationName: "privateDnsName"
									},
									PrivateIpAddress: {
										locationName: "privateIpAddress"
									}
								}
							}
						},
						RequesterId: {
							locationName: "requesterId"
						},
						RequesterManaged: {
							locationName: "requesterManaged",
							type: "boolean"
						},
						SourceDestCheck: {
							locationName: "sourceDestCheck",
							type: "boolean"
						},
						Status: {
							locationName: "status"
						},
						SubnetId: {
							locationName: "subnetId"
						},
						TagSet: {
							shape: "Sr",
							locationName: "tagSet"
						},
						VpcId: {
							locationName: "vpcId"
						}
					}
				},
				S81: {
					type: "structure",
					members: {
						AllocationId: {
							locationName: "allocationId"
						},
						AssociationId: {
							locationName: "associationId"
						},
						IpOwnerId: {
							locationName: "ipOwnerId"
						},
						PublicDnsName: {
							locationName: "publicDnsName"
						},
						PublicIp: {
							locationName: "publicIp"
						}
					}
				},
				S82: {
					type: "structure",
					members: {
						AttachTime: {
							locationName: "attachTime",
							type: "timestamp"
						},
						AttachmentId: {
							locationName: "attachmentId"
						},
						DeleteOnTermination: {
							locationName: "deleteOnTermination",
							type: "boolean"
						},
						DeviceIndex: {
							locationName: "deviceIndex",
							type: "integer"
						},
						InstanceId: {
							locationName: "instanceId"
						},
						InstanceOwnerId: {
							locationName: "instanceOwnerId"
						},
						Status: {
							locationName: "status"
						}
					}
				},
				S83: {
					type: "list",
					member: {
						locationName: "item",
						type: "structure",
						members: {
							GroupName: {
								locationName: "groupName"
							},
							GroupId: {
								locationName: "groupId"
							}
						}
					}
				},
				S8e: {
					type: "structure",
					members: {
						NetworkInterfacePermissionId: {
							locationName: "networkInterfacePermissionId"
						},
						NetworkInterfaceId: {
							locationName: "networkInterfaceId"
						},
						AwsAccountId: {
							locationName: "awsAccountId"
						},
						AwsService: {
							locationName: "awsService"
						},
						Permission: {
							locationName: "permission"
						},
						PermissionState: {
							locationName: "permissionState",
							type: "structure",
							members: {
								State: {
									locationName: "state"
								},
								StatusMessage: {
									locationName: "statusMessage"
								}
							}
						}
					}
				},
				S8r: {
					type: "structure",
					members: {
						Associations: {
							locationName: "associationSet",
							type: "list",
							member: {
								locationName: "item",
								type: "structure",
								members: {
									Main: {
										locationName: "main",
										type: "boolean"
									},
									RouteTableAssociationId: {
										locationName: "routeTableAssociationId"
									},
									RouteTableId: {
										locationName: "routeTableId"
									},
									SubnetId: {
										locationName: "subnetId"
									}
								}
							}
						},
						PropagatingVgws: {
							locationName: "propagatingVgwSet",
							type: "list",
							member: {
								locationName: "item",
								type: "structure",
								members: {
									GatewayId: {
										locationName: "gatewayId"
									}
								}
							}
						},
						RouteTableId: {
							locationName: "routeTableId"
						},
						Routes: {
							locationName: "routeSet",
							type: "list",
							member: {
								locationName: "item",
								type: "structure",
								members: {
									DestinationCidrBlock: {
										locationName: "destinationCidrBlock"
									},
									DestinationIpv6CidrBlock: {
										locationName: "destinationIpv6CidrBlock"
									},
									DestinationPrefixListId: {
										locationName: "destinationPrefixListId"
									},
									EgressOnlyInternetGatewayId: {
										locationName: "egressOnlyInternetGatewayId"
									},
									GatewayId: {
										locationName: "gatewayId"
									},
									InstanceId: {
										locationName: "instanceId"
									},
									InstanceOwnerId: {
										locationName: "instanceOwnerId"
									},
									NatGatewayId: {
										locationName: "natGatewayId"
									},
									NetworkInterfaceId: {
										locationName: "networkInterfaceId"
									},
									Origin: {
										locationName: "origin"
									},
									State: {
										locationName: "state"
									},
									VpcPeeringConnectionId: {
										locationName: "vpcPeeringConnectionId"
									}
								}
							}
						},
						Tags: {
							shape: "Sr",
							locationName: "tagSet"
						},
						VpcId: {
							locationName: "vpcId"
						}
					}
				},
				S93: {
					type: "structure",
					members: {
						DataEncryptionKeyId: {
							locationName: "dataEncryptionKeyId"
						},
						Description: {
							locationName: "description"
						},
						Encrypted: {
							locationName: "encrypted",
							type: "boolean"
						},
						KmsKeyId: {
							locationName: "kmsKeyId"
						},
						OwnerId: {
							locationName: "ownerId"
						},
						Progress: {
							locationName: "progress"
						},
						SnapshotId: {
							locationName: "snapshotId"
						},
						StartTime: {
							locationName: "startTime",
							type: "timestamp"
						},
						State: {
							locationName: "status"
						},
						StateMessage: {
							locationName: "statusMessage"
						},
						VolumeId: {
							locationName: "volumeId"
						},
						VolumeSize: {
							locationName: "volumeSize",
							type: "integer"
						},
						OwnerAlias: {
							locationName: "ownerAlias"
						},
						Tags: {
							shape: "Sr",
							locationName: "tagSet"
						}
					}
				},
				S97: {
					type: "structure",
					members: {
						Bucket: {
							locationName: "bucket"
						},
						Fault: {
							shape: "S98",
							locationName: "fault"
						},
						OwnerId: {
							locationName: "ownerId"
						},
						Prefix: {
							locationName: "prefix"
						},
						State: {
							locationName: "state"
						}
					}
				},
				S98: {
					type: "structure",
					members: {
						Code: {
							locationName: "code"
						},
						Message: {
							locationName: "message"
						}
					}
				},
				S9d: {
					type: "list",
					member: {}
				},
				S9f: {
					type: "structure",
					members: {
						Attachments: {
							locationName: "attachmentSet",
							type: "list",
							member: {
								shape: "S1y",
								locationName: "item"
							}
						},
						AvailabilityZone: {
							locationName: "availabilityZone"
						},
						CreateTime: {
							locationName: "createTime",
							type: "timestamp"
						},
						Encrypted: {
							locationName: "encrypted",
							type: "boolean"
						},
						KmsKeyId: {
							locationName: "kmsKeyId"
						},
						Size: {
							locationName: "size",
							type: "integer"
						},
						SnapshotId: {
							locationName: "snapshotId"
						},
						State: {
							locationName: "status"
						},
						VolumeId: {
							locationName: "volumeId"
						},
						Iops: {
							locationName: "iops",
							type: "integer"
						},
						Tags: {
							shape: "Sr",
							locationName: "tagSet"
						},
						VolumeType: {
							locationName: "volumeType"
						}
					}
				},
				S9n: {
					type: "structure",
					members: {
						VpcEndpointId: {
							locationName: "vpcEndpointId"
						},
						VpcEndpointType: {
							locationName: "vpcEndpointType"
						},
						VpcId: {
							locationName: "vpcId"
						},
						ServiceName: {
							locationName: "serviceName"
						},
						State: {
							locationName: "state"
						},
						PolicyDocument: {
							locationName: "policyDocument"
						},
						RouteTableIds: {
							shape: "Sa",
							locationName: "routeTableIdSet"
						},
						SubnetIds: {
							shape: "Sa",
							locationName: "subnetIdSet"
						},
						Groups: {
							locationName: "groupSet",
							type: "list",
							member: {
								locationName: "item",
								type: "structure",
								members: {
									GroupId: {
										locationName: "groupId"
									},
									GroupName: {
										locationName: "groupName"
									}
								}
							}
						},
						PrivateDnsEnabled: {
							locationName: "privateDnsEnabled",
							type: "boolean"
						},
						NetworkInterfaceIds: {
							shape: "Sa",
							locationName: "networkInterfaceIdSet"
						},
						DnsEntries: {
							locationName: "dnsEntrySet",
							type: "list",
							member: {
								locationName: "item",
								type: "structure",
								members: {
									DnsName: {
										locationName: "dnsName"
									},
									HostedZoneId: {
										locationName: "hostedZoneId"
									}
								}
							}
						},
						CreationTimestamp: {
							locationName: "creationTimestamp",
							type: "timestamp"
						}
					}
				},
				S9v: {
					type: "structure",
					members: {
						ConnectionNotificationId: {
							locationName: "connectionNotificationId"
						},
						ServiceId: {
							locationName: "serviceId"
						},
						VpcEndpointId: {
							locationName: "vpcEndpointId"
						},
						ConnectionNotificationType: {
							locationName: "connectionNotificationType"
						},
						ConnectionNotificationArn: {
							locationName: "connectionNotificationArn"
						},
						ConnectionEvents: {
							shape: "Sa",
							locationName: "connectionEvents"
						},
						ConnectionNotificationState: {
							locationName: "connectionNotificationState"
						}
					}
				},
				Sa0: {
					type: "structure",
					members: {
						ServiceType: {
							shape: "Sa1",
							locationName: "serviceType"
						},
						ServiceId: {
							locationName: "serviceId"
						},
						ServiceName: {
							locationName: "serviceName"
						},
						ServiceState: {
							locationName: "serviceState"
						},
						AvailabilityZones: {
							shape: "Sa",
							locationName: "availabilityZoneSet"
						},
						AcceptanceRequired: {
							locationName: "acceptanceRequired",
							type: "boolean"
						},
						NetworkLoadBalancerArns: {
							shape: "Sa",
							locationName: "networkLoadBalancerArnSet"
						},
						BaseEndpointDnsNames: {
							shape: "Sa",
							locationName: "baseEndpointDnsNameSet"
						},
						PrivateDnsName: {
							locationName: "privateDnsName"
						}
					}
				},
				Sa1: {
					type: "list",
					member: {
						locationName: "item",
						type: "structure",
						members: {
							ServiceType: {
								locationName: "serviceType"
							}
						}
					}
				},
				Sac: {
					type: "structure",
					members: {
						CustomerGatewayConfiguration: {
							locationName: "customerGatewayConfiguration"
						},
						CustomerGatewayId: {
							locationName: "customerGatewayId"
						},
						Category: {
							locationName: "category"
						},
						State: {
							locationName: "state"
						},
						Type: {
							locationName: "type"
						},
						VpnConnectionId: {
							locationName: "vpnConnectionId"
						},
						VpnGatewayId: {
							locationName: "vpnGatewayId"
						},
						Options: {
							locationName: "options",
							type: "structure",
							members: {
								StaticRoutesOnly: {
									locationName: "staticRoutesOnly",
									type: "boolean"
								}
							}
						},
						Routes: {
							locationName: "routes",
							type: "list",
							member: {
								locationName: "item",
								type: "structure",
								members: {
									DestinationCidrBlock: {
										locationName: "destinationCidrBlock"
									},
									Source: {
										locationName: "source"
									},
									State: {
										locationName: "state"
									}
								}
							}
						},
						Tags: {
							shape: "Sr",
							locationName: "tagSet"
						},
						VgwTelemetry: {
							locationName: "vgwTelemetry",
							type: "list",
							member: {
								locationName: "item",
								type: "structure",
								members: {
									AcceptedRouteCount: {
										locationName: "acceptedRouteCount",
										type: "integer"
									},
									LastStatusChange: {
										locationName: "lastStatusChange",
										type: "timestamp"
									},
									OutsideIpAddress: {
										locationName: "outsideIpAddress"
									},
									Status: {
										locationName: "status"
									},
									StatusMessage: {
										locationName: "statusMessage"
									}
								}
							}
						}
					}
				},
				Sao: {
					type: "structure",
					members: {
						AvailabilityZone: {
							locationName: "availabilityZone"
						},
						State: {
							locationName: "state"
						},
						Type: {
							locationName: "type"
						},
						VpcAttachments: {
							locationName: "attachments",
							type: "list",
							member: {
								shape: "S22",
								locationName: "item"
							}
						},
						VpnGatewayId: {
							locationName: "vpnGatewayId"
						},
						AmazonSideAsn: {
							locationName: "amazonSideAsn",
							type: "long"
						},
						Tags: {
							shape: "Sr",
							locationName: "tagSet"
						}
					}
				},
				Sav: {
					type: "list",
					member: {}
				},
				Sbd: {
					type: "list",
					member: {
						locationName: "item"
					}
				},
				Scn: {
					type: "list",
					member: {
						locationName: "Filter",
						type: "structure",
						members: {
							Name: {},
							Values: {
								shape: "Sa",
								locationName: "Value"
							}
						}
					}
				},
				Scw: {
					type: "list",
					member: {
						locationName: "item",
						type: "structure",
						members: {
							Deadline: {
								locationName: "deadline",
								type: "timestamp"
							},
							Resource: {
								locationName: "resource"
							},
							UseLongIds: {
								locationName: "useLongIds",
								type: "boolean"
							}
						}
					}
				},
				Sdb: {
					type: "list",
					member: {
						locationName: "InstanceId"
					}
				},
				Sdj: {
					type: "structure",
					members: {
						ConversionTaskId: {
							locationName: "conversionTaskId"
						},
						ExpirationTime: {
							locationName: "expirationTime"
						},
						ImportInstance: {
							locationName: "importInstance",
							type: "structure",
							members: {
								Description: {
									locationName: "description"
								},
								InstanceId: {
									locationName: "instanceId"
								},
								Platform: {
									locationName: "platform"
								},
								Volumes: {
									locationName: "volumes",
									type: "list",
									member: {
										locationName: "item",
										type: "structure",
										required: ["AvailabilityZone", "BytesConverted", "Image", "Status", "Volume"],
										members: {
											AvailabilityZone: {
												locationName: "availabilityZone"
											},
											BytesConverted: {
												locationName: "bytesConverted",
												type: "long"
											},
											Description: {
												locationName: "description"
											},
											Image: {
												shape: "Sdo",
												locationName: "image"
											},
											Status: {
												locationName: "status"
											},
											StatusMessage: {
												locationName: "statusMessage"
											},
											Volume: {
												shape: "Sdp",
												locationName: "volume"
											}
										}
									}
								}
							}
						},
						ImportVolume: {
							locationName: "importVolume",
							type: "structure",
							members: {
								AvailabilityZone: {
									locationName: "availabilityZone"
								},
								BytesConverted: {
									locationName: "bytesConverted",
									type: "long"
								},
								Description: {
									locationName: "description"
								},
								Image: {
									shape: "Sdo",
									locationName: "image"
								},
								Volume: {
									shape: "Sdp",
									locationName: "volume"
								}
							}
						},
						State: {
							locationName: "state"
						},
						StatusMessage: {
							locationName: "statusMessage"
						},
						Tags: {
							shape: "Sr",
							locationName: "tagSet"
						}
					}
				},
				Sdo: {
					type: "structure",
					members: {
						Checksum: {
							locationName: "checksum"
						},
						Format: {
							locationName: "format"
						},
						ImportManifestUrl: {
							locationName: "importManifestUrl"
						},
						Size: {
							locationName: "size",
							type: "long"
						}
					}
				},
				Sdp: {
					type: "structure",
					members: {
						Id: {
							locationName: "id"
						},
						Size: {
							locationName: "size",
							type: "long"
						}
					}
				},
				Sel: {
					type: "structure",
					members: {
						EventDescription: {
							locationName: "eventDescription"
						},
						EventSubType: {
							locationName: "eventSubType"
						},
						InstanceId: {
							locationName: "instanceId"
						}
					}
				},
				Seo: {
					type: "list",
					member: {
						locationName: "item",
						type: "structure",
						members: {
							InstanceId: {
								locationName: "instanceId"
							},
							InstanceType: {
								locationName: "instanceType"
							},
							SpotInstanceRequestId: {
								locationName: "spotInstanceRequestId"
							},
							InstanceHealth: {
								locationName: "instanceHealth"
							}
						}
					}
				},
				Sey: {
					type: "structure",
					members: {
						LaunchTemplateId: {
							locationName: "launchTemplateId"
						},
						LaunchTemplateName: {
							locationName: "launchTemplateName"
						},
						Version: {
							locationName: "version"
						}
					}
				},
				Sfa: {
					type: "structure",
					members: {
						FpgaImageId: {
							locationName: "fpgaImageId"
						},
						Name: {
							locationName: "name"
						},
						Description: {
							locationName: "description"
						},
						LoadPermissions: {
							locationName: "loadPermissions",
							type: "list",
							member: {
								locationName: "item",
								type: "structure",
								members: {
									UserId: {
										locationName: "userId"
									},
									Group: {
										locationName: "group"
									}
								}
							}
						},
						ProductCodes: {
							shape: "Sfe",
							locationName: "productCodes"
						}
					}
				},
				Sfe: {
					type: "list",
					member: {
						locationName: "item",
						type: "structure",
						members: {
							ProductCodeId: {
								locationName: "productCode"
							},
							ProductCodeType: {
								locationName: "type"
							}
						}
					}
				},
				Sfj: {
					type: "list",
					member: {
						locationName: "Owner"
					}
				},
				Sg2: {
					type: "list",
					member: {
						locationName: "item"
					}
				},
				Sg5: {
					type: "list",
					member: {
						locationName: "item"
					}
				},
				Sgr: {
					type: "list",
					member: {
						shape: "S5i",
						locationName: "item"
					}
				},
				Sgs: {
					type: "list",
					member: {
						locationName: "item",
						type: "structure",
						members: {
							Group: {
								locationName: "group"
							},
							UserId: {
								locationName: "userId"
							}
						}
					}
				},
				Sh5: {
					type: "structure",
					members: {
						Code: {
							locationName: "code"
						},
						Message: {
							locationName: "message"
						}
					}
				},
				Sh8: {
					type: "list",
					member: {
						locationName: "ImportTaskId"
					}
				},
				Shc: {
					type: "list",
					member: {
						locationName: "item",
						type: "structure",
						members: {
							Description: {
								locationName: "description"
							},
							DeviceName: {
								locationName: "deviceName"
							},
							DiskImageSize: {
								locationName: "diskImageSize",
								type: "double"
							},
							Format: {
								locationName: "format"
							},
							Progress: {
								locationName: "progress"
							},
							SnapshotId: {
								locationName: "snapshotId"
							},
							Status: {
								locationName: "status"
							},
							StatusMessage: {
								locationName: "statusMessage"
							},
							Url: {
								locationName: "url"
							},
							UserBucket: {
								shape: "She",
								locationName: "userBucket"
							}
						}
					}
				},
				She: {
					type: "structure",
					members: {
						S3Bucket: {
							locationName: "s3Bucket"
						},
						S3Key: {
							locationName: "s3Key"
						}
					}
				},
				Shj: {
					type: "structure",
					members: {
						Description: {
							locationName: "description"
						},
						DiskImageSize: {
							locationName: "diskImageSize",
							type: "double"
						},
						Format: {
							locationName: "format"
						},
						Progress: {
							locationName: "progress"
						},
						SnapshotId: {
							locationName: "snapshotId"
						},
						Status: {
							locationName: "status"
						},
						StatusMessage: {
							locationName: "statusMessage"
						},
						Url: {
							locationName: "url"
						},
						UserBucket: {
							shape: "She",
							locationName: "userBucket"
						}
					}
				},
				Shn: {
					type: "list",
					member: {
						locationName: "item",
						type: "structure",
						members: {
							DeviceName: {
								locationName: "deviceName"
							},
							Ebs: {
								locationName: "ebs",
								type: "structure",
								members: {
									AttachTime: {
										locationName: "attachTime",
										type: "timestamp"
									},
									DeleteOnTermination: {
										locationName: "deleteOnTermination",
										type: "boolean"
									},
									Status: {
										locationName: "status"
									},
									VolumeId: {
										locationName: "volumeId"
									}
								}
							}
						}
					}
				},
				Shq: {
					type: "structure",
					members: {
						Value: {
							locationName: "value",
							type: "boolean"
						}
					}
				},
				Si2: {
					type: "structure",
					members: {
						Code: {
							locationName: "code",
							type: "integer"
						},
						Name: {
							locationName: "name"
						}
					}
				},
				Si4: {
					type: "structure",
					members: {
						Details: {
							locationName: "details",
							type: "list",
							member: {
								locationName: "item",
								type: "structure",
								members: {
									ImpairedSince: {
										locationName: "impairedSince",
										type: "timestamp"
									},
									Name: {
										locationName: "name"
									},
									Status: {
										locationName: "status"
									}
								}
							}
						},
						Status: {
							locationName: "status"
						}
					}
				},
				Sid: {
					type: "structure",
					members: {
						Groups: {
							shape: "S83",
							locationName: "groupSet"
						},
						Instances: {
							locationName: "instancesSet",
							type: "list",
							member: {
								locationName: "item",
								type: "structure",
								members: {
									AmiLaunchIndex: {
										locationName: "amiLaunchIndex",
										type: "integer"
									},
									ImageId: {
										locationName: "imageId"
									},
									InstanceId: {
										locationName: "instanceId"
									},
									InstanceType: {
										locationName: "instanceType"
									},
									KernelId: {
										locationName: "kernelId"
									},
									KeyName: {
										locationName: "keyName"
									},
									LaunchTime: {
										locationName: "launchTime",
										type: "timestamp"
									},
									Monitoring: {
										shape: "Sig",
										locationName: "monitoring"
									},
									Placement: {
										shape: "Sii",
										locationName: "placement"
									},
									Platform: {
										locationName: "platform"
									},
									PrivateDnsName: {
										locationName: "privateDnsName"
									},
									PrivateIpAddress: {
										locationName: "privateIpAddress"
									},
									ProductCodes: {
										shape: "Sfe",
										locationName: "productCodes"
									},
									PublicDnsName: {
										locationName: "dnsName"
									},
									PublicIpAddress: {
										locationName: "ipAddress"
									},
									RamdiskId: {
										locationName: "ramdiskId"
									},
									State: {
										shape: "Si2",
										locationName: "instanceState"
									},
									StateTransitionReason: {
										locationName: "reason"
									},
									SubnetId: {
										locationName: "subnetId"
									},
									VpcId: {
										locationName: "vpcId"
									},
									Architecture: {
										locationName: "architecture"
									},
									BlockDeviceMappings: {
										shape: "Shn",
										locationName: "blockDeviceMapping"
									},
									ClientToken: {
										locationName: "clientToken"
									},
									EbsOptimized: {
										locationName: "ebsOptimized",
										type: "boolean"
									},
									EnaSupport: {
										locationName: "enaSupport",
										type: "boolean"
									},
									Hypervisor: {
										locationName: "hypervisor"
									},
									IamInstanceProfile: {
										shape: "S1c",
										locationName: "iamInstanceProfile"
									},
									InstanceLifecycle: {
										locationName: "instanceLifecycle"
									},
									ElasticGpuAssociations: {
										locationName: "elasticGpuAssociationSet",
										type: "list",
										member: {
											locationName: "item",
											type: "structure",
											members: {
												ElasticGpuId: {
													locationName: "elasticGpuId"
												},
												ElasticGpuAssociationId: {
													locationName: "elasticGpuAssociationId"
												},
												ElasticGpuAssociationState: {
													locationName: "elasticGpuAssociationState"
												},
												ElasticGpuAssociationTime: {
													locationName: "elasticGpuAssociationTime"
												}
											}
										}
									},
									NetworkInterfaces: {
										locationName: "networkInterfaceSet",
										type: "list",
										member: {
											locationName: "item",
											type: "structure",
											members: {
												Association: {
													shape: "Sio",
													locationName: "association"
												},
												Attachment: {
													locationName: "attachment",
													type: "structure",
													members: {
														AttachTime: {
															locationName: "attachTime",
															type: "timestamp"
														},
														AttachmentId: {
															locationName: "attachmentId"
														},
														DeleteOnTermination: {
															locationName: "deleteOnTermination",
															type: "boolean"
														},
														DeviceIndex: {
															locationName: "deviceIndex",
															type: "integer"
														},
														Status: {
															locationName: "status"
														}
													}
												},
												Description: {
													locationName: "description"
												},
												Groups: {
													shape: "S83",
													locationName: "groupSet"
												},
												Ipv6Addresses: {
													shape: "S75",
													locationName: "ipv6AddressesSet"
												},
												MacAddress: {
													locationName: "macAddress"
												},
												NetworkInterfaceId: {
													locationName: "networkInterfaceId"
												},
												OwnerId: {
													locationName: "ownerId"
												},
												PrivateDnsName: {
													locationName: "privateDnsName"
												},
												PrivateIpAddress: {
													locationName: "privateIpAddress"
												},
												PrivateIpAddresses: {
													locationName: "privateIpAddressesSet",
													type: "list",
													member: {
														locationName: "item",
														type: "structure",
														members: {
															Association: {
																shape: "Sio",
																locationName: "association"
															},
															Primary: {
																locationName: "primary",
																type: "boolean"
															},
															PrivateDnsName: {
																locationName: "privateDnsName"
															},
															PrivateIpAddress: {
																locationName: "privateIpAddress"
															}
														}
													}
												},
												SourceDestCheck: {
													locationName: "sourceDestCheck",
													type: "boolean"
												},
												Status: {
													locationName: "status"
												},
												SubnetId: {
													locationName: "subnetId"
												},
												VpcId: {
													locationName: "vpcId"
												}
											}
										}
									},
									RootDeviceName: {
										locationName: "rootDeviceName"
									},
									RootDeviceType: {
										locationName: "rootDeviceType"
									},
									SecurityGroups: {
										shape: "S83",
										locationName: "groupSet"
									},
									SourceDestCheck: {
										locationName: "sourceDestCheck",
										type: "boolean"
									},
									SpotInstanceRequestId: {
										locationName: "spotInstanceRequestId"
									},
									SriovNetSupport: {
										locationName: "sriovNetSupport"
									},
									StateReason: {
										shape: "Sh5",
										locationName: "stateReason"
									},
									Tags: {
										shape: "Sr",
										locationName: "tagSet"
									},
									VirtualizationType: {
										locationName: "virtualizationType"
									},
									CpuOptions: {
										locationName: "cpuOptions",
										type: "structure",
										members: {
											CoreCount: {
												locationName: "coreCount",
												type: "integer"
											},
											ThreadsPerCore: {
												locationName: "threadsPerCore",
												type: "integer"
											}
										}
									}
								}
							}
						},
						OwnerId: {
							locationName: "ownerId"
						},
						RequesterId: {
							locationName: "requesterId"
						},
						ReservationId: {
							locationName: "reservationId"
						}
					}
				},
				Sig: {
					type: "structure",
					members: {
						State: {
							locationName: "state"
						}
					}
				},
				Sii: {
					type: "structure",
					members: {
						AvailabilityZone: {
							locationName: "availabilityZone"
						},
						Affinity: {
							locationName: "affinity"
						},
						GroupName: {
							locationName: "groupName"
						},
						HostId: {
							locationName: "hostId"
						},
						Tenancy: {
							locationName: "tenancy"
						},
						SpreadDomain: {
							locationName: "spreadDomain"
						}
					}
				},
				Sio: {
					type: "structure",
					members: {
						IpOwnerId: {
							locationName: "ipOwnerId"
						},
						PublicDnsName: {
							locationName: "publicDnsName"
						},
						PublicIp: {
							locationName: "publicIp"
						}
					}
				},
				Skg: {
					type: "list",
					member: {
						locationName: "ReservedInstancesId"
					}
				},
				Sko: {
					type: "list",
					member: {
						locationName: "item",
						type: "structure",
						members: {
							Amount: {
								locationName: "amount",
								type: "double"
							},
							Frequency: {
								locationName: "frequency"
							}
						}
					}
				},
				Sl1: {
					type: "structure",
					members: {
						AvailabilityZone: {
							locationName: "availabilityZone"
						},
						InstanceCount: {
							locationName: "instanceCount",
							type: "integer"
						},
						InstanceType: {
							locationName: "instanceType"
						},
						Platform: {
							locationName: "platform"
						},
						Scope: {
							locationName: "scope"
						}
					}
				},
				Sll: {
					type: "structure",
					members: {
						Frequency: {
							locationName: "frequency"
						},
						Interval: {
							locationName: "interval",
							type: "integer"
						},
						OccurrenceDaySet: {
							locationName: "occurrenceDaySet",
							type: "list",
							member: {
								locationName: "item",
								type: "integer"
							}
						},
						OccurrenceRelativeToEnd: {
							locationName: "occurrenceRelativeToEnd",
							type: "boolean"
						},
						OccurrenceUnit: {
							locationName: "occurrenceUnit"
						}
					}
				},
				Sls: {
					type: "structure",
					members: {
						AvailabilityZone: {
							locationName: "availabilityZone"
						},
						CreateDate: {
							locationName: "createDate",
							type: "timestamp"
						},
						HourlyPrice: {
							locationName: "hourlyPrice"
						},
						InstanceCount: {
							locationName: "instanceCount",
							type: "integer"
						},
						InstanceType: {
							locationName: "instanceType"
						},
						NetworkPlatform: {
							locationName: "networkPlatform"
						},
						NextSlotStartTime: {
							locationName: "nextSlotStartTime",
							type: "timestamp"
						},
						Platform: {
							locationName: "platform"
						},
						PreviousSlotEndTime: {
							locationName: "previousSlotEndTime",
							type: "timestamp"
						},
						Recurrence: {
							shape: "Sll",
							locationName: "recurrence"
						},
						ScheduledInstanceId: {
							locationName: "scheduledInstanceId"
						},
						SlotDurationInHours: {
							locationName: "slotDurationInHours",
							type: "integer"
						},
						TermEndDate: {
							locationName: "termEndDate",
							type: "timestamp"
						},
						TermStartDate: {
							locationName: "termStartDate",
							type: "timestamp"
						},
						TotalScheduledInstanceHours: {
							locationName: "totalScheduledInstanceHours",
							type: "integer"
						}
					}
				},
				Slz: {
					type: "list",
					member: {
						locationName: "GroupName"
					}
				},
				Sm6: {
					type: "list",
					member: {
						locationName: "item",
						type: "structure",
						members: {
							Group: {
								locationName: "group"
							},
							UserId: {
								locationName: "userId"
							}
						}
					}
				},
				Smr: {
					type: "structure",
					required: ["IamFleetRole", "TargetCapacity"],
					members: {
						AllocationStrategy: {
							locationName: "allocationStrategy"
						},
						ClientToken: {
							locationName: "clientToken"
						},
						ExcessCapacityTerminationPolicy: {
							locationName: "excessCapacityTerminationPolicy"
						},
						FulfilledCapacity: {
							locationName: "fulfilledCapacity",
							type: "double"
						},
						OnDemandFulfilledCapacity: {
							locationName: "onDemandFulfilledCapacity",
							type: "double"
						},
						IamFleetRole: {
							locationName: "iamFleetRole"
						},
						LaunchSpecifications: {
							locationName: "launchSpecifications",
							type: "list",
							member: {
								locationName: "item",
								type: "structure",
								members: {
									SecurityGroups: {
										shape: "S83",
										locationName: "groupSet"
									},
									AddressingType: {
										locationName: "addressingType"
									},
									BlockDeviceMappings: {
										shape: "Sgr",
										locationName: "blockDeviceMapping"
									},
									EbsOptimized: {
										locationName: "ebsOptimized",
										type: "boolean"
									},
									IamInstanceProfile: {
										shape: "S19",
										locationName: "iamInstanceProfile"
									},
									ImageId: {
										locationName: "imageId"
									},
									InstanceType: {
										locationName: "instanceType"
									},
									KernelId: {
										locationName: "kernelId"
									},
									KeyName: {
										locationName: "keyName"
									},
									Monitoring: {
										locationName: "monitoring",
										type: "structure",
										members: {
											Enabled: {
												locationName: "enabled",
												type: "boolean"
											}
										}
									},
									NetworkInterfaces: {
										shape: "Smx",
										locationName: "networkInterfaceSet"
									},
									Placement: {
										shape: "Smz",
										locationName: "placement"
									},
									RamdiskId: {
										locationName: "ramdiskId"
									},
									SpotPrice: {
										locationName: "spotPrice"
									},
									SubnetId: {
										locationName: "subnetId"
									},
									UserData: {
										locationName: "userData"
									},
									WeightedCapacity: {
										locationName: "weightedCapacity",
										type: "double"
									},
									TagSpecifications: {
										locationName: "tagSpecificationSet",
										type: "list",
										member: {
											locationName: "item",
											type: "structure",
											members: {
												ResourceType: {
													locationName: "resourceType"
												},
												Tags: {
													shape: "Sr",
													locationName: "tag"
												}
											}
										}
									}
								}
							}
						},
						LaunchTemplateConfigs: {
							locationName: "launchTemplateConfigs",
							type: "list",
							member: {
								locationName: "item",
								type: "structure",
								members: {
									LaunchTemplateSpecification: {
										shape: "Sey",
										locationName: "launchTemplateSpecification"
									},
									Overrides: {
										locationName: "overrides",
										type: "list",
										member: {
											locationName: "item",
											type: "structure",
											members: {
												InstanceType: {
													locationName: "instanceType"
												},
												SpotPrice: {
													locationName: "spotPrice"
												},
												SubnetId: {
													locationName: "subnetId"
												},
												AvailabilityZone: {
													locationName: "availabilityZone"
												},
												WeightedCapacity: {
													locationName: "weightedCapacity",
													type: "double"
												}
											}
										}
									}
								}
							}
						},
						SpotPrice: {
							locationName: "spotPrice"
						},
						TargetCapacity: {
							locationName: "targetCapacity",
							type: "integer"
						},
						OnDemandTargetCapacity: {
							locationName: "onDemandTargetCapacity",
							type: "integer"
						},
						TerminateInstancesWithExpiration: {
							locationName: "terminateInstancesWithExpiration",
							type: "boolean"
						},
						Type: {
							locationName: "type"
						},
						ValidFrom: {
							locationName: "validFrom",
							type: "timestamp"
						},
						ValidUntil: {
							locationName: "validUntil",
							type: "timestamp"
						},
						ReplaceUnhealthyInstances: {
							locationName: "replaceUnhealthyInstances",
							type: "boolean"
						},
						InstanceInterruptionBehavior: {
							locationName: "instanceInterruptionBehavior"
						},
						LoadBalancersConfig: {
							locationName: "loadBalancersConfig",
							type: "structure",
							members: {
								ClassicLoadBalancersConfig: {
									locationName: "classicLoadBalancersConfig",
									type: "structure",
									required: ["ClassicLoadBalancers"],
									members: {
										ClassicLoadBalancers: {
											locationName: "classicLoadBalancers",
											type: "list",
											member: {
												locationName: "item",
												type: "structure",
												required: ["Name"],
												members: {
													Name: {
														locationName: "name"
													}
												}
											}
										}
									}
								},
								TargetGroupsConfig: {
									locationName: "targetGroupsConfig",
									type: "structure",
									required: ["TargetGroups"],
									members: {
										TargetGroups: {
											locationName: "targetGroups",
											type: "list",
											member: {
												locationName: "item",
												type: "structure",
												required: ["Arn"],
												members: {
													Arn: {
														locationName: "arn"
													}
												}
											}
										}
									}
								}
							}
						}
					}
				},
				Smx: {
					type: "list",
					member: {
						locationName: "item",
						type: "structure",
						members: {
							AssociatePublicIpAddress: {
								locationName: "associatePublicIpAddress",
								type: "boolean"
							},
							DeleteOnTermination: {
								locationName: "deleteOnTermination",
								type: "boolean"
							},
							Description: {
								locationName: "description"
							},
							DeviceIndex: {
								locationName: "deviceIndex",
								type: "integer"
							},
							Groups: {
								shape: "S6a",
								locationName: "SecurityGroupId"
							},
							Ipv6AddressCount: {
								locationName: "ipv6AddressCount",
								type: "integer"
							},
							Ipv6Addresses: {
								shape: "S75",
								locationName: "ipv6AddressesSet",
								queryName: "Ipv6Addresses"
							},
							NetworkInterfaceId: {
								locationName: "networkInterfaceId"
							},
							PrivateIpAddress: {
								locationName: "privateIpAddress"
							},
							PrivateIpAddresses: {
								shape: "S6d",
								locationName: "privateIpAddressesSet",
								queryName: "PrivateIpAddresses"
							},
							SecondaryPrivateIpAddressCount: {
								locationName: "secondaryPrivateIpAddressCount",
								type: "integer"
							},
							SubnetId: {
								locationName: "subnetId"
							}
						}
					}
				},
				Smz: {
					type: "structure",
					members: {
						AvailabilityZone: {
							locationName: "availabilityZone"
						},
						GroupName: {
							locationName: "groupName"
						},
						Tenancy: {
							locationName: "tenancy"
						}
					}
				},
				Snf: {
					type: "list",
					member: {
						locationName: "item",
						type: "structure",
						members: {
							ActualBlockHourlyPrice: {
								locationName: "actualBlockHourlyPrice"
							},
							AvailabilityZoneGroup: {
								locationName: "availabilityZoneGroup"
							},
							BlockDurationMinutes: {
								locationName: "blockDurationMinutes",
								type: "integer"
							},
							CreateTime: {
								locationName: "createTime",
								type: "timestamp"
							},
							Fault: {
								shape: "S98",
								locationName: "fault"
							},
							InstanceId: {
								locationName: "instanceId"
							},
							LaunchGroup: {
								locationName: "launchGroup"
							},
							LaunchSpecification: {
								locationName: "launchSpecification",
								type: "structure",
								members: {
									UserData: {
										locationName: "userData"
									},
									SecurityGroups: {
										shape: "S83",
										locationName: "groupSet"
									},
									AddressingType: {
										locationName: "addressingType"
									},
									BlockDeviceMappings: {
										shape: "Sgr",
										locationName: "blockDeviceMapping"
									},
									EbsOptimized: {
										locationName: "ebsOptimized",
										type: "boolean"
									},
									IamInstanceProfile: {
										shape: "S19",
										locationName: "iamInstanceProfile"
									},
									ImageId: {
										locationName: "imageId"
									},
									InstanceType: {
										locationName: "instanceType"
									},
									KernelId: {
										locationName: "kernelId"
									},
									KeyName: {
										locationName: "keyName"
									},
									NetworkInterfaces: {
										shape: "Smx",
										locationName: "networkInterfaceSet"
									},
									Placement: {
										shape: "Smz",
										locationName: "placement"
									},
									RamdiskId: {
										locationName: "ramdiskId"
									},
									SubnetId: {
										locationName: "subnetId"
									},
									Monitoring: {
										shape: "Sni",
										locationName: "monitoring"
									}
								}
							},
							LaunchedAvailabilityZone: {
								locationName: "launchedAvailabilityZone"
							},
							ProductDescription: {
								locationName: "productDescription"
							},
							SpotInstanceRequestId: {
								locationName: "spotInstanceRequestId"
							},
							SpotPrice: {
								locationName: "spotPrice"
							},
							State: {
								locationName: "state"
							},
							Status: {
								locationName: "status",
								type: "structure",
								members: {
									Code: {
										locationName: "code"
									},
									Message: {
										locationName: "message"
									},
									UpdateTime: {
										locationName: "updateTime",
										type: "timestamp"
									}
								}
							},
							Tags: {
								shape: "Sr",
								locationName: "tagSet"
							},
							Type: {
								locationName: "type"
							},
							ValidFrom: {
								locationName: "validFrom",
								type: "timestamp"
							},
							ValidUntil: {
								locationName: "validUntil",
								type: "timestamp"
							},
							InstanceInterruptionBehavior: {
								locationName: "instanceInterruptionBehavior"
							}
						}
					}
				},
				Sni: {
					type: "structure",
					required: ["Enabled"],
					members: {
						Enabled: {
							locationName: "enabled",
							type: "boolean"
						}
					}
				},
				Snv: {
					type: "list",
					member: {
						locationName: "item",
						type: "structure",
						members: {
							FromPort: {
								locationName: "fromPort",
								type: "integer"
							},
							IpProtocol: {
								locationName: "ipProtocol"
							},
							IpRanges: {
								locationName: "ipRanges",
								type: "list",
								member: {
									locationName: "item"
								}
							},
							PrefixListIds: {
								locationName: "prefixListIds",
								type: "list",
								member: {
									locationName: "item"
								}
							},
							ToPort: {
								locationName: "toPort",
								type: "integer"
							},
							UserIdGroupPairs: {
								locationName: "groups",
								type: "list",
								member: {
									shape: "S2e",
									locationName: "item"
								}
							}
						}
					}
				},
				Soc: {
					type: "list",
					member: {
						locationName: "VolumeId"
					}
				},
				Sov: {
					type: "structure",
					members: {
						VolumeId: {
							locationName: "volumeId"
						},
						ModificationState: {
							locationName: "modificationState"
						},
						StatusMessage: {
							locationName: "statusMessage"
						},
						TargetSize: {
							locationName: "targetSize",
							type: "integer"
						},
						TargetIops: {
							locationName: "targetIops",
							type: "integer"
						},
						TargetVolumeType: {
							locationName: "targetVolumeType"
						},
						OriginalSize: {
							locationName: "originalSize",
							type: "integer"
						},
						OriginalIops: {
							locationName: "originalIops",
							type: "integer"
						},
						OriginalVolumeType: {
							locationName: "originalVolumeType"
						},
						Progress: {
							locationName: "progress",
							type: "long"
						},
						StartTime: {
							locationName: "startTime",
							type: "timestamp"
						},
						EndTime: {
							locationName: "endTime",
							type: "timestamp"
						}
					}
				},
				Sp1: {
					type: "list",
					member: {
						locationName: "VpcId"
					}
				},
				Sr4: {
					type: "list",
					member: {
						locationName: "item"
					}
				},
				Sr6: {
					type: "list",
					member: {
						locationName: "item",
						type: "structure",
						members: {
							CurrencyCode: {
								locationName: "currencyCode"
							},
							Duration: {
								locationName: "duration",
								type: "integer"
							},
							HostIdSet: {
								shape: "Sg2",
								locationName: "hostIdSet"
							},
							HostReservationId: {
								locationName: "hostReservationId"
							},
							HourlyPrice: {
								locationName: "hourlyPrice"
							},
							InstanceFamily: {
								locationName: "instanceFamily"
							},
							PaymentOption: {
								locationName: "paymentOption"
							},
							UpfrontPrice: {
								locationName: "upfrontPrice"
							}
						}
					}
				},
				Sre: {
					type: "structure",
					members: {
						HourlyPrice: {
							locationName: "hourlyPrice"
						},
						RemainingTotalValue: {
							locationName: "remainingTotalValue"
						},
						RemainingUpfrontValue: {
							locationName: "remainingUpfrontValue"
						}
					}
				},
				Srl: {
					type: "structure",
					members: {
						Comment: {},
						UploadEnd: {
							type: "timestamp"
						},
						UploadSize: {
							type: "double"
						},
						UploadStart: {
							type: "timestamp"
						}
					}
				},
				Sro: {
					type: "structure",
					members: {
						S3Bucket: {},
						S3Key: {}
					}
				},
				Srt: {
					type: "structure",
					required: ["Bytes", "Format", "ImportManifestUrl"],
					members: {
						Bytes: {
							locationName: "bytes",
							type: "long"
						},
						Format: {
							locationName: "format"
						},
						ImportManifestUrl: {
							locationName: "importManifestUrl"
						}
					}
				},
				Sru: {
					type: "structure",
					required: ["Size"],
					members: {
						Size: {
							locationName: "size",
							type: "long"
						}
					}
				},
				Ss9: {
					type: "list",
					member: {
						locationName: "UserId"
					}
				},
				Ssa: {
					type: "list",
					member: {
						locationName: "UserGroup"
					}
				},
				Ssb: {
					type: "list",
					member: {
						locationName: "ProductCode"
					}
				},
				Ssd: {
					type: "list",
					member: {
						locationName: "item",
						type: "structure",
						members: {
							Group: {},
							UserId: {}
						}
					}
				},
				Ssi: {
					type: "list",
					member: {
						shape: "Sd",
						locationName: "item"
					}
				},
				Stv: {
					type: "structure",
					members: {
						AllowDnsResolutionFromRemoteVpc: {
							type: "boolean"
						},
						AllowEgressFromLocalClassicLinkToRemoteVpc: {
							type: "boolean"
						},
						AllowEgressFromLocalVpcToRemoteClassicLink: {
							type: "boolean"
						}
					}
				},
				Stx: {
					type: "structure",
					members: {
						AllowDnsResolutionFromRemoteVpc: {
							locationName: "allowDnsResolutionFromRemoteVpc",
							type: "boolean"
						},
						AllowEgressFromLocalClassicLinkToRemoteVpc: {
							locationName: "allowEgressFromLocalClassicLinkToRemoteVpc",
							type: "boolean"
						},
						AllowEgressFromLocalVpcToRemoteClassicLink: {
							locationName: "allowEgressFromLocalVpcToRemoteClassicLink",
							type: "boolean"
						}
					}
				},
				Su3: {
					type: "list",
					member: {
						locationName: "item",
						type: "structure",
						members: {
							InstanceId: {
								locationName: "instanceId"
							},
							Monitoring: {
								shape: "Sig",
								locationName: "monitoring"
							}
						}
					}
				},
				Sw1: {
					type: "list",
					member: {
						locationName: "SecurityGroupId"
					}
				},
				Swc: {
					type: "list",
					member: {
						locationName: "item",
						type: "structure",
						members: {
							CurrentState: {
								shape: "Si2",
								locationName: "currentState"
							},
							InstanceId: {
								locationName: "instanceId"
							},
							PreviousState: {
								shape: "Si2",
								locationName: "previousState"
							}
						}
					}
				}
			}
		}
	}, {}],
	54: [function(e, t, r) {
		t.exports = {
			pagination: {
				DescribeAccountAttributes: {
					result_key: "AccountAttributes"
				},
				DescribeAddresses: {
					result_key: "Addresses"
				},
				DescribeAvailabilityZones: {
					result_key: "AvailabilityZones"
				},
				DescribeBundleTasks: {
					result_key: "BundleTasks"
				},
				DescribeConversionTasks: {
					result_key: "ConversionTasks"
				},
				DescribeCustomerGateways: {
					result_key: "CustomerGateways"
				},
				DescribeDhcpOptions: {
					result_key: "DhcpOptions"
				},
				DescribeExportTasks: {
					result_key: "ExportTasks"
				},
				DescribeImages: {
					result_key: "Images"
				},
				DescribeInstanceStatus: {
					input_token: "NextToken",
					limit_key: "MaxResults",
					output_token: "NextToken",
					result_key: "InstanceStatuses"
				},
				DescribeInstances: {
					input_token: "NextToken",
					limit_key: "MaxResults",
					output_token: "NextToken",
					result_key: "Reservations"
				},
				DescribeInternetGateways: {
					result_key: "InternetGateways"
				},
				DescribeKeyPairs: {
					result_key: "KeyPairs"
				},
				DescribeNatGateways: {
					input_token: "NextToken",
					limit_key: "MaxResults",
					output_token: "NextToken",
					result_key: "NatGateways"
				},
				DescribeNetworkAcls: {
					result_key: "NetworkAcls"
				},
				DescribeNetworkInterfaces: {
					result_key: "NetworkInterfaces"
				},
				DescribePlacementGroups: {
					result_key: "PlacementGroups"
				},
				DescribeRegions: {
					result_key: "Regions"
				},
				DescribeReservedInstances: {
					result_key: "ReservedInstances"
				},
				DescribeReservedInstancesListings: {
					result_key: "ReservedInstancesListings"
				},
				DescribeReservedInstancesModifications: {
					input_token: "NextToken",
					output_token: "NextToken",
					result_key: "ReservedInstancesModifications"
				},
				DescribeReservedInstancesOfferings: {
					input_token: "NextToken",
					limit_key: "MaxResults",
					output_token: "NextToken",
					result_key: "ReservedInstancesOfferings"
				},
				DescribeRouteTables: {
					result_key: "RouteTables"
				},
				DescribeSecurityGroups: {
					result_key: "SecurityGroups"
				},
				DescribeSnapshots: {
					input_token: "NextToken",
					limit_key: "MaxResults",
					output_token: "NextToken",
					result_key: "Snapshots"
				},
				DescribeSpotFleetRequests: {
					input_token: "NextToken",
					limit_key: "MaxResults",
					output_token: "NextToken",
					result_key: "SpotFleetRequestConfigs"
				},
				DescribeSpotInstanceRequests: {
					result_key: "SpotInstanceRequests"
				},
				DescribeSpotPriceHistory: {
					input_token: "NextToken",
					limit_key: "MaxResults",
					output_token: "NextToken",
					result_key: "SpotPriceHistory"
				},
				DescribeSubnets: {
					result_key: "Subnets"
				},
				DescribeTags: {
					input_token: "NextToken",
					limit_key: "MaxResults",
					output_token: "NextToken",
					result_key: "Tags"
				},
				DescribeVolumeStatus: {
					input_token: "NextToken",
					limit_key: "MaxResults",
					output_token: "NextToken",
					result_key: "VolumeStatuses"
				},
				DescribeVolumes: {
					input_token: "NextToken",
					limit_key: "MaxResults",
					output_token: "NextToken",
					result_key: "Volumes"
				},
				DescribeVpcPeeringConnections: {
					result_key: "VpcPeeringConnections"
				},
				DescribeVpcs: {
					result_key: "Vpcs"
				},
				DescribeVpnConnections: {
					result_key: "VpnConnections"
				},
				DescribeVpnGateways: {
					result_key: "VpnGateways"
				}
			}
		}
	}, {}],
	55: [function(e, t, r) {
		t.exports = {
			version: 2,
			waiters: {
				InstanceExists: {
					delay: 5,
					maxAttempts: 40,
					operation: "DescribeInstances",
					acceptors: [{
						matcher: "path",
						expected: !0,
						argument: "length(Reservations[]) > `0`",
						state: "success"
					}, {
						matcher: "error",
						expected: "InvalidInstanceID.NotFound",
						state: "retry"
					}]
				},
				BundleTaskComplete: {
					delay: 15,
					operation: "DescribeBundleTasks",
					maxAttempts: 40,
					acceptors: [{
						expected: "complete",
						matcher: "pathAll",
						state: "success",
						argument: "BundleTasks[].State"
					}, {
						expected: "failed",
						matcher: "pathAny",
						state: "failure",
						argument: "BundleTasks[].State"
					}]
				},
				ConversionTaskCancelled: {
					delay: 15,
					operation: "DescribeConversionTasks",
					maxAttempts: 40,
					acceptors: [{
						expected: "cancelled",
						matcher: "pathAll",
						state: "success",
						argument: "ConversionTasks[].State"
					}]
				},
				ConversionTaskCompleted: {
					delay: 15,
					operation: "DescribeConversionTasks",
					maxAttempts: 40,
					acceptors: [{
						expected: "completed",
						matcher: "pathAll",
						state: "success",
						argument: "ConversionTasks[].State"
					}, {
						expected: "cancelled",
						matcher: "pathAny",
						state: "failure",
						argument: "ConversionTasks[].State"
					}, {
						expected: "cancelling",
						matcher: "pathAny",
						state: "failure",
						argument: "ConversionTasks[].State"
					}]
				},
				ConversionTaskDeleted: {
					delay: 15,
					operation: "DescribeConversionTasks",
					maxAttempts: 40,
					acceptors: [{
						expected: "deleted",
						matcher: "pathAll",
						state: "success",
						argument: "ConversionTasks[].State"
					}]
				},
				CustomerGatewayAvailable: {
					delay: 15,
					operation: "DescribeCustomerGateways",
					maxAttempts: 40,
					acceptors: [{
						expected: "available",
						matcher: "pathAll",
						state: "success",
						argument: "CustomerGateways[].State"
					}, {
						expected: "deleted",
						matcher: "pathAny",
						state: "failure",
						argument: "CustomerGateways[].State"
					}, {
						expected: "deleting",
						matcher: "pathAny",
						state: "failure",
						argument: "CustomerGateways[].State"
					}]
				},
				ExportTaskCancelled: {
					delay: 15,
					operation: "DescribeExportTasks",
					maxAttempts: 40,
					acceptors: [{
						expected: "cancelled",
						matcher: "pathAll",
						state: "success",
						argument: "ExportTasks[].State"
					}]
				},
				ExportTaskCompleted: {
					delay: 15,
					operation: "DescribeExportTasks",
					maxAttempts: 40,
					acceptors: [{
						expected: "completed",
						matcher: "pathAll",
						state: "success",
						argument: "ExportTasks[].State"
					}]
				},
				ImageExists: {
					operation: "DescribeImages",
					maxAttempts: 40,
					delay: 15,
					acceptors: [{
						matcher: "path",
						expected: !0,
						argument: "length(Images[]) > `0`",
						state: "success"
					}, {
						matcher: "error",
						expected: "InvalidAMIID.NotFound",
						state: "retry"
					}]
				},
				ImageAvailable: {
					operation: "DescribeImages",
					maxAttempts: 40,
					delay: 15,
					acceptors: [{
						state: "success",
						matcher: "pathAll",
						argument: "Images[].State",
						expected: "available"
					}, {
						state: "failure",
						matcher: "pathAny",
						argument: "Images[].State",
						expected: "failed"
					}]
				},
				InstanceRunning: {
					delay: 15,
					operation: "DescribeInstances",
					maxAttempts: 40,
					acceptors: [{
						expected: "running",
						matcher: "pathAll",
						state: "success",
						argument: "Reservations[].Instances[].State.Name"
					}, {
						expected: "shutting-down",
						matcher: "pathAny",
						state: "failure",
						argument: "Reservations[].Instances[].State.Name"
					}, {
						expected: "terminated",
						matcher: "pathAny",
						state: "failure",
						argument: "Reservations[].Instances[].State.Name"
					}, {
						expected: "stopping",
						matcher: "pathAny",
						state: "failure",
						argument: "Reservations[].Instances[].State.Name"
					}, {
						matcher: "error",
						expected: "InvalidInstanceID.NotFound",
						state: "retry"
					}]
				},
				InstanceStatusOk: {
					operation: "DescribeInstanceStatus",
					maxAttempts: 40,
					delay: 15,
					acceptors: [{
						state: "success",
						matcher: "pathAll",
						argument: "InstanceStatuses[].InstanceStatus.Status",
						expected: "ok"
					}, {
						matcher: "error",
						expected: "InvalidInstanceID.NotFound",
						state: "retry"
					}]
				},
				InstanceStopped: {
					delay: 15,
					operation: "DescribeInstances",
					maxAttempts: 40,
					acceptors: [{
						expected: "stopped",
						matcher: "pathAll",
						state: "success",
						argument: "Reservations[].Instances[].State.Name"
					}, {
						expected: "pending",
						matcher: "pathAny",
						state: "failure",
						argument: "Reservations[].Instances[].State.Name"
					}, {
						expected: "terminated",
						matcher: "pathAny",
						state: "failure",
						argument: "Reservations[].Instances[].State.Name"
					}]
				},
				InstanceTerminated: {
					delay: 15,
					operation: "DescribeInstances",
					maxAttempts: 40,
					acceptors: [{
						expected: "terminated",
						matcher: "pathAll",
						state: "success",
						argument: "Reservations[].Instances[].State.Name"
					}, {
						expected: "pending",
						matcher: "pathAny",
						state: "failure",
						argument: "Reservations[].Instances[].State.Name"
					}, {
						expected: "stopping",
						matcher: "pathAny",
						state: "failure",
						argument: "Reservations[].Instances[].State.Name"
					}]
				},
				KeyPairExists: {
					operation: "DescribeKeyPairs",
					delay: 5,
					maxAttempts: 6,
					acceptors: [{
						expected: !0,
						matcher: "path",
						state: "success",
						argument: "length(KeyPairs[].KeyName) > `0`"
					}, {
						expected: "InvalidKeyPair.NotFound",
						matcher: "error",
						state: "retry"
					}]
				},
				NatGatewayAvailable: {
					operation: "DescribeNatGateways",
					delay: 15,
					maxAttempts: 40,
					acceptors: [{
						state: "success",
						matcher: "pathAll",
						argument: "NatGateways[].State",
						expected: "available"
					}, {
						state: "failure",
						matcher: "pathAny",
						argument: "NatGateways[].State",
						expected: "failed"
					}, {
						state: "failure",
						matcher: "pathAny",
						argument: "NatGateways[].State",
						expected: "deleting"
					}, {
						state: "failure",
						matcher: "pathAny",
						argument: "NatGateways[].State",
						expected: "deleted"
					}, {
						state: "retry",
						matcher: "error",
						expected: "NatGatewayNotFound"
					}]
				},
				NetworkInterfaceAvailable: {
					operation: "DescribeNetworkInterfaces",
					delay: 20,
					maxAttempts: 10,
					acceptors: [{
						expected: "available",
						matcher: "pathAll",
						state: "success",
						argument: "NetworkInterfaces[].Status"
					}, {
						expected: "InvalidNetworkInterfaceID.NotFound",
						matcher: "error",
						state: "failure"
					}]
				},
				PasswordDataAvailable: {
					operation: "GetPasswordData",
					maxAttempts: 40,
					delay: 15,
					acceptors: [{
						state: "success",
						matcher: "path",
						argument: "length(PasswordData) > `0`",
						expected: !0
					}]
				},
				SnapshotCompleted: {
					delay: 15,
					operation: "DescribeSnapshots",
					maxAttempts: 40,
					acceptors: [{
						expected: "completed",
						matcher: "pathAll",
						state: "success",
						argument: "Snapshots[].State"
					}]
				},
				SpotInstanceRequestFulfilled: {
					operation: "DescribeSpotInstanceRequests",
					maxAttempts: 40,
					delay: 15,
					acceptors: [{
						state: "success",
						matcher: "pathAll",
						argument: "SpotInstanceRequests[].Status.Code",
						expected: "fulfilled"
					}, {
						state: "success",
						matcher: "pathAll",
						argument: "SpotInstanceRequests[].Status.Code",
						expected: "request-canceled-and-instance-running"
					}, {
						state: "failure",
						matcher: "pathAny",
						argument: "SpotInstanceRequests[].Status.Code",
						expected: "schedule-expired"
					}, {
						state: "failure",
						matcher: "pathAny",
						argument: "SpotInstanceRequests[].Status.Code",
						expected: "canceled-before-fulfillment"
					}, {
						state: "failure",
						matcher: "pathAny",
						argument: "SpotInstanceRequests[].Status.Code",
						expected: "bad-parameters"
					}, {
						state: "failure",
						matcher: "pathAny",
						argument: "SpotInstanceRequests[].Status.Code",
						expected: "system-error"
					}, {
						state: "retry",
						matcher: "error",
						expected: "InvalidSpotInstanceRequestID.NotFound"
					}]
				},
				SubnetAvailable: {
					delay: 15,
					operation: "DescribeSubnets",
					maxAttempts: 40,
					acceptors: [{
						expected: "available",
						matcher: "pathAll",
						state: "success",
						argument: "Subnets[].State"
					}]
				},
				SystemStatusOk: {
					operation: "DescribeInstanceStatus",
					maxAttempts: 40,
					delay: 15,
					acceptors: [{
						state: "success",
						matcher: "pathAll",
						argument: "InstanceStatuses[].SystemStatus.Status",
						expected: "ok"
					}]
				},
				VolumeAvailable: {
					delay: 15,
					operation: "DescribeVolumes",
					maxAttempts: 40,
					acceptors: [{
						expected: "available",
						matcher: "pathAll",
						state: "success",
						argument: "Volumes[].State"
					}, {
						expected: "deleted",
						matcher: "pathAny",
						state: "failure",
						argument: "Volumes[].State"
					}]
				},
				VolumeDeleted: {
					delay: 15,
					operation: "DescribeVolumes",
					maxAttempts: 40,
					acceptors: [{
						expected: "deleted",
						matcher: "pathAll",
						state: "success",
						argument: "Volumes[].State"
					}, {
						matcher: "error",
						expected: "InvalidVolume.NotFound",
						state: "success"
					}]
				},
				VolumeInUse: {
					delay: 15,
					operation: "DescribeVolumes",
					maxAttempts: 40,
					acceptors: [{
						expected: "in-use",
						matcher: "pathAll",
						state: "success",
						argument: "Volumes[].State"
					}, {
						expected: "deleted",
						matcher: "pathAny",
						state: "failure",
						argument: "Volumes[].State"
					}]
				},
				VpcAvailable: {
					delay: 15,
					operation: "DescribeVpcs",
					maxAttempts: 40,
					acceptors: [{
						expected: "available",
						matcher: "pathAll",
						state: "success",
						argument: "Vpcs[].State"
					}]
				},
				VpcExists: {
					operation: "DescribeVpcs",
					delay: 1,
					maxAttempts: 5,
					acceptors: [{
						matcher: "status",
						expected: 200,
						state: "success"
					}, {
						matcher: "error",
						expected: "InvalidVpcID.NotFound",
						state: "retry"
					}]
				},
				VpnConnectionAvailable: {
					delay: 15,
					operation: "DescribeVpnConnections",
					maxAttempts: 40,
					acceptors: [{
						expected: "available",
						matcher: "pathAll",
						state: "success",
						argument: "VpnConnections[].State"
					}, {
						expected: "deleting",
						matcher: "pathAny",
						state: "failure",
						argument: "VpnConnections[].State"
					}, {
						expected: "deleted",
						matcher: "pathAny",
						state: "failure",
						argument: "VpnConnections[].State"
					}]
				},
				VpnConnectionDeleted: {
					delay: 15,
					operation: "DescribeVpnConnections",
					maxAttempts: 40,
					acceptors: [{
						expected: "deleted",
						matcher: "pathAll",
						state: "success",
						argument: "VpnConnections[].State"
					}, {
						expected: "pending",
						matcher: "pathAny",
						state: "failure",
						argument: "VpnConnections[].State"
					}]
				},
				VpcPeeringConnectionExists: {
					delay: 15,
					operation: "DescribeVpcPeeringConnections",
					maxAttempts: 40,
					acceptors: [{
						matcher: "status",
						expected: 200,
						state: "success"
					}, {
						matcher: "error",
						expected: "InvalidVpcPeeringConnectionID.NotFound",
						state: "retry"
					}]
				},
				VpcPeeringConnectionDeleted: {
					delay: 15,
					operation: "DescribeVpcPeeringConnections",
					maxAttempts: 40,
					acceptors: [{
						expected: "deleted",
						matcher: "pathAll",
						state: "success",
						argument: "VpcPeeringConnections[].Status.Code"
					}, {
						matcher: "error",
						expected: "InvalidVpcPeeringConnectionID.NotFound",
						state: "success"
					}]
				}
			}
		}
	}, {}],
	56: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2015-09-21",
				endpointPrefix: "ecr",
				jsonVersion: "1.1",
				protocol: "json",
				serviceAbbreviation: "Amazon ECR",
				serviceFullName: "Amazon EC2 Container Registry",
				signatureVersion: "v4",
				targetPrefix: "AmazonEC2ContainerRegistry_V20150921",
				uid: "ecr-2015-09-21"
			},
			operations: {
				BatchCheckLayerAvailability: {
					input: {
						type: "structure",
						required: ["repositoryName", "layerDigests"],
						members: {
							registryId: {},
							repositoryName: {},
							layerDigests: {
								type: "list",
								member: {}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							layers: {
								type: "list",
								member: {
									type: "structure",
									members: {
										layerDigest: {},
										layerAvailability: {},
										layerSize: {
											type: "long"
										},
										mediaType: {}
									}
								}
							},
							failures: {
								type: "list",
								member: {
									type: "structure",
									members: {
										layerDigest: {},
										failureCode: {},
										failureReason: {}
									}
								}
							}
						}
					}
				},
				BatchDeleteImage: {
					input: {
						type: "structure",
						required: ["repositoryName", "imageIds"],
						members: {
							registryId: {},
							repositoryName: {},
							imageIds: {
								shape: "Si"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							imageIds: {
								shape: "Si"
							},
							failures: {
								shape: "Sn"
							}
						}
					}
				},
				BatchGetImage: {
					input: {
						type: "structure",
						required: ["repositoryName", "imageIds"],
						members: {
							registryId: {},
							repositoryName: {},
							imageIds: {
								shape: "Si"
							},
							acceptedMediaTypes: {
								type: "list",
								member: {}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							images: {
								type: "list",
								member: {
									shape: "Sv"
								}
							},
							failures: {
								shape: "Sn"
							}
						}
					}
				},
				CompleteLayerUpload: {
					input: {
						type: "structure",
						required: ["repositoryName", "uploadId", "layerDigests"],
						members: {
							registryId: {},
							repositoryName: {},
							uploadId: {},
							layerDigests: {
								type: "list",
								member: {}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							registryId: {},
							repositoryName: {},
							uploadId: {},
							layerDigest: {}
						}
					}
				},
				CreateRepository: {
					input: {
						type: "structure",
						required: ["repositoryName"],
						members: {
							repositoryName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							repository: {
								shape: "S13"
							}
						}
					}
				},
				DeleteLifecyclePolicy: {
					input: {
						type: "structure",
						required: ["repositoryName"],
						members: {
							registryId: {},
							repositoryName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							registryId: {},
							repositoryName: {},
							lifecyclePolicyText: {},
							lastEvaluatedAt: {
								type: "timestamp"
							}
						}
					}
				},
				DeleteRepository: {
					input: {
						type: "structure",
						required: ["repositoryName"],
						members: {
							registryId: {},
							repositoryName: {},
							force: {
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							repository: {
								shape: "S13"
							}
						}
					}
				},
				DeleteRepositoryPolicy: {
					input: {
						type: "structure",
						required: ["repositoryName"],
						members: {
							registryId: {},
							repositoryName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							registryId: {},
							repositoryName: {},
							policyText: {}
						}
					}
				},
				DescribeImages: {
					input: {
						type: "structure",
						required: ["repositoryName"],
						members: {
							registryId: {},
							repositoryName: {},
							imageIds: {
								shape: "Si"
							},
							nextToken: {},
							maxResults: {
								type: "integer"
							},
							filter: {
								type: "structure",
								members: {
									tagStatus: {}
								}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							imageDetails: {
								type: "list",
								member: {
									type: "structure",
									members: {
										registryId: {},
										repositoryName: {},
										imageDigest: {},
										imageTags: {
											shape: "S1p"
										},
										imageSizeInBytes: {
											type: "long"
										},
										imagePushedAt: {
											type: "timestamp"
										}
									}
								}
							},
							nextToken: {}
						}
					}
				},
				DescribeRepositories: {
					input: {
						type: "structure",
						members: {
							registryId: {},
							repositoryNames: {
								type: "list",
								member: {}
							},
							nextToken: {},
							maxResults: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							repositories: {
								type: "list",
								member: {
									shape: "S13"
								}
							},
							nextToken: {}
						}
					}
				},
				GetAuthorizationToken: {
					input: {
						type: "structure",
						members: {
							registryIds: {
								type: "list",
								member: {}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							authorizationData: {
								type: "list",
								member: {
									type: "structure",
									members: {
										authorizationToken: {},
										expiresAt: {
											type: "timestamp"
										},
										proxyEndpoint: {}
									}
								}
							}
						}
					}
				},
				GetDownloadUrlForLayer: {
					input: {
						type: "structure",
						required: ["repositoryName", "layerDigest"],
						members: {
							registryId: {},
							repositoryName: {},
							layerDigest: {}
						}
					},
					output: {
						type: "structure",
						members: {
							downloadUrl: {},
							layerDigest: {}
						}
					}
				},
				GetLifecyclePolicy: {
					input: {
						type: "structure",
						required: ["repositoryName"],
						members: {
							registryId: {},
							repositoryName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							registryId: {},
							repositoryName: {},
							lifecyclePolicyText: {},
							lastEvaluatedAt: {
								type: "timestamp"
							}
						}
					}
				},
				GetLifecyclePolicyPreview: {
					input: {
						type: "structure",
						required: ["repositoryName"],
						members: {
							registryId: {},
							repositoryName: {},
							imageIds: {
								shape: "Si"
							},
							nextToken: {},
							maxResults: {
								type: "integer"
							},
							filter: {
								type: "structure",
								members: {
									tagStatus: {}
								}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							registryId: {},
							repositoryName: {},
							lifecyclePolicyText: {},
							status: {},
							nextToken: {},
							previewResults: {
								type: "list",
								member: {
									type: "structure",
									members: {
										imageTags: {
											shape: "S1p"
										},
										imageDigest: {},
										imagePushedAt: {
											type: "timestamp"
										},
										action: {
											type: "structure",
											members: {
												type: {}
											}
										},
										appliedRulePriority: {
											type: "integer"
										}
									}
								}
							},
							summary: {
								type: "structure",
								members: {
									expiringImageTotalCount: {
										type: "integer"
									}
								}
							}
						}
					}
				},
				GetRepositoryPolicy: {
					input: {
						type: "structure",
						required: ["repositoryName"],
						members: {
							registryId: {},
							repositoryName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							registryId: {},
							repositoryName: {},
							policyText: {}
						}
					}
				},
				InitiateLayerUpload: {
					input: {
						type: "structure",
						required: ["repositoryName"],
						members: {
							registryId: {},
							repositoryName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							uploadId: {},
							partSize: {
								type: "long"
							}
						}
					}
				},
				ListImages: {
					input: {
						type: "structure",
						required: ["repositoryName"],
						members: {
							registryId: {},
							repositoryName: {},
							nextToken: {},
							maxResults: {
								type: "integer"
							},
							filter: {
								type: "structure",
								members: {
									tagStatus: {}
								}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							imageIds: {
								shape: "Si"
							},
							nextToken: {}
						}
					}
				},
				PutImage: {
					input: {
						type: "structure",
						required: ["repositoryName", "imageManifest"],
						members: {
							registryId: {},
							repositoryName: {},
							imageManifest: {},
							imageTag: {}
						}
					},
					output: {
						type: "structure",
						members: {
							image: {
								shape: "Sv"
							}
						}
					}
				},
				PutLifecyclePolicy: {
					input: {
						type: "structure",
						required: ["repositoryName", "lifecyclePolicyText"],
						members: {
							registryId: {},
							repositoryName: {},
							lifecyclePolicyText: {}
						}
					},
					output: {
						type: "structure",
						members: {
							registryId: {},
							repositoryName: {},
							lifecyclePolicyText: {}
						}
					}
				},
				SetRepositoryPolicy: {
					input: {
						type: "structure",
						required: ["repositoryName", "policyText"],
						members: {
							registryId: {},
							repositoryName: {},
							policyText: {},
							force: {
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							registryId: {},
							repositoryName: {},
							policyText: {}
						}
					}
				},
				StartLifecyclePolicyPreview: {
					input: {
						type: "structure",
						required: ["repositoryName"],
						members: {
							registryId: {},
							repositoryName: {},
							lifecyclePolicyText: {}
						}
					},
					output: {
						type: "structure",
						members: {
							registryId: {},
							repositoryName: {},
							lifecyclePolicyText: {},
							status: {}
						}
					}
				},
				UploadLayerPart: {
					input: {
						type: "structure",
						required: ["repositoryName", "uploadId", "partFirstByte", "partLastByte", "layerPartBlob"],
						members: {
							registryId: {},
							repositoryName: {},
							uploadId: {},
							partFirstByte: {
								type: "long"
							},
							partLastByte: {
								type: "long"
							},
							layerPartBlob: {
								type: "blob"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							registryId: {},
							repositoryName: {},
							uploadId: {},
							lastByteReceived: {
								type: "long"
							}
						}
					}
				}
			},
			shapes: {
				Si: {
					type: "list",
					member: {
						shape: "Sj"
					}
				},
				Sj: {
					type: "structure",
					members: {
						imageDigest: {},
						imageTag: {}
					}
				},
				Sn: {
					type: "list",
					member: {
						type: "structure",
						members: {
							imageId: {
								shape: "Sj"
							},
							failureCode: {},
							failureReason: {}
						}
					}
				},
				Sv: {
					type: "structure",
					members: {
						registryId: {},
						repositoryName: {},
						imageId: {
							shape: "Sj"
						},
						imageManifest: {}
					}
				},
				S13: {
					type: "structure",
					members: {
						repositoryArn: {},
						registryId: {},
						repositoryName: {},
						repositoryUri: {},
						createdAt: {
							type: "timestamp"
						}
					}
				},
				S1p: {
					type: "list",
					member: {}
				}
			}
		}
	}, {}],
	57: [function(e, t, r) {
		t.exports = {
			pagination: {
				DescribeImages: {
					input_token: "nextToken",
					limit_key: "maxResults",
					output_token: "nextToken",
					result_key: "imageDetails"
				},
				DescribeRepositories: {
					input_token: "nextToken",
					limit_key: "maxResults",
					output_token: "nextToken",
					result_key: "repositories"
				},
				ListImages: {
					input_token: "nextToken",
					limit_key: "maxResults",
					output_token: "nextToken",
					result_key: "imageIds"
				}
			}
		}
	}, {}],
	58: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2014-11-13",
				endpointPrefix: "ecs",
				jsonVersion: "1.1",
				protocol: "json",
				serviceAbbreviation: "Amazon ECS",
				serviceFullName: "Amazon EC2 Container Service",
				serviceId: "ECS",
				signatureVersion: "v4",
				targetPrefix: "AmazonEC2ContainerServiceV20141113",
				uid: "ecs-2014-11-13"
			},
			operations: {
				CreateCluster: {
					input: {
						type: "structure",
						members: {
							clusterName: {}
						}
					},
					output: {
						type: "structure",
						members: {
							cluster: {
								shape: "S4"
							}
						}
					}
				},
				CreateService: {
					input: {
						type: "structure",
						required: ["serviceName", "taskDefinition", "desiredCount"],
						members: {
							cluster: {},
							serviceName: {},
							taskDefinition: {},
							loadBalancers: {
								shape: "S9"
							},
							serviceRegistries: {
								shape: "Sc"
							},
							desiredCount: {
								type: "integer"
							},
							clientToken: {},
							launchType: {},
							platformVersion: {},
							role: {},
							deploymentConfiguration: {
								shape: "Sf"
							},
							placementConstraints: {
								shape: "Sg"
							},
							placementStrategy: {
								shape: "Sj"
							},
							networkConfiguration: {
								shape: "Sm"
							},
							healthCheckGracePeriodSeconds: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							service: {
								shape: "Sr"
							}
						}
					}
				},
				DeleteAttributes: {
					input: {
						type: "structure",
						required: ["attributes"],
						members: {
							cluster: {},
							attributes: {
								shape: "Sy"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							attributes: {
								shape: "Sy"
							}
						}
					}
				},
				DeleteCluster: {
					input: {
						type: "structure",
						required: ["cluster"],
						members: {
							cluster: {}
						}
					},
					output: {
						type: "structure",
						members: {
							cluster: {
								shape: "S4"
							}
						}
					}
				},
				DeleteService: {
					input: {
						type: "structure",
						required: ["service"],
						members: {
							cluster: {},
							service: {}
						}
					},
					output: {
						type: "structure",
						members: {
							service: {
								shape: "Sr"
							}
						}
					}
				},
				DeregisterContainerInstance: {
					input: {
						type: "structure",
						required: ["containerInstance"],
						members: {
							cluster: {},
							containerInstance: {},
							force: {
								type: "boolean"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							containerInstance: {
								shape: "S19"
							}
						}
					}
				},
				DeregisterTaskDefinition: {
					input: {
						type: "structure",
						required: ["taskDefinition"],
						members: {
							taskDefinition: {}
						}
					},
					output: {
						type: "structure",
						members: {
							taskDefinition: {
								shape: "S1m"
							}
						}
					}
				},
				DescribeClusters: {
					input: {
						type: "structure",
						members: {
							clusters: {
								shape: "So"
							},
							include: {
								type: "list",
								member: {}
							}
						}
					},
					output: {
						type: "structure",
						members: {
							clusters: {
								type: "list",
								member: {
									shape: "S4"
								}
							},
							failures: {
								shape: "S2v"
							}
						}
					}
				},
				DescribeContainerInstances: {
					input: {
						type: "structure",
						required: ["containerInstances"],
						members: {
							cluster: {},
							containerInstances: {
								shape: "So"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							containerInstances: {
								shape: "S2z"
							},
							failures: {
								shape: "S2v"
							}
						}
					}
				},
				DescribeServices: {
					input: {
						type: "structure",
						required: ["services"],
						members: {
							cluster: {},
							services: {
								shape: "So"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							services: {
								type: "list",
								member: {
									shape: "Sr"
								}
							},
							failures: {
								shape: "S2v"
							}
						}
					}
				},
				DescribeTaskDefinition: {
					input: {
						type: "structure",
						required: ["taskDefinition"],
						members: {
							taskDefinition: {}
						}
					},
					output: {
						type: "structure",
						members: {
							taskDefinition: {
								shape: "S1m"
							}
						}
					}
				},
				DescribeTasks: {
					input: {
						type: "structure",
						required: ["tasks"],
						members: {
							cluster: {},
							tasks: {
								shape: "So"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							tasks: {
								shape: "S37"
							},
							failures: {
								shape: "S2v"
							}
						}
					}
				},
				DiscoverPollEndpoint: {
					input: {
						type: "structure",
						members: {
							containerInstance: {},
							cluster: {}
						}
					},
					output: {
						type: "structure",
						members: {
							endpoint: {},
							telemetryEndpoint: {}
						}
					}
				},
				ListAttributes: {
					input: {
						type: "structure",
						required: ["targetType"],
						members: {
							cluster: {},
							targetType: {},
							attributeName: {},
							attributeValue: {},
							nextToken: {},
							maxResults: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							attributes: {
								shape: "Sy"
							},
							nextToken: {}
						}
					}
				},
				ListClusters: {
					input: {
						type: "structure",
						members: {
							nextToken: {},
							maxResults: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							clusterArns: {
								shape: "So"
							},
							nextToken: {}
						}
					}
				},
				ListContainerInstances: {
					input: {
						type: "structure",
						members: {
							cluster: {},
							filter: {},
							nextToken: {},
							maxResults: {
								type: "integer"
							},
							status: {}
						}
					},
					output: {
						type: "structure",
						members: {
							containerInstanceArns: {
								shape: "So"
							},
							nextToken: {}
						}
					}
				},
				ListServices: {
					input: {
						type: "structure",
						members: {
							cluster: {},
							nextToken: {},
							maxResults: {
								type: "integer"
							},
							launchType: {}
						}
					},
					output: {
						type: "structure",
						members: {
							serviceArns: {
								shape: "So"
							},
							nextToken: {}
						}
					}
				},
				ListTaskDefinitionFamilies: {
					input: {
						type: "structure",
						members: {
							familyPrefix: {},
							status: {},
							nextToken: {},
							maxResults: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							families: {
								shape: "So"
							},
							nextToken: {}
						}
					}
				},
				ListTaskDefinitions: {
					input: {
						type: "structure",
						members: {
							familyPrefix: {},
							status: {},
							sort: {},
							nextToken: {},
							maxResults: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							taskDefinitionArns: {
								shape: "So"
							},
							nextToken: {}
						}
					}
				},
				ListTasks: {
					input: {
						type: "structure",
						members: {
							cluster: {},
							containerInstance: {},
							family: {},
							nextToken: {},
							maxResults: {
								type: "integer"
							},
							startedBy: {},
							serviceName: {},
							desiredStatus: {},
							launchType: {}
						}
					},
					output: {
						type: "structure",
						members: {
							taskArns: {
								shape: "So"
							},
							nextToken: {}
						}
					}
				},
				PutAttributes: {
					input: {
						type: "structure",
						required: ["attributes"],
						members: {
							cluster: {},
							attributes: {
								shape: "Sy"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							attributes: {
								shape: "Sy"
							}
						}
					}
				},
				RegisterContainerInstance: {
					input: {
						type: "structure",
						members: {
							cluster: {},
							instanceIdentityDocument: {},
							instanceIdentityDocumentSignature: {},
							totalResources: {
								shape: "S1c"
							},
							versionInfo: {
								shape: "S1b"
							},
							containerInstanceArn: {},
							attributes: {
								shape: "Sy"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							containerInstance: {
								shape: "S19"
							}
						}
					}
				},
				RegisterTaskDefinition: {
					input: {
						type: "structure",
						required: ["family", "containerDefinitions"],
						members: {
							family: {},
							taskRoleArn: {},
							executionRoleArn: {},
							networkMode: {},
							containerDefinitions: {
								shape: "S1n"
							},
							volumes: {
								shape: "S2g"
							},
							placementConstraints: {
								shape: "S2l"
							},
							requiresCompatibilities: {
								shape: "S2o"
							},
							cpu: {},
							memory: {}
						}
					},
					output: {
						type: "structure",
						members: {
							taskDefinition: {
								shape: "S1m"
							}
						}
					}
				},
				RunTask: {
					input: {
						type: "structure",
						required: ["taskDefinition"],
						members: {
							cluster: {},
							taskDefinition: {},
							overrides: {
								shape: "S39"
							},
							count: {
								type: "integer"
							},
							startedBy: {},
							group: {},
							placementConstraints: {
								shape: "Sg"
							},
							placementStrategy: {
								shape: "Sj"
							},
							launchType: {},
							platformVersion: {},
							networkConfiguration: {
								shape: "Sm"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							tasks: {
								shape: "S37"
							},
							failures: {
								shape: "S2v"
							}
						}
					}
				},
				StartTask: {
					input: {
						type: "structure",
						required: ["taskDefinition", "containerInstances"],
						members: {
							cluster: {},
							taskDefinition: {},
							overrides: {
								shape: "S39"
							},
							containerInstances: {
								shape: "So"
							},
							startedBy: {},
							group: {},
							networkConfiguration: {
								shape: "Sm"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							tasks: {
								shape: "S37"
							},
							failures: {
								shape: "S2v"
							}
						}
					}
				},
				StopTask: {
					input: {
						type: "structure",
						required: ["task"],
						members: {
							cluster: {},
							task: {},
							reason: {}
						}
					},
					output: {
						type: "structure",
						members: {
							task: {
								shape: "S38"
							}
						}
					}
				},
				SubmitContainerStateChange: {
					input: {
						type: "structure",
						members: {
							cluster: {},
							task: {},
							containerName: {},
							status: {},
							exitCode: {
								type: "integer"
							},
							reason: {},
							networkBindings: {
								shape: "S3e"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							acknowledgment: {}
						}
					}
				},
				SubmitTaskStateChange: {
					input: {
						type: "structure",
						members: {
							cluster: {},
							task: {},
							status: {},
							reason: {},
							containers: {
								type: "list",
								member: {
									type: "structure",
									members: {
										containerName: {},
										exitCode: {
											type: "integer"
										},
										networkBindings: {
											shape: "S3e"
										},
										reason: {},
										status: {}
									}
								}
							},
							attachments: {
								type: "list",
								member: {
									type: "structure",
									required: ["attachmentArn", "status"],
									members: {
										attachmentArn: {},
										status: {}
									}
								}
							},
							pullStartedAt: {
								type: "timestamp"
							},
							pullStoppedAt: {
								type: "timestamp"
							},
							executionStoppedAt: {
								type: "timestamp"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							acknowledgment: {}
						}
					}
				},
				UpdateContainerAgent: {
					input: {
						type: "structure",
						required: ["containerInstance"],
						members: {
							cluster: {},
							containerInstance: {}
						}
					},
					output: {
						type: "structure",
						members: {
							containerInstance: {
								shape: "S19"
							}
						}
					}
				},
				UpdateContainerInstancesState: {
					input: {
						type: "structure",
						required: ["containerInstances", "status"],
						members: {
							cluster: {},
							containerInstances: {
								shape: "So"
							},
							status: {}
						}
					},
					output: {
						type: "structure",
						members: {
							containerInstances: {
								shape: "S2z"
							},
							failures: {
								shape: "S2v"
							}
						}
					}
				},
				UpdateService: {
					input: {
						type: "structure",
						required: ["service"],
						members: {
							cluster: {},
							service: {},
							desiredCount: {
								type: "integer"
							},
							taskDefinition: {},
							deploymentConfiguration: {
								shape: "Sf"
							},
							networkConfiguration: {
								shape: "Sm"
							},
							platformVersion: {},
							forceNewDeployment: {
								type: "boolean"
							},
							healthCheckGracePeriodSeconds: {
								type: "integer"
							}
						}
					},
					output: {
						type: "structure",
						members: {
							service: {
								shape: "Sr"
							}
						}
					}
				}
			},
			shapes: {
				S4: {
					type: "structure",
					members: {
						clusterArn: {},
						clusterName: {},
						status: {},
						registeredContainerInstancesCount: {
							type: "integer"
						},
						runningTasksCount: {
							type: "integer"
						},
						pendingTasksCount: {
							type: "integer"
						},
						activeServicesCount: {
							type: "integer"
						},
						statistics: {
							type: "list",
							member: {
								shape: "S7"
							}
						}
					}
				},
				S7: {
					type: "structure",
					members: {
						name: {},
						value: {}
					}
				},
				S9: {
					type: "list",
					member: {
						type: "structure",
						members: {
							targetGroupArn: {},
							loadBalancerName: {},
							containerName: {},
							containerPort: {
								type: "integer"
							}
						}
					}
				},
				Sc: {
					type: "list",
					member: {
						type: "structure",
						members: {
							registryArn: {},
							port: {
								type: "integer"
							}
						}
					}
				},
				Sf: {
					type: "structure",
					members: {
						maximumPercent: {
							type: "integer"
						},
						minimumHealthyPercent: {
							type: "integer"
						}
					}
				},
				Sg: {
					type: "list",
					member: {
						type: "structure",
						members: {
							type: {},
							expression: {}
						}
					}
				},
				Sj: {
					type: "list",
					member: {
						type: "structure",
						members: {
							type: {},
							field: {}
						}
					}
				},
				Sm: {
					type: "structure",
					members: {
						awsvpcConfiguration: {
							type: "structure",
							required: ["subnets"],
							members: {
								subnets: {
									shape: "So"
								},
								securityGroups: {
									shape: "So"
								},
								assignPublicIp: {}
							}
						}
					}
				},
				So: {
					type: "list",
					member: {}
				},
				Sr: {
					type: "structure",
					members: {
						serviceArn: {},
						serviceName: {},
						clusterArn: {},
						loadBalancers: {
							shape: "S9"
						},
						serviceRegistries: {
							shape: "Sc"
						},
						status: {},
						desiredCount: {
							type: "integer"
						},
						runningCount: {
							type: "integer"
						},
						pendingCount: {
							type: "integer"
						},
						launchType: {},
						platformVersion: {},
						taskDefinition: {},
						deploymentConfiguration: {
							shape: "Sf"
						},
						deployments: {
							type: "list",
							member: {
								type: "structure",
								members: {
									id: {},
									status: {},
									taskDefinition: {},
									desiredCount: {
										type: "integer"
									},
									pendingCount: {
										type: "integer"
									},
									runningCount: {
										type: "integer"
									},
									createdAt: {
										type: "timestamp"
									},
									updatedAt: {
										type: "timestamp"
									},
									launchType: {},
									platformVersion: {},
									networkConfiguration: {
										shape: "Sm"
									}
								}
							}
						},
						roleArn: {},
						events: {
							type: "list",
							member: {
								type: "structure",
								members: {
									id: {},
									createdAt: {
										type: "timestamp"
									},
									message: {}
								}
							}
						},
						createdAt: {
							type: "timestamp"
						},
						placementConstraints: {
							shape: "Sg"
						},
						placementStrategy: {
							shape: "Sj"
						},
						networkConfiguration: {
							shape: "Sm"
						},
						healthCheckGracePeriodSeconds: {
							type: "integer"
						}
					}
				},
				Sy: {
					type: "list",
					member: {
						shape: "Sz"
					}
				},
				Sz: {
					type: "structure",
					required: ["name"],
					members: {
						name: {},
						value: {},
						targetType: {},
						targetId: {}
					}
				},
				S19: {
					type: "structure",
					members: {
						containerInstanceArn: {},
						ec2InstanceId: {},
						version: {
							type: "long"
						},
						versionInfo: {
							shape: "S1b"
						},
						remainingResources: {
							shape: "S1c"
						},
						registeredResources: {
							shape: "S1c"
						},
						status: {},
						agentConnected: {
							type: "boolean"
						},
						runningTasksCount: {
							type: "integer"
						},
						pendingTasksCount: {
							type: "integer"
						},
						agentUpdateStatus: {},
						attributes: {
							shape: "Sy"
						},
						registeredAt: {
							type: "timestamp"
						},
						attachments: {
							shape: "S1h"
						}
					}
				},
				S1b: {
					type: "structure",
					members: {
						agentVersion: {},
						agentHash: {},
						dockerVersion: {}
					}
				},
				S1c: {
					type: "list",
					member: {
						type: "structure",
						members: {
							name: {},
							type: {},
							doubleValue: {
								type: "double"
							},
							longValue: {
								type: "long"
							},
							integerValue: {
								type: "integer"
							},
							stringSetValue: {
								shape: "So"
							}
						}
					}
				},
				S1h: {
					type: "list",
					member: {
						type: "structure",
						members: {
							id: {},
							type: {},
							status: {},
							details: {
								type: "list",
								member: {
									shape: "S7"
								}
							}
						}
					}
				},
				S1m: {
					type: "structure",
					members: {
						taskDefinitionArn: {},
						containerDefinitions: {
							shape: "S1n"
						},
						family: {},
						taskRoleArn: {},
						executionRoleArn: {},
						networkMode: {},
						revision: {
							type: "integer"
						},
						volumes: {
							shape: "S2g"
						},
						status: {},
						requiresAttributes: {
							type: "list",
							member: {
								shape: "Sz"
							}
						},
						placementConstraints: {
							shape: "S2l"
						},
						compatibilities: {
							shape: "S2o"
						},
						requiresCompatibilities: {
							shape: "S2o"
						},
						cpu: {},
						memory: {}
					}
				},
				S1n: {
					type: "list",
					member: {
						type: "structure",
						members: {
							name: {},
							image: {},
							cpu: {
								type: "integer"
							},
							memory: {
								type: "integer"
							},
							memoryReservation: {
								type: "integer"
							},
							links: {
								shape: "So"
							},
							portMappings: {
								type: "list",
								member: {
									type: "structure",
									members: {
										containerPort: {
											type: "integer"
										},
										hostPort: {
											type: "integer"
										},
										protocol: {}
									}
								}
							},
							essential: {
								type: "boolean"
							},
							entryPoint: {
								shape: "So"
							},
							command: {
								shape: "So"
							},
							environment: {
								shape: "S1s"
							},
							mountPoints: {
								type: "list",
								member: {
									type: "structure",
									members: {
										sourceVolume: {},
										containerPath: {},
										readOnly: {
											type: "boolean"
										}
									}
								}
							},
							volumesFrom: {
								type: "list",
								member: {
									type: "structure",
									members: {
										sourceContainer: {},
										readOnly: {
											type: "boolean"
										}
									}
								}
							},
							linuxParameters: {
								type: "structure",
								members: {
									capabilities: {
										type: "structure",
										members: {
											add: {
												shape: "So"
											},
											drop: {
												shape: "So"
											}
										}
									},
									devices: {
										type: "list",
										member: {
											type: "structure",
											required: ["hostPath"],
											members: {
												hostPath: {},
												containerPath: {},
												permissions: {
													type: "list",
													member: {}
												}
											}
										}
									},
									initProcessEnabled: {
										type: "boolean"
									},
									sharedMemorySize: {
										type: "integer"
									},
									tmpfs: {
										type: "list",
										member: {
											type: "structure",
											required: ["containerPath", "size"],
											members: {
												containerPath: {},
												size: {
													type: "integer"
												},
												mountOptions: {
													shape: "So"
												}
											}
										}
									}
								}
							},
							hostname: {},
							user: {},
							workingDirectory: {},
							disableNetworking: {
								type: "boolean"
							},
							privileged: {
								type: "boolean"
							},
							readonlyRootFilesystem: {
								type: "boolean"
							},
							dnsServers: {
								shape: "So"
							},
							dnsSearchDomains: {
								shape: "So"
							},
							extraHosts: {
								type: "list",
								member: {
									type: "structure",
									required: ["hostname", "ipAddress"],
									members: {
										hostname: {},
										ipAddress: {}
									}
								}
							},
							dockerSecurityOptions: {
								shape: "So"
							},
							dockerLabels: {
								type: "map",
								key: {},
								value: {}
							},
							ulimits: {
								type: "list",
								member: {
									type: "structure",
									required: ["name", "softLimit", "hardLimit"],
									members: {
										name: {},
										softLimit: {
											type: "integer"
										},
										hardLimit: {
											type: "integer"
										}
									}
								}
							},
							logConfiguration: {
								type: "structure",
								required: ["logDriver"],
								members: {
									logDriver: {},
									options: {
										type: "map",
										key: {},
										value: {}
									}
								}
							},
							healthCheck: {
								type: "structure",
								required: ["command"],
								members: {
									command: {
										shape: "So"
									},
									interval: {
										type: "integer"
									},
									timeout: {
										type: "integer"
									},
									retries: {
										type: "integer"
									},
									startPeriod: {
										type: "integer"
									}
								}
							}
						}
					}
				},
				S1s: {
					type: "list",
					member: {
						shape: "S7"
					}
				},
				S2g: {
					type: "list",
					member: {
						type: "structure",
						members: {
							name: {},
							host: {
								type: "structure",
								members: {
									sourcePath: {}
								}
							}
						}
					}
				},
				S2l: {
					type: "list",
					member: {
						type: "structure",
						members: {
							type: {},
							expression: {}
						}
					}
				},
				S2o: {
					type: "list",
					member: {}
				},
				S2v: {
					type: "list",
					member: {
						type: "structure",
						members: {
							arn: {},
							reason: {}
						}
					}
				},
				S2z: {
					type: "list",
					member: {
						shape: "S19"
					}
				},
				S37: {
					type: "list",
					member: {
						shape: "S38"
					}
				},
				S38: {
					type: "structure",
					members: {
						taskArn: {},
						clusterArn: {},
						taskDefinitionArn: {},
						containerInstanceArn: {},
						overrides: {
							shape: "S39"
						},
						lastStatus: {},
						desiredStatus: {},
						cpu: {},
						memory: {},
						containers: {
							type: "list",
							member: {
								type: "structure",
								members: {
									containerArn: {},
									taskArn: {},
									name: {},
									lastStatus: {},
									exitCode: {
										type: "integer"
									},
									reason: {},
									networkBindings: {
										shape: "S3e"
									},
									networkInterfaces: {
										type: "list",
										member: {
											type: "structure",
											members: {
												attachmentId: {},
												privateIpv4Address: {},
												ipv6Address: {}
											}
										}
									},
									healthStatus: {}
								}
							}
						},
						startedBy: {},
						version: {
							type: "long"
						},
						stoppedReason: {},
						connectivity: {},
						connectivityAt: {
							type: "timestamp"
						},
						pullStartedAt: {
							type: "timestamp"
						},
						pullStoppedAt: {
							type: "timestamp"
						},
						executionStoppedAt: {
							type: "timestamp"
						},
						createdAt: {
							type: "timestamp"
						},
						startedAt: {
							type: "timestamp"
						},
						stoppingAt: {
							type: "timestamp"
						},
						stoppedAt: {
							type: "timestamp"
						},
						group: {},
						launchType: {},
						platformVersion: {},
						attachments: {
							shape: "S1h"
						},
						healthStatus: {}
					}
				},
				S39: {
					type: "structure",
					members: {
						containerOverrides: {
							type: "list",
							member: {
								type: "structure",
								members: {
									name: {},
									command: {
										shape: "So"
									},
									environment: {
										shape: "S1s"
									},
									cpu: {
										type: "integer"
									},
									memory: {
										type: "integer"
									},
									memoryReservation: {
										type: "integer"
									}
								}
							}
						},
						taskRoleArn: {},
						executionRoleArn: {}
					}
				},
				S3e: {
					type: "list",
					member: {
						type: "structure",
						members: {
							bindIP: {},
							containerPort: {
								type: "integer"
							},
							hostPort: {
								type: "integer"
							},
							protocol: {}
						}
					}
				}
			}
		}
	}, {}],
	59: [function(e, t, r) {
		t.exports = {
			pagination: {
				ListClusters: {
					input_token: "nextToken",
					limit_key: "maxResults",
					output_token: "nextToken",
					result_key: "clusterArns"
				},
				ListContainerInstances: {
					input_token: "nextToken",
					limit_key: "maxResults",
					output_token: "nextToken",
					result_key: "containerInstanceArns"
				},
				ListServices: {
					input_token: "nextToken",
					limit_key: "maxResults",
					output_token: "nextToken",
					result_key: "serviceArns"
				},
				ListTaskDefinitionFamilies: {
					input_token: "nextToken",
					limit_key: "maxResults",
					output_token: "nextToken",
					result_key: "families"
				},
				ListTaskDefinitions: {
					input_token: "nextToken",
					limit_key: "maxResults",
					output_token: "nextToken",
					result_key: "taskDefinitionArns"
				},
				ListTasks: {
					input_token: "nextToken",
					limit_key: "maxResults",
					output_token: "nextToken",
					result_key: "taskArns"
				}
			}
		}
	}, {}],
	60: [function(e, t, r) {
		t.exports = {
			version: 2,
			waiters: {
				TasksRunning: {
					delay: 6,
					operation: "DescribeTasks",
					maxAttempts: 100,
					acceptors: [{
						expected: "STOPPED",
						matcher: "pathAny",
						state: "failure",
						argument: "tasks[].lastStatus"
					}, {
						expected: "MISSING",
						matcher: "pathAny",
						state: "failure",
						argument: "failures[].reason"
					}, {
						expected: "RUNNING",
						matcher: "pathAll",
						state: "success",
						argument: "tasks[].lastStatus"
					}]
				},
				TasksStopped: {
					delay: 6,
					operation: "DescribeTasks",
					maxAttempts: 100,
					acceptors: [{
						expected: "STOPPED",
						matcher: "pathAll",
						state: "success",
						argument: "tasks[].lastStatus"
					}]
				},
				ServicesStable: {
					delay: 15,
					operation: "DescribeServices",
					maxAttempts: 40,
					acceptors: [{
						expected: "MISSING",
						matcher: "pathAny",
						state: "failure",
						argument: "failures[].reason"
					}, {
						expected: "DRAINING",
						matcher: "pathAny",
						state: "failure",
						argument: "services[].status"
					}, {
						expected: "INACTIVE",
						matcher: "pathAny",
						state: "failure",
						argument: "services[].status"
					}, {
						expected: !0,
						matcher: "path",
						state: "success",
						argument: "length(services[?!(length(deployments) == `1` && runningCount == desiredCount)]) == `0`"
					}]
				},
				ServicesInactive: {
					delay: 15,
					operation: "DescribeServices",
					maxAttempts: 40,
					acceptors: [{
						expected: "MISSING",
						matcher: "pathAny",
						state: "failure",
						argument: "failures[].reason"
					}, {
						expected: "INACTIVE",
						matcher: "pathAny",
						state: "success",
						argument: "services[].status"
					}]
				}
			}
		}
	}, {}],
	61: [function(e, t, r) {
		t.exports = {
			version: "2.0",
			metadata: {
				apiVersion: "2015-02-02",
				endpointPrefix: "elasticache",
				protocol: "query",
				serviceFullName: "Amazon ElastiCache",
				signatureVersion: "v4",
				uid: "elasticache-2015-02-02",
				xmlNamespace: "http://elasticache.amazonaws.com/doc/2015-02-02/"
			},
			operations: {
				AddTagsToResource: {
					input: {
						type: "structure",
						required: ["ResourceName", "Tags"],
						members: {
							ResourceName: {},
							Tags: {
								shape: "S3"
							}
						}
					},
					output: {
						shape: "S5",
						resultWrapper: "AddTagsToResourceResult"
					}
				},
				AuthorizeCacheSecurityGroupIngress: {
					input: {
						type: "structure",
						required: ["CacheSecurityGroupName", "EC2SecurityGroupName", "EC2SecurityGroupOwnerId"],
						members: {
							CacheSecurityGroupName: {},
							EC2SecurityGroupName: {},
							EC2SecurityGroupOwnerId: {}
						}
					},
					output: {
						resultWrapper: "AuthorizeCacheSecurityGroupIngressResult",
						type: "structure",
						members: {
							CacheSecurityGroup: {
								shape: "S8"
							}
						}
					}
				},
				CopySnapshot: {
					input: {
						type: "structure",
						required: ["SourceSnapshotName", "TargetSnapshotName"],
						members: {
							SourceSnapshotName: {},
							TargetSnapshotName: {},
							TargetBucket: {}
						}
					},
					output: {
						resultWrapper: "CopySnapshotResult",
						type: "structure",
						members: {
							Snapshot: {
								shape: "Sd"
							}
						}
					}
				},
				CreateCacheCluster: {
					input: {
						type: "structure",
						required: ["CacheClusterId"],
						members: {
							CacheClusterId: {},
							ReplicationGroupId: {},
							AZMode: {},
							PreferredAvailabilityZone: {},
							PreferredAvailabilityZones: {
								shape: "So"
							},
							NumCacheNodes: {
								type: "integer"
							},
							CacheNodeType: {},
							Engine: {},
							EngineVersion: {},
							CacheParameterGroupName: {},
							CacheSubnetGroupName: {},
							CacheSecurityGroupNames: {
								shape: "Sp"
							},
							SecurityGroupIds: {
								shape: "Sq"
							},
							Tags: {
								shape: "S3"
							},
							SnapshotArns: {
								shape: "Sr"
							},
							SnapshotName: {},
							PreferredMaintenanceWindow: {},
							Port: {
								type: "integer"
							},
							NotificationTopicArn: {},
							AutoMinorVersionUpgrade: {
								type: "boolean"
							},
							SnapshotRetentionLimit: {
								type: "integer"
							},
							SnapshotWindow: {},
							AuthToken: {}
						}
					},
					output: {
						resultWrapper: "CreateCacheClusterResult",
						type: "structure",
						members: {
							CacheCluster: {
								shape: "Su"
							}
						}
					}
				},
				CreateCacheParameterGroup: {
					input: {
						type: "structure",
						required: ["CacheParameterGroupName", "CacheParameterGroupFamily", "Description"],
						members: {
							CacheParameterGroupName: {},
							CacheParameterGroupFamily: {},
							Description: {}
						}
					},
					output: {
						resultWrapper: "CreateCacheParameterGroupResult",
						type: "structure",
						members: {
							CacheParameterGroup: {
								shape: "S19"
							}
						}
					}
				},
				CreateCacheSecurityGroup: {
					input: {
						type: "structure",
						required: ["CacheSecurityGroupName", "Description"],
						members: {
							CacheSecurityGroupName: {},
							Description: {}
						}
					},
					output: {
						resultWrapper: "CreateCacheSecurityGroupResult",
						type: "structure",
						members: {
							CacheSecurityGroup: {
								shape: "S8"
							}
						}
					}
				},
				CreateCacheSubnetGroup: {
					input: {
						type: "structure",
						required: ["CacheSubnetGroupName", "CacheSubnetGroupDescription", "SubnetIds"],
						members: {
							CacheSubnetGroupName: {},
							CacheSubnetGroupDescription: {},
							SubnetIds: {
								shape: "S1d"
							}
						}
					},
					output: {
						resultWrapper: "CreateCacheSubnetGroupResult",
						type: "structure",
						members: {
							CacheSubnetGroup: {
								shape: "S1f"
							}
						}
					}
				},
				CreateReplicationGroup: {
					input: {
						type: "structure",
						required: ["ReplicationGroupId", "ReplicationGroupDescription"],
						members: {
							ReplicationGroupId: {},
							ReplicationGroupDescription: {},
							PrimaryClusterId: {},
							AutomaticFailoverEnabled: {
								type: "boolean"
							},
							NumCacheClusters: {
								type: "integer"
							},
							PreferredCacheClusterAZs: {
								shape: "Sl"
							},
							NumNodeGroups: {
								type: "integer"
							},
							ReplicasPerNodeGroup: {
								type: "integer"
							},
							NodeGroupConfiguration: {
								type: "list",
								member: {
									shape: "Sk",
									locationName: "NodeGroupConfiguration"
								}
							},
							CacheNodeType: {},
							Engine: {},
							EngineVersion: {},
							CacheParameterGroupName: {},
							CacheSubnetGroupName: {},
							CacheSecurityGroupNames: {
								shape: "Sp"
							},
							SecurityGroupIds: {
								shape: "Sq"
							},
							Tags: {
								shape: "S3"
							},
							SnapshotArns: {
								shape: "Sr"
							},
							SnapshotName: {},
							PreferredMaintenanceWindow: {},
							Port: {
								type: "integer"
							},
							NotificationTopicArn: {},
							AutoMinorVersionUpgrade: {
								type: "boolean"
							},
							SnapshotRetentionLimit: {
								type: "integer"
							},
							SnapshotWindow: {},
							AuthToken: {},
							TransitEncryptionEnabled: {
								type: "boolean"
							},
							AtRestEncryptionEnabled: {
								type: "boolean"
							}
						}
					},
					output: {
						resultWrapper: "CreateReplicationGroupResult",
						type: "structure",
						members: {
							ReplicationGroup: {
								shape: "S1m"
							}
						}
					}
				},
				CreateSnapshot: {
					input: {
						type: "structure",
						required: ["SnapshotName"],
						members: {
							ReplicationGroupId: {},
							CacheClusterId: {},
							SnapshotName: {}
						}
					},
					output: {
						resultWrapper: "CreateSnapshotResult",
						type: "structure",
						members: {
							Snapshot: {
								shape: "Sd"
							}
						}
					}
				},
				DeleteCacheCluster: {
					input: {
						type: "structure",
						required: ["CacheClusterId"],
						members: {
							CacheClusterId: {},
							FinalSnapshotIdentifier: {}
						}
					},
					output: {
						resultWrapper: "DeleteCacheClusterResult",
						type: "structure",
						members: {
							CacheCluster: {
								shape: "Su"
							}
						}
					}
				},
				DeleteCacheParameterGroup: {
					input: {
						type: "structure",
						required: ["CacheParameterGroupName"],
						members: {
							CacheParameterGroupName: {}
						}
					}
				},
				DeleteCacheSecurityGroup: {
					input: {
						type: "structure",
						required: ["CacheSecurityGroupName"],
						members: {
							CacheSecurityGroupName: {}
						}
					}
				},
				DeleteCacheSubnetGroup: {
					input: {
						type: "structure",
						required: ["CacheSubnetGroupName"],
						members: {
							CacheSubnetGroupName: {}
						}
					}
				},
				DeleteReplicationGroup: {
					input: {
						type: "structure",
						required: ["ReplicationGroupId"],
						members: {
							ReplicationGroupId: {},
							RetainPrimaryCluster: {
								type: "boolean"
							},
							FinalSnapshotIdentifier: {}
						}
					},
					output: {
						resultWrapper: "DeleteReplicationGroupResult",
						type: "structure",
						members: {
							ReplicationGroup: {
								shape: "S1m"
							}
						}
					}
				},
				DeleteSnapshot: {
					input: {
						type: "structure",
						required: ["SnapshotName"],
						members: {
							SnapshotName: {}
						}
					},
					output: {
						resultWrapper: "DeleteSnapshotResult",
						type: "structure",
						members: {
							Snapshot: {
								shape: "Sd"
							}
						}
					}
				},
				DescribeCacheClusters: {
					input: {
						type: "structure",
						members: {
							CacheClusterId: {},
							MaxRecords: {
								type: "integer"
							},
							Marker: {},
							ShowCacheNodeInfo: {
								type: "boolean"
							},
							ShowCacheClustersNotInReplicationGroups: {
								type: "boolean"
							}
						}
					},
					output: {
						resultWrapper: "DescribeCacheClustersResult",
						type: "structure",
						members: {
							Marker: {},
							CacheClusters: {
								type: "list",
								member: {
									shape: "Su",
									locationName: "CacheCluster"
								}
							}
						}
					}
				},
				DescribeCacheEngineVersions: {
					input: {
						type: "structure",
						members: {
							Engine: {},
							EngineVersion: {},
							CacheParameterGroupFamily: {},
							MaxRecords: {
								type: "integer"
							},
							Marker: {},
							DefaultOnly: {
								type: "boolean"
							}
						}
					},
					output: {
						resultWrapper: "DescribeCacheEngineVersionsResult",
						type: "structure",
						members: {
							Marker: {},
							CacheEngineVersions: {
								type: "list",
								member: {
									locationName: "CacheEngineVersion",
									type: "structure",
									members: {
										Engine: {},
										EngineVersion: {},
										CacheParameterGroupFamily: {},
										CacheEngineDescription: {},
										CacheEngineVersionDescription: {}
									}
								}
							}
						}
					}
				},
				DescribeCacheParameterGroups: {
					input: {
						type: "structure",
						members: {
							CacheParameterGroupName: {},
							MaxRecords: {
								type: "integer"
							},
							Marker: {}
						}
					},
					output: {
						resultWrapper: "DescribeCacheParameterGroupsResult",
						type: "structure",
						members: {
							Marker: {},
							CacheParameterGroups: {
								type: "list",
								member: {
									shape: "S19",
									locationName: "CacheParameterGroup"
								}
							}
						}
					}
				},
				DescribeCacheParameters: {
					input: {
						type: "structure",
						required: ["CacheParameterGroupName"],
						members: {
							CacheParameterGroupName: {},
							Source: {},
							MaxRecords: {
								type: "integer"
							},
							Marker: {}
						}
					},
					output: {
						resultWrapper: "DescribeCacheParametersResult",
						type: "structure",
						members: {
							Marker: {},
							Parameters: {
								shape: "S2k"
							},
							CacheNodeTypeSpecificParameters: {
								shape: "S2n"
							}
						}
					}
				},
				DescribeCacheSecurityGroups: {
					input: {
						type: "structure",
						members: {
							CacheSecurityGroupName: {},
							MaxRecords: {
								type: "integer"
							},
							Marker: {}
						}
					},
					output: {
						resultWrapper: "DescribeCacheSecurityGroupsResult",
						type: "structure",
						members: {
							Marker: {},
							CacheSecurityGroups: {
								type: "list",
								member: {
									shape: "S8",
									locationName: "CacheSecurityGroup"
								}
							}
						}
					}
				},
				DescribeCacheSubnetGroups: {
					input: {
						type: "structure",
						members: {
							CacheSubnetGroupName: {},
							MaxRecords: {
								type: "integer"
							},
							Marker: {}
						}
					},
					output: {
						resultWrapper: "DescribeCacheSubnetGroupsResult",
						type: "structure",
						members: {
							Marker: {},
							CacheSubnetGroups: {
								type: "list",
								member: {
									shape: "S1f",
									locationName: "CacheSubnetGroup"
								}
							}
						}
					}
				},
				DescribeEngineDefaultParameters: {
					input: {
						type: "structure",
						required: ["CacheParameterGroupFamily"],
						members: {
							CacheParameterGroupFamily: {},
							MaxRecords: {
								type: "integer"
							},
							Marker: {}
						}
					},
					output: {
						resultWrapper: "DescribeEngineDefaultParametersResult",
						type: "structure",
						members: {
							EngineDefaults: {
								type: "structure",
								members: {
									CacheParameterGroupFamily: {},
									Marker: {},
									Parameters: {
										shape: "S2k"
									},
									CacheNodeTypeSpecificParameters: {
										shape: "S2n"
									}
								},
								wrapper: !0
							}
						}
					}
				},
				DescribeEvents: {
					input: {
						type: "structure",
						members: {
							SourceIdentifier: {},
							SourceType: {},
							StartTime: {
								type: "timestamp"
							},
							EndTime: {
								type: "timestamp"
							},
							Duration: {
								type: "integer"
							},
							MaxRecords: {
								type: "integer"
							},
							Marker: {}
						}
					},
					output: {
						resultWrapper: "DescribeEventsResult",
						type: "structure",
						members: {
							Marker: {},
							Events: {
								type: "list",
								member: {
									locationName: "Event",
									type: "structure",
									members: {
										SourceIdentifier: {},
										SourceType: {},
										Message: {},
										Date: {
											type: "timestamp"
										}
									}
								}
							}
						}
					}
				},
				DescribeReplicationGroups: {
					input: {
						type: "structure",
						members: {
							ReplicationGroupId: {},
							MaxRecords: {
								type: "integer"
							},
							Marker: {}
						}
					},
					output: {
						resultWrapper: "DescribeReplicationGroupsResult",
						type: "structure",
						members: {
							Marker: {},
							ReplicationGroups: {
								type: "list",
								member: {
									shape: "S1m",
									locationName: "ReplicationGroup"
								}
							}
						}
					}
				},
				DescribeReservedCacheNodes: {
					input: {
						type: "structure",
						members: {
							ReservedCacheNodeId: {},
							ReservedCacheNodesOfferingId: {},
							CacheNodeType: {},
							Duration: {},
							ProductDescription: {},
							OfferingType: {},
							MaxRecords: {
								type: "integer"
							},
							Marker: {}
						}
					},
					output: {
						resultWrapper: "DescribeReservedCacheNodesResult",
						type: "structure",
						members: {
							Marker: {},
							ReservedCacheNodes: {
								type: "list",
								member: {
									shape: "S3b",
									locationName: "ReservedCacheNode"
								}
							}
						}
					}
				},
				DescribeReservedCacheNodesOfferings: {
					input: {
						type: "structure",
						members: {
							ReservedCacheNodesOfferingId: {},
							CacheNodeType: {},
							Duration: {},
							ProductDescription: {},
							OfferingType: {},
							MaxRecords: {
								type: "integer"
							},
							Marker: {}
						}
					},
					output: {
						resultWrapper: "DescribeReservedCacheNodesOfferingsResult",
						type: "structure",
						members: {
							Marker: {},
							ReservedCacheNodesOfferings: {
								type: "list",
								member: {
									locationName: "ReservedCacheNodesOffering",
									type: "structure",
									members: {
										ReservedCacheNodesOfferingId: {},
										CacheNodeType: {},
										Duration: {
											type: "integer"
										},
										FixedPrice: {
											type: "double"
										},
										UsagePrice: {
											type: "double"
										},
										ProductDescription: {},
										OfferingType: {},
										RecurringCharges: {
											shape: "S3c"
										}
									},
									wrapper: !0
								}
							}
						}
					}
				},
				DescribeSnapshots: {
					input: {
						type: "structure",
						members: {
							ReplicationGroupId: {},
							CacheClusterId: {},
							SnapshotName: {},
							SnapshotSource: {},
							Marker: {},
							MaxRecords: {
								type: "integer"
							},
							ShowNodeGroupConfig: {
								type: "boolean"
							}
						}
					},
					output: {
						resultWrapper: "DescribeSnapshotsResult",
						type: "structure",
						members: {
							Marker: {},
							Snapshots: {
								type: "list",
								member: {
									shape: "Sd",
									locationName: "Snapshot"
								}
							}
						}
					}
				},
				ListAllowedNodeTypeModifications: {
					input: {
						type: "structure",
						members: {
							CacheClusterId: {},
							ReplicationGroupId: {}
						}
					},
					output: {
						resultWrapper: "ListAllowedNodeTypeModificationsResult",
						type: "structure",
						members: {
							ScaleUpModifications: {
								type: "list",
								member: {}
							}
						}
					}
				},
				ListTagsForResource: {
					input: {
						type: "structure",
						required: ["ResourceName"],
						members: {
							ResourceName: {}
						}
					},
					output: {
						shape: "S5",
						resultWrapper: "ListTagsForResourceResult"
					}
				},
				ModifyCacheCluster: {
					input: {
						type: "structure",
						required: ["CacheClusterId"],
						members: {
							CacheClusterId: {},
							NumCacheNodes: {
								type: "integer"
							},
							CacheNodeIdsToRemove: {
								shape: "Sy"
							},
							AZMode: {},
							NewAvailabilityZones: {
								shape: "So"
							},
							CacheSecurityGroupNames: {
								shape: "Sp"
							},
							SecurityGroupIds: {
								shape: "Sq"
							},
							PreferredMaintenanceWindow: {},
							NotificationTopicArn: {},
							CacheParameterGroupName: {},
							NotificationTopicStatus: {},
							ApplyImmediately: {
								type: "boolean"
							},
							EngineVersion: {},
							AutoMinorVersionUpgrade: {
								type: "boolean"
							},
							SnapshotRetentionLimit: {
								type: "integer"
							},
							SnapshotWindow: {},
							CacheNodeType: {}
						}
					},
					output: {
						resultWrapper: "ModifyCacheClusterResult",
						type: "structure",
						members: {
							CacheCluster: {
								shape: "Su"
							}
						}
					}
				},
				ModifyCacheParameterGroup: {
					input: {
						type: "structure",
						required: ["CacheParameterGroupName", "ParameterNameValues"],
						members: {
							CacheParameterGroupName: {},
							ParameterNameValues: {
								shape: "S3s"
							}
						}
					},
					output: {
						shape: "S3u",
						resultWrapper: "ModifyCacheParameterGroupResult"
					}
				},
				ModifyCacheSubnetGroup: {
					input: {
						type: "structure",
						required: ["CacheSubnetGroupName"],
						members: {
							CacheSubnetGroupName: {},
							CacheSubnetGroupDescription: {},
							SubnetIds: {
								shape: "S1d"
							}
						}
					},
					output: {
						resultWrapper: "ModifyCacheSubnetGroupResult",
						type: "structure",
						members: {
							CacheSubnetGroup: {
								shape: "S1f"
							}
						}
					}
				},
				ModifyReplicationGroup: {
					input: {
						type: "structure",
						required: ["ReplicationGroupId"],
						members: {
							ReplicationGroupId: {},
							ReplicationGroupDescription: {},
							PrimaryClusterId: {},
							SnapshottingClusterId: {},
							AutomaticFailoverEnabled: {
								type: "boolean"
							},
							CacheSecurityGroupNames: {
								shape: "Sp"
							},
							SecurityGroupIds: {
								shape: "Sq"
							},
							PreferredMaintenanceWindow: {},
							NotificationTopicArn: {},
							CacheParameterGroupName: {},
							NotificationTopicStatus: {},
							ApplyImmediately: {
								type: "boolean"
							},
							EngineVersion: {},
							AutoMinorVersionUpgrade: {
								type: "boolean"
							},
							SnapshotRetentionLimit: {
								type: "integer"
							},
							SnapshotWindow: {},
							CacheNodeType: {},
							NodeGroupId: {}
						}
					},
					output: {
						resultWrapper: "ModifyReplicationGroupResult",
						type: "structure",
						members: {
							ReplicationGroup: {
								shape: "S1m"
							}
						}
					}
				},
				ModifyReplicationGroupShardConfiguration: {
					input: {
						type: "structure",
						required: ["ReplicationGroupId", "NodeGroupCount", "ApplyImmediately"],
						members: {
							ReplicationGroupId: {},
							NodeGroupCount: {
								type: "integer"
							},
							ApplyImmediately: {
								type: "boolean"
							},
							ReshardingConfiguration: {
								type: "list",
								member: {
									locationName: "ReshardingConfiguration",
									type: "structure",
									members: {
										PreferredAvailabilityZones: {
											shape: "Sl"
										}
									}
								}
							},
							NodeGroupsToRemove: {
								type: "list",
								member: {
									locationName: "NodeGroupToRemove"
								}
							}
						}
					},
					output: {
						resultWrapper: "ModifyReplicationGroupShardConfigurationResult",
						type: "structure",
						members: {
							ReplicationGroup: {
								shape: "S1m"
							}
						}
					}
				},
				PurchaseReservedCacheNodesOffering: {
					input: {
						type: "structure",
						required: ["ReservedCacheNodesOfferingId"],
						members: {
							ReservedCacheNodesOfferingId: {},
							ReservedCacheNodeId: {},
							CacheNodeCount: {
								type: "integer"
							}
						}
					},
					output: {
						resultWrapper: "PurchaseReservedCacheNodesOfferingResult",
						type: "structure",
						members: {
							ReservedCacheNode: {
								shape: "S3b"
							}
						}
					}
				},
				RebootCacheCluster: {
					input: {
						type: "structure",
						required: ["CacheClusterId", "CacheNodeIdsToReboot"],
						members: {
							CacheClusterId: {},
							CacheNodeIdsToReboot: {
								shape: "Sy"
							}
						}
					},
					output: {
						resultWrapper: "RebootCacheClusterResult",
						type: "structure",
						members: {
							CacheCluster: {
								shape: "Su"
							}
						}
					}
				},
				RemoveTagsFromResource: {
					input: {
						type: "structure",
						required: ["ResourceName", "TagKeys"],
						members: {
							ResourceName: {},
							TagKeys: {
								type: "list",
								member: {}
							}
						}
					},
					output: {
						shape: "S5",
						resultWrapper: "RemoveTagsFromResourceResult"
					}
				},
				ResetCacheParameterGroup: {
					input: {
						type: "structure",
						required: ["CacheParameterGroupName"],
						members: {
							CacheParameterGroupName: {},
							ResetAllParameters: {
								type: "boolean"
							},
							ParameterNameValues: {
								shape: "S3s"
							}
						}
					},
					output: {
						shape: "S3u",
						resultWrapper: "ResetCacheParameterGroupResult"
					}
				},
				RevokeCacheSecurityGroupIngress: {
					input: {
						type: "structure",
						required: ["CacheSecurityGroupName", "EC2SecurityGroupName", "EC2SecurityGroupOwnerId"],
						members: {
							CacheSecurityGroupName: {},
							EC2SecurityGroupName: {},
							EC2SecurityGroupOwnerId: {}
						}
					},
					output: {
						resultWrapper: "RevokeCacheSecurityGroupIngressResult",
						type: "structure",
						members: {
							CacheSecurityGroup: {
								shape: "S8"
							}
						}
					}
				},
				TestFailover: {
					input: {
						type: "structure",
						required: ["ReplicationGroupId", "NodeGroupId"],
						members: {
							ReplicationGroupId: {},
							NodeGroupId: {}
						}
					},
					output: {
						resultWrapper: "TestFailoverResult",
						type: "structure",
						members: {
							ReplicationGroup: {
								shape: "S1m"
							}
						}
					}
				}
			},
			shapes: {
				S3: {
					type: "list",
					member: {
						locationName: "Tag",
						type: "structure",
						members: {
							Key: {},
							Value: {}
						}
					}
				},
				S5: {
					type: "structure",
					members: {
						TagList: {
							shape: "S3"
						}
					}
				},
				S8: {
					type: "structure",
					members: {
						OwnerId: {},
						CacheSecurityGroupName: {},
						Description: {},
						EC2SecurityGroups: {
							type: "list",
							member: {
								locationName: "EC2SecurityGroup",
								type: "structure",
								members: {
									Status: {},
									EC2SecurityGroupName: {},
									EC2SecurityGroupOwnerId: {}
								}
							}
						}
					},
					wrapper: !0
				},
				Sd: {
					type: "structure",
					members: {
						SnapshotName: {},
						ReplicationGroupId: {},
						ReplicationGroupDescription: {},
						CacheClusterId: {},
						SnapshotStatus: {},
						SnapshotSource: {},
						CacheNodeType: {},
						Engine: {},
						EngineVersion: {},
						NumCacheNodes: {
							type: "integer"
						},
						PreferredAvailabilityZone: {},
						CacheClusterCreateTime: {
							type: "timestamp"
						},
						PreferredMaintenanceWindow: {},
						TopicArn: {},
						Port: {
							type: "integer"
						},
						CacheParameterGroupName: {},
						CacheSubnetGroupName: {},
						VpcId: {},
						AutoMinorVersionUpgrade: {
							type: "boolean"
						},
						SnapshotRetentionLimit: {
							type: "integer"
						},
						SnapshotWindow: {},
						NumNodeGroups: {
							type: "integer"
						},
						AutomaticFailover: {},
						NodeSnapshots: {
							type: "list",
							member: {
								locationName: "NodeSnapshot",
								type: "structure",
								members: {
									CacheClusterId: {},
									NodeGroupId: {},
									CacheNodeId: {},
									NodeGroupConfiguration: {
										shape: "Sk"
									},
									CacheSize: {},
									CacheNodeCreateTime: {
										type: "timestamp"
									},
									SnapshotCreateTime: {
										type: "timestamp"
									}
								},
								wrapper: !0
							}
						}
					},
					wrapper: !0
				},
				Sk: {
					type: "structure",
					members: {
						Slots: {},
						ReplicaCount: {
							type: "integer"
						},
						PrimaryAvailabilityZone: {},
						ReplicaAvailabilityZones: {
							shape: "Sl"
						}
					}
				},
				Sl: {
					type: "list",
					member: {
						locationName: "AvailabilityZone"
					}
				},
				So: {
					type: "list",
					member: {
						locationName: "PreferredAvailabilityZone"
					}
				},
				Sp: {
					type: "list",
					member: {
						locationName: "CacheSecurityGroupName"
					}
				},
				Sq: {
					type: "list",
					member: {
						locationName: "SecurityGroupId"
					}
				},
				Sr: {
					type: "list",
					member: {
						locationName: "SnapshotArn"
					}
				},
				Su: {
					type: "structure",
					members: {
						CacheClusterId: {},
						ConfigurationEndpoint: {
							shape: "Sv"
						},
						ClientDownloadLandingPage: {},
						CacheNodeType: {},
						Engine: {},
						EngineVersion: {},
						CacheClusterStatus: {},
						NumCacheNodes: {
							type: "integer"
						},
						PreferredAvailabilityZone: {},
						CacheClusterCreateTime: {
							type: "timestamp"
						},
						PreferredMaintenanceWindow: {},
						PendingModifiedValues: {
							type: "structure",
							members: {
								NumCacheNodes: {
									type: "integer"
								},
								CacheNodeIdsToRemove: {
									shape: "Sy"
								},
								EngineVersion: {},
								CacheNodeType: {}
							}
						},
						NotificationConfiguration: {
							type: "structure",
							members: {
								TopicArn: {},
								TopicStatus: {}
							}
						},
						CacheSecurityGroups: {
							type: "list",
							member: {
								locationName: "CacheSecurityGroup",
								type: "structure",
								members: {
									CacheSecurityGroupName: {},
									Status: {}
								}
							}
						},
						CacheParameterGroup: {
							type: "structure",
							members: {
								CacheParameterGroupName: {},
								ParameterApplyStatus: {},
								CacheNodeIdsToReboot: {
									shape: "Sy"
								}
							}
						},
						CacheSubnetGroupName: {},
						CacheNodes: {
							type: "list",
							member: {
								locationName: "CacheNode",
								type: "structure",
								members: {
									CacheNodeId: {},
									CacheNodeStatus: {},
									CacheNodeCreateTime: {
										type: "timestamp"
									},
									Endpoint: {
										shape: "Sv"
									},
									ParameterGroupStatus: {},
									SourceCacheNodeId: {},
									CustomerAvailabilityZone: {}
								}
							}
						},
						AutoMinorVersionUpgrade: {
							type: "boolean"
						},
						SecurityGroups: {
							type: "list",
							member: {
								type: "structure",
								members: {
									SecurityGroupId: {},
									Status: {}
								}
							}
						},
						ReplicationGroupId: {},
						SnapshotRetentionLimit: {
							type: "integer"
						},
						SnapshotWindow: {},
						AuthTokenEnabled: {
							type: "boolean"
						},
						TransitEncryptionEnabled: {
							type: "boolean"
						},
						AtRestEncryptionEnabled: {
							type: "boolean"
						}
					},
					wrapper: !0
				},
				Sv: {
					type: "structure",
					members: {
						Address: {},
						Port: {
							type: "integer"
						}
					}
				},
				Sy: {
					type: "list",
					member: {
						locationName: "CacheNodeId"
					}
				},
				S19: {
					type: "structure",
					members: {
						CacheParameterGroupName: {},
						CacheParameterGroupFamily: {},
						Description: {}
					},
					wrapper: !0
				},
				S1d: {
					type: "list",
					member: {
						locationName: "SubnetIdentifier"
					}
				},
				S1f: {
					type: "structure",
					members: {
						CacheSubnetGroupName: {},
						CacheSubnetGroupDescription: {},
						VpcId: {},
						Subnets: {
							type: "list",
							member: {
								locationName: "Subnet",
								type: "structure",
								members: {
									SubnetIdentifier: {},
									SubnetAvailabilityZone: {
										type: "structure",
										members: {
											Name: {}
										},
										wrapper: !0
									}
								}
							}
						}
					},
					wrapper: !0
				},
				S1m: {
					type: "structure",
					members: {
						ReplicationGroupId: {},
						Description: {},
						Status: {},
						PendingModifiedValues: {
							type: "structure",
							members: {
								PrimaryClusterId: {},
								AutomaticFailoverStatus: {},
								Resharding: {
									type: "structure",
									members: {
										SlotMigration: {
											type: "structure",
											members: {
												ProgressPercentage: {
													type: "double"
												}
											}
										}
									}
								}
							}
						},
						MemberClusters: {
							type: "list",
							member: {
								locationName: "ClusterId"
							}
						},
						NodeGroups: {
							type: "list",
							member: {
								locationName: "NodeGroup",
								type: "structure",
								members: {
									NodeGroupId: {},
									Status: {},
									PrimaryEndpoint: {
										shape: "Sv"
									},
									Slots: {},
									NodeGroupMembers: {
										type: "list",
										member: {
											locationName: "NodeGroupMember",
											type: "structure",
											members: {
												CacheClusterId: {},
												CacheNodeId: {},
												ReadEndpoint: {
													shape: "Sv"
												},
												PreferredAvailabilityZone: {},
												CurrentRole: {}
											}
										}
									}
								}
							}
						},
						SnapshottingClusterId: {},
						AutomaticFailover: {},
						ConfigurationEndpoint: {
							shape: "Sv"
						},
						SnapshotRetentionLimit: {
							type: "integer"
						},
						SnapshotWindow: {},
						ClusterEnabled: {
							type: "boolean"
						},
						CacheNodeType: {},
						AuthTokenEnabled: {
							type: "boolean"
						},
						TransitEncryptionEnabled: {
							type: "boolean"
						},
						AtRestEncryptionEnabled: {
							type: "boolean"
						}
					},
					wrapper: !0
				},
				S2k: {
					type: "list",
					member: {
						locationName: "Parameter",
						type: "structure",
						members: {
							ParameterName: {},
							ParameterValue: {},
							Description: {},
							Source: {},
							DataType: {},
							AllowedValues: {},
							IsModifiable: {
								type: "boolean"
							},
							MinimumEngineVersion: {},
							ChangeType: {}
						}
					}
				},
				S2n: {
					type: "list",
					member: {
						locationName: "CacheNodeTypeSpecificParameter",
						type: "structure",
						members: {
							ParameterName: {},
							Description: {},
							Source: {},
							DataType: {},
							AllowedValues: {},
							IsModifiable: {
								type: "boolean"
							},
		}