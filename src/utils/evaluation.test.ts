import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluateUserPath, validateEvaluationForm } from './evaluation.ts';

test('evaluateUserPath routes international intent to GoalEarn International', () => {
  const result = evaluateUserPath({
    primaryGoal: 'international',
    targetRole: 'Software Engineer',
    currentLevel: 'advanced'
  });

  assert.equal(result.recommendedPath, 'international');
  assert.equal(result.isInternational, true);
  assert.match(result.suggestedAction, /goalearnint\.com/);
});

test('evaluateUserPath routes interview/resume requests to modular services', () => {
  const result = evaluateUserPath({
    primaryGoal: 'interview_prep',
    targetRole: 'Backend Developer',
    currentLevel: 'intermediate'
  });

  assert.equal(result.recommendedPath, 'modular_service');
  assert.equal(result.isInternational, false);
});

test('evaluateUserPath routes deep specialization to private programs for experienced professionals', () => {
  const result = evaluateUserPath({
    primaryGoal: 'specialize_deep',
    currentStatus: 'employed',
    currentLevel: 'advanced',
    targetRole: 'DevOps & SRE'
  });

  assert.equal(result.recommendedPath, 'private_specialized');
  assert.equal(result.isInternational, false);
});

test('evaluateUserPath routes career-switchers and job-seekers to comprehensive program', () => {
  const result = evaluateUserPath({
    primaryGoal: 'enter_job_market',
    currentStatus: 'career_switcher',
    currentLevel: 'beginner',
    targetRole: 'Frontend Developer'
  });

  assert.equal(result.recommendedPath, 'comprehensive');
  assert.equal(result.estimatedStages.length, 6);
  assert.equal(result.isInternational, false);
});

test('validateEvaluationForm catches empty or invalid fields', () => {
  const invalid = validateEvaluationForm({
    fullName: '',
    contact: '123',
    targetRole: ''
  });

  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.contact);
  assert.ok(invalid.errors.targetRole);

  const validPhone = validateEvaluationForm({
    fullName: 'رضا محمدی',
    contact: '09121234567',
    targetRole: 'مهندسی داده'
  });
  assert.equal(validPhone.isValid, true);
  assert.equal(Object.keys(validPhone.errors).length, 0);

  const validEmail = validateEvaluationForm({
    fullName: 'Sara Alavi',
    contact: 'sara@example.com',
    targetRole: 'UI/UX Designer'
  });
  assert.equal(validEmail.isValid, true);
});
