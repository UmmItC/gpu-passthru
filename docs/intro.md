---
sidebar_position: 1
---

# Introduction

Hi, welcome to our website! Here, you'll find everything you need to know about GPU passthrough.

## What is GPU passthrough?

> **In short, GPU passthrough lets you pass your real GPU into a virtual machine.**

Not a virtual GPU. This means the virtual machine gets direct access to the physical GPU. Play games or run applications within that virtual machine.

## Why? It sounds stupid.

I always got a similar question. Here are some answers:

### Security & Isolation
- It's more secure and you don't need to install an OS on your computer. Everything runs in the virtual machine.
  :::tip[Security Benefit]
  Your main OS stays clean as all activities are contained within the VM.
  :::

### Resource Management
- You don't want to have two operating systems on your computer because it takes up space.
  :::warning[Disk Space]
  Dual-booting can consume a lot of disk space. VMs with passthrough are an alternative.
  :::

### Software Compatibility
- You hate Windows and some software on Windows is more stable than on GNU/Linux. (like DaVinci Resolve)
  :::note[Software Compatibility]
  Run Windows-specific applications or games that perform better on Windows, even if you prefer Linux.
  :::

### Testing & Development
- You're doing some production testing and need a GPU environment to install another GNU/Linux distro.
  :::info[Testing & Development]
  Easily set up isolated environments with dedicated GPU power for testing different OS or software configurations.
  :::

## Common Use Cases

| Scenario | Without GPU Passthrough | With GPU Passthrough |
| -------- | ----------------------- | -------------------- |
| Gaming on Windows | Dual-boot or dedicated Windows PC | Run Windows in a VM with full GPU power |
| Video Editing | Use less stable Linux software or dual-boot | Run Windows-only editors like DaVinci Resolve in a VM |
| Testing Different Distros | Multiple partitions or slow VMs | Test with full GPU performance in isolated VMs |
| Security-Sensitive Work | Risk exposing main OS | Contain activities in disposable VMs with GPU access |
