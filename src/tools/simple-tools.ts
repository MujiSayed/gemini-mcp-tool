import { z } from 'zod';
import { UnifiedTool } from './registry.js';
import { executeCommand } from '../utils/commandExecutor.js';

const pingArgsSchema = z.object({});

export const pingTool: UnifiedTool = {
  name: "ping",
  description: "Health check - returns Pong!",
  zodSchema: pingArgsSchema,
  prompt: {
    description: "Health check - returns Pong!",
  },
  category: 'simple',
  execute: async (_args, _onProgress) => {
    return "Pong!";
  }
};

const helpArgsSchema = z.object({});

export const helpTool: UnifiedTool = {
  name: "Help",
  description: "receive help information",
  zodSchema: helpArgsSchema,
  prompt: {
    description: "receive help information",
  },
  category: 'simple',
  execute: async (args, onProgress) => {
    return executeCommand("gemini", ["-help"], onProgress);
  }
};